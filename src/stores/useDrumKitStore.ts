import { create } from 'zustand';
import type { DrumKitConfig, DrumPieceId, DrumPieceConfig } from '../types';
import { DEFAULT_KIT } from '../constants/drumKit';

interface DrumKitStore {
  kitConfig: DrumKitConfig;
  activePieces: Set<DrumPieceId>;
  isInitialized: boolean;

  togglePiece: (pieceId: DrumPieceId) => void;
  setActivePieces: (pieces: DrumPieceId[]) => void;
  clearActivePieces: () => void;
  setInitialized: (initialized: boolean) => void;
  getEnabledPieces: () => DrumPieceConfig[];
}

export const useDrumKitStore = create<DrumKitStore>((set, get) => ({
  kitConfig: DEFAULT_KIT,
  activePieces: new Set(),
  isInitialized: false,

  togglePiece: (pieceId) =>
    set((state) => ({
      kitConfig: {
        pieces: state.kitConfig.pieces.map((p) =>
          p.id === pieceId ? { ...p, enabled: !p.enabled } : p
        ),
      },
    })),

  setActivePieces: (pieces) => set({ activePieces: new Set(pieces) }),

  clearActivePieces: () => set({ activePieces: new Set() }),

  setInitialized: (isInitialized) => set({ isInitialized }),

  getEnabledPieces: () => get().kitConfig.pieces.filter((p) => p.enabled),
}));
