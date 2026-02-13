import { create } from 'zustand';
import type { PlaybackState, LoopRegion } from '../types';
import { AUDIO } from '../constants/audio';

interface TransportStore {
  playbackState: PlaybackState;
  bpm: number;
  currentStep: number;
  currentPosition: number;
  loopEnabled: boolean;
  loopRegion: LoopRegion | null;

  setPlaybackState: (state: PlaybackState) => void;
  setBpm: (bpm: number) => void;
  setCurrentStep: (step: number) => void;
  setCurrentPosition: (position: number) => void;
  setLoopEnabled: (enabled: boolean) => void;
  setLoopRegion: (region: LoopRegion | null) => void;
  toggleLoop: () => void;
}

export const useTransportStore = create<TransportStore>((set) => ({
  playbackState: 'stopped',
  bpm: AUDIO.DEFAULT_BPM,
  currentStep: 0,
  currentPosition: 0,
  loopEnabled: false,
  loopRegion: null,

  setPlaybackState: (playbackState) => set({ playbackState }),
  setBpm: (bpm) => set({ bpm: Math.max(AUDIO.MIN_BPM, Math.min(AUDIO.MAX_BPM, bpm)) }),
  setCurrentStep: (currentStep) => set({ currentStep }),
  setCurrentPosition: (currentPosition) => set({ currentPosition }),
  setLoopEnabled: (loopEnabled) => set({ loopEnabled }),
  setLoopRegion: (loopRegion) => set({ loopRegion, loopEnabled: loopRegion !== null }),
  toggleLoop: () => set((s) => ({ loopEnabled: !s.loopEnabled })),
}));
