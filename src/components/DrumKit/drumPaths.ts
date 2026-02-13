import type { DrumPieceId } from '../../types';

export interface DrumPieceSVG {
  id: DrumPieceId;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  type: 'circle' | 'ellipse';
}

// Overhead / top-down view positions (viewBox: 0 0 800 280)
// Cymbals at top, snare/hats in middle, kick at bottom
export const DRUM_PIECES_SVG: DrumPieceSVG[] = [
  // Cymbals (top row)
  { id: 'crash',       cx: 200, cy: 50,  rx: 60, ry: 25, type: 'ellipse' },
  { id: 'china',       cx: 600, cy: 50,  rx: 55, ry: 22, type: 'ellipse' },
  { id: 'ride',        cx: 650, cy: 130, rx: 65, ry: 28, type: 'ellipse' },

  // Hi-hats (left)
  { id: 'hihat-closed', cx: 120, cy: 140, rx: 45, ry: 20, type: 'ellipse' },
  { id: 'hihat-open',   cx: 120, cy: 140, rx: 50, ry: 22, type: 'ellipse' },

  // Toms (above kick, arc arrangement)
  { id: 'tom-high',  cx: 310, cy: 110, rx: 38, ry: 32, type: 'ellipse' },
  { id: 'tom-mid',   cx: 420, cy: 115, rx: 42, ry: 35, type: 'ellipse' },

  // Snare (left of center)
  { id: 'snare', cx: 240, cy: 175, rx: 45, ry: 38, type: 'ellipse' },

  // Floor tom (right)
  { id: 'tom-floor', cx: 550, cy: 200, rx: 52, ry: 42, type: 'ellipse' },

  // Kick (center bottom, large)
  { id: 'kick', cx: 400, cy: 220, rx: 70, ry: 52, type: 'ellipse' },
];
