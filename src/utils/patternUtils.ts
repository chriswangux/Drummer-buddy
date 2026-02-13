import type { DrumPattern, DrumPieceId } from '../types';

export function createEmptyPattern(
  measures: number,
  subdivisions: number,
  timeSignature: [number, number],
  pieces: DrumPieceId[]
): DrumPattern {
  const totalSteps = subdivisions * measures;
  const tracks: Partial<Record<DrumPieceId, number[]>> = {};
  for (const piece of pieces) {
    tracks[piece] = new Array(totalSteps).fill(0);
  }
  return {
    id: 'custom',
    name: 'Custom Pattern',
    category: 'rock',
    suggestedBpm: 120,
    timeSignature,
    subdivisions,
    measures,
    tracks,
  };
}

export function clonePattern(pattern: DrumPattern): DrumPattern {
  return {
    ...pattern,
    tracks: Object.fromEntries(
      Object.entries(pattern.tracks).map(([key, arr]) => [key, [...(arr as number[])]])
    ) as Partial<Record<DrumPieceId, number[]>>,
  };
}

export function getTotalSteps(pattern: DrumPattern): number {
  return pattern.subdivisions * pattern.measures;
}

export function getPatternPieces(pattern: DrumPattern): DrumPieceId[] {
  return Object.keys(pattern.tracks) as DrumPieceId[];
}
