import { useCallback } from 'react';
import { AudioEngine } from '../audio/AudioEngine';
import { useDrumKitStore } from '../stores/useDrumKitStore';

let engine: AudioEngine | null = null;

export function getAudioEngine(): AudioEngine {
  if (!engine) {
    engine = new AudioEngine();
  }
  return engine;
}

export function useAudioEngine() {
  const setInitialized = useDrumKitStore((s) => s.setInitialized);
  const isInitialized = useDrumKitStore((s) => s.isInitialized);

  const initialize = useCallback(async () => {
    const eng = getAudioEngine();
    if (!eng.isInitialized) {
      await eng.initialize();
      setInitialized(true);
    }
  }, [setInitialized]);

  return {
    engine: getAudioEngine(),
    isInitialized,
    initialize,
  };
}
