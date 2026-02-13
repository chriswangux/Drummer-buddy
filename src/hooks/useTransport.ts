import { useCallback } from 'react';
import { useTransportStore } from '../stores/useTransportStore';
import { usePatternStore } from '../stores/usePatternStore';
import { useDrumKitStore } from '../stores/useDrumKitStore';
import { useMetronomeStore } from '../stores/useMetronomeStore';
import { getAudioEngine } from './useAudioEngine';
import { getTotalSteps } from '../utils/patternUtils';
import { isOnBeat } from '../utils/timeUtils';
import type { DrumPieceId } from '../types';

export function useTransport() {
  const playbackState = useTransportStore((s) => s.playbackState);
  const bpm = useTransportStore((s) => s.bpm);
  const currentStep = useTransportStore((s) => s.currentStep);
  const currentPosition = useTransportStore((s) => s.currentPosition);
  const loopEnabled = useTransportStore((s) => s.loopEnabled);
  const loopRegion = useTransportStore((s) => s.loopRegion);

  const setPlaybackState = useTransportStore((s) => s.setPlaybackState);
  const setBpmStore = useTransportStore((s) => s.setBpm);
  const setCurrentStep = useTransportStore((s) => s.setCurrentStep);
  const setCurrentPosition = useTransportStore((s) => s.setCurrentPosition);
  const setLoopRegion = useTransportStore((s) => s.setLoopRegion);
  const toggleLoopStore = useTransportStore((s) => s.toggleLoop);
  const setLoopEnabled = useTransportStore((s) => s.setLoopEnabled);

  const setActivePieces = useDrumKitStore((s) => s.setActivePieces);
  const clearActivePieces = useDrumKitStore((s) => s.clearActivePieces);
  const setMetronomeBeat = useMetronomeStore((s) => s.setCurrentBeat);

  const play = useCallback(() => {
    const engine = getAudioEngine();
    if (!engine.isInitialized) return;

    const pattern = usePatternStore.getState().currentPattern;
    if (!pattern) return;

    const enabledPieces = useDrumKitStore
      .getState()
      .kitConfig.pieces.filter((p) => p.enabled)
      .map((p) => p.id);

    let clearTimer: ReturnType<typeof setTimeout> | null = null;

    engine.schedulePattern(
      pattern,
      enabledPieces,
      (step: number, activePieces: DrumPieceId[]) => {
        setCurrentStep(step);
        setActivePieces(activePieces);

        if (isOnBeat(step, pattern.subdivisions, pattern.timeSignature[0])) {
          const subsPerBeat = pattern.subdivisions / pattern.timeSignature[0];
          const beat = Math.floor((step % pattern.subdivisions) / subsPerBeat);
          setMetronomeBeat(beat);
        }

        if (clearTimer) clearTimeout(clearTimer);
        clearTimer = setTimeout(() => clearActivePieces(), 80);
      },
      (position: number) => {
        setCurrentPosition(position);
      },
      () => usePatternStore.getState().currentPattern
    );

    const { loopEnabled: le, loopRegion: lr } = useTransportStore.getState();
    if (le && lr) {
      engine.setLoop(true, lr, pattern.subdivisions);
    } else {
      engine.setLoop(true, { startStep: 0, endStep: getTotalSteps(pattern) }, pattern.subdivisions);
    }

    engine.play();
    setPlaybackState('playing');
  }, [setPlaybackState, setCurrentStep, setActivePieces, clearActivePieces, setCurrentPosition, setMetronomeBeat]);

  const pause = useCallback(() => {
    const engine = getAudioEngine();
    engine.pause();
    setPlaybackState('paused');
  }, [setPlaybackState]);

  const stop = useCallback(() => {
    const engine = getAudioEngine();
    engine.stop();
    setPlaybackState('stopped');
    setCurrentStep(0);
    setCurrentPosition(0);
    clearActivePieces();
  }, [setPlaybackState, setCurrentStep, setCurrentPosition, clearActivePieces]);

  const togglePlayPause = useCallback(() => {
    if (playbackState === 'playing') {
      pause();
    } else {
      play();
    }
  }, [playbackState, play, pause]);

  const setBpm = useCallback(
    (newBpm: number) => {
      setBpmStore(newBpm);
      const engine = getAudioEngine();
      engine.setBpm(newBpm);
    },
    [setBpmStore]
  );

  const seekTo = useCallback(
    (step: number) => {
      const pattern = usePatternStore.getState().currentPattern;
      if (!pattern) return;
      const engine = getAudioEngine();
      engine.seekTo(step, pattern.subdivisions);
      setCurrentStep(step);
      setCurrentPosition(step);
    },
    [setCurrentStep, setCurrentPosition]
  );

  const toggleLoop = useCallback(() => {
    toggleLoopStore();
    const engine = getAudioEngine();
    const pattern = usePatternStore.getState().currentPattern;
    const { loopEnabled: le, loopRegion: lr } = useTransportStore.getState();
    if (pattern) {
      if (!le && lr) {
        engine.setLoop(false);
      } else if (le && lr) {
        engine.setLoop(true, lr, pattern.subdivisions);
      }
    }
  }, [toggleLoopStore]);

  return {
    playbackState,
    bpm,
    currentStep,
    currentPosition,
    loopEnabled,
    loopRegion,
    play,
    pause,
    stop,
    togglePlayPause,
    setBpm,
    seekTo,
    setLoopRegion,
    toggleLoop,
    setLoopEnabled,
  };
}
