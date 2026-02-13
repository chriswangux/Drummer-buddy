import type { PatternLibraryEntry } from '../../types';

export const rudimentPatterns: PatternLibraryEntry[] = [
  // ──────────────────────────────────────────────
  // 1. Single Stroke Roll
  // Sticking: RLRL RLRL RLRL RLRL
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-single-stroke',
      name: 'Single Stroke Roll',
      category: 'rudiments',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //       R   L   R   L    R   L   R   L    R   L   R   L    R   L   R   L
        'snare': [1,0.7,1,0.7, 1,0.7,1,0.7, 1,0.7,1,0.7, 1,0.7,1,0.7],
      },
    },
    tags: ['beginner', 'rudiment', 'sticking: RLRL'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 2. Double Stroke Roll
  // Sticking: RRLL RRLL RRLL RRLL
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-double-stroke',
      name: 'Double Stroke Roll',
      category: 'rudiments',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //       R   R   L   L    R   R   L   L    R   R   L   L    R   R   L   L
        'snare': [1,0.6,0.7,0.5, 1,0.6,0.7,0.5, 1,0.6,0.7,0.5, 1,0.6,0.7,0.5],
      },
    },
    tags: ['beginner', 'rudiment', 'sticking: RRLL'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 3. Single Paradiddle
  // Sticking: RLRR LRLL RLRR LRLL
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-paradiddle',
      name: 'Single Paradiddle',
      category: 'rudiments',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //       R   L   R   R    L   R   L   L    R   L   R   R    L   R   L   L
        'snare': [1,0.6,1,0.6, 0.6,1,0.6,1, 1,0.6,1,0.6, 0.6,1,0.6,1],
      },
    },
    tags: ['intermediate', 'rudiment', 'sticking: RLRR LRLL'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 4. Flam Accent (triplet)
  // Sticking: (l)R L R (r)L R L (each beat is a triplet with flam on beat 1)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-flam',
      name: 'Flam Accent',
      category: 'rudiments',
      suggestedBpm: 70,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //       flam L   R    flam R   L    flam L   R    flam R   L
        'snare': [1,0.6,0.6, 1,0.6,0.6, 1,0.6,0.6, 1,0.6,0.6],
      },
    },
    tags: ['intermediate', 'rudiment', 'triplet', 'flam'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 5. Single Drag Tap
  // Sticking: llR L rrL R (grace-grace-TAP tap)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-drag',
      name: 'Single Drag Tap',
      category: 'rudiments',
      suggestedBpm: 75,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //       l   l   R   L    r   r   L   R    l   l   R   L    r   r   L   R
        'snare': [0.4,0.4,1,0.5, 0.4,0.4,0.7,0.5, 0.4,0.4,1,0.5, 0.4,0.4,0.7,0.5],
      },
    },
    tags: ['intermediate', 'rudiment', 'drag'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 6. Five Stroke Roll
  // Sticking: RRLL R (pause) LLRR L (pause)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-five-stroke-roll',
      name: 'Five Stroke Roll',
      category: 'rudiments',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //       R   R   L   L    R   -   -   -    L   L   R   R    L   -   -   -
        'snare': [0.7,0.5,0.7,0.5, 1,0,0,0, 0.7,0.5,0.7,0.5, 1,0,0,0],
      },
    },
    tags: ['intermediate', 'rudiment', 'roll'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 7. Triple Stroke Roll
  // Sticking: RRR LLL RRR LLL ...
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-triple-stroke',
      name: 'Triple Stroke Roll',
      category: 'rudiments',
      suggestedBpm: 70,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //       R   R   R    L   L   L    R   R   R    L   L   L
        'snare': [1,0.5,0.4, 0.7,0.4,0.3, 1,0.5,0.4, 0.7,0.4,0.3],
      },
    },
    tags: ['intermediate', 'rudiment', 'triplet', 'sticking: RRRLLL'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 8. Double Paradiddle
  // Sticking: RLRLRR LRLRLL (6-note grouping)
  // Using 12 subdivisions for clean triplet-feel 6-note groups
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-double-paradiddle',
      name: 'Double Paradiddle',
      category: 'rudiments',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //       R   L   R   L    R   R   L   R    L   R   L   L
        'snare': [1,0.5,0.7,0.5, 1,0.6, 0.7,0.5,0.7,0.5, 0.7,0.5],
      },
    },
    tags: ['intermediate', 'rudiment', 'paradiddle', 'sticking: RLRLRR LRLRLL'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 9. Triple Paradiddle
  // Sticking: RLRLRLRR LRLRLRLL (8-note grouping)
  // 16 subdivisions = 2 groups of 8
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-triple-paradiddle',
      name: 'Triple Paradiddle',
      category: 'rudiments',
      suggestedBpm: 75,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //       R   L   R   L    R   L   R   R    L   R   L   R    L   R   L   L
        'snare': [1,0.5,0.7,0.5, 0.7,0.5,1,0.6, 0.7,0.5,0.7,0.5, 0.7,0.5,0.7,0.5],
      },
    },
    tags: ['advanced', 'rudiment', 'paradiddle', 'sticking: RLRLRLRR LRLRLRLL'],
    difficulty: 3,
  },
  // ──────────────────────────────────────────────
  // 10. Paradiddle-diddle
  // Sticking: RLRRLL RLRRLL ... (6-note grouping)
  // Using 12 subdivisions for clean 6-note groups
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-paradiddle-diddle',
      name: 'Paradiddle-diddle',
      category: 'rudiments',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        //       R   L   R   R    L   L   R   L    R   R   L   L
        'snare': [1,0.5,1,0.6, 0.7,0.5, 1,0.5,1,0.6, 0.7,0.5],
      },
    },
    tags: ['intermediate', 'rudiment', 'paradiddle', 'sticking: RLRRLL'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 11. Seven Stroke Roll
  // Sticking: RRLLRRL (accent on final note)
  // Pattern repeats twice per measure: 7 notes + 1 rest = 8 per half
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-seven-stroke-roll',
      name: 'Seven Stroke Roll',
      category: 'rudiments',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //       R   R   L   L    R   R   L   -    L   L   R   R    L   L   R   -
        'snare': [0.7,0.5,0.7,0.5, 0.7,0.5,1,0, 0.7,0.5,0.7,0.5, 0.7,0.5,1,0],
      },
    },
    tags: ['intermediate', 'rudiment', 'roll', 'sticking: RRLLRRL'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 12. Nine Stroke Roll
  // Sticking: RRLLRRLLR (accent on final note)
  // 9 notes + rest, fits across 2 measures of 16ths for clarity
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-nine-stroke-roll',
      name: 'Nine Stroke Roll',
      category: 'rudiments',
      suggestedBpm: 75,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //       R    R    L    L     R    R    L    L     R    -    -    -     -    -    -    -
        //       L    L    R    R     L    L    R    R     L    -    -    -     -    -    -    -
        'snare': [0.7,0.5,0.7,0.5, 0.7,0.5,0.7,0.5, 1,0,0,0, 0,0,0,0, 0.7,0.5,0.7,0.5, 0.7,0.5,0.7,0.5, 1,0,0,0, 0,0,0,0],
      },
    },
    tags: ['intermediate', 'rudiment', 'roll', 'sticking: RRLLRRLLR'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 13. Flam Tap
  // Sticking: (l)R R (r)L L - flam followed by a tap on same hand
  // Each group is 4 16th notes: flam-tap-flam-tap
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-flam-tap',
      name: 'Flam Tap',
      category: 'rudiments',
      suggestedBpm: 70,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        // (l)R  R  (r)L  L   (l)R  R  (r)L  L   (l)R  R  (r)L  L   (l)R  R  (r)L  L
        //  flam tap flam tap  flam tap flam tap  flam tap flam tap  flam tap flam tap
        'snare': [1,0.4,0.7,0.3, 1,0.4,0.7,0.3, 1,0.4,0.7,0.3, 1,0.4,0.7,0.3],
      },
    },
    tags: ['intermediate', 'rudiment', 'flam', 'sticking: (l)RR (r)LL'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 14. Flamacue
  // Sticking: (l)R L R L (R) - accent pattern with flam on beat 1 and tap to accent
  // 5-note pattern with accent structure
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-flamacue',
      name: 'Flamacue',
      category: 'rudiments',
      suggestedBpm: 70,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Flamacue: flam-accent, tap, tap, tap, accent
      // (l)R  L   R   L    R  (r)L  R   L    (l)R  L   R   L    R   -   -   -
      tracks: {
        'snare': [1,0.4,0.5,0.4, 1,0.7,0.4,0.5, 0.4,1,0.4,0.5, 0.4,1,0,0],
      },
    },
    tags: ['advanced', 'rudiment', 'flam', 'sticking: (l)RLRL R'],
    difficulty: 3,
  },
  // ──────────────────────────────────────────────
  // 15. Swiss Army Triplet (subdivisions=12)
  // Sticking: (l)R-L R (r)L-R L - flam on downbeat, tap, accent
  // Triplet feel with flam on each beat
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-swiss-army-triplet',
      name: 'Swiss Army Triplet',
      category: 'rudiments',
      suggestedBpm: 70,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      // (l)R  -  L    (r)L  -  R    (l)R  -  L    (r)L  -  R
      //  flam tap acc  flam tap acc  flam tap acc  flam tap acc
      tracks: {
        'snare': [1,0,0.4, 0.7,0,0.4, 1,0,0.4, 0.7,0,0.4],
      },
    },
    tags: ['advanced', 'rudiment', 'triplet', 'flam', 'swiss'],
    difficulty: 3,
  },
  // ──────────────────────────────────────────────
  // 16. Ratamacue (subdivisions=12)
  // Sticking: ll R L R (drag + 3 taps with accent on last)
  // Triplet grouping with drag grace notes
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'rud-ratamacue',
      name: 'Ratamacue',
      category: 'rudiments',
      suggestedBpm: 70,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      //  ll  R   L    R  rr  L    R   ll  R    L   R   rr
      // drag tap tap  acc drag tap tap drag tap tap acc drag
      tracks: {
        'snare': [0.3,0.7,0.5, 1,0.3,0.7, 0.5,1,0.3, 0.7,0.5,1],
      },
    },
    tags: ['advanced', 'rudiment', 'triplet', 'drag', 'ratamacue'],
    difficulty: 3,
  },
];
