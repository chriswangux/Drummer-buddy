import type { PatternLibraryEntry } from '../../../types';

export const metalBlastPatterns: PatternLibraryEntry[] = [
  // ── 1. Traditional Blast ────────────────────────────────────────────
  // The classic blast beat: kick and hi-hat lock together on every 16th
  // note while the snare mirrors on every 16th. Pure speed and aggression.
  {
    pattern: {
      id: 'metal-blast-traditional',
      name: 'Traditional Blast',
      category: 'metal',
      suggestedBpm: 200,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'hihat-closed': [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'traditional', 'extreme'],
    difficulty: 3,
  },

  // ── 2. Gravity Blast ────────────────────────────────────────────────
  // One-handed snare technique producing rapid-fire snare 16ths. Kick
  // and ride play on 8th notes, leaving the snare to dominate.
  {
    pattern: {
      id: 'metal-blast-gravity',
      name: 'Gravity Blast',
      category: 'metal',
      suggestedBpm: 220,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'snare':        [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'kick':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'gravity', 'extreme', 'technique'],
    difficulty: 3,
  },

  // ── 3. Bomb Blast ──────────────────────────────────────────────────
  // Maximum density: kick, snare, and hi-hat ALL hit on every single
  // 16th note. Total sonic annihilation.
  {
    pattern: {
      id: 'metal-blast-bomb',
      name: 'Bomb Blast',
      category: 'metal',
      suggestedBpm: 190,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'snare':        [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'bomb', 'extreme', 'brutal'],
    difficulty: 3,
  },

  // ── 4. Hammer Blast ─────────────────────────────────────────────────
  // Snare drives constant 16ths, kick anchors on the quarter-note beats,
  // ride plays 8th notes. Named for the "hammering" snare hand.
  {
    pattern: {
      id: 'metal-blast-hammer',
      name: 'Hammer Blast',
      category: 'metal',
      suggestedBpm: 210,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'snare':        [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'kick':         [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'ride':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'hammer', 'extreme'],
    difficulty: 3,
  },

  // ── 5. Hyper Blast ──────────────────────────────────────────────────
  // Extreme speed blast: snare on all 16ths, kick alternates on 8th
  // notes (every other 16th). Creates a frantic, whiplash feel.
  {
    pattern: {
      id: 'metal-blast-hyper',
      name: 'Hyper Blast',
      category: 'metal',
      suggestedBpm: 240,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'snare':        [1,0.7,1,0.7, 1,0.7,1,0.7, 1,0.7,1,0.7, 1,0.7,1,0.7],
        'kick':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'hyper', 'extreme', 'speed'],
    difficulty: 3,
  },

  // ── 6. Half-Speed Blast ─────────────────────────────────────────────
  // The blast pattern played on 8th notes (every other 16th position).
  // Gives the aggression of a blast at a more manageable tempo.
  {
    pattern: {
      id: 'metal-blast-half',
      name: 'Half-Speed Blast',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
        'snare':        [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['intermediate', '4/4', 'blast beat', 'half-speed'],
    difficulty: 2,
  },

  // ── 7. Reverse Blast ────────────────────────────────────────────────
  // Inverted from traditional: kick drives every 16th while snare only
  // plays on 8th notes. The feel is reversed from the standard blast.
  {
    pattern: {
      id: 'metal-blast-reverse',
      name: 'Reverse Blast',
      category: 'metal',
      suggestedBpm: 200,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'reverse', 'extreme'],
    difficulty: 3,
  },

  // ── 8. Euro Blast ───────────────────────────────────────────────────
  // European death metal style: kick and snare hit in unison on every
  // 16th note, ride plays 8th notes on top. Popularized by bands like
  // Krisiun and early Behemoth.
  {
    pattern: {
      id: 'metal-blast-euro',
      name: 'Euro Blast',
      category: 'metal',
      suggestedBpm: 190,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'ride':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'euro', 'death metal', 'extreme'],
    difficulty: 3,
  },

  // ── 9. China Blast ──────────────────────────────────────────────────
  // Traditional blast pattern but with china cymbal instead of hi-hat
  // for a trashier, more aggressive tone. Common in deathcore.
  {
    pattern: {
      id: 'metal-blast-china',
      name: 'China Blast',
      category: 'metal',
      suggestedBpm: 190,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'china':        [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'china', 'deathcore', 'extreme'],
    difficulty: 3,
  },

  // ── 10. Double Bass Blast ───────────────────────────────────────────
  // Both feet play 16th notes (double bass) while snare also plays all
  // 16ths. The hi-hat plays 8ths to cut through the wall of sound.
  {
    pattern: {
      id: 'metal-blast-double-bass',
      name: 'Double Bass Blast',
      category: 'metal',
      suggestedBpm: 200,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'snare':        [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'double bass', 'extreme'],
    difficulty: 3,
  },

  // ── 11. Broken Blast ────────────────────────────────────────────────
  // A blast beat with dynamic variation: snare accented (1.0) on the
  // quarter-note beats, ghost notes (0.3) on the in-between 16ths.
  // Kick and hi-hat maintain constant 16ths. Adds musical shape.
  {
    pattern: {
      id: 'metal-blast-broken',
      name: 'Broken Blast',
      category: 'metal',
      suggestedBpm: 200,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [1,0.3,0.3,0.3, 1,0.3,0.3,0.3, 1,0.3,0.3,0.3, 1,0.3,0.3,0.3],
        'hihat-closed': [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'broken', 'dynamic', 'ghost notes'],
    difficulty: 3,
  },

  // ── 12. Blast to Groove ─────────────────────────────────────────────
  // Two-measure transition: M1 is a full traditional blast beat.
  // M2 drops into a groove with kick on 1 and the & of 3, snare on
  // 2 and 4, and hi-hat on 8th notes.
  {
    pattern: {
      id: 'metal-blast-transition',
      name: 'Blast to Groove',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: full blast                                        M2: groove
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'transition', 'groove', 'dynamic'],
    difficulty: 3,
  },
];
