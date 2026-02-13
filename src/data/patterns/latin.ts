import type { PatternLibraryEntry } from '../../types';

export const latinPatterns: PatternLibraryEntry[] = [
  // ─── 1. Samba ─────────────────────────────────────────────────────
  {
    pattern: {
      id: 'latin-samba',
      name: 'Samba',
      category: 'latin',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,1],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['intermediate', '4/4', 'brazilian'],
    difficulty: 2,
  },

  // ─── 2. Reggaeton (Dembow) ────────────────────────────────────────
  {
    pattern: {
      id: 'latin-reggaeton',
      name: 'Reggaeton (Dembow)',
      category: 'latin',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,0,0,0, 0,0,0,1, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,1, 0,0,0,0, 0,0,0,1, 0,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'reggaeton', 'dembow'],
    difficulty: 1,
  },

  // ─── 3. Mambo (2 measures) ────────────────────────────────────────
  {
    pattern: {
      id: 'latin-mambo',
      name: 'Mambo',
      category: 'latin',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        'kick':  [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare': [0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':  [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1, 0,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'cuban', 'clave'],
    difficulty: 3,
  },

  // ─── 4. Cumbia ────────────────────────────────────────────────────
  {
    pattern: {
      id: 'latin-cumbia',
      name: 'Cumbia',
      category: 'latin',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'colombian'],
    difficulty: 1,
  },

  // ─── 5. Cha-Cha ──────────────────────────────────────────────────
  {
    pattern: {
      id: 'latin-cha-cha',
      name: 'Cha-Cha',
      category: 'latin',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,1,0, 1,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'cuban', 'dance'],
    difficulty: 2,
  },

  // ─── 6. Tresillo ─────────────────────────────────────────────────
  {
    pattern: {
      id: 'latin-tresillo',
      name: 'Tresillo',
      category: 'latin',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':         [1,0,0,1, 0,0,1,0, 0,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'tresillo', 'clave'],
    difficulty: 1,
  },

  // ─── 7. Baiao (Brazilian) ─────────────────────────────────────────
  // Northeast Brazilian rhythm. The bass drum plays the baiao pattern:
  // beat 1 + the "and" of 2 (8th note). Snare (or zabumba rim) on 2 and 4.
  // Triangle (represented by hi-hat) plays steady 16ths.
  {
    pattern: {
      id: 'latin-baiao',
      name: 'Baiao',
      category: 'latin',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['intermediate', '4/4', 'brazilian', 'baiao', 'forro'],
    difficulty: 2,
  },

  // ─── 8. Maracatu ──────────────────────────────────────────────────
  // Afro-Brazilian rhythm from Pernambuco. Heavy, march-like feel.
  // Bass drum on 1 and 3, snare plays syncopated accents with ghost notes.
  // 2 measures to capture the full call-and-response pattern.
  {
    pattern: {
      id: 'latin-maracatu',
      name: 'Maracatu',
      category: 'latin',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':        [0,0,0.3,0, 1,0,0.3,0, 0,0,0.3,0, 1,0,0.3,0, 0,0,0.3,0, 1,0,0.3,0, 0,0,0.3,0, 1,0,0,1],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'brazilian', 'maracatu', 'afro-brazilian'],
    difficulty: 3,
  },

  // ─── 9. Son Clave (3-2) ───────────────────────────────────────────
  // The foundational Afro-Cuban clave: 3 side in bar 1, 2 side in bar 2.
  // Ride plays the clave rhythm, kick/snare provide the groove context.
  // 3-side: 1, and-of-2, 4 | 2-side: 2, 3
  {
    pattern: {
      id: 'latin-son-clave-32',
      name: 'Son Clave (3-2)',
      category: 'latin',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'ride':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,0,0],
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'cuban', 'clave', 'son'],
    difficulty: 2,
  },

  // ─── 10. Son Clave (2-3) ──────────────────────────────────────────
  // Reversed clave: 2 side first, then 3 side.
  // 2-side: 2, 3 | 3-side: 1, and-of-2, 4
  {
    pattern: {
      id: 'latin-son-clave-23',
      name: 'Son Clave (2-3)',
      category: 'latin',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'ride':         [0,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
        'kick':         [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'cuban', 'clave', 'son'],
    difficulty: 2,
  },

  // ─── 11. Cascara ──────────────────────────────────────────────────
  // The cascara (shell) pattern played on the side of the timbale/ride.
  // Based on the 3-2 son clave. 2 measures with the classic cascara
  // rhythm on ride and tumbao bass drum pattern.
  {
    pattern: {
      id: 'latin-cascara',
      name: 'Cascara',
      category: 'latin',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'ride':         [1,0,1,0, 0,0,1,0, 1,0,0,0, 1,0,1,0,  0,0,1,0, 1,0,0,0, 1,0,1,0, 0,0,1,0],
        'kick':         [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'cuban', 'cascara', 'timbale'],
    difficulty: 3,
  },

  // ─── 12. Merengue ─────────────────────────────────────────────────
  // Dominican Republic: steady bass drum on every beat, snare on 2 and 4,
  // fast hi-hat 8th notes. Simple but driving dance feel.
  {
    pattern: {
      id: 'latin-merengue',
      name: 'Merengue',
      category: 'latin',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'dominican', 'merengue', 'dance'],
    difficulty: 1,
  },

  // ─── 13. Salsa ────────────────────────────────────────────────────
  // Drum set adaptation of salsa with cascara-influenced ride pattern,
  // tumbao bass drum, and cross-stick snare on 2 and the "and" of 2.
  // 2 measures over 3-2 clave.
  {
    pattern: {
      id: 'latin-salsa',
      name: 'Salsa',
      category: 'latin',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'ride':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'kick':         [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0.6,0,0.4,0, 0,0,0,0, 0.6,0,0.4,0, 0,0,0,0, 0.6,0,0.4,0, 0,0,0,0, 0.6,0,0.4,0],
        'hihat-closed': [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'cuban', 'salsa', 'dance'],
    difficulty: 3,
  },

  // ─── 14. Bachata ──────────────────────────────────────────────────
  // Dominican Republic: characteristic "bongo" feel adapted for drum set.
  // Bass drum on 1 and 3, snare accent (rim click) on 4-and followed by
  // a tom hit, hi-hat plays steady 8ths.
  {
    pattern: {
      id: 'latin-bachata',
      name: 'Bachata',
      category: 'latin',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0],
        'tom-high':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'dominican', 'bachata', 'dance'],
    difficulty: 1,
  },

  // ─── 15. Bomba ────────────────────────────────────────────────────
  // Puerto Rican bomba: 6/8 feel written in 4/4 with 16ths. The "sica"
  // rhythm: bass drum and hand patterns interlock. Snare plays the
  // call pattern, kick plays the response. 2 measures.
  {
    pattern: {
      id: 'latin-bomba',
      name: 'Bomba',
      category: 'latin',
      suggestedBpm: 105,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0,  0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
        'snare':        [0,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,1, 0,0,1,0, 0,0,0,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0,  1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'puerto-rican', 'bomba', 'afro-caribbean'],
    difficulty: 3,
  },

  // ─── 16. Afrobeat (Tony Allen) ────────────────────────────────────
  // Tony Allen's signature Afrobeat groove: open hi-hat off-beats,
  // syncopated kick with the "and" of 1 and 3, snare on 2 and 4
  // with ghost notes. Ride provides the skeleton. 2 measures.
  {
    pattern: {
      id: 'latin-afrobeat',
      name: 'Afrobeat (Tony Allen)',
      category: 'latin',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a  | 1 e + a  2 e + a  3 e + a  4 e + a
        'hihat-closed': [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-open':   [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0,  0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0.3, 0,0,0,0, 1,0,0,0,  0,0,0,0.3, 1,0,0,0, 0,0,0,0, 1,0,0,0.3],
        'kick':         [1,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0,  1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
      },
    },
    tags: ['advanced', '4/4', 'afrobeat', 'nigerian', 'fela-kuti'],
    difficulty: 3,
  },
];
