export type DrumPieceId =
  | 'kick'
  | 'snare'
  | 'hihat-closed'
  | 'hihat-open'
  | 'ride'
  | 'crash'
  | 'china'
  | 'tom-high'
  | 'tom-mid'
  | 'tom-floor';

export interface DrumPieceConfig {
  id: DrumPieceId;
  label: string;
  shortLabel: string;
  color: string;
  enabled: boolean;
}

export interface DrumKitConfig {
  pieces: DrumPieceConfig[];
}

export type PatternCategory =
  | 'rock'
  | 'funk'
  | 'jazz'
  | 'latin'
  | 'metal'
  | 'world'
  | 'fills'
  | 'rudiments';

export interface DrumPattern {
  id: string;
  name: string;
  category: PatternCategory;
  suggestedBpm: number;
  timeSignature: [number, number];
  subdivisions: number;
  measures: number;
  tracks: Partial<Record<DrumPieceId, number[]>>;
}

export interface PatternLibraryEntry {
  pattern: DrumPattern;
  tags: string[];
  difficulty: 1 | 2 | 3;
}

export type PlaybackState = 'stopped' | 'playing' | 'paused';

export interface LoopRegion {
  startStep: number;
  endStep: number;
}

export interface TransportState {
  playbackState: PlaybackState;
  bpm: number;
  currentStep: number;
  currentPosition: number;
  loopEnabled: boolean;
  loopRegion: LoopRegion | null;
}

export interface MetronomeState {
  enabled: boolean;
  volume: number;
  accentDownbeat: boolean;
  currentBeat: number;
}

// === Sound Tuning Types ===

export interface MembraneParams {
  pitch: string;
  decay: number;
  attack: number;
  tone: number;      // 0=sine, 1=triangle, 2=sawtooth, 3=square
  punch: number;     // pitchDecay
  octaves: number;
  volume: number;    // dB
}

export interface MetalSynthParams {
  brightness: number;  // frequency Hz
  decay: number;
  tone: number;        // harmonicity
  sizzle: number;      // modulationIndex
  resonance: number;   // Hz
  volume: number;      // dB
}

export interface NoiseParams {
  type: number;      // 0=white, 1=pink, 2=brown
  decay: number;
  volume: number;    // dB
}

export interface PieceSoundParams {
  membrane?: MembraneParams;
  metal?: MetalSynthParams;
  noise?: NoiseParams;
}

export type KitSoundParams = Record<DrumPieceId, PieceSoundParams>;

export interface TonePreset {
  id: string;
  name: string;
  builtIn: boolean;
  params: KitSoundParams;
}
