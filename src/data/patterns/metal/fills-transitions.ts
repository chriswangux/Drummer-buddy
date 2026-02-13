import type { PatternLibraryEntry } from '../../../types';

export const metalFillPatterns: PatternLibraryEntry[] = [
  // ── 1. Blast to Groove ──────────────────────────────────────────────
  // M1: Full traditional blast beat (kick+snare+HH all 16ths).
  // M2: Drops into a crushing half-time groove with china on 8ths.
  {
    pattern: {
      id: 'metal-fill-blast-to-groove',
      name: 'Blast to Groove',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: full blast                                        M2: half-time groove w/ china
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        'snare':        [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-closed': [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'china':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'transition', 'blast', 'groove', 'half-time'],
    difficulty: 3,
  },

  // ── 2. Groove to Blast ──────────────────────────────────────────────
  // M1: Driving metal groove with kick syncopation, snare on 2+4, HH 8ths.
  // M2: Erupts into a full blast beat.
  {
    pattern: {
      id: 'metal-fill-groove-to-blast',
      name: 'Groove to Blast',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: groove                                            M2: blast
        'kick':         [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'crash':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'transition', 'groove', 'blast'],
    difficulty: 3,
  },

  // ── 3. Metal Tom Cascade ────────────────────────────────────────────
  // Descending tom fill: high tom -> mid tom -> floor tom in groups
  // of 4 sixteenths, with double bass running underneath the entire bar.
  {
    pattern: {
      id: 'metal-fill-tom-cascade',
      name: 'Metal Tom Cascade',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'tom-high':     [1,0.7,0.7,0.7, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':      [0,0,0,0, 1,0.7,0.7,0.7, 0,0,0,0, 0,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7],
        'crash':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', '4/4', 'fill', 'toms', 'descending', 'double bass'],
    difficulty: 3,
  },

  // ── 4. Metal Snare Roll Build ───────────────────────────────────────
  // Velocity crescendo on snare from ghost (0.3) to full accent (1.0)
  // across 16 sixteenth notes, with double bass underneath. Builds
  // intensity toward a crash on the downbeat of the next bar.
  {
    pattern: {
      id: 'metal-fill-snare-roll',
      name: 'Metal Snare Roll Build',
      category: 'metal',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0.3,0.3,0.3,0.3, 0.3,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 1,1,1,1],
        'crash':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'fill', 'snare roll', 'crescendo', 'double bass'],
    difficulty: 3,
  },

  // ── 5. Double Bass Fill ─────────────────────────────────────────────
  // Intricate kick pattern with varied groupings, accented by tom hits.
  // Kick plays syncopated 16ths while toms mark the phrasing.
  {
    pattern: {
      id: 'metal-fill-db-fill',
      name: 'Double Bass Fill',
      category: 'metal',
      suggestedBpm: 150,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0.7,0.7,0, 1,0.7,0.7,0.7, 1,0,0.7,0.7, 1,0.7,1,0.7],
        'tom-high':     [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'tom-mid':      [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'crash':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', '4/4', 'fill', 'double bass', 'toms', 'intricate'],
    difficulty: 3,
  },

  // ── 6. China Accent Fill ────────────────────────────────────────────
  // China cymbal punctuates the offbeats (the "e" and "a" of each beat)
  // while toms fill in between with double bass accents underneath.
  {
    pattern: {
      id: 'metal-fill-china-accent',
      name: 'China Accent Fill',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
        'china':        [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1],
        'tom-high':     [0.7,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':      [0,0,0,0, 0.7,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'fill', 'china', 'offbeat', 'toms'],
    difficulty: 3,
  },

  // ── 7. Crash Buildup ────────────────────────────────────────────────
  // Two-measure buildup: M1 starts sparse with quarter-note crashes
  // and simple kick/snare, M2 intensifies with 8th-note crashes,
  // busier kick pattern, and snare 16ths in the final beat.
  {
    pattern: {
      id: 'metal-fill-crash-buildup',
      name: 'Crash Buildup',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: sparse, building                                  M2: intense, full
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  1,0,1,0, 1,0,1,0, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0.7,1,0.7],
        'crash':        [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'china':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', '4/4', 'fill', 'buildup', 'crashes', 'dynamic'],
    difficulty: 2,
  },

  // ── 8. Breakdown Intro ──────────────────────────────────────────────
  // M1: Sparse, ominous intro with single kick hits and tom accents,
  // building tension. M2: Heavy breakdown drops with china 8ths,
  // pounding kick, and powerful snare on beat 3 (half-time).
  {
    pattern: {
      id: 'metal-fill-breakdown-intro',
      name: 'Breakdown Intro',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: sparse buildup                                    M2: heavy breakdown
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  1,0,0,1, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0.3,  0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'tom-high':     [0,0,0,0, 0,0,0,0, 0.7,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':      [0,0,0,0, 0,0,0,0, 0,0,0.7,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0.7,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'china':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'fill', 'breakdown', 'intro', 'buildup', 'heavy'],
    difficulty: 2,
  },
];
