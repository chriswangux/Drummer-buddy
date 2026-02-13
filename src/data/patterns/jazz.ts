import type { PatternLibraryEntry } from '../../types';

export const jazzPatterns: PatternLibraryEntry[] = [
  // ─── 1. Jazz Swing (triplet ride) ─────────────────────────────────
  {
    pattern: {
      id: 'jazz-swing',
      name: 'Jazz Swing',
      category: 'jazz',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        'ride':         [1,0,1, 1,0,1, 1,0,1, 1,0,1],
        'hihat-closed': [0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'kick':         [1,0,0, 0,0,0, 0,0,0, 0,0,1],
      },
    },
    tags: ['intermediate', '4/4', 'swing', 'triplet'],
    difficulty: 2,
  },

  // ─── 2. Bossa Nova (2 measures) ───────────────────────────────────
  {
    pattern: {
      id: 'jazz-bossa-nova',
      name: 'Bossa Nova',
      category: 'jazz',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'brazilian'],
    difficulty: 2,
  },

  // ─── 3. Jazz Waltz (3/4, triplet) ─────────────────────────────────
  {
    pattern: {
      id: 'jazz-waltz',
      name: 'Jazz Waltz',
      category: 'jazz',
      suggestedBpm: 150,
      timeSignature: [3, 4],
      subdivisions: 9,
      measures: 1,
      tracks: {
        'ride':         [1,0,1, 1,0,1, 1,0,1],
        'hihat-closed': [0,0,0, 1,0,0, 0,0,0],
        'kick':         [1,0,0, 0,0,0, 0,0,1],
      },
    },
    tags: ['intermediate', '3/4', 'waltz', 'triplet'],
    difficulty: 2,
  },

  // ─── 4. Jazz Brushes Feel ─────────────────────────────────────────
  {
    pattern: {
      id: 'jazz-brushes',
      name: 'Jazz Brushes Feel',
      category: 'jazz',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        'ride':         [1,0,0, 1,0,1, 1,0,0, 1,0,1],
        'snare':        [0,0,0.3, 0,0,0.3, 0,0,0.3, 0,0,0.3],
        'hihat-closed': [0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'kick':         [1,0,0, 0,0,0, 0,0,1, 0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'swing', 'brushes'],
    difficulty: 3,
  },

  // ─── 5. Up-Tempo Swing ────────────────────────────────────────────
  {
    pattern: {
      id: 'jazz-fast-swing',
      name: 'Up-Tempo Swing',
      category: 'jazz',
      suggestedBpm: 200,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        'ride':         [1,0,1, 1,0,1, 1,0,1, 1,0,1],
        'hihat-closed': [0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'kick':         [0,0,0, 0,0,0, 0,0,0, 0,0,1],
      },
    },
    tags: ['advanced', '4/4', 'fast', 'bebop'],
    difficulty: 3,
  },

  // ─── 6. Afro-Cuban Jazz (2 measures) ──────────────────────────────
  {
    pattern: {
      id: 'jazz-afro-cuban',
      name: 'Afro-Cuban Jazz',
      category: 'jazz',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        'kick':  [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,1,0,0],
        'snare': [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0],
        'ride':  [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1, 0,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'afro-cuban', 'clave'],
    difficulty: 3,
  },

  // ─── 7. Medium Swing (classic comping) ────────────────────────────
  // Classic mid-tempo swing with snare comping on beat 4-and (triplet skip)
  // and bass drum "feathering" on all four beats at low velocity
  {
    pattern: {
      id: 'jazz-medium-swing',
      name: 'Medium Swing',
      category: 'jazz',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 2,
      tracks: {
        //                 1       2       3       4       |  1       2       3       4
        'ride':         [1,0,1, 1,0,1, 1,0,1, 1,0,1,  1,0,1, 1,0,1, 1,0,1, 1,0,1],
        'hihat-closed': [0,0,0, 1,0,0, 0,0,0, 1,0,0,  0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'snare':        [0,0,0, 0,0,0, 0,0,0, 0,0,0.7, 0,0,0, 0,0,0.5, 0,0,0, 0,0,0.8],
        'kick':         [0.3,0,0, 0.3,0,0, 0.3,0,0, 0.3,0,0, 0.3,0,0, 0.3,0,0, 0.3,0,0, 0.3,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'swing', 'comping', 'triplet'],
    difficulty: 2,
  },

  // ─── 8. Bebop ─────────────────────────────────────────────────────
  // Fast swing with characteristic bass drum "drops" (accented bombs) on
  // the skip beat of beats 1 and 3, ride pattern stays steady
  {
    pattern: {
      id: 'jazz-bebop',
      name: 'Bebop',
      category: 'jazz',
      suggestedBpm: 220,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 2,
      tracks: {
        //                 1       2       3       4       |  1       2       3       4
        'ride':         [1,0,1, 1,0,1, 1,0,1, 1,0,1,  1,0,1, 1,0,1, 1,0,1, 1,0,1],
        'hihat-closed': [0,0,0, 1,0,0, 0,0,0, 1,0,0,  0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'kick':         [0,0,0.9, 0,0,0, 0,0,0.8, 0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0.9],
        'snare':        [0,0,0, 0,0,0, 0,0,0, 0,0,0.6, 0,0,0, 0,0,0, 0,0,0.7, 0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'bebop', 'fast', 'triplet'],
    difficulty: 3,
  },

  // ─── 9. Hard Bop ──────────────────────────────────────────────────
  // Art Blakey / Max Roach style: heavier ride, strong 2-and-4 on hi-hat,
  // snare hits on beats 2 and 4, plus aggressive comping accents
  {
    pattern: {
      id: 'jazz-hard-bop',
      name: 'Hard Bop',
      category: 'jazz',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 2,
      tracks: {
        //                 1       2       3       4       |  1       2       3       4
        'ride':         [1,0,0.8, 1,0,0.8, 1,0,0.8, 1,0,0.8, 1,0,0.8, 1,0,0.8, 1,0,0.8, 1,0,0.8],
        'hihat-closed': [0,0,0, 1,0,0, 0,0,0, 1,0,0,  0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'snare':        [0,0,0, 0.9,0,0, 0,0,0, 0.9,0,0, 0,0,0, 0.9,0,0.5, 0,0,0, 0.9,0,0],
        'kick':         [1,0,0, 0,0,0, 0,0,0.7, 0,0,0,  1,0,0, 0,0,0.6, 0,0,0, 0,0,0.8],
      },
    },
    tags: ['advanced', '4/4', 'hard-bop', 'aggressive', 'triplet'],
    difficulty: 3,
  },

  // ─── 10. Cool Jazz ────────────────────────────────────────────────
  // Light, subdued feel inspired by Bill Evans trio era. Low velocities,
  // sparse kick, gentle ride with subtle skip note
  {
    pattern: {
      id: 'jazz-cool',
      name: 'Cool Jazz',
      category: 'jazz',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 2,
      tracks: {
        //                 1       2       3       4       |  1       2       3       4
        'ride':         [0.6,0,0.4, 0.6,0,0.4, 0.6,0,0.4, 0.6,0,0.4, 0.6,0,0.4, 0.6,0,0.4, 0.6,0,0.4, 0.6,0,0.4],
        'hihat-closed': [0,0,0, 0.5,0,0, 0,0,0, 0.5,0,0,  0,0,0, 0.5,0,0, 0,0,0, 0.5,0,0],
        'kick':         [0.4,0,0, 0,0,0, 0,0,0, 0,0,0,  0,0,0, 0,0,0, 0.4,0,0, 0,0,0],
        'snare':        [0,0,0, 0,0,0, 0,0,0, 0,0,0.3,  0,0,0, 0,0,0, 0,0,0, 0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'cool-jazz', 'light', 'triplet'],
    difficulty: 2,
  },

  // ─── 11. Jazz Fusion ──────────────────────────────────────────────
  // Straight 16th-note feel on hi-hat, syncopated kick/snare. Inspired by
  // Dave Weckl / Vinnie Colaiuta fusion style
  {
    pattern: {
      id: 'jazz-fusion',
      name: 'Jazz Fusion',
      category: 'jazz',
      suggestedBpm: 108,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0.3, 0,0,0,0, 1,0,0,0,  0,0,0,0.3, 1,0,0,0, 0,0,0,0.3, 1,0,0,0],
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,1, 0,0,0,0,  1,0,0,1, 0,0,0,0, 1,0,0,0, 0,1,0,0],
        'ride':         [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1,  0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1],
      },
    },
    tags: ['advanced', '4/4', 'fusion', '16th-notes', 'straight'],
    difficulty: 3,
  },

  // ─── 12. Jazz-Funk ────────────────────────────────────────────────
  // Straight 16th-note hi-hat groove with open hi-hat accents, funky
  // kick patterns. Herbie Hancock Head Hunters territory
  {
    pattern: {
      id: 'jazz-funk',
      name: 'Jazz-Funk',
      category: 'jazz',
      suggestedBpm: 96,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,0,1,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,0,1],
        'hihat-open':   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0.3, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0.3,0, 0,0,0,0, 1,0,0,0.3],
        'kick':         [1,0,0,1, 0,0,1,0, 0,0,0,0, 0,1,0,0,  1,0,0,0, 0,0,1,0, 0,1,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'jazz-funk', 'straight', 'ghost-notes'],
    difficulty: 3,
  },

  // ─── 13. New Orleans Second Line ──────────────────────────────────
  // Syncopated street beat, bass drum on 1, snare plays a "march" pattern
  // with ghost notes and open hi-hat on the "and" of 4
  {
    pattern: {
      id: 'jazz-second-line',
      name: 'New Orleans Second Line',
      category: 'jazz',
      suggestedBpm: 112,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'snare':        [0,0,0.3,0, 1,0,0,0.4, 0,0,0.3,0, 1,0,0,0.3, 0,0,0.3,0, 1,0,0,0, 0,0,0.4,0, 1,0,0,0.3],
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,0],
        'hihat-open':   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'new-orleans', 'second-line', 'march'],
    difficulty: 2,
  },

  // ─── 14. ECM Style (spacious) ─────────────────────────────────────
  // Inspired by Jack DeJohnette / Jon Christensen. Very open feel with
  // sparse ride, minimal kick, subtle cymbal washes. 2 measures of triplet
  {
    pattern: {
      id: 'jazz-ecm',
      name: 'ECM Style',
      category: 'jazz',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 2,
      tracks: {
        //                 1       2       3       4       |  1       2       3       4
        'ride':         [0.5,0,0, 0,0,0, 0.6,0,0, 0,0,0,  0,0,0, 0.5,0,0, 0,0,0, 0.6,0,0],
        'crash':        [0.3,0,0, 0,0,0, 0,0,0, 0,0,0,  0,0,0, 0,0,0, 0.3,0,0, 0,0,0],
        'kick':         [0.4,0,0, 0,0,0, 0,0,0, 0,0,0,  0,0,0, 0,0,0, 0,0,0, 0.4,0,0],
        'snare':        [0,0,0, 0,0,0, 0,0,0.3, 0,0,0,  0,0,0, 0,0,0, 0,0,0, 0,0,0.3],
      },
    },
    tags: ['advanced', '4/4', 'ecm', 'spacious', 'ambient', 'triplet'],
    difficulty: 3,
  },

  // ─── 15. Jazz Shuffle ─────────────────────────────────────────────
  // Triplet-based shuffle with hi-hat instead of ride. Classic "skip" note
  // shuffle feel (1-skip-3) on every beat with snare on 2 and 4
  {
    pattern: {
      id: 'jazz-shuffle',
      name: 'Jazz Shuffle',
      category: 'jazz',
      suggestedBpm: 135,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //                 1       2       3       4
        'hihat-closed': [1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7],
        'snare':        [0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'kick':         [1,0,0, 0,0,0, 1,0,0, 0,0,0.5],
      },
    },
    tags: ['intermediate', '4/4', 'shuffle', 'triplet'],
    difficulty: 2,
  },
];
