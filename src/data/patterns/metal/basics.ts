import type { PatternLibraryEntry } from '../../../types';

export const metalBasicPatterns: PatternLibraryEntry[] = [
  // ── 1. Basic Metal ──────────────────────────────────────────────────
  {
    pattern: {
      id: 'metal-basic',
      name: 'Basic Metal',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['beginner', '4/4', 'metal'],
    difficulty: 1,
  },

  // ── 2. Double Bass ──────────────────────────────────────────────────
  {
    pattern: {
      id: 'metal-double-bass',
      name: 'Double Bass',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'double bass'],
    difficulty: 3,
  },

  // ── 3. Blast Beat ───────────────────────────────────────────────────
  {
    pattern: {
      id: 'metal-blast-beat',
      name: 'Blast Beat',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'snare':        [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'extreme'],
    difficulty: 3,
  },

  // ── 4. Thrash Metal ─────────────────────────────────────────────────
  {
    pattern: {
      id: 'metal-thrash',
      name: 'Thrash Metal',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,0,1,0, 0,0,1,0, 1,0,1,0, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['advanced', '4/4', 'thrash'],
    difficulty: 3,
  },

  // ── 5. Metal Half-Time Groove ───────────────────────────────────────
  {
    pattern: {
      id: 'metal-half-time-groove',
      name: 'Metal Half-Time Groove',
      category: 'metal',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        'snare': [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'crash': [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'china': [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'half-time', 'heavy'],
    difficulty: 2,
  },

  // ── 6. Gallop (Iron Maiden) ─────────────────────────────────────────
  {
    pattern: {
      id: 'metal-gallop',
      name: 'Gallop (Iron Maiden)',
      category: 'metal',
      suggestedBpm: 150,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,0,1,1, 0,1,1,0, 1,1,0,1, 1,0,1,1],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'gallop', 'NWOBHM'],
    difficulty: 3,
  },

  // ── 7. Groove Metal (Pantera style) ─────────────────────────────────
  // Heavy, mid-tempo syncopated groove. Kick follows the guitar riff,
  // china accent on the "&" of beat 3 gives that Dimebag crunch feel.
  {
    pattern: {
      id: 'metal-groove',
      name: 'Groove Metal (Pantera)',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,1, 0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,0,0, 1,0,1,0],
        'china':        [0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'groove', 'syncopated', 'heavy'],
    difficulty: 2,
  },

  // ── 8. Doom Metal ───────────────────────────────────────────────────
  // Slow, crushing beats with lots of space. Sparse kick on beat 1,
  // snare on beat 3, ride bell for dark overtones. 2 measures to breathe.
  {
    pattern: {
      id: 'metal-doom',
      name: 'Doom Metal',
      category: 'metal',
      suggestedBpm: 60,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        'snare':     [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'ride':      [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'crash':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['beginner', '4/4', 'doom', 'slow', 'heavy'],
    difficulty: 1,
  },

  // ── 9. Death Metal ──────────────────────────────────────────────────
  // Alternates between blast beat and double-bass groove across 2 measures.
  // Measure 1: blast. Measure 2: double-bass groove with ride.
  {
    pattern: {
      id: 'metal-death',
      name: 'Death Metal (Blast + Double Bass)',
      category: 'metal',
      suggestedBpm: 170,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,0,1,0, 1,0,1,0, 1,1,1,1, 1,0,1,0],
        'snare':        [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'ride':         [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'death metal', 'blast beat', 'double bass'],
    difficulty: 3,
  },

  // ── 10. Black Metal Tremolo ─────────────────────────────────────────
  // Hypnotic blast with tremolo-picked ride and relentless snare/kick.
  // Snare alternates on 8th notes while kick fills 16ths underneath.
  {
    pattern: {
      id: 'metal-black-tremolo',
      name: 'Black Metal Tremolo',
      category: 'metal',
      suggestedBpm: 190,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'snare':     [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        'ride':      [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['advanced', '4/4', 'black metal', 'tremolo', 'extreme'],
    difficulty: 3,
  },

  // ── 11. Djent ───────────────────────────────────────────────────────
  // Highly syncopated kick pattern locking to polyrhythmic riffs.
  // China cymbal accents on off-beats, ghost snare for texture.
  {
    pattern: {
      id: 'metal-djent',
      name: 'Djent (Syncopated)',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,0, 1,0,0,0, 0,1,0,0, 1,0,0,1, 0,0,1,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0.3,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':     [1,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0],
        'hihat-closed': [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'djent', 'syncopated', 'progressive', 'ghost notes'],
    difficulty: 3,
  },

  // ── 12. Metalcore Breakdown ─────────────────────────────────────────
  // Heavy half-time feel with china on every 8th note. Kick syncopates
  // around beat 4 to create that chug-heavy breakdown momentum.
  {
    pattern: {
      id: 'metal-metalcore-breakdown',
      name: 'Metalcore Breakdown',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':        [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'breakdown', 'half-time', 'heavy'],
    difficulty: 2,
  },

  // ── 13. Nu-Metal Groove ─────────────────────────────────────────────
  // Hip-hop influenced groove with bouncy kick pattern, open hi-hat
  // accents, and a slightly laid-back feel. Think early 2000s Korn/Deftones.
  {
    pattern: {
      id: 'metal-nu-metal',
      name: 'Nu-Metal Groove',
      category: 'metal',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,1, 0,0,0,0, 0,0,1,0, 0,1,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,0,0],
        'hihat-open':      [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'nu-metal', 'groove', 'hip-hop influenced'],
    difficulty: 2,
  },

  // ── 14. D-Beat ──────────────────────────────────────────────────────
  // Classic crust-punk / Discharge-style beat. Kick and crash hit together
  // on the downbeats; snare on the up-beats. Relentless and aggressive.
  {
    pattern: {
      id: 'metal-d-beat',
      name: 'D-Beat',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':     [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        'crash':     [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'd-beat', 'punk', 'crust'],
    difficulty: 2,
  },

  // ── 15. Skank Beat ──────────────────────────────────────────────────
  // Fast punk/crossover beat. Kick on every beat, snare on the upbeats
  // (8th-note off-beats), hi-hat driving constant 8ths. Think Suicidal
  // Tendencies or DRI at top speed.
  {
    pattern: {
      id: 'metal-skank-beat',
      name: 'Skank Beat',
      category: 'metal',
      suggestedBpm: 200,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':        [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'skank', 'punk', 'crossover', 'fast'],
    difficulty: 2,
  },

  // ── 16. Progressive Metal 7/8 ──────────────────────────────────────
  // Odd time signature. 7/8 = 7 eighth notes per bar, represented as
  // 14 sixteenth notes. China accents the "1" of the grouping, kick
  // follows a 3+2+2 phrasing common in prog metal (Dream Theater, Tool).
  {
    pattern: {
      id: 'metal-prog-7-8',
      name: 'Progressive Metal 7/8',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [7, 8],
      subdivisions: 14,
      measures: 2,
      tracks: {
        //              |-- 3 --|-- 2 --|-- 2 --| |-- 3 --|-- 2 --|-- 2 --|
        //              1 + 2 + 3 + 4 + 5 + 6 + 7 +   1 + 2 + 3 + 4 + 5 + 6 + 7 +
        'kick':      [1,0,0,0, 0,0,1,0, 0,0,1,0, 0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0],
        'china':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0],
        'ride':      [0,0,1,0, 1,0,1,0, 1,0,1,0, 1,0, 0,0,1,0, 1,0,1,0, 1,0,1,0, 1,0],
      },
    },
    tags: ['advanced', '7/8', 'progressive', 'odd time', 'complex'],
    difficulty: 3,
  },
];
