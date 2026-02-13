import type { PatternLibraryEntry } from '../../../types';

export const dbPractice1Patterns: PatternLibraryEntry[] = [
  // ── 1. DB Practice: 8th Notes ───────────────────────────────────────
  // Beginner foundation: kick on every 8th note, snare on 2 and 4,
  // hi-hat on 8th notes. The starting point for all double bass work.
  {
    pattern: {
      id: 'metal-dbp-8th-notes',
      name: 'DB Practice: 8th Notes',
      category: 'metal',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '8th notes', 'beginner'],
    difficulty: 2,
  },

  // ── 2. DB Practice: Fast 8ths ───────────────────────────────────────
  // Same 8th-note kick pattern as above but at a faster tempo.
  // Tests stamina and evenness at increased speed.
  {
    pattern: {
      id: 'metal-dbp-8th-fast',
      name: 'DB Practice: Fast 8ths',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '8th notes', 'speed'],
    difficulty: 2,
  },

  // ── 3. DB Practice: 16th Notes Slow ─────────────────────────────────
  // The core double bass exercise: kick on every 16th note at a slow
  // tempo. Snare on 2 and 4, hi-hat on quarter notes for reference.
  {
    pattern: {
      id: 'metal-dbp-16th-slow',
      name: 'DB Practice: 16th Notes Slow',
      category: 'metal',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'slow'],
    difficulty: 2,
  },

  // ── 4. DB Practice: 16th Notes Medium ───────────────────────────────
  // Same 16th-note kick pattern at medium tempo. Building towards
  // performance-level double bass speed.
  {
    pattern: {
      id: 'metal-dbp-16th-medium',
      name: 'DB Practice: 16th Notes Medium',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'medium'],
    difficulty: 2,
  },

  // ── 5. DB Practice: 16th Notes Fast ─────────────────────────────────
  // Full speed 16th-note double bass. This is the target tempo for
  // most metal double bass passages.
  {
    pattern: {
      id: 'metal-dbp-16th-fast',
      name: 'DB Practice: 16th Notes Fast',
      category: 'metal',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'fast', 'speed'],
    difficulty: 3,
  },

  // ── 6. DB Practice: Single Pedal 16ths ──────────────────────────────
  // Simulates single-foot 16th-note practice. All 16th kicks present,
  // but downbeats/upbeats accented (1.0) while "e" and "a" are at
  // normal velocity (0.7). Snare on 2+4.
  {
    pattern: {
      id: 'metal-dbp-single-pedal-16th',
      name: 'DB Practice: Single Pedal 16ths',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0.7,1,0.7, 1,0.7,1,0.7, 1,0.7,1,0.7, 1,0.7,1,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'single pedal', 'velocity'],
    difficulty: 2,
  },

  // ── 7. DB Practice: Alternating Accents ─────────────────────────────
  // Kick plays constant 16ths with a shifting accent across each beat:
  // Beat1=accent on "1", Beat2=accent on "e", Beat3=accent on "+",
  // Beat4=accent on "a". M2 reverses: Beat1="a", Beat2="+", etc.
  {
    pattern: {
      id: 'metal-dbp-alternating-accents',
      name: 'DB Practice: Alternating Accents',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: accent shifts forward                              M2: accent shifts backward
        'kick':         [1,0.7,0.7,0.7, 0.7,1,0.7,0.7, 0.7,0.7,1,0.7, 0.7,0.7,0.7,1,  0.7,0.7,0.7,1, 0.7,0.7,1,0.7, 0.7,1,0.7,0.7, 1,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0,  0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'accents', 'control'],
    difficulty: 3,
  },

  // ── 8. DB Practice: Accent Downbeats ────────────────────────────────
  // Kick 16ths with accent (1.0) on every quarter-note beat,
  // normal (0.7) on all other 16th positions. Snare 2+4, HH on beats.
  {
    pattern: {
      id: 'metal-dbp-accent-downbeats',
      name: 'DB Practice: Accent Downbeats',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'accents', 'downbeat'],
    difficulty: 2,
  },

  // ── 9. DB Practice: Accent Upbeats ──────────────────────────────────
  // Kick 16ths with accent (1.0) on every "+" (upbeat/8th-note offbeat),
  // normal (0.7) elsewhere. Develops independence and upbeat awareness.
  {
    pattern: {
      id: 'metal-dbp-accent-upbeats',
      name: 'DB Practice: Accent Upbeats',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        'kick':         [0.7,0.7,1,0.7, 0.7,0.7,1,0.7, 0.7,0.7,1,0.7, 0.7,0.7,1,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'accents', 'upbeat'],
    difficulty: 2,
  },

  // ── 10. DB Practice: Groups of 3 ───────────────────────────────────
  // Kick in groups of 3 over the 16th-note grid across 2 measures.
  // Accent (1.0) on the first note of each 3-note group, normal (0.7)
  // on the other two. Creates a polyrhythmic 3-against-4 feel.
  // 32 steps: groups at 0,3,6,9,12,15,18,21,24,27,30 (last=2 notes)
  {
    pattern: {
      id: 'metal-dbp-groups-of-3',
      name: 'DB Practice: Groups of 3',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // pos:             0 1 2 3  4 5 6 7  8 9 A B  C D E F  G H I J  K L M N  O P Q R  S T U V
        // groups of 3:    [A . .][A . .][A . .][A . .][A . .][A . .][A . .][A . .][A . .][A . .][A .]
        'kick':         [1,0.7,0.7, 1,0.7,0.7, 1,0.7,0.7, 1,0.7,0.7, 1,0.7,0.7, 1,  0.7,0.7, 1,0.7,0.7, 1,0.7,0.7, 1,0.7,0.7, 1,0.7,0.7, 1,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0,  0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'groupings', 'polyrhythm'],
    difficulty: 3,
  },

  // ── 11. DB Practice: Groups of 5 ───────────────────────────────────
  // Kick in groups of 5 over 16th grid across 2 measures (32 steps).
  // Accent on first note of each 5-note group. Creates a 5-over-4 feel.
  // Groups start at: 0, 5, 10, 15, 20, 25, 30
  {
    pattern: {
      id: 'metal-dbp-groups-of-5',
      name: 'DB Practice: Groups of 5',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // Groups of 5:    [A . . . .][A . . . .][A . . . .][A . . . .][A . . . .][A . . . .][A .]
        'kick':         [1,0.7,0.7,0.7,0.7, 1,0.7,0.7,0.7,0.7, 1,0.7,0.7,0.7,0.7, 1,  0.7,0.7,0.7,0.7, 1,0.7,0.7,0.7,0.7, 1,0.7,0.7,0.7,0.7, 1,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0,  0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'groupings', 'polyrhythm', 'groups of 5'],
    difficulty: 3,
  },

  // ── 12. DB Practice: Groups of 6 ───────────────────────────────────
  // Kick in groups of 6 over 16th grid across 2 measures (32 steps).
  // Accent on first note of each 6-note group. Creates a 3-over-2 feel.
  // Groups start at: 0, 6, 12, 18, 24, 30
  {
    pattern: {
      id: 'metal-dbp-groups-of-6',
      name: 'DB Practice: Groups of 6',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // Groups of 6:    [A . . . . .][A . . . . .][A . . . . .][A . . . . .][A . . . . .][A .]
        'kick':         [1,0.7,0.7,0.7,0.7,0.7, 1,0.7,0.7,0.7,0.7,0.7, 1,0.7,0.7,0.7,  0.7,0.7, 1,0.7,0.7,0.7,0.7,0.7, 1,0.7,0.7,0.7,0.7,0.7, 1,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0,  0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'groupings', 'polyrhythm', 'groups of 6'],
    difficulty: 3,
  },

  // ── 13. DB Practice: Endurance Build ────────────────────────────────
  // M1: 8th-note kicks to warm up. M2: 16th-note kicks at full density.
  // Alternating measures build stamina by switching between densities.
  {
    pattern: {
      id: 'metal-dbp-endurance-1min',
      name: 'DB Practice: Endurance Build',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: 8th note kicks                                    M2: 16th note kicks
        'kick':         [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', 'endurance', 'stamina', 'build'],
    difficulty: 2,
  },

  // ── 14. DB Practice: Start-Stop ─────────────────────────────────────
  // 2 beats of 16th kicks, then 2 beats rest. Repeat in M2.
  // Practices clean starts and stops -- critical for tight playing.
  {
    pattern: {
      id: 'metal-dbp-start-stop',
      name: 'DB Practice: Start-Stop',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: kicks beats 1-2, rest 3-4                         M2: kicks beats 1-2, rest 3-4
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0,0,0,0, 0,0,0,0,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0,  0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'start-stop', 'control'],
    difficulty: 2,
  },

  // ── 15. DB Practice: Fill the Gaps ──────────────────────────────────
  // M1: Kick only on beats 1 and 3 (sparse). M2: Fills in gradually --
  // beat 1 = quarter, beat 2 = 8ths, beat 3 = 8ths, beat 4 = 16ths.
  {
    pattern: {
      id: 'metal-dbp-fill-gaps',
      name: 'DB Practice: Fill the Gaps',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: sparse kicks on 1 and 3                           M2: gradual fill-in
        'kick':         [0.7,0,0,0, 0,0,0,0, 0.7,0,0,0, 0,0,0,0,  0.7,0,0,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0.7,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0,  0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', 'progressive', 'gradual', 'control'],
    difficulty: 2,
  },

  // ── 16. DB Practice: 2-Beat Bursts ──────────────────────────────────
  // 2 beats of 16th kicks then 2 beats of groove only (snare/HH).
  // Alternates: M1 = burst+groove, M2 = burst+groove.
  {
    pattern: {
      id: 'metal-dbp-2-beat-burst',
      name: 'DB Practice: 2-Beat Bursts',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // M1: 16th kicks beats 1-2, groove only 3-4             M2: same pattern
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0,0,0,0, 0,0,0,0,  0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0,  0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'bursts', 'endurance'],
    difficulty: 2,
  },

  // ── 17. DB Practice: 3-Beat Bursts ──────────────────────────────────
  // 3 beats of 16th kicks then 1 beat rest. Single measure.
  // Builds longer burst endurance with brief recovery.
  {
    pattern: {
      id: 'metal-dbp-3-beat-burst',
      name: 'DB Practice: 3-Beat Bursts',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a |
        // 3 beats of 16th kicks, beat 4 rest
        'kick':         [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0, 0.7,0,0.7,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'bursts', 'endurance'],
    difficulty: 2,
  },

  // ── 18. DB Practice: Foot Paradiddle ────────────────────────────────
  // Kick plays paradiddle sticking as accented/unaccented 16ths:
  // RLRR LRLL = 1.0 0.7 1.0 1.0  0.7 1.0 0.7 0.7 (R=accent, L=normal)
  // Pattern repeats across 2 measures. Snare on 2+4.
  {
    pattern: {
      id: 'metal-dbp-paradiddle-feet',
      name: 'DB Practice: Foot Paradiddle',
      category: 'metal',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 |1 e + a |2 e + a |3 e + a |4 e + a | 1 e + a |2 e + a |3 e + a |4 e + a |
        // Paradiddle:      R L R R   L R L L   R L R R   L R L L   R L R R   L R L L   R L R R   L R L L
        'kick':         [1,0.7,1,1, 0.7,1,0.7,0.7, 1,0.7,1,1, 0.7,1,0.7,0.7,  1,0.7,1,1, 0.7,1,0.7,0.7, 1,0.7,1,1, 0.7,1,0.7,0.7],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0,  0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed': [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0,  0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0],
      },
    },
    tags: ['double bass', 'practice', 'technique', '4/4', '16th notes', 'paradiddle', 'rudiment', 'coordination'],
    difficulty: 3,
  },
];
