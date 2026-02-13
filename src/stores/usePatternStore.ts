import { create } from 'zustand';
import type { DrumPattern, DrumPieceId, PatternCategory, PatternLibraryEntry } from '../types';
import { clonePattern, getTotalSteps } from '../utils/patternUtils';

interface PatternStore {
  currentPattern: DrumPattern | null;
  patterns: PatternLibraryEntry[];
  selectedCategory: PatternCategory | null;
  selectedTag: string | null;
  searchQuery: string;

  setPatterns: (patterns: PatternLibraryEntry[]) => void;
  loadPattern: (patternId: string) => void;
  setCurrentPattern: (pattern: DrumPattern | null) => void;
  setCategory: (category: PatternCategory | null) => void;
  setSelectedTag: (tag: string | null) => void;
  setSearchQuery: (query: string) => void;
  toggleCell: (pieceId: DrumPieceId, step: number) => void;
  setCellVelocity: (pieceId: DrumPieceId, step: number, velocity: number) => void;
}

export const usePatternStore = create<PatternStore>((set, get) => ({
  currentPattern: null,
  patterns: [],
  selectedCategory: null,
  selectedTag: null,
  searchQuery: '',

  setPatterns: (patterns) => set({ patterns }),

  loadPattern: (patternId) => {
    const entry = get().patterns.find((e) => e.pattern.id === patternId);
    if (entry) {
      set({ currentPattern: clonePattern(entry.pattern) });
    }
  },

  setCurrentPattern: (pattern) => set({ currentPattern: pattern }),

  setCategory: (category) => set({ selectedCategory: category, selectedTag: null }),

  setSelectedTag: (tag) => set({ selectedTag: tag }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleCell: (pieceId, step) => {
    const { currentPattern } = get();
    if (!currentPattern) return;

    const totalSteps = getTotalSteps(currentPattern);
    if (step < 0 || step >= totalSteps) return;

    const track = currentPattern.tracks[pieceId];
    if (!track) {
      const newTrack = new Array(totalSteps).fill(0);
      newTrack[step] = 1;
      set({
        currentPattern: {
          ...currentPattern,
          tracks: { ...currentPattern.tracks, [pieceId]: newTrack },
        },
      });
      return;
    }

    const newTrack = [...track];
    newTrack[step] = newTrack[step] > 0 ? 0 : 1;
    set({
      currentPattern: {
        ...currentPattern,
        tracks: { ...currentPattern.tracks, [pieceId]: newTrack },
      },
    });
  },

  setCellVelocity: (pieceId, step, velocity) => {
    const { currentPattern } = get();
    if (!currentPattern) return;

    const track = currentPattern.tracks[pieceId];
    if (!track || step < 0 || step >= track.length) return;

    const newTrack = [...track];
    newTrack[step] = velocity;
    set({
      currentPattern: {
        ...currentPattern,
        tracks: { ...currentPattern.tracks, [pieceId]: newTrack },
      },
    });
  },
}));
