import { create } from 'zustand';
import type { DrumPieceId, KitSoundParams, TonePreset, PieceSoundParams } from '../types';
import { DEFAULT_SOUND_PARAMS, BUILT_IN_PRESETS } from '../constants/soundDefaults';
import { getAudioEngine } from '../hooks/useAudioEngine';

const STORAGE_KEY = 'drummer-buddy-custom-presets';

function loadCustomPresets(): TonePreset[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCustomPresets(presets: TonePreset[]) {
  const custom = presets.filter((p) => !p.builtIn);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
}

function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

interface SoundStore {
  currentParams: KitSoundParams;
  activePresetId: string | null;
  presets: TonePreset[];
  selectedPiece: DrumPieceId;
  panelOpen: boolean;

  setPieceParams: (pieceId: DrumPieceId, update: Partial<PieceSoundParams>) => void;
  applyPreset: (presetId: string) => void;
  saveCustomPreset: (name: string) => void;
  deleteCustomPreset: (presetId: string) => void;
  setSelectedPiece: (pieceId: DrumPieceId) => void;
  setPanelOpen: (open: boolean) => void;
}

export const useSoundStore = create<SoundStore>((set, get) => ({
  currentParams: deepClone(DEFAULT_SOUND_PARAMS),
  activePresetId: 'default',
  presets: [...BUILT_IN_PRESETS, ...loadCustomPresets()],
  selectedPiece: 'kick',
  panelOpen: false,

  setPieceParams: (pieceId, update) => {
    const { currentParams } = get();
    const current = currentParams[pieceId];
    const merged: PieceSoundParams = {
      membrane: update.membrane
        ? { ...current.membrane!, ...update.membrane }
        : current.membrane,
      metal: update.metal
        ? { ...current.metal!, ...update.metal }
        : current.metal,
      noise: update.noise
        ? { ...current.noise!, ...update.noise }
        : current.noise,
    };

    const newParams = { ...currentParams, [pieceId]: merged };
    set({ currentParams: newParams, activePresetId: null });

    const engine = getAudioEngine();
    if (engine.isInitialized) {
      engine.updatePieceSound(pieceId, merged);
    }
  },

  applyPreset: (presetId) => {
    const preset = get().presets.find((p) => p.id === presetId);
    if (!preset) return;

    const params = deepClone(preset.params);
    set({ currentParams: params, activePresetId: presetId });

    const engine = getAudioEngine();
    if (engine.isInitialized) {
      engine.applySoundPreset(params);
    }
  },

  saveCustomPreset: (name) => {
    const { currentParams, presets } = get();
    const id = `custom-${Date.now()}`;
    const newPreset: TonePreset = {
      id,
      name,
      builtIn: false,
      params: deepClone(currentParams),
    };
    const updated = [...presets, newPreset];
    set({ presets: updated, activePresetId: id });
    saveCustomPresets(updated);
  },

  deleteCustomPreset: (presetId) => {
    const { presets, activePresetId } = get();
    const updated = presets.filter((p) => p.id !== presetId || p.builtIn);
    set({
      presets: updated,
      activePresetId: activePresetId === presetId ? null : activePresetId,
    });
    saveCustomPresets(updated);
  },

  setSelectedPiece: (pieceId) => set({ selectedPiece: pieceId }),
  setPanelOpen: (panelOpen) => set({ panelOpen }),
}));
