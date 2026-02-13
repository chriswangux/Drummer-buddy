import type { PatternLibraryEntry } from '../../../types';

export const dbPractice2Patterns: PatternLibraryEntry[] = [
  // ── 1. DB + Ride 8ths ─────────────────────────────────────────────────
  // Coordination exercise: steady kick 16ths with ride on 8th notes and
  // snare backbeat on 2 and 4. Develops hand-foot independence.
  {
    pattern: {
      id: 'metal-dbp-with-ride',
      name: 'DB + Ride 8ths',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'ride', '4/4'],
    difficulty: 2,
  },

  // ── 2. DB + HH 8ths ──────────────────────────────────────────────────
  // Same as above but with hi-hat on 8th notes. Slightly different
  // coordination feel since HH requires left hand positioning.
  {
    pattern: {
      id: 'metal-dbp-with-hh',
      name: 'DB + HH 8ths',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'hi-hat', '4/4'],
    difficulty: 2,
  },

  // ── 3. DB + China 8ths ────────────────────────────────────────────────
  // China cymbal on 8th notes over kick 16ths and snare backbeat.
  // The heavier cymbal adds a different physical demand.
  {
    pattern: {
      id: 'metal-dbp-with-china',
      name: 'DB + China 8ths',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'china', '4/4'],
    difficulty: 2,
  },

  // ── 4. DB + HH 16ths ─────────────────────────────────────────────────
  // The ultimate coordination challenge: both kick AND hi-hat play 16th
  // notes simultaneously, with snare on 2 and 4. All four limbs active.
  {
    pattern: {
      id: 'metal-dbp-with-hh-16ths',
      name: 'DB + HH 16ths',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'hi-hat', '16th notes', '4/4'],
    difficulty: 3,
  },

  // ── 5. DB Gallop Slow ─────────────────────────────────────────────────
  // Gallop kick pattern at a manageable tempo: hit on 1, skip e, hit on
  // + and a of each beat (1,0,1,1). Ride on 8ths, snare on 2+4.
  {
    pattern: {
      id: 'metal-dbp-gallop-slow',
      name: 'DB Gallop Slow',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0.7,0.7, 1,0,0.7,0.7, 1,0,0.7,0.7, 1,0,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'gallop', 'slow', '4/4'],
    difficulty: 2,
  },

  // ── 6. DB Gallop Fast ─────────────────────────────────────────────────
  // Same gallop pattern (1,0,1,1 per beat) pushed to a faster tempo.
  // Tests stamina and control under speed.
  {
    pattern: {
      id: 'metal-dbp-gallop-fast',
      name: 'DB Gallop Fast',
      category: 'metal',
      suggestedBpm: 150,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0,0.7,0.7, 1,0,0.7,0.7, 1,0,0.7,0.7, 1,0,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'gallop', 'fast', '4/4'],
    difficulty: 3,
  },

  // ── 7. DB Triplet Slow ────────────────────────────────────────────────
  // Triplet-based double bass at a slow tempo for foundational control.
  // Kick plays all triplet partials, snare on 2+4, ride on quarter notes.
  {
    pattern: {
      id: 'metal-dbp-triplet-slow',
      name: 'DB Triplet Slow',
      category: 'metal',
      suggestedBpm: 80,
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
    tags: ['double bass', 'practice', 'coordination', 'triplet', 'slow', '4/4'],
    difficulty: 2,
  },

  // ── 8. DB Triplet Fast ────────────────────────────────────────────────
  // Same triplet kick pattern at a demanding tempo. Requires solid
  // triplet foot technique and hand-foot independence.
  {
    pattern: {
      id: 'metal-dbp-triplet-fast',
      name: 'DB Triplet Fast',
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
    tags: ['double bass', 'practice', 'coordination', 'triplet', 'fast', '4/4'],
    difficulty: 3,
  },

  // ── 9. DB Under Blast ─────────────────────────────────────────────────
  // The hardest coordination: full kick 16ths underneath a blast beat
  // (snare and HH on every 16th note). All four limbs at maximum output.
  {
    pattern: {
      id: 'metal-dbp-blast-feet-only',
      name: 'DB Under Blast',
      category: 'metal',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7],
        'snare':        [1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7],
        'hihat-closed': [1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'blast beat', 'extreme', '4/4'],
    difficulty: 3,
  },

  // ── 10. DB Half-Time Groove ───────────────────────────────────────────
  // Musical metalcore application: kick 16ths with half-time snare on
  // beat 3 and china on 8th notes. 2 measures for phrasing context.
  {
    pattern: {
      id: 'metal-dbp-half-time-groove',
      name: 'DB Half-Time Groove',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':        [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'half-time', 'metalcore', '4/4'],
    difficulty: 2,
  },

  // ── 11. DB Verse Groove ───────────────────────────────────────────────
  // Musical verse application: kick 16ths with a more musical snare/HH
  // groove on top. Snare on 2+4 with ghost notes, HH 8ths with opens.
  {
    pattern: {
      id: 'metal-dbp-verse-groove',
      name: 'DB Verse Groove',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0.3,0, 0,0,0.3,0, 1,0,0,0, 0,0,0.3,0, 1,0,0,0.3, 0,0,0.3,0, 1,0,0,0],
        'hihat-closed': [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 0,0,0,0],
        'hihat-open':   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'verse', 'groove', 'ghost notes', '4/4'],
    difficulty: 2,
  },

  // ── 12. DB Breakdown ──────────────────────────────────────────────────
  // Slow but intense: kick 16ths under a half-time breakdown with china.
  // Snare on beat 3 of each measure. Low BPM makes it physically
  // demanding in a different way — sustaining consistency.
  {
    pattern: {
      id: 'metal-dbp-breakdown-db',
      name: 'DB Breakdown',
      category: 'metal',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':        [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'breakdown', 'half-time', 'heavy', '4/4'],
    difficulty: 2,
  },

  // ── 13. DB Thrash Groove ──────────────────────────────────────────────
  // Kick 16ths at thrash tempo with a classic thrash snare/HH pattern.
  // Snare on 2+4, HH on 8ths with accent on downbeats. Pure speed.
  {
    pattern: {
      id: 'metal-dbp-thrash-groove',
      name: 'DB Thrash Groove',
      category: 'metal',
      suggestedBpm: 170,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'thrash', 'speed', '4/4'],
    difficulty: 3,
  },

  // ── 14. DB Death Metal ────────────────────────────────────────────────
  // Relentless kick 16ths at extreme tempo over 2 measures. Snare on
  // 2+4, ride on 8ths. Pure endurance test for the feet.
  {
    pattern: {
      id: 'metal-dbp-death-metal',
      name: 'DB Death Metal',
      category: 'metal',
      suggestedBpm: 180,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'death metal', 'endurance', 'extreme', '4/4'],
    difficulty: 3,
  },

  // ── 15. DB One Foot/Two Foot ──────────────────────────────────────────
  // Transition practice: measure 1 has single pedal 8th-note kicks,
  // measure 2 opens up to double pedal 16th notes. Trains the switch.
  {
    pattern: {
      id: 'metal-dbp-one-foot-two-foot',
      name: 'DB One Foot/Two Foot',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: single pedal 8ths                                  M2: double pedal 16ths
        'kick':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'transition', 'single to double', '4/4'],
    difficulty: 2,
  },

  // ── 16. DB Syncopated Groove ──────────────────────────────────────────
  // Not just straight 16ths: kick 16ths with accented syncopations on
  // the offbeats (e and a) to create a heavy, groovy feel. Snare on 2+4
  // with ghost notes for extra musicality.
  {
    pattern: {
      id: 'metal-dbp-syncopated',
      name: 'DB Syncopated Groove',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,1,0.7,1, 0.7,1,0.7,1, 0.7,1,0.7,1, 0.7,1,0.7,1, 1,0.7,1,0.7, 1,0.7,1,0.7, 1,0.7,1,0.7, 1,0.7,1,0.7],
        'snare':        [0,0,0,0, 1,0,0,0.3, 0,0,0.3,0, 1,0,0,0, 0,0,0.3,0, 1,0,0,0, 0,0,0,0.3, 1,0,0,0],
        'hihat-closed': [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'syncopated', 'groove', 'accents', '4/4'],
    difficulty: 2,
  },

  // ── 17. DB in 5/4 ─────────────────────────────────────────────────────
  // Kick 16ths in 5/4 time: 20 sixteenths per measure. Snare on beats
  // 2 and 5. Odd time coordination — the extra beat changes everything.
  {
    pattern: {
      id: 'metal-dbp-prog-5-4',
      name: 'DB in 5/4',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [5, 4],
      subdivisions: 20,
      measures: 1,
      tracks: {
        //              |1 e + a |2 e + a |3 e + a |4 e + a |5 e + a |
        'kick':      [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':      [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'odd time', '5/4', 'progressive'],
    difficulty: 3,
  },

  // ── 18. DB in 7/8 ─────────────────────────────────────────────────────
  // Kick 16ths in 7/8 time: 14 sixteenths per measure over 2 measures.
  // Ride on 8th notes. The asymmetric bar length demands constant focus.
  {
    pattern: {
      id: 'metal-dbp-prog-7-8',
      name: 'DB in 7/8',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [7, 8],
      subdivisions: 14,
      measures: 2,
      tracks: {
        //              |1 + 2 + 3 + 4 + 5 + 6 + 7 +| 1 + 2 + 3 + 4 + 5 + 6 + 7 +|
        'kick':      [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0],
        'ride':      [1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0, 1,0,0.7,0, 1,0,0.7,0, 1,0,0.7,0, 1,0],
      },
    },
    tags: ['double bass', 'practice', 'coordination', 'odd time', '7/8', 'progressive', 'endurance'],
    difficulty: 3,
  },
];
