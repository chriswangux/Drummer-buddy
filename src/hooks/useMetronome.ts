import { useCallback, useEffect } from 'react';
import { useMetronomeStore } from '../stores/useMetronomeStore';
import { getAudioEngine } from './useAudioEngine';

export function useMetronome() {
  const enabled = useMetronomeStore((s) => s.enabled);
  const volume = useMetronomeStore((s) => s.volume);
  const currentBeat = useMetronomeStore((s) => s.currentBeat);
  const toggleStore = useMetronomeStore((s) => s.toggle);
  const setVolumeStore = useMetronomeStore((s) => s.setVolume);

  useEffect(() => {
    const engine = getAudioEngine();
    engine.setMetronomeEnabled(enabled);
  }, [enabled]);

  useEffect(() => {
    const engine = getAudioEngine();
    engine.setMetronomeVolume(volume);
  }, [volume]);

  const toggle = useCallback(() => {
    toggleStore();
  }, [toggleStore]);

  const setVolume = useCallback(
    (v: number) => {
      setVolumeStore(v);
    },
    [setVolumeStore]
  );

  return { enabled, volume, currentBeat, toggle, setVolume };
}
