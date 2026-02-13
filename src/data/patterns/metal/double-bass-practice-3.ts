import type { PatternLibraryEntry } from '../../../types';

export const dbPractice3Patterns: PatternLibraryEntry[] = [
  // ── 1. DB Herta Pattern ──────────────────────────────────────────────
  // Kick plays the Herta rudiment (1,1,0,1 repeating) across 2 measures.
  // Ride on 8th notes, snare on 2+4. Meshuggah fundamental rhythm.
  {
    pattern: {
      id: 'metal-dbp-herta',
      name: 'DB Herta Pattern',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0.7,0,0.7, 1,0.7,0,0.7, 1,0.7,0,0.7, 1,0.7,0,0.7,  1,0.7,0,0.7, 1,0.7,0,0.7, 1,0.7,0,0.7, 1,0.7,0,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'herta', 'rudiment', 'meshuggah'],
    difficulty: 3,
  },

  // ── 2. DB Swiss Triplet ──────────────────────────────────────────────
  // Triplet subdivision (12). Kick plays swiss triplet: accent-tap-tap
  // per beat group. Ride on 8th notes (beat positions).
  {
    pattern: {
      id: 'metal-dbp-swiss-triplet',
      name: 'DB Swiss Triplet',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //                 |1  a |2  a |3  a |4  a |  (triplets per beat)
        'kick':         [1,0.3,0.3, 1,0.3,0.3, 1,0.3,0.3, 1,0.3,0.3],
        'snare':        [0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'ride':         [0.7,0,0, 0.7,0,0, 0.7,0,0, 0.7,0,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'swiss triplet', 'rudiment', 'triplet'],
    difficulty: 3,
  },

  // ── 3. DB Dotted 8th Pulse ───────────────────────────────────────────
  // Kick hits every 3rd 16th note, creating a dotted-8th metric
  // modulation feel over 2 measures. China on 8ths anchors 4/4.
  {
    pattern: {
      id: 'metal-dbp-dotted-8th',
      name: 'DB Dotted 8th Pulse',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // Kick every 3rd:  0 . . 3 . . 6 . . 9 . . 12. . 15. . 18. . 21. . 24. . 27. . 30. .
        'kick':         [1,0,0,0.7, 0,0,1,0, 0,0.7,0,0, 1,0,0,0.7,  0,0,1,0, 0,0.7,0,0, 1,0,0,0.7, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'dotted 8th', 'metric modulation', 'polyrhythm'],
    difficulty: 3,
  },

  // ── 4. DB 6 Over 4 Poly ──────────────────────────────────────────────
  // Kick accent every 6th 16th note (6-over-4 polyrhythm) with ghost
  // notes filling the rest. HH steady 8ths, snare on 2+4.
  {
    pattern: {
      id: 'metal-dbp-6-over-4',
      name: 'DB 6 Over 4 Poly',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // Accent every 6:  0 . . . . 5 . . . . .11 . . . . .17 . . . . .23 . . . . .29 . .
        'kick':         [1,0.3,0.3,0.3, 0.3,1,0.3,0.3, 0.3,0.3,0.3,1, 0.3,0.3,0.3,0.3,  0.3,1,0.3,0.3, 0.3,0.3,0.3,1, 0.3,0.3,0.3,0.3, 0.3,1,0.3,0.3],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'polyrhythm', '6 over 4'],
    difficulty: 3,
  },

  // ── 5. DB Double Stroke Roll ─────────────────────────────────────────
  // Kick plays RRLL pattern: accented pairs (RR) then soft pairs (LL).
  // Snare on 2+4, ride on 8ths. Foot dexterity builder.
  {
    pattern: {
      id: 'metal-dbp-double-stroke',
      name: 'DB Double Stroke Roll',
      category: 'metal',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // RRLL RRLL:       R R L L   R R L L   R R L L   R R L L
        'kick':         [1,1,0.3,0.3, 1,1,0.3,0.3, 1,1,0.3,0.3, 1,1,0.3,0.3,  1,1,0.3,0.3, 1,1,0.3,0.3, 1,1,0.3,0.3, 1,1,0.3,0.3],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'double stroke', 'rudiment', 'dexterity'],
    difficulty: 3,
  },

  // ── 6. DB Drag Exercise ──────────────────────────────────────────────
  // Kick plays drag rudiment: two soft grace notes then an accent
  // (0.3, 0.3, 1.0, 0) repeating per beat. Ride 8ths, snare 2+4.
  {
    pattern: {
      id: 'metal-dbp-drag',
      name: 'DB Drag Exercise',
      category: 'metal',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        // Drag:            g g A .   g g A .   g g A .   g g A .
        'kick':         [0.3,0.3,1,0, 0.3,0.3,1,0, 0.3,0.3,1,0, 0.3,0.3,1,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'drag', 'rudiment', 'grace notes'],
    difficulty: 3,
  },

  // ── 7. DB Shuffle ────────────────────────────────────────────────────
  // Triplet subdivision (12). Kick plays shuffle: 1st and 3rd triplet
  // partial per beat (1,skip,1). Ride plays matching shuffle, snare 2+4.
  {
    pattern: {
      id: 'metal-dbp-shuffle-feel',
      name: 'DB Shuffle',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //                 |1  a |2  a |3  a |4  a |  (triplets per beat)
        'kick':         [0.7,0,0.7, 0.7,0,0.7, 0.7,0,0.7, 0.7,0,0.7],
        'snare':        [0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'ride':         [1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'shuffle', 'triplet', 'swing'],
    difficulty: 3,
  },

  // ── 8. DB Offbeat Accents ────────────────────────────────────────────
  // Kick plays all 16ths but accents only the "e" and "a" (offbeats),
  // with ghost notes on downbeats. Anti-grid, syncopated feel.
  {
    pattern: {
      id: 'metal-dbp-offbeat-accent',
      name: 'DB Offbeat Accents',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // Accents on e,a:  g A g A   g A g A   g A g A   g A g A
        'kick':         [0.3,1,0.3,1, 0.3,1,0.3,1, 0.3,1,0.3,1, 0.3,1,0.3,1,  0.3,1,0.3,1, 0.3,1,0.3,1, 0.3,1,0.3,1, 0.3,1,0.3,1],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'offbeat', 'syncopation', 'accent'],
    difficulty: 3,
  },

  // ── 9. DB + Tom Cascade ──────────────────────────────────────────────
  // M1: Kick 16ths with ride 8ths, standard groove.
  // M2: Kick 16ths continue while hands play descending tom fill.
  {
    pattern: {
      id: 'metal-dbp-tom-cascade-db',
      name: 'DB + Tom Cascade',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: groove       M2: tom fill over kick
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-high':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  1,0.7,1,0.7, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':      [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 1,0.7,1,0.7, 0,0,0,0, 0,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 1,0.7,1,0.7, 1,0.7,1,0.7],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'tom fill', 'cascade', 'independence'],
    difficulty: 3,
  },

  // ── 10. DB Blast Transition ──────────────────────────────────────────
  // M1: Kick 16ths with groove (ride 8ths, snare 2+4).
  // M2: Same kick 16ths but add blast on top (snare+HH on all 16ths).
  {
    pattern: {
      id: 'metal-dbp-blast-transition',
      name: 'DB Blast Transition',
      category: 'metal',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: DB groove                                         M2: blast over DB
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'hihat-closed': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'blast beat', 'transition'],
    difficulty: 3,
  },

  // ── 11. DB Breakdown to Blast ────────────────────────────────────────
  // M1: Half-time china breakdown with kick on 8th notes.
  // M2: Double-time blast with kick on all 16ths. Speed change practice.
  {
    pattern: {
      id: 'metal-dbp-breakdown-to-blast',
      name: 'DB Breakdown to Blast',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: breakdown (half-time, kick 8ths)                  M2: blast (kick+snare+HH 16ths)
        'kick':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'china':        [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'hihat-closed': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'breakdown', 'blast beat', 'transition', 'speed change'],
    difficulty: 3,
  },

  // ── 12. DB Meshuggah-Style ───────────────────────────────────────────
  // Complex polyrhythmic kick: 5-note grouping (1,1,1,0,1) cycling
  // over 2 measures of 16ths. China steady 8ths, snare 2+4.
  {
    pattern: {
      id: 'metal-dbp-meshuggah-groove',
      name: 'DB Meshuggah-Style',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // 5-note grouping:   1 1 1 0 1 1 1 1 0 1 1 1 1 0 1 1   1 1 0 1 1 1 1 0 1 1 1 1 0 1 1 1
        'kick':         [1,0.7,0.7,0, 0.7,1,0.7,0.7, 0,0.7,1,0.7, 0.7,0,0.7,1,  0.7,0.7,0,0.7, 1,0.7,0.7,0, 0.7,1,0.7,0.7, 0,0.7,1,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'meshuggah', 'polyrhythm', 'djent', '5 over 4'],
    difficulty: 3,
  },

  // ── 13. DB Gojira-Style ──────────────────────────────────────────────
  // Kick ramps up: M1 starts with 8th-note kicks, M2 transitions to
  // full 16th-note kicks. Ride 8ths throughout for consistency.
  {
    pattern: {
      id: 'metal-dbp-gojira-drive',
      name: 'DB Gojira-Style',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: kick 8ths                                         M2: kick 16ths
        'kick':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'gojira', 'build', 'ramp up'],
    difficulty: 3,
  },

  // ── 14. DB Extended Gallop ───────────────────────────────────────────
  // M1: Gallop kick pattern (1,0,1,1) per beat. M2: Straight 16ths.
  // Transition practice between gallop feel and full double bass.
  {
    pattern: {
      id: 'metal-dbp-trivium-gallop-ext',
      name: 'DB Extended Gallop',
      category: 'metal',
      suggestedBpm: 155,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: gallop (1,0,1,1)                                  M2: straight 16ths
        'kick':         [1,0,0.7,0.7, 1,0,0.7,0.7, 1,0,0.7,0.7, 1,0,0.7,0.7,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'gallop', 'trivium', 'transition'],
    difficulty: 3,
  },

  // ── 15. DB Machine Gun ───────────────────────────────────────────────
  // All-out kick 16ths at extreme speed. Snare on 2+4, china on 8ths.
  // Maximum endurance test for double bass stamina.
  {
    pattern: {
      id: 'metal-dbp-machine-gun',
      name: 'DB Machine Gun',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'endurance', 'speed', 'extreme'],
    difficulty: 3,
  },

  // ── 16. DB Dynamics Practice ─────────────────────────────────────────
  // Kick 16ths with dynamic velocity changes: M1 builds from ghost (0.3)
  // to accent (1.0), M2 decrescendos back from accent to ghost.
  {
    pattern: {
      id: 'metal-dbp-dynamics',
      name: 'DB Dynamics Practice',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: crescendo (0.3 -> 0.7 -> 1.0)                    M2: decrescendo (1.0 -> 0.7 -> 0.3)
        'kick':         [0.3,0.3,0.3,0.3, 0.3,0.3,0.7,0.7, 0.7,0.7,0.7,0.7, 1,1,1,1,  1,1,1,1, 0.7,0.7,0.7,0.7, 0.7,0.7,0.3,0.3, 0.3,0.3,0.3,0.3],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'dynamics', 'volume control', 'crescendo'],
    difficulty: 3,
  },

  // ── 17. DB Independence ──────────────────────────────────────────────
  // Kick plays constant 16ths while hands play a completely independent
  // pattern: HH on beat positions, snare on "e" of 2 and "a" of 3.
  // Maximum limb independence challenge.
  {
    pattern: {
      id: 'metal-dbp-independence',
      name: 'DB Independence',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // HH: beats only, snare: "e" of 2 (pos 5), "a" of 3 (pos 11)
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 0,1,0,0, 0,0,0,1, 0,0,0,0,  0,0,0,0, 0,1,0,0, 0,0,0,1, 0,0,0,0],
        'hihat-closed': [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0,  1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'independence', 'limb coordination'],
    difficulty: 3,
  },

  // ── 18. DB Ultimate Challenge ────────────────────────────────────────
  // Kick 16ths throughout. Hands play a complex pattern: crashes on
  // downbeats, ghost snares, toms, and accents. Everything at once.
  {
    pattern: {
      id: 'metal-dbp-ultimate',
      name: 'DB Ultimate Challenge',
      category: 'metal',
      suggestedBpm: 150,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  1,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0.3,0, 1,0,0.3,0, 0,0,0.3,0, 1,0,0,0.3,  0,0.3,0,0, 1,0,0.3,0, 0,0,0.3,0, 1,0,0,0],
        'crash':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'china':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'tom-high':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0.7,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':      [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0.7],
        'ride':         [0,0,0.7,0, 0,0,0.7,0, 0,0,0.7,0, 0,0,0,0,  0,0,0.7,0, 0,0,0.7,0, 0,0,0.7,0, 0,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'advanced', 'ultimate', 'complex', 'everything'],
    difficulty: 3,
  },
];
