import type { PatternLibraryEntry } from '../../../types';

export const metalProgressivePatterns: PatternLibraryEntry[] = [
  // ── 1. Progressive 5/4 ────────────────────────────────────────────────
  // Kick + snare groove in 5/4 time. 20 sixteenths per measure (5 beats x 4).
  // Kick on 1 and the "+" of 3, snare on 2 and 5, ride on quarter notes.
  {
    pattern: {
      id: 'metal-prog-5-4',
      name: 'Progressive 5/4',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [5, 4],
      subdivisions: 20,
      measures: 1,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a  5 e + a
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'china':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '5/4', 'progressive', 'odd time'],
    difficulty: 3,
  },

  // ── 2. Progressive 5/8 ────────────────────────────────────────────────
  // Fast 5/8 groove: 10 sixteenths per measure (5 eighths x 2 subdivisions).
  // 2 measures for a longer phrase. Kick drives 3+2 grouping, snare on 3.
  {
    pattern: {
      id: 'metal-prog-5-8',
      name: 'Progressive 5/8',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [5, 8],
      subdivisions: 10,
      measures: 2,
      tracks: {
        //              |--- 3 ---|--- 2 ---| |--- 3 ---|--- 2 ---|
        //              1 + 2 + 3 + 4 + 5 +   1 + 2 + 3 + 4 + 5 +
        'kick':      [1,0,0,0, 0,0,1,0, 0,0, 1,0,0,0, 0,0,1,0, 0,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0, 0,0,0,0, 1,0,0,0, 1,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0, 1,0,1,0, 1,0,1,0, 1,0],
      },
    },
    tags: ['advanced', '5/8', 'progressive', 'odd time', 'fast'],
    difficulty: 3,
  },

  // ── 3. 7/8 Groove A (2+2+3) ───────────────────────────────────────────
  // 14 sixteenths per measure. Kick follows a 2+2+3 eighth-note grouping:
  // hits on beat-groups 1, 3, 5 (positions 0, 4, 8 in sixteenths).
  {
    pattern: {
      id: 'metal-prog-7-8-a',
      name: '7/8 Groove A (2+2+3)',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [7, 8],
      subdivisions: 14,
      measures: 2,
      tracks: {
        //              |-- 2 --|-- 2 --|--- 3 ---| |-- 2 --|-- 2 --|--- 3 ---|
        //              1 + 2 + 3 + 4 + 5 + 6 + 7 +  1 + 2 + 3 + 4 + 5 + 6 + 7 +
        'kick':      [1,0,0,0, 1,0,0,0, 1,0,0,0, 0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 0,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0],
        'ride':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0],
        'china':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0],
      },
    },
    tags: ['advanced', '7/8', 'progressive', 'odd time', '2+2+3'],
    difficulty: 3,
  },

  // ── 4. 7/8 Groove B (3+2+2) ───────────────────────────────────────────
  // 14 sixteenths per measure. Kick follows 3+2+2 grouping:
  // hits on positions 0, 6, 10 in sixteenths. Different accent feel.
  {
    pattern: {
      id: 'metal-prog-7-8-b',
      name: '7/8 Groove B (3+2+2)',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [7, 8],
      subdivisions: 14,
      measures: 2,
      tracks: {
        //              |--- 3 ---|-- 2 --|-- 2 --| |--- 3 ---|-- 2 --|-- 2 --|
        //              1 + 2 + 3 + 4 + 5 + 6 + 7 +  1 + 2 + 3 + 4 + 5 + 6 + 7 +
        'kick':      [1,0,0,0, 0,0,1,0, 0,0,1,0, 0,0, 1,0,0,0, 0,0,1,0, 0,0,1,0, 0,0],
        'snare':     [0,0,0,0, 0,0,0,0, 1,0,0,0, 1,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 1,0],
        'ride':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0],
        'crash':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0],
      },
    },
    tags: ['advanced', '7/8', 'progressive', 'odd time', '3+2+2'],
    difficulty: 3,
  },

  // ── 5. 9/8 Groove ─────────────────────────────────────────────────────
  // 18 sixteenths per measure (9 eighths x 2). Grouped as 2+2+2+3.
  // Kick accents the start of each grouping, snare on groups 2 and 4.
  {
    pattern: {
      id: 'metal-prog-9-8',
      name: '9/8 Groove',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [9, 8],
      subdivisions: 18,
      measures: 2,
      tracks: {
        //              |-- 2 --|-- 2 --|-- 2 --|--- 3 ---| |-- 2 --|-- 2 --|-- 2 --|--- 3 ---|
        //              1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 +  ...
        'kick':      [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0],
        'ride':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0],
        'china':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0],
      },
    },
    tags: ['advanced', '9/8', 'progressive', 'odd time', '2+2+2+3'],
    difficulty: 3,
  },

  // ── 6. 11/8 Groove ────────────────────────────────────────────────────
  // 22 sixteenths per measure (11 eighths x 2). Grouped as 3+3+3+2.
  // Complex pattern with kick marking grouping boundaries.
  {
    pattern: {
      id: 'metal-prog-11-8',
      name: '11/8 Groove',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [11, 8],
      subdivisions: 22,
      measures: 1,
      tracks: {
        //              |--- 3 ---|--- 3 ---|--- 3 ---|-- 2 --|
        //              1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10+ 11+
        'kick':      [1,0,0,0, 0,0,1,0, 0,0, 0,0,1,0, 0,0,1,0, 0,0, 0,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0, 1,0,0,0, 0,0,0,0, 1,0, 0,0],
        'ride':      [1,0,1,0, 1,0,1,0, 1,0, 1,0,1,0, 1,0,1,0, 1,0, 1,0],
        'china':     [1,0,0,0, 0,0,0,0, 0,0, 0,0,0,0, 0,0,0,0, 0,0, 0,0],
      },
    },
    tags: ['advanced', '11/8', 'progressive', 'odd time', 'complex'],
    difficulty: 3,
  },

  // ── 7. Mixed Meter Feel ───────────────────────────────────────────────
  // 4/4 time but accents simulate mixed meter (3+3+2 + 3+3+2 over 2 bars).
  // Creates the illusion of changing time signatures through accent placement.
  {
    pattern: {
      id: 'metal-prog-mixed',
      name: 'Mixed Meter Feel',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        // Accents: 3+3+2+3+3+2 (in 8ths) = positions 0,6,12,16,22,28 (in 16ths across 32)
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0,0,1,0, 0,0,0,0, 1,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,0,0, 1,0,1,0, 0,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'progressive', 'mixed meter', 'accent displacement'],
    difficulty: 3,
  },

  // ── 8. Tool-Style Polyrhythm ──────────────────────────────────────────
  // Ride plays straight quarter notes while the kick creates a polyrhythmic
  // feel against it. Snare on 2+4 keeps the backbeat grounded. 2 measures.
  {
    pattern: {
      id: 'metal-prog-tool',
      name: 'Tool-Style Polyrhythm',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,1,0, 0,1,0,0, 0,0,0,1, 0,0,1,0, 0,0,0,0, 1,0,0,1, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'progressive', 'tool', 'polyrhythm'],
    difficulty: 3,
  },

  // ── 9. Metric Modulation ──────────────────────────────────────────────
  // Accents create the illusion of tempo change: measure 1 has accents
  // every 3 sixteenths (dotted-8th pulse), measure 2 returns to normal
  // 4/4 feel, creating a rhythmic "gear shift."
  {
    pattern: {
      id: 'metal-prog-metric-mod',
      name: 'Metric Modulation',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        // M1: dotted-8th accents at 0,3,6,9,12,15 | M2: normal 4/4
        'kick':            [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':           [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':           [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'ride':            [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'progressive', 'metric modulation', 'illusion'],
    difficulty: 3,
  },

  // ── 10. Complex Prog ──────────────────────────────────────────────────
  // Intricate pattern with multiple voices. Kick, snare, toms, ride, and
  // china all interplay across 2 measures. Dense but musical.
  {
    pattern: {
      id: 'metal-prog-complex',
      name: 'Complex Prog',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,1, 0,0,0,0, 1,0,0,0, 0,1,0,0, 1,0,0,0, 0,0,1,0, 0,1,0,0, 0,0,1,0],
        'snare':           [0,0,0,0, 1,0,0.3,0, 0,0,0.3,0, 1,0,0,0, 0,0.3,0,0, 1,0,0,0, 0,0,0.3,0, 1,0,0,0],
        'ride':            [1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,0,0, 1,0,1,0, 0,0,0,0, 1,0,1,0, 1,0,0,0],
        'china':           [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0],
        'tom-high':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':         [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-floor':       [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', '4/4', 'progressive', 'complex', 'multi-voice', 'intricate'],
    difficulty: 3,
  },
];
