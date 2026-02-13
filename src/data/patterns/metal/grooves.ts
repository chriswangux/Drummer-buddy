import type { PatternLibraryEntry } from '../../../types';

export const metalGroovePatterns: PatternLibraryEntry[] = [
  // ── 1. Metalcore Verse ─────────────────────────────────────────────────
  // Standard metalcore verse beat. Steady closed HH 8ths, kick on beat 1
  // and the "and" of 3, snare on beats 2 and 4. Solid and reliable.
  {
    pattern: {
      id: 'metal-groove-verse',
      name: 'Metalcore Verse',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':          [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':   [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'metalcore', 'verse', 'hi-hat'],
    difficulty: 1,
  },

  // ── 2. Metalcore Chorus ────────────────────────────────────────────────
  // Opens up with ride bell 8ths instead of HH for bigger sound. Crash
  // on beat 1 for section marker. Kick adds a fill on "and" of 4 leading
  // back into the pattern.
  {
    pattern: {
      id: 'metal-groove-chorus',
      name: 'Metalcore Chorus',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        'snare':          [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':           [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':          [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['beginner', '4/4', 'metalcore', 'chorus', 'ride', 'crash'],
    difficulty: 1,
  },

  // ── 3. Driving 8th-Note ───────────────────────────────────────────────
  // Aggressive fast groove. HH 8ths driving hard, punchy kick on 1 and
  // "and" of 2, snare on 2 and 4. At 140 BPM this is relentless energy.
  {
    pattern: {
      id: 'metal-groove-driving',
      name: 'Driving 8th-Note',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0],
        'snare':          [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':   [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'metal', 'driving', 'aggressive', 'fast'],
    difficulty: 2,
  },

  // ── 4. Sludge Metal ───────────────────────────────────────────────────
  // Slow and heavy with space to breathe. Ride on quarter notes for dark
  // wash. Kick on beat 1, snare on beat 3. Minimal -- the riffs do the
  // talking. Think Crowbar or Eyehategod.
  {
    pattern: {
      id: 'metal-groove-sludge',
      name: 'Sludge Metal',
      category: 'metal',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':       [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'ride':        [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
      },
    },
    tags: ['beginner', '4/4', 'sludge', 'slow', 'heavy', 'minimal'],
    difficulty: 1,
  },

  // ── 5. Lamb of God Style ──────────────────────────────────────────────
  // Chris Adler-inspired groove over 2 measures. Syncopated kick pattern,
  // china accents on offbeats, ghost snares add texture between the
  // backbeat hits. Complex interplay between limbs.
  {
    pattern: {
      id: 'metal-groove-log',
      name: 'Lamb of God Style',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,1, 0,0,1,0, 0,0,0,0, 0,1,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,1, 0,0,0,0],
        'snare':          [0,0,0,0, 1,0,0,0, 0.3,0,0,0, 1,0,0,0, 0,0,0.3,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':   [1,0,1,0, 0,0,1,0, 1,0,1,0, 0,0,1,0, 1,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        'china':          [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'groove', 'syncopated', 'ghost notes', 'lamb of god'],
    difficulty: 3,
  },

  // ── 6. Machine Head Style ─────────────────────────────────────────────
  // Heavy groove metal in the vein of Machine Head. Offbeat kick drives
  // momentum, HH on 8ths, snare on 2 and 4. M2 varies the kick for a
  // call-and-response feel over 2 measures.
  {
    pattern: {
      id: 'metal-groove-machine',
      name: 'Machine Head Style',
      category: 'metal',
      suggestedBpm: 115,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0, 1,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,1,0],
        'snare':          [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':   [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'groove', 'heavy', 'machine head'],
    difficulty: 2,
  },

  // ── 7. D-Beat Variation ───────────────────────────────────────────────
  // Modified d-beat with double bass fills. Standard d-beat (kick+crash
  // on downbeats, snare on upbeats) but with 16th-note kick fills in
  // beats 3-4 to add metal heaviness to the punk foundation.
  {
    pattern: {
      id: 'metal-groove-dbeat-var',
      name: 'D-Beat Variation',
      category: 'metal',
      suggestedBpm: 170,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 1,0,0,0, 1,0,1,0, 1,0,1,0],
        'snare':          [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        'crash':          [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'd-beat', 'punk', 'double bass', 'fast'],
    difficulty: 3,
  },

  // ── 8. Skank Beat Variation ───────────────────────────────────────────
  // Fast skank beat with open HH accents on the "and" of 2 and 4 for
  // extra aggression. Kick on quarters, snare on upbeats (8th off-beats).
  // Closed HH drives 8ths with open accents cutting through.
  {
    pattern: {
      id: 'metal-groove-skank-var',
      name: 'Skank Beat Variation',
      category: 'metal',
      suggestedBpm: 190,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':          [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        'hihat-closed':   [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'hihat-open':     [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'skank', 'fast', 'punk', 'open hi-hat'],
    difficulty: 2,
  },

  // ── 9. Punk Crossover ─────────────────────────────────────────────────
  // Punk energy meets metal heaviness. Kick on beats 1 and 3, snare on
  // 2 and 4, crash on every quarter for maximum intensity. At 180 BPM
  // this is a full-throttle mosh engine.
  {
    pattern: {
      id: 'metal-groove-punk-cross',
      name: 'Punk Crossover',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':          [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'crash':          [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'hihat-closed':   [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'punk', 'crossover', 'fast', 'aggressive'],
    difficulty: 2,
  },

  // ── 10. Tribal Metal ──────────────────────────────────────────────────
  // Sepultura/Gojira-inspired tribal groove over 2 measures. Kick follows
  // a primal, tom-like pattern with actual tom accents reinforcing the
  // tribal pulse. M1 establishes the groove, M2 adds tom fills and
  // variation for a hypnotic, ritualistic feel.
  {
    pattern: {
      id: 'metal-groove-tribal',
      name: 'Tribal Metal',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,1,0, 1,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0],
        'snare':          [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'tom-high':       [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0],
        'tom-floor':      [0,0,1,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        'china':          [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'tribal', 'groove', 'toms', 'sepultura', 'gojira'],
    difficulty: 3,
  },
];
