import type { PatternLibraryEntry } from '../../types';

export const fillPatterns: PatternLibraryEntry[] = [
  // ──────────────────────────────────────────────
  // 1. Basic Snare Fill
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-basic-snare',
      name: 'Basic Snare Fill',
      category: 'fills',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare': [0,0,0,0, 0.7,0,0,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
        'crash': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['beginner', 'fill', 'snare'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 2. Descending Toms
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-descending-toms',
      name: 'Descending Toms',
      category: 'fills',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-high':  [0,0,0,0, 0.7,0,0.7,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':   [0,0,0,0, 0,0,0,0, 0.7,0,0.7,0, 0,0,0,0],
        'tom-floor': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0.7,0,0.7,0],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['beginner', 'fill', 'toms'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 3. 16th Note Snare Run
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-16th-snare-run',
      name: '16th Note Snare Run',
      category: 'fills',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'kick':  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare': [0,0,0,0, 0,0,0,0, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,1],
        'crash': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['beginner', 'fill', 'sixteenths'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 4. Tom Cascade
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-tom-cascade',
      name: 'Tom Cascade',
      category: 'fills',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        'tom-high':  [0.7,0.7,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':   [0,0,0.7,0.7, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-floor': [0,0,0,0, 0.7,0.7,0,0, 0,0,0,0, 0,0,0,0],
        'snare':     [0,0,0,0, 0,0,0.7,0.7, 0,0,0,0, 0,0,0,0],
        'kick':      [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'crash':     [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      },
    },
    tags: ['intermediate', 'fill', 'toms', 'cascade'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 5. Paradiddle Fill
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-paradiddle',
      name: 'Paradiddle Fill',
      category: 'fills',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Sticking: RLRR LRLL across snare and tom-high
      tracks: {
        'snare':    [0,0,0,0, 0,0,0,0, 1,0,1,0, 1,1,0,0],
        'tom-high': [0,0,0,0, 0,0,0,0, 0,0.7,0,0.7, 0,0,0.7,0.7],
        'kick':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'crash':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', 'fill', 'paradiddle'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 6. Triplet Tom Fill (subdivisions=12)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-triplet-toms',
      name: 'Triplet Tom Fill',
      category: 'fills',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      tracks: {
        'tom-high':  [0,0,0, 0,0,0, 1,0,0, 0,0,0],
        'tom-mid':   [0,0,0, 0,0,0, 0,0.7,0, 0,0,0],
        'tom-floor': [0,0,0, 0,0,0, 0,0,0.7, 0,0,0],
        'snare':     [0,0,0, 0,0,0, 0,0,0, 1,0,0],
        'kick':      [1,0,0, 0,0,0, 0,0,0, 0,0,0],
        'crash':     [0,0,0, 0,0,0, 0,0,0, 0,0,1],
      },
    },
    tags: ['intermediate', 'fill', 'triplet', 'toms'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 7. Linear 16th Fill
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-linear-16th',
      name: 'Linear 16th Fill',
      category: 'fills',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Linear = no two limbs hit at the same time
      tracks: {
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'snare':     [0,0,0.7,0, 0,0,0.7,0, 0,0,0,0, 0,0,0.7,0],
        'tom-high':  [0,0.7,0,0, 0,0,0,0, 0,0.7,0,0, 0,0,0,0],
        'tom-mid':   [0,0,0,0.7, 0,0,0,0, 0,0,0.7,0, 0,0,0,0],
        'tom-floor': [0,0,0,0, 0.7,0,0,0.7, 0,0,0,0.7, 0,0,0,0],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', 'fill', 'linear'],
    difficulty: 3,
  },
  // ──────────────────────────────────────────────
  // 8. Bonham Triplets (subdivisions=12)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-bonham-triplets',
      name: 'Bonham Triplets',
      category: 'fills',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      // Classic Bonham: kick-tom-tom triplet pattern
      tracks: {
        'kick':      [1,0,0, 1,0,0, 1,0,0, 1,0,0],
        'tom-high':  [0,0.7,0, 0,0.7,0, 0,0,0, 0,0,0],
        'tom-floor': [0,0,0.7, 0,0,0.7, 0,0,0, 0,0,0],
        'snare':     [0,0,0, 0,0,0, 0,0.7,0, 0,0.7,0],
        'crash':     [0,0,0, 0,0,0, 0,0,0.7, 0,0,1],
      },
    },
    tags: ['advanced', 'fill', 'triplet', 'bonham'],
    difficulty: 3,
  },
  // ──────────────────────────────────────────────
  // 9. 8th Note Build
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-8th-note-build',
      name: '8th Note Build',
      category: 'fills',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Snare on 8th notes, building velocity from soft to loud
      tracks: {
        'kick':  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare': [0,0,0.3,0, 0.4,0,0.5,0, 0.6,0,0.7,0, 0.8,0,0.9,0],
        'crash': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['beginner', 'fill', 'dynamics', 'build'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 10. Snare to Floor Tom
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-snare-to-floor',
      name: 'Snare to Floor Tom',
      category: 'fills',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Alternating snare and floor tom in 8th notes
      tracks: {
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':     [0,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
        'tom-floor': [0,0,0,0, 0,0,0.7,0, 0,0,0.7,0, 0,0,0.7,0],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['beginner', 'fill', 'snare', 'floor tom'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 11. Ascending Toms
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-ascending-toms',
      name: 'Ascending Toms',
      category: 'fills',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Floor tom -> mid tom -> high tom -> snare
      tracks: {
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-floor': [0,0,0,0, 0.7,0,0.7,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':   [0,0,0,0, 0,0,0,0, 0.7,0,0.7,0, 0,0,0,0],
        'tom-high':  [0,0,0,0, 0,0,0,0, 0,0,0,0, 0.7,0,0.7,0],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['beginner', 'fill', 'toms', 'ascending'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 12. Hertz Fill (alternating snare/tom)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-hertz',
      name: 'Hertz Fill',
      category: 'fills',
      suggestedBpm: 105,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Rapid alternation between snare and tom-high in 16ths
      tracks: {
        'kick':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':    [0,0,0,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
        'tom-high': [0,0,0,0, 0,0.7,0,0.7, 0,0.7,0,0.7, 0,0.7,0,0.7],
        'crash':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', 'fill', 'alternating', 'snare', 'tom'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 13. Travis Barker 16th Fill
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-travis-barker',
      name: 'Travis Barker 16th Fill',
      category: 'fills',
      suggestedBpm: 170,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Punk-style blazing 16ths: snare run with kick accents and tom transitions
      tracks: {
        'kick':      [1,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'snare':     [1,1,1,1, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-high':  [0,0,0,0, 0,1,1,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':   [0,0,0,0, 0,0,0,1, 1,0,0,0, 0,0,0,0],
        'tom-floor': [0,0,0,0, 0,0,0,0, 0,1,1,1, 0,0,0,0],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', 'fill', 'punk', 'fast', 'travis barker'],
    difficulty: 3,
  },
  // ──────────────────────────────────────────────
  // 14. Jazz Fill (triplets, ride to toms)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-jazz-triplet',
      name: 'Jazz Fill',
      category: 'fills',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 12,
      measures: 1,
      // Swinging triplet fill: ride bell -> toms -> snare accent
      tracks: {
        'ride':      [0.7,0,0, 0.7,0,0, 0,0,0, 0,0,0],
        'tom-high':  [0,0,0, 0,0,0, 0.7,0,0, 0,0,0],
        'tom-mid':   [0,0,0, 0,0,0, 0,0.6,0, 0,0,0],
        'tom-floor': [0,0,0, 0,0,0, 0,0,0.6, 0,0,0],
        'snare':     [0,0,0, 0,0,0, 0,0,0, 1,0,0],
        'kick':      [0,0,0, 0,0,0, 0,0,0, 0,0.7,0],
        'crash':     [0,0,0, 0,0,0, 0,0,0, 0,0,0.7],
      },
    },
    tags: ['intermediate', 'fill', 'jazz', 'triplet', 'swing'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 15. Funk Fill (syncopated)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-funk-syncopated',
      name: 'Funk Fill',
      category: 'fills',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Syncopated funk fill with ghost notes and offbeat accents
      tracks: {
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':     [0,0,0.3,0, 0,0.7,0,0.3, 1,0,0,0.3, 0,0.7,0,0],
        'tom-high':  [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0.7],
        'tom-floor': [0,0,0,0.7, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', 'fill', 'funk', 'syncopated', 'ghost notes'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 16. Metal Fill (double bass + toms)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-metal-double-bass',
      name: 'Metal Fill',
      category: 'fills',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Double bass 16ths underneath descending tom pattern
      tracks: {
        'kick':      [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
        'tom-high':  [0,0,0.7,0.7, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':   [0,0,0,0, 0.7,0.7,0,0, 0,0,0,0, 0,0,0,0],
        'tom-floor': [0,0,0,0, 0,0,0.7,0.7, 0,0,0,0, 0,0,0,0],
        'china':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', 'fill', 'metal', 'double bass', 'toms'],
    difficulty: 3,
  },
  // ──────────────────────────────────────────────
  // 17. Crossover Fill (hands cross)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-crossover',
      name: 'Crossover Fill',
      category: 'fills',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Hands cross pattern: floor tom (R crosses to L side) -> snare -> hi tom (L crosses to R side)
      tracks: {
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-floor': [0,0,0,0, 0.7,0,0.7,0, 0,0,0,0, 0,0,0,0],
        'snare':     [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'tom-high':  [0,0,0,0, 0,0,0,0, 0,0,0.7,0, 0.7,0,0,0],
        'tom-mid':   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0.7,0.7,0],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', 'fill', 'crossover', 'coordination'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 18. Single Stroke Build
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-single-stroke-build',
      name: 'Single Stroke Build',
      category: 'fills',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Starts with quarter notes, doubles to 8ths, then 16ths - velocity crescendo
      tracks: {
        'kick':  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare': [0,0,0,0, 0.4,0,0,0, 0.5,0,0.6,0, 0.7,0.8,0.9,1],
        'crash': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['beginner', 'fill', 'build', 'dynamics'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 19. Flam Fill
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-flam',
      name: 'Flam Fill',
      category: 'fills',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Flams on quarter notes across the toms (grace note on adjacent 16th before main note)
      tracks: {
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':     [0,0,0,0.3, 1,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-high':  [0,0,0,0, 0,0,0,0.3, 1,0,0,0, 0,0,0,0],
        'tom-mid':   [0,0,0,0, 0,0,0,0, 0,0,0,0.3, 1,0,0,0],
        'tom-floor': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0.3,1],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', 'fill', 'flam', 'toms'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 20. Groove-to-Fill-to-Crash (2 measures)
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-groove-to-fill',
      name: 'Groove-to-Fill-to-Crash',
      category: 'fills',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      // Measure 1: standard rock groove | Measure 2: descending tom fill ending on crash
      tracks: {
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0,  1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0.7,0,0,0, 0,0,0,0, 0.7,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-high':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 0.7,0.7,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':      [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0.7,0.7, 0,0,0,0, 0,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 0.7,0.7,0.7,0.7, 0,0,0,0],
        'crash':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,  0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', 'fill', 'groove', 'crash', 'two-bar'],
    difficulty: 2,
  },
  // ──────────────────────────────────────────────
  // 21. Half-Bar Fill
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-half-bar',
      name: 'Half-Bar Fill',
      category: 'fills',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // First 2 beats: groove continues | Last 2 beats: fill
      tracks: {
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0.7,0,0,0, 0.7,0.7,0,0, 0.7,0,0.7,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':      [0,0,0,0, 0,0,0,0, 0,0,0.7,0.7, 0,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0.7,0,0.7],
        'crash':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['beginner', 'fill', 'half-bar'],
    difficulty: 1,
  },
  // ──────────────────────────────────────────────
  // 22. Quarter Note Fill
  // ──────────────────────────────────────────────
  {
    pattern: {
      id: 'fill-quarter-note',
      name: 'Quarter Note Fill',
      category: 'fills',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      // Simple but powerful: big quarter note hits descending across kit
      tracks: {
        'snare':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-high':  [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-mid':   [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'tom-floor': [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['beginner', 'fill', 'quarter notes', 'powerful'],
    difficulty: 1,
  },
];
