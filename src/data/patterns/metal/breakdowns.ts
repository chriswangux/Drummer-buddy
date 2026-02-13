import type { PatternLibraryEntry } from '../../../types';

export const metalBreakdownPatterns: PatternLibraryEntry[] = [
  // ── 1. Half-Time China ─────────────────────────────────────────────────
  // Classic metalcore half-time breakdown. Snare on beat 3, china driving
  // 8th notes, sparse kick on beat 1 and the "and" of beat 4.
  {
    pattern: {
      id: 'metal-bd-half-china',
      name: 'Half-Time China',
      category: 'metal',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        'snare':       [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':       [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'breakdown', 'half-time', 'china'],
    difficulty: 2,
  },

  // ── 2. Quarter-Time ────────────────────────────────────────────────────
  // Ultra-slow 2-measure breakdown. Snare only hits on beat 3 of measure 2
  // for maximum heaviness. Kick on beat 1 of each measure, china on
  // quarter notes to keep the pulse.
  {
    pattern: {
      id: 'metal-bd-quarter-time',
      name: 'Quarter-Time',
      category: 'metal',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':       [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':       [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'breakdown', 'quarter-time', 'slow', 'heavy'],
    difficulty: 2,
  },

  // ── 3. Syncopated Breakdown ────────────────────────────────────────────
  // Kick syncopates on offbeats to lock with guitar chugs. China drives
  // 8th notes. Snare on beat 3 for half-time feel.
  {
    pattern: {
      id: 'metal-bd-syncopated',
      name: 'Syncopated Breakdown',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':       [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':       [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'breakdown', 'syncopated', 'china'],
    difficulty: 2,
  },

  // ── 4. Staccato Breakdown ──────────────────────────────────────────────
  // Short punchy hits with deliberate rests. Kick+china unison accents
  // on beat 1 and the "and" of 2, then silence, snare on beat 3, rest
  // until the "and" of 4. Creates tension through space.
  {
    pattern: {
      id: 'metal-bd-staccato',
      name: 'Staccato Breakdown',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':       [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':       [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'breakdown', 'staccato'],
    difficulty: 2,
  },

  // ── 5. Open Hat Breakdown ──────────────────────────────────────────────
  // Open hi-hat drives 8th notes instead of china for a different texture.
  // Snare on beat 3, kick on 1 and the "and" of 3 for a loping heaviness.
  {
    pattern: {
      id: 'metal-bd-open-hat',
      name: 'Open Hat Breakdown',
      category: 'metal',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':          [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-open':     [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'breakdown', 'open hi-hat', 'half-time'],
    difficulty: 2,
  },

  // ── 6. China 8th Note ─────────────────────────────────────────────────
  // The quintessential metalcore breakdown: china on every 8th note,
  // half-time snare on beat 3, kick on 1 and "and" of 4. Simple but
  // devastatingly heavy.
  {
    pattern: {
      id: 'metal-bd-china-8th',
      name: 'China 8th Note',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        'snare':       [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':       [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':       [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['beginner', '4/4', 'metalcore', 'breakdown', 'china', 'classic'],
    difficulty: 1,
  },

  // ── 7. Beatdown ────────────────────────────────────────────────────────
  // Ultra-slow deathcore beatdown. Kick and china hit together in unison
  // on beats 1 and 3 of each measure. Snare slams on beat 3 of M2.
  // Maximum space between hits for crushing weight.
  {
    pattern: {
      id: 'metal-bd-beatdown',
      name: 'Beatdown',
      category: 'metal',
      suggestedBpm: 70,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':       [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':       [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      },
    },
    tags: ['beginner', '4/4', 'deathcore', 'beatdown', 'breakdown', 'slow', 'heavy'],
    difficulty: 1,
  },

  // ── 8. Two-Step ────────────────────────────────────────────────────────
  // Punk-influenced two-step with china. Kick on every beat (quarters),
  // snare on 2 and 4, china on 8ths. Creates a driving, moshable groove.
  {
    pattern: {
      id: 'metal-bd-two-step',
      name: 'Two-Step',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':       [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':       [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'metalcore', 'two-step', 'punk', 'china'],
    difficulty: 1,
  },

  // ── 9. Chug Pattern ───────────────────────────────────────────────────
  // Kick mirrors a syncopated guitar chug pattern over 2 measures.
  // China accents on downbeats, snare on beat 3 of each measure.
  // The kick pattern creates rhythmic interest by chugging on offbeats.
  {
    pattern: {
      id: 'metal-bd-chug',
      name: 'Chug Pattern',
      category: 'metal',
      suggestedBpm: 105,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,1, 0,0,1,0, 0,0,0,0, 1,0,0,0, 1,0,1,0, 0,0,0,1, 0,0,0,0, 0,0,1,0],
        'snare':       [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':       [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'breakdown', 'chug', 'syncopated'],
    difficulty: 2,
  },

  // ── 10. Slam Breakdown ────────────────────────────────────────────────
  // Deathcore slam style. Unison hits (kick+snare+china) on beats 1 and 3,
  // complete silence between. The rests are the point -- maximum impact.
  {
    pattern: {
      id: 'metal-bd-slam',
      name: 'Slam Breakdown',
      category: 'metal',
      suggestedBpm: 85,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':       [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':       [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
      },
    },
    tags: ['beginner', '4/4', 'deathcore', 'slam', 'breakdown', 'unison'],
    difficulty: 1,
  },

  // ── 11. Bounce Breakdown ──────────────────────────────────────────────
  // Off-beat kick pattern creates a bouncy mosh-pit feel. Kick hits on
  // the "and" of 1, beat 2, and "and" of 3. Snare on 3, china 8ths.
  // The syncopated kick gives it a swinging, pit-ready groove.
  {
    pattern: {
      id: 'metal-bd-bounce',
      name: 'Bounce Breakdown',
      category: 'metal',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                1 e + a  2 e + a  3 e + a  4 e + a
        'kick':        [0,0,1,0, 1,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':       [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':       [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'breakdown', 'bounce', 'mosh'],
    difficulty: 2,
  },

  // ── 12. Wall of Death Buildup ─────────────────────────────────────────
  // 2-measure pattern: M1 is sparse and building with just kick on 1,
  // snare on 3, and quarter-note china. M2 explodes into full intensity
  // breakdown with double-time china 8ths, heavy kick, and crash on 1.
  {
    pattern: {
      id: 'metal-bd-buildup',
      name: 'Wall of Death Buildup',
      category: 'metal',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                   1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':           [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':          [0,0,0,0, 0,0,0,0, 0.7,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':          [0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 0.7,0,0,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':          [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'breakdown', 'buildup', 'dynamic'],
    difficulty: 2,
  },
];
