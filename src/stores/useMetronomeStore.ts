import { create } from 'zustand';

interface MetronomeStore {
  enabled: boolean;
  volume: number;
  currentBeat: number;

  toggle: () => void;
  setEnabled: (enabled: boolean) => void;
  setVolume: (volume: number) => void;
  setCurrentBeat: (beat: number) => void;
}

export const useMetronomeStore = create<MetronomeStore>((set) => ({
  enabled: false,
  volume: 0.5,
  currentBeat: 0,

  toggle: () => set((s) => ({ enabled: !s.enabled })),
  setEnabled: (enabled) => set({ enabled }),
  setVolume: (volume) => set({ volume: Math.max(0, Math.min(1, volume)) }),
  setCurrentBeat: (currentBeat) => set({ currentBeat }),
}));
