import type { PatternLibraryEntry } from '../../types';

export const rockPatterns: PatternLibraryEntry[] = [
  // ──────────────────────────────────────────────────────────────
  // 1. Basic Rock (8th HH)
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-basic-8th',
      name: 'Basic Rock (8th HH)',
      category: 'rock',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'eighth notes'],
    difficulty: 1,
  },

  // ──────────────────────────────────────────────────────────────
  // 2. Basic Rock (16th HH)
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-basic-16th',
      name: 'Basic Rock (16th HH)',
      category: 'rock',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['beginner', '4/4', 'sixteenth notes'],
    difficulty: 1,
  },

  // ──────────────────────────────────────────────────────────────
  // 3. Four on the Floor
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-four-on-floor',
      name: 'Four on the Floor',
      category: 'rock',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'dance'],
    difficulty: 1,
  },

  // ──────────────────────────────────────────────────────────────
  // 4. Half-Time Rock
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-half-time',
      name: 'Half-Time Rock',
      category: 'rock',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'half-time'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 5. Double-Time Rock
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-double-time',
      name: 'Double-Time Rock',
      category: 'rock',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        'snare':        [0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['intermediate', '4/4', 'double-time'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 6. Rock Shuffle (triplet feel, subdivisions=12)
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-shuffle',
      name: 'Rock Shuffle',
      category: 'rock',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //                 |1  a |2  a |3  a |4  a |  (triplets: 1-skip-a per beat)
        'kick':         [1,0,0, 0,0,0, 1,0,0, 0,0,0],
        'snare':        [0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'hihat-closed': [1,0,1, 1,0,1, 1,0,1, 1,0,1],
      },
    },
    tags: ['intermediate', '4/4', 'shuffle', 'triplet'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 7. Driving Rock
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-driving-8th',
      name: 'Driving Rock',
      category: 'rock',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'driving'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 8. Rock with Open Hi-Hat
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-open-hh',
      name: 'Rock with Open Hi-Hat',
      category: 'rock',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                  |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':          [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':         [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':  [1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,0,0],
        'hihat-open':    [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'open hi-hat'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 9. Rock on Ride
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-ride',
      name: 'Rock on Ride',
      category: 'rock',
      suggestedBpm: 115,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //              |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare': [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':  [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'ride'],
    difficulty: 1,
  },

  // ──────────────────────────────────────────────────────────────
  // 10. Syncopated Kick Rock (2 measures)
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-complex-kick',
      name: 'Syncopated Kick Rock',
      category: 'rock',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'syncopated'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 11. Punk Rock
  //     Fast, aggressive, simple beat. Driving 8th-note HH,
  //     kick on every downbeat, snare on 2 & 4.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-punk',
      name: 'Punk Rock',
      category: 'rock',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'punk', 'fast', 'aggressive'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 12. Grunge
  //     Nirvana-style heavy groove. Half-time feel with crash,
  //     big kick placement. Think "Smells Like Teen Spirit" chorus.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-grunge',
      name: 'Grunge',
      category: 'rock',
      suggestedBpm: 116,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':      [1,0,0,0, 0,0,0,0, 1,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'crash':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'hihat-closed': [0,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'grunge', 'heavy', 'nirvana'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 13. Classic Rock Shuffle
  //     Triplet-based shuffle, swing feel. Kick pattern more
  //     varied than basic shuffle. Think AC/DC, ZZ Top.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-classic-shuffle',
      name: 'Classic Rock Shuffle',
      category: 'rock',
      suggestedBpm: 125,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 2,
      tracks: {
        //                 |1  a |2  a |3  a |4  a | 1  a |2  a |3  a |4  a |
        'kick':         [1,0,0, 0,0,0, 1,0,0, 0,0,1, 1,0,0, 0,0,1, 1,0,0, 0,0,0],
        'snare':        [0,0,0, 1,0,0, 0,0,0, 1,0,0, 0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'hihat-closed': [1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7],
      },
    },
    tags: ['intermediate', '4/4', 'shuffle', 'triplet', 'classic rock'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 14. Pop Rock
  //     Clean, simple groove with a solid pocket. 16th HH with
  //     a kick on 1 and the "and" of 2. Very singable feel.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-pop',
      name: 'Pop Rock',
      category: 'rock',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.8,0.5,0.8,0.5, 0.8,0.5,0.8,0.5, 0.8,0.5,0.8,0.5, 0.8,0.5,0.8,0.5],
      },
    },
    tags: ['beginner', '4/4', 'pop', 'clean'],
    difficulty: 1,
  },

  // ──────────────────────────────────────────────────────────────
  // 15. Blues Rock Shuffle (triplet)
  //     12/8 triplet feel, slower tempo. Heavy laid-back shuffle
  //     with ride bell. Think Stevie Ray Vaughan "Pride and Joy".
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-blues-shuffle',
      name: 'Blues Rock Shuffle',
      category: 'rock',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 2,
      tracks: {
        //              |1  a |2  a |3  a |4  a | 1  a |2  a |3  a |4  a |
        'kick':      [1,0,0, 0,0,0, 1,0,1, 0,0,0, 1,0,0, 0,0,1, 1,0,0, 0,0,0],
        'snare':     [0,0,0, 1,0,0, 0,0,0, 1,0,0, 0,0,0, 1,0,0, 0,0,0, 1,0,0],
        'ride':      [1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7, 1,0,0.7],
      },
    },
    tags: ['intermediate', '4/4', 'blues', 'shuffle', 'triplet', 'SRV'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 16. Southern Rock
  //     Laid-back groove with double kick phrasing and ride.
  //     Think Lynyrd Skynyrd, Allman Brothers.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-southern',
      name: 'Southern Rock',
      category: 'rock',
      suggestedBpm: 115,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'southern rock', 'laid-back'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 17. Arena Rock
  //     Big, anthemic beat with crash accents, toms, and quarter
  //     note kick. Think Queen "We Will Rock You" meets stadium.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-arena',
      name: 'Arena Rock',
      category: 'rock',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'crash':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'ride':         [0,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0.8,0],
      },
    },
    tags: ['intermediate', '4/4', 'arena', 'anthemic', 'big'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 18. Indie Rock
  //     Slightly quirky, offbeat kick placement with a
  //     restrained dynamic. Cross-stick option for snare feel.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-indie',
      name: 'Indie Rock',
      category: 'rock',
      suggestedBpm: 125,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,1,0,0],
        'snare':        [0,0,0,0, 0.7,0,0,0, 0,0,0,0, 0.7,0,0,0, 0,0,0,0, 0.7,0,0,0, 0,0,0,0, 0.7,0,0,0],
        'hihat-closed': [0.8,0,0.5,0, 0.8,0,0.5,0, 0.8,0,0.5,0, 0.8,0,0.5,0, 0.8,0,0.5,0, 0.8,0,0.5,0, 0.8,0,0.5,0, 0.8,0,0.5,0],
      },
    },
    tags: ['intermediate', '4/4', 'indie', 'quirky', 'restrained'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 19. Progressive Rock 7/8
  //     Odd-time signature in 7/8. Subdivided as 2+2+3 (or 4+3).
  //     16th subdivisions: 7 8th notes = 14 16th note slots.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-prog-7-8',
      name: 'Progressive Rock 7/8',
      category: 'rock',
      suggestedBpm: 140,
      timeSignature: [7, 8],
      subdivisions: 14,
      measures: 2,
      tracks: {
        //                 |1 e |2 e |3 e + | 1 e |2 e |3 e + |   (2+2+3 grouping, measure 1)
        //                 |1 e |2 e |3 e + | 1 e |2 e |3 e + |   (measure 2)
        'kick':         [1,0, 0,0, 1,0,0, 1,0, 0,0, 0,0,1, 1,0, 0,0, 0,0,1, 0,0, 1,0, 0,0,0],
        'snare':        [0,0, 1,0, 0,0,0, 0,0, 1,0, 0,0,0, 0,0, 1,0, 0,0,0, 0,0, 1,0, 0,0,0],
        'hihat-closed': [1,0, 1,0, 1,0,1, 1,0, 1,0, 1,0,1, 1,0, 1,0, 1,0,1, 1,0, 1,0, 1,0,1],
      },
    },
    tags: ['advanced', '7/8', 'prog', 'odd time'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 20. Progressive Rock 5/4
  //     5/4 time (like "Take Five" in rock context). 20 16th-note
  //     subdivisions per measure, grouped 3+2 or 2+3.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-prog-5-4',
      name: 'Progressive Rock 5/4',
      category: 'rock',
      suggestedBpm: 120,
      timeSignature: [5, 4],
      subdivisions: 20,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |5 e + a | (5 beats)
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'ride':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '5/4', 'prog', 'odd time'],
    difficulty: 3,
  },

  // ──────────────────────────────────────────────────────────────
  // 21. Disco Rock
  //     Four-on-the-floor kick with offbeat open hi-hat and
  //     snare on 2 & 4. Think Blondie "Heart of Glass".
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-disco',
      name: 'Disco Rock',
      category: 'rock',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                  |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':          [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':         [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'hihat-open':    [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'disco', 'four on the floor', 'offbeat'],
    difficulty: 2,
  },

  // ──────────────────────────────────────────────────────────────
  // 22. Rockabilly
  //     Train-beat style with kick/snare alternation creating
  //     a galloping feel. Think Stray Cats, early Elvis.
  //     Heavy use of hi-hat on all 16ths with accented 8ths.
  // ──────────────────────────────────────────────────────────────
  {
    pattern: {
      id: 'rock-rockabilly',
      name: 'Rockabilly',
      category: 'rock',
      suggestedBpm: 175,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                  |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':          [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':         [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        'hihat-closed':  [0.9,0.5,0.9,0.5, 0.9,0.5,0.9,0.5, 0.9,0.5,0.9,0.5, 0.9,0.5,0.9,0.5],
      },
    },
    tags: ['intermediate', '4/4', 'rockabilly', 'train beat', 'retro'],
    difficulty: 2,
  },
];
