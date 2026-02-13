import type { PatternLibraryEntry } from '../../types';

export const funkPatterns: PatternLibraryEntry[] = [
  // ──────────────────────────────────────────────────────────────
  // 1. Basic Funk
  //    Simple 16th HH, kick on 1 and "and" of 3, snare on 2 & 4.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-basic',
      name: 'Basic Funk',
      category: 'funk',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['beginner', '4/4', 'funk'],
    difficulty: 1,
  },

  // ──────────────────────────────────────────────────────────────
  // 2. Syncopated Funk
  //    Kick on 1, "and" of 2, "a" of 3. Creates a bouncy feel.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-syncopated',
      name: 'Syncopated Funk',
      category: 'funk',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['intermediate', '4/4', 'syncopated'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 3. Funk with Ghost Notes
  //    Ghost snare (0.3) between backbeats for texture.
  //    The ghost notes fall on "e" and "a" subdivisions.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-ghost-notes',
      name: 'Funk with Ghost Notes',
      category: 'funk',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a    |2 e + a    |3 e + a    |4 e + a    |
        'kick':         [1,0,0,0,    0,0,0,0,    0,0,1,0,    0,0,0,0],
        'snare':        [0,0,0.3,0,  1,0,0.3,0,  0,0,0.3,0,  1,0,0,0.3],
        'hihat-closed': [1,1,1,1,    1,1,1,1,    1,1,1,1,    1,1,1,1],
      },
    },
    tags: ['advanced', '4/4', 'ghost notes', 'dynamics'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 4. JB Funk
  //    James Brown "The One" style. Heavy emphasis on beat 1,
  //    syncopated kick with 8th note HH.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-james-brown',
      name: 'JB Funk',
      category: 'funk',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,1, 0,0,0,0, 1,0,0,0, 0,1,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'classic'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 5. Funk Breakbeat (2 measures)
  //    Two-bar phrase with syncopated kick variations.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-breakbeat',
      name: 'Funk Breakbeat',
      category: 'funk',
      suggestedBpm: 105,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['advanced', '4/4', 'breakbeat'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 6. Funk/Hip-Hop
  //    Laid-back groove with open HH on "a" of 2 and 4.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-hip-hop',
      name: 'Funk/Hip-Hop',
      category: 'funk',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                  |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':          [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,1,0,0],
        'snare':         [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':  [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'hihat-open':    [0,0,0,0, 0,0,0,1, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', '4/4', 'hip-hop'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 7. Linear Funk
  //    No two limbs hit at the same time. Classic linear concept.
  //    HH fills the gaps between kick and snare.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-linear',
      name: 'Linear Funk',
      category: 'funk',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0,0,1,0, 0,0,1,0, 0,0,0,0, 0,0,1,1],
      },
    },
    tags: ['advanced', '4/4', 'linear'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 8. Tight Pocket
  //    Solid pocket groove, kick anticipates beat 3 on "and" of 2.
  //    Steady 16th HH, very reliable for band settings.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-tight-pocket',
      name: 'Tight Pocket',
      category: 'funk',
      suggestedBpm: 98,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['intermediate', '4/4', 'pocket'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 9. Disco
  //    Four-on-the-floor kick, open HH on upbeats, snare on 2 & 4.
  //    Smooth 16th HH with accented open hats. Think Bee Gees,
  //    Donna Summer, classic Nile Rodgers era.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-disco',
      name: 'Disco',
      category: 'funk',
      suggestedBpm: 115,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                  |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':          [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':         [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':  [0.8,0.5,0,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0,0.5],
        'hihat-open':    [0,0,0.9,0, 0,0,0.9,0, 0,0,0.9,0, 0,0,0.9,0],
      },
    },
    tags: ['intermediate', '4/4', 'disco', 'four on the floor', 'classic'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 10. Motown
  //     Steady backbeat with tambourine-like 8th-note HH and a
  //     deep pocket. Think Benny Benjamin, "My Girl" era.
  //     Kick plays 1 and anticipates 3 via "and" of 2.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-motown',
      name: 'Motown',
      category: 'funk',
      suggestedBpm: 105,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0.8,0,0,0, 0,0,0,0, 0.8,0,0,0, 0,0,0,0, 0.8,0,0,0, 0,0,0,0, 0.8,0,0,0],
        'hihat-closed': [0.8,0,0.6,0, 0.8,0,0.6,0, 0.8,0,0.6,0, 0.8,0,0.6,0, 0.8,0,0.6,0, 0.8,0,0.6,0, 0.8,0,0.6,0, 0.8,0,0.6,0],
      },
    },
    tags: ['intermediate', '4/4', 'motown', 'classic', 'soul'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 11. Neo-Soul
  //     Laid-back, behind-the-beat feel. Rich ghost notes on snare,
  //     syncopated kick. Think Questlove, D'Angelo "Voodoo".
  //     Slower tempo, lots of dynamics.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-neo-soul',
      name: 'Neo-Soul',
      category: 'funk',
      suggestedBpm: 78,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                  |1 e + a    |2 e + a    |3 e + a    |4 e + a    | 1 e + a    |2 e + a    |3 e + a    |4 e + a    |
        'kick':          [1,0,0,0,    0,0,0,0,    0,0,1,0,    0,0,0,1,    1,0,0,0,    0,0,0,0,    0,1,0,0,    0,0,1,0],
        'snare':         [0,0,0.3,0,  1,0,0.3,0,  0,0,0.3,0,  1,0,0,0.3,  0,0.3,0,0.3, 1,0,0.3,0, 0,0,0.3,0,  1,0,0,0.3],
        'hihat-closed':  [0.7,0.4,0.7,0.4, 0.7,0.4,0.7,0.4, 0.7,0.4,0.7,0.4, 0.7,0.4,0,0.4, 0.7,0.4,0.7,0.4, 0.7,0.4,0.7,0.4, 0.7,0.4,0.7,0.4, 0.7,0.4,0,0.4],
        'hihat-open':    [0,0,0,0,    0,0,0,0,    0,0,0,0,    0,0,0.8,0,  0,0,0,0,    0,0,0,0,    0,0,0,0,    0,0,0.8,0],
      },
    },
    tags: ['advanced', '4/4', 'neo-soul', 'ghost notes', 'laid-back', 'questlove'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 12. P-Funk (Parliament)
  //     Heavy, swampy groove. Think "Give Up the Funk".
  //     Accented "one" with syncopated kick pattern and
  //     open HH splashes. Two-bar phrase.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-p-funk',
      name: 'P-Funk (Parliament)',
      category: 'funk',
      suggestedBpm: 108,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                  |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':          [1,0,0,1, 0,0,0,0, 0,0,1,0, 0,1,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        'snare':         [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':  [1,1,1,1, 1,1,1,0, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,0, 1,1,1,1, 1,1,1,1],
        'hihat-open':    [0,0,0,0, 0,0,0,0.8, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0.8, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'p-funk', 'parliament', 'heavy', 'syncopated'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 13. Tower of Power
  //     Tight, precise Oakland funk. David Garibaldi style with
  //     ghost notes, linear phrasing, and syncopated kick.
  //     Very dynamic - ghosts at 0.3, accents at 1.0.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-tower-of-power',
      name: 'Tower of Power',
      category: 'funk',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                  |1 e + a    |2 e + a    |3 e + a    |4 e + a    | 1 e + a    |2 e + a    |3 e + a    |4 e + a    |
        'kick':          [1,0,0,0,    0,0,1,0,    0,0,0,0,    0,0,0,1,    1,0,0,0,    0,0,0,0,    0,1,0,0,    0,0,1,0],
        'snare':         [0,0,0.3,0,  1,0,0,0.3,  0,0,0.3,0,  1,0,0,0,    0,0.3,0,0.3, 1,0,0.3,0, 0,0,0.3,0,  1,0,0,0.3],
        'hihat-closed':  [0,0,0,0.7,  0,0,0,0,    0.7,0,0,0.7, 0,0,0.7,0, 0,0,0,0.7,  0,0,0,0,    0.7,0,0,0,  0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'tower of power', 'garibaldi', 'linear', 'ghost notes'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 14. Prince Style
  //     Tight, dance-oriented funk with hi-hat work and
  //     syncopated snare phrasing. Think "Kiss", "When Doves Cry".
  //     Open HH on the "and" creates a breathing feel.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-prince',
      name: 'Prince Style',
      category: 'funk',
      suggestedBpm: 112,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                  |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':          [1,0,0,0, 0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0, 0,1,0,0],
        'snare':         [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0.3, 0,0,0.3,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':  [0.8,0.5,0,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0,0.5],
        'hihat-open':    [0,0,0.8,0, 0,0,0.8,0, 0,0,0.8,0, 0,0,0.8,0, 0,0,0.8,0, 0,0,0.8,0, 0,0,0.8,0, 0,0,0.8,0],
      },
    },
    tags: ['advanced', '4/4', 'prince', 'dance funk', 'minneapolis'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 15. Gospel Groove
  //     Energetic, uplifting groove. 16th note hi-hats with
  //     open hat accents, syncopated kick pattern,
  //     and ghost notes. Common in gospel and contemporary worship.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-gospel',
      name: 'Gospel Groove',
      category: 'funk',
      suggestedBpm: 96,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                  |1 e + a    |2 e + a    |3 e + a    |4 e + a    | 1 e + a    |2 e + a    |3 e + a    |4 e + a    |
        'kick':          [1,0,0,0,    0,0,0,0,    0,0,1,0,    0,0,0,1,    1,0,0,0,    0,0,1,0,    0,0,0,0,    0,1,0,0],
        'snare':         [0,0,0.3,0,  1,0,0,0.3,  0,0,0.3,0,  1,0,0,0,    0,0,0.3,0,  1,0,0,0.3,  0,0,0.3,0,  1,0,0,0],
        'hihat-closed':  [0.8,0.5,0.8,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0.8,0.5, 0.8,0.5,0.8,0.5, 0.8,0.5,0.8,0.5, 0.8,0.5,0,0.5, 0.8,0.5,0.8,0.5, 0.8,0.5,0.8,0.5],
        'hihat-open':    [0,0,0,0,    0,0,0.9,0,  0,0,0,0,    0,0,0,0,    0,0,0,0,    0,0,0.9,0,  0,0,0,0,    0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'gospel', 'worship', 'energetic', 'ghost notes'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 16. R&B Slow Jam
  //     Slow, sensual groove. Sparse kick, heavy ghost notes,
  //     open HH for breathing room. Think 90s R&B ballads.
  //     Cross-stick-like soft snare hits (0.5) with ghosts (0.3).
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'funk-rnb-slow-jam',
      name: 'R&B Slow Jam',
      category: 'funk',
      suggestedBpm: 68,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                  |1 e + a    |2 e + a    |3 e + a    |4 e + a    | 1 e + a    |2 e + a    |3 e + a    |4 e + a    |
        'kick':          [1,0,0,0,    0,0,0,0,    0,0,0,0,    0,0,0,1,    0,0,1,0,    0,0,0,0,    0,0,0,0,    0,0,1,0],
        'snare':         [0,0,0.3,0,  0.7,0,0,0.3, 0,0.3,0,0,  0.7,0,0,0,  0,0,0.3,0,  0.7,0,0.3,0, 0,0,0.3,0,  0.7,0,0,0.3],
        'hihat-closed':  [0.6,0,0.4,0, 0.6,0,0.4,0, 0.6,0,0.4,0, 0.6,0,0,0, 0.6,0,0.4,0, 0.6,0,0.4,0, 0.6,0,0.4,0, 0.6,0,0,0],
        'hihat-open':    [0,0,0,0,    0,0,0,0,    0,0,0,0,    0,0,0.7,0,  0,0,0,0,    0,0,0,0,    0,0,0,0,    0,0,0.7,0],
      },
    },
    tags: ['advanced', '4/4', 'r&b', 'slow jam', 'ballad', 'ghost notes'],
    difficulty: 3,
  },
];
