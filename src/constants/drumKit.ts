import type { DrumKitConfig, DrumPieceId } from '../types';

export const DRUM_PIECE_ORDER: DrumPieceId[] = [
  'crash',
  'china',
  'ride',
  'hihat-closed',
  'hihat-open',
  'tom-high',
  'tom-mid',
  'snare',
  'tom-floor',
  'kick',
];

export const DEFAULT_KIT: DrumKitConfig = {
  pieces: [
    { id: 'crash', label: 'Crash', shortLabel: 'CR', color: '#fbbf24', enabled: true },
    { id: 'china', label: 'China', shortLabel: 'CH', color: '#f59e0b', enabled: true },
    { id: 'ride', label: 'Ride', shortLabel: 'RD', color: '#d97706', enabled: false },
    { id: 'hihat-closed', label: 'Hi-Hat (Closed)', shortLabel: 'HH', color: '#34d399', enabled: true },
    { id: 'hihat-open', label: 'Hi-Hat (Open)', shortLabel: 'HO', color: '#6ee7b7', enabled: false },
    { id: 'tom-high', label: 'Tom High', shortLabel: 'TH', color: '#60a5fa', enabled: false },
    { id: 'tom-mid', label: 'Tom Mid', shortLabel: 'TM', color: '#3b82f6', enabled: false },
    { id: 'snare', label: 'Snare', shortLabel: 'SN', color: '#f87171', enabled: true },
    { id: 'tom-floor', label: 'Tom Floor', shortLabel: 'TF', color: '#2563eb', enabled: false },
    { id: 'kick', label: 'Kick', shortLabel: 'KK', color: '#c084fc', enabled: true },
  ],
};
