import type { PatternLibraryEntry } from '../../../types';

export const metalDoubleBassPatterns: PatternLibraryEntry[] = [
  // ── 1. Straight 16th DB ─────────────────────────────────────────────
  // The foundation of double bass drumming: relentless 16th-note kicks,
  // snare on beats 2 and 4, hi-hat on 8th notes cutting through.
  {
    pattern: {
      id: 'metal-db-straight',
      name: 'Straight 16th DB',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['advanced', '4/4', 'double bass', '16th notes', 'metal'],
    difficulty: 3,
  },

  // ── 2. Gallop DB ────────────────────────────────────────────────────
  // Iron Maiden-style gallop with double bass: kick hits on positions
  // 0, 2, 3 of each beat group (1, +, a), snare on 2 and 4, ride on 8ths.
  {
    pattern: {
      id: 'metal-db-gallop',
      name: 'Gallop DB',
      category: 'metal',
      suggestedBpm: 150,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0.7,0.7, 1,0,0.7,0.7, 1,0,0.7,0.7, 1,0,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'double bass', 'gallop', 'NWOBHM'],
    difficulty: 3,
  },

  // ── 3. Triplet DB ──────────────────────────────────────────────────
  // Triplet-based double bass at subdivisions=12. Kick plays all
  // triplet partials, snare on 2 and 4, ride on 8th notes (beats + ands).
  {
    pattern: {
      id: 'metal-db-triplet',
      name: 'Triplet DB',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //                 |1  a |2  a |3  a |4  a |  (triplets per beat)
        'kick':         [0.7,0.7,0.7, 0.7,0.7,0.7, 0.7,0.7,0.7, 0.7,0.7,0.7],
        'snare':        [0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'ride':         [1,0,0, 1,0,0, 1,0,0, 1,0,0],
      },
    },
    tags: ['advanced', '4/4', 'double bass', 'triplet', 'metal'],
    difficulty: 3,
  },

  // ── 4. Alternating DB ───────────────────────────────────────────────
  // RLRL kick pattern with accents (1.0) shifting every beat to create
  // a rolling feel. Accent on 1st 16th of beat 1, 2nd of beat 2, etc.
  {
    pattern: {
      id: 'metal-db-alternating',
      name: 'Alternating DB',
      category: 'metal',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0.7,0.7,0.7, 0.7,1,0.7,0.7, 0.7,0.7,1,0.7, 0.7,0.7,0.7,1],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'double bass', 'alternating', 'accent shift'],
    difficulty: 3,
  },

  // ── 5. Broken DB ────────────────────────────────────────────────────
  // Syncopated kick pattern with deliberate gaps in the 16th-note
  // stream, creating a push-pull feel against the backbeat.
  {
    pattern: {
      id: 'metal-db-broken',
      name: 'Broken DB',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0, 0.7,0.7,0,0.7, 0,0.7,0.7,0.7, 0.7,0,0.7,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'double bass', 'broken', 'syncopated'],
    difficulty: 3,
  },

  // ── 6. Half-Time DB ─────────────────────────────────────────────────
  // Kick plays constant 16ths but the snare only lands on beat 3,
  // creating a massive half-time feel over the double bass carpet.
  {
    pattern: {
      id: 'metal-db-half-time',
      name: 'Half-Time DB',
      category: 'metal',
      suggestedBpm: 150,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':        [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'double bass', 'half-time', 'heavy'],
    difficulty: 3,
  },

  // ── 7. DB Build ─────────────────────────────────────────────────────
  // Two-measure build: M1 has kick on 8th notes (moderate), M2 ramps
  // up to kick on all 16th notes. Snare on 2+4 throughout both measures.
  {
    pattern: {
      id: 'metal-db-build',
      name: 'DB Build',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: 8th note kicks                                    M2: 16th note kicks
        'kick':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['intermediate', '4/4', 'double bass', 'build', 'dynamic'],
    difficulty: 2,
  },

  // ── 8. DB Shuffle ───────────────────────────────────────────────────
  // Triplet-based shuffle with double bass. Kick plays 1-skip-a of each
  // triplet group (positions 0 and 2), creating a shuffled DB feel.
  {
    pattern: {
      id: 'metal-db-shuffle',
      name: 'DB Shuffle',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //                 |1  a |2  a |3  a |4  a |  (triplets per beat)
        'kick':         [0.7,0,0.7, 0.7,0,0.7, 0.7,0,0.7, 0.7,0,0.7],
        'snare':        [0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'ride':         [1,0,1, 1,0,1, 1,0,1, 1,0,1],
      },
    },
    tags: ['advanced', '4/4', 'double bass', 'shuffle', 'triplet'],
    difficulty: 3,
  },

  // ── 9. DB Ostinato ──────────────────────────────────────────────────
  // A 5-note kick pattern (hit-hit-hit-rest-hit) repeating over 2 bars
  // of 4/4, creating a polyrhythmic 5-over-4 effect. The 5-note group
  // cycles through 32 sixteenth notes (6 full cycles + 2 extra notes).
  {
    pattern: {
      id: 'metal-db-ostinato',
      name: 'DB Ostinato',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // 5-note pattern:    1 1 1 0 1|1 1 1 0 1|1 1 1 0 1|1 1 1 0 1|1 1 1 0 1|1 1 1 0 1|1 1
        'kick':         [0.7,0.7,0.7,0,0.7, 0.7,0.7,0.7,0,0.7, 0.7,0.7,0.7,0,0.7,0.7,  0.7,0.7,0,0.7,0.7, 0.7,0.7,0,0.7,0.7, 0.7,0.7,0,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'double bass', 'ostinato', 'polyrhythm', 'progressive'],
    difficulty: 3,
  },

  // ── 10. DB + Blast Combo ────────────────────────────────────────────
  // M1: Double bass groove with kick 16ths, snare on 2+4, ride on 8ths.
  // M2: Full blast beat with kick+snare+HH on all 16ths.
  {
    pattern: {
      id: 'metal-db-combo',
      name: 'DB + Blast Combo',
      category: 'metal',
      suggestedBpm: 170,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: DB groove                                         M2: blast
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'hihat-closed': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['advanced', '4/4', 'double bass', 'blast beat', 'combo', 'transition'],
    difficulty: 3,
  },
];
