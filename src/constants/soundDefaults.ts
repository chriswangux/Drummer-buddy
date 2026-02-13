import type { KitSoundParams, TonePreset } from '../types';

export const DEFAULT_SOUND_PARAMS: KitSoundParams = {
  'kick': {
    membrane: { pitch: 'C1', decay: 0.4, attack: 0.001, tone: 0, punch: 0.05, octaves: 6, volume: 0 },
  },
  'snare': {
    membrane: { pitch: 'E2', decay: 0.15, attack: 0.001, tone: 1, punch: 0.01, octaves: 4, volume: -3 },
    noise: { type: 0, decay: 0.15, volume: -6 },
  },
  'hihat-closed': {
    metal: { brightness: 400, decay: 0.05, tone: 5.1, sizzle: 32, resonance: 4000, volume: -2 },
  },
  'hihat-open': {
    metal: { brightness: 400, decay: 0.3, tone: 5.1, sizzle: 32, resonance: 4000, volume: -2 },
  },
  'tom-high': {
    membrane: { pitch: 'G2', decay: 0.2, attack: 0.001, tone: 0, punch: 0.03, octaves: 4, volume: 0 },
  },
  'tom-mid': {
    membrane: { pitch: 'D2', decay: 0.25, attack: 0.001, tone: 0, punch: 0.03, octaves: 4, volume: 0 },
  },
  'tom-floor': {
    membrane: { pitch: 'A1', decay: 0.3, attack: 0.001, tone: 0, punch: 0.03, octaves: 4, volume: 0 },
  },
  'ride': {
    metal: { brightness: 350, decay: 1.5, tone: 5.1, sizzle: 24, resonance: 3000, volume: -3 },
  },
  'crash': {
    metal: { brightness: 300, decay: 1.0, tone: 5.1, sizzle: 24, resonance: 3000, volume: -3 },
  },
  'china': {
    metal: { brightness: 600, decay: 0.6, tone: 3.5, sizzle: 40, resonance: 5000, volume: 0 },
  },
};

function deepCloneParams(p: KitSoundParams): KitSoundParams {
  return JSON.parse(JSON.stringify(p));
}

function makePreset(id: string, name: string, overrides: Partial<Record<string, Partial<any>>>): TonePreset {
  const params = deepCloneParams(DEFAULT_SOUND_PARAMS);
  for (const [pieceId, changes] of Object.entries(overrides)) {
    const piece = params[pieceId as keyof KitSoundParams];
    if (piece.membrane && changes.membrane) Object.assign(piece.membrane, changes.membrane);
    if (piece.metal && changes.metal) Object.assign(piece.metal, changes.metal);
    if (piece.noise && changes.noise) Object.assign(piece.noise, changes.noise);
  }
  return { id, name, builtIn: true, params };
}

export const BUILT_IN_PRESETS: TonePreset[] = [
  { id: 'default', name: 'Default', builtIn: true, params: deepCloneParams(DEFAULT_SOUND_PARAMS) },

  makePreset('metal', 'Metal', {
    'kick': { membrane: { decay: 0.25, punch: 0.08, octaves: 7 } },
    'snare': { membrane: { decay: 0.1, punch: 0.02, tone: 1 }, noise: { decay: 0.1 } },
    'hihat-closed': { metal: { brightness: 500, decay: 0.03, sizzle: 40, volume: -8 } },
    'hihat-open': { metal: { brightness: 500, decay: 0.2, sizzle: 40, volume: -8 } },
    'tom-high': { membrane: { decay: 0.15, punch: 0.05 } },
    'tom-mid': { membrane: { decay: 0.18, punch: 0.05 } },
    'tom-floor': { membrane: { decay: 0.2, punch: 0.05 } },
    'ride': { metal: { brightness: 450, decay: 1.0, sizzle: 30 } },
    'crash': { metal: { brightness: 400, decay: 0.8, sizzle: 30 } },
    'china': { metal: { brightness: 550, decay: 0.6, sizzle: 35, volume: -6 } },
  }),

  makePreset('jazz', 'Jazz', {
    'kick': { membrane: { decay: 0.6, punch: 0.03, octaves: 4, volume: -4 } },
    'snare': { membrane: { decay: 0.2, tone: 0, volume: -4 }, noise: { decay: 0.2, type: 1 } },
    'hihat-closed': { metal: { brightness: 300, decay: 0.08, sizzle: 20, resonance: 3000, volume: -12 } },
    'hihat-open': { metal: { brightness: 300, decay: 0.4, sizzle: 20, resonance: 3000, volume: -12 } },
    'tom-high': { membrane: { decay: 0.35, punch: 0.02 } },
    'tom-mid': { membrane: { decay: 0.4, punch: 0.02 } },
    'tom-floor': { membrane: { decay: 0.5, punch: 0.02 } },
    'ride': { metal: { brightness: 280, decay: 2.0, sizzle: 18, resonance: 2500, volume: -6 } },
    'crash': { metal: { brightness: 250, decay: 1.5, sizzle: 18, volume: -10 } },
    'china': { metal: { brightness: 350, decay: 1.0, sizzle: 18, volume: -10 } },
  }),

  makePreset('808', '808', {
    'kick': { membrane: { pitch: 'C0', decay: 0.8, punch: 0.08, octaves: 8, volume: 2 } },
    'snare': { membrane: { pitch: 'D2', decay: 0.08, tone: 0 }, noise: { decay: 0.08, type: 0 } },
    'hihat-closed': { metal: { brightness: 600, decay: 0.02, sizzle: 48, resonance: 5000, volume: -8 } },
    'hihat-open': { metal: { brightness: 600, decay: 0.15, sizzle: 48, resonance: 5000, volume: -8 } },
    'tom-high': { membrane: { pitch: 'E2', decay: 0.15, tone: 0 } },
    'tom-mid': { membrane: { pitch: 'B1', decay: 0.2, tone: 0 } },
    'tom-floor': { membrane: { pitch: 'F1', decay: 0.3, tone: 0 } },
    'ride': { metal: { brightness: 500, decay: 0.5, sizzle: 40, volume: -10 } },
    'crash': { metal: { brightness: 450, decay: 0.4, sizzle: 40, volume: -10 } },
    'china': { metal: { brightness: 550, decay: 0.3, sizzle: 45, volume: -10 } },
  }),

  makePreset('punk', 'Punk', {
    'kick': { membrane: { decay: 0.2, punch: 0.08, tone: 1, volume: 2 } },
    'snare': { membrane: { decay: 0.08, tone: 1, punch: 0.02, volume: 0 }, noise: { decay: 0.1, volume: -4 } },
    'hihat-closed': { metal: { brightness: 550, decay: 0.03, sizzle: 38, volume: -6 } },
    'hihat-open': { metal: { brightness: 550, decay: 0.15, sizzle: 38, volume: -6 } },
    'tom-high': { membrane: { decay: 0.12, punch: 0.05, tone: 1 } },
    'tom-mid': { membrane: { decay: 0.15, punch: 0.05, tone: 1 } },
    'tom-floor': { membrane: { decay: 0.18, punch: 0.05, tone: 1 } },
    'ride': { metal: { brightness: 450, decay: 0.6, sizzle: 30 } },
    'crash': { metal: { brightness: 400, decay: 0.5, sizzle: 30, volume: -4 } },
    'china': { metal: { brightness: 500, decay: 0.4, sizzle: 30, volume: -4 } },
  }),

  makePreset('heavy', 'Heavy', {
    'kick': { membrane: { pitch: 'A0', decay: 0.6, punch: 0.04, octaves: 7, volume: 2 } },
    'snare': { membrane: { pitch: 'D2', decay: 0.2, tone: 0 }, noise: { decay: 0.18, type: 1 } },
    'hihat-closed': { metal: { brightness: 300, decay: 0.06, sizzle: 24, volume: -12 } },
    'hihat-open': { metal: { brightness: 300, decay: 0.35, sizzle: 24, volume: -12 } },
    'tom-high': { membrane: { pitch: 'F2', decay: 0.35, punch: 0.02 } },
    'tom-mid': { membrane: { pitch: 'C2', decay: 0.4, punch: 0.02 } },
    'tom-floor': { membrane: { pitch: 'G1', decay: 0.5, punch: 0.02 } },
    'ride': { metal: { brightness: 280, decay: 1.8, sizzle: 20, volume: -10 } },
    'crash': { metal: { brightness: 250, decay: 1.2, sizzle: 20, volume: -10 } },
    'china': { metal: { brightness: 380, decay: 1.0, sizzle: 20, volume: -10 } },
  }),

  makePreset('lofi', 'Lo-Fi', {
    'kick': { membrane: { decay: 0.2, punch: 0.02, octaves: 3, volume: -4 } },
    'snare': { membrane: { decay: 0.08, tone: 0, volume: -6 }, noise: { decay: 0.06, type: 1, volume: -8 } },
    'hihat-closed': { metal: { brightness: 350, decay: 0.02, sizzle: 20, resonance: 2500, volume: -14 } },
    'hihat-open': { metal: { brightness: 350, decay: 0.1, sizzle: 20, resonance: 2500, volume: -14 } },
    'tom-high': { membrane: { decay: 0.12, punch: 0.01, volume: -4 } },
    'tom-mid': { membrane: { decay: 0.15, punch: 0.01, volume: -4 } },
    'tom-floor': { membrane: { decay: 0.18, punch: 0.01, volume: -4 } },
    'ride': { metal: { brightness: 250, decay: 0.5, sizzle: 16, volume: -14 } },
    'crash': { metal: { brightness: 220, decay: 0.4, sizzle: 16, volume: -14 } },
    'china': { metal: { brightness: 350, decay: 0.3, sizzle: 16, volume: -14 } },
  }),
];
