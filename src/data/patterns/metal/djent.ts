import type { PatternLibraryEntry } from '../../../types';

export const metalDjentPatterns: PatternLibraryEntry[] = [
  // ── 1. Poly-5 over 4/4 ────────────────────────────────────────────────
  // 5-note kick grouping (positions 0,3,6,9,12 then wraps) repeating over
  // 2 measures of 4/4. China on 8th notes throughout. Snare on beats 2+4.
  {
    pattern: {
      id: 'metal-djent-poly5',
      name: 'Poly-5 over 4/4',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        // 5-note kick grouping every 3 sixteenths: 0,3,6,9,12,15,18,21,24,27,30
        'kick':         [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'djent', 'polyrhythm', 'syncopated'],
    difficulty: 3,
  },

  // ── 2. Poly-7 over 4/4 ────────────────────────────────────────────────
  // 7-note kick grouping repeating over 2 measures (32 sixteenths).
  // Kick every ~4.57 sixteenths approximated. China on 8ths.
  {
    pattern: {
      id: 'metal-djent-poly7',
      name: 'Poly-7 over 4/4',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        // 7 over 32: kick at 0,4,9,13,18,23,27 (approx even spacing for 7-over-32)
        'kick':         [1,0,0,0, 1,0,0,0, 0,1,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1, 0,0,0,1, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'djent', 'polyrhythm', 'complex'],
    difficulty: 3,
  },

  // ── 3. Periphery Style Groove ─────────────────────────────────────────
  // Syncopated kick locks with china, ghost snare notes (0.3) fill the gaps,
  // hi-hat covers remaining spaces. Tight, modern djent pocket.
  {
    pattern: {
      id: 'metal-djent-periphery',
      name: 'Periphery Style Groove',
      category: 'metal',
      suggestedBpm: 115,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,1, 0,0,1,0, 0,0,0,0, 0,1,0,0, 1,0,0,0, 0,1,0,0, 1,0,0,1, 0,0,0,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0.3,0,0.3,0, 1,0,0,0, 0,0.3,0,0, 1,0,0.3,0, 0,0,0,0, 1,0,0.3,0],
        'china':           [1,0,0,1, 0,0,1,0, 0,0,0,0, 0,1,0,0, 1,0,0,0, 0,1,0,0, 1,0,0,1, 0,0,0,0],
        'hihat-closed':    [0,0,1,0, 0,1,0,1, 0,0,0,1, 0,0,1,0, 0,0,1,1, 0,0,0,1, 0,1,0,0, 0,1,0,0],
      },
    },
    tags: ['advanced', '4/4', 'djent', 'periphery', 'ghost notes', 'syncopated'],
    difficulty: 3,
  },

  // ── 4. AAL Technical ──────────────────────────────────────────────────
  // Complex linear pattern: no two voices hit simultaneously.
  // Fast transitions between kick, snare, china, and hi-hat.
  {
    pattern: {
      id: 'metal-djent-aal',
      name: 'AAL Technical',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,1,0,0, 0,0,0,1, 0,0,1,0, 0,0,0,0],
        'snare':           [0,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,1,0,0],
        'china':           [0,0,0,0, 1,0,0,0, 0,0,0,1, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,1, 0,0,0,0],
        'hihat-closed':    [0,0,1,0, 0,1,0,1, 0,1,0,0, 0,1,0,0, 1,0,0,1, 0,1,0,0, 1,0,0,0, 1,0,1,1],
      },
    },
    tags: ['advanced', '4/4', 'djent', 'linear', 'technical', 'animals as leaders'],
    difficulty: 3,
  },

  // ── 5. China Syncopation ──────────────────────────────────────────────
  // China on offbeats only (the "e" and "a" of each beat), kick matches
  // the china hits. Snare on beats 2 and 4.
  {
    pattern: {
      id: 'metal-djent-china-sync',
      name: 'China Syncopation',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [0,1,0,1, 0,0,0,1, 0,1,0,0, 0,0,0,1],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':     [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1],
      },
    },
    tags: ['advanced', '4/4', 'djent', 'china', 'syncopated', 'offbeat'],
    difficulty: 3,
  },

  // ── 6. Kick Ostinato ──────────────────────────────────────────────────
  // Repeating 6-note kick pattern (on every 6th sixteenth) over 4/4,
  // creating a phase shift effect across 2 measures. Ride on 8ths, snare on 2+4.
  {
    pattern: {
      id: 'metal-djent-kick-ostinato',
      name: 'Kick Ostinato',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        // 6-note pattern: kicks at 0,5,10,15,20,25,30 (spacing of ~5 sixteenths)
        'kick':         [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1, 0,0,0,0, 1,0,0,0, 0,1,0,0, 0,0,1,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'djent', 'ostinato', 'polyrhythm', 'phase'],
    difficulty: 3,
  },

  // ── 7. Djent Breakdown ────────────────────────────────────────────────
  // Heavy, syncopated, half-time feel with china. Slow tempo (90 BPM),
  // punchy kick syncopations, snare on beat 3 for that half-time crush.
  {
    pattern: {
      id: 'metal-djent-breakdown',
      name: 'Djent Breakdown',
      category: 'metal',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0, 1,0,0,1, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':        [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0, 1,0,0,1, 0,0,0,0, 1,0,1,0, 0,0,0,0],
        'crash':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'djent', 'breakdown', 'half-time', 'heavy'],
    difficulty: 2,
  },

  // ── 8. Djent Blast ────────────────────────────────────────────────────
  // Blast beat foundation with syncopated kick accents layered underneath.
  // Snare and hi-hat blast on every 16th, kick adds syncopated accents.
  {
    pattern: {
      id: 'metal-djent-blast',
      name: 'Djent Blast',
      category: 'metal',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,1,1, 0,1,0,0, 1,0,0,1, 0,1,1,0],
        'snare':        [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
        'hihat-closed': [0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7, 0.7,0.7,0.7,0.7],
      },
    },
    tags: ['advanced', '4/4', 'djent', 'blast beat', 'syncopated', 'extreme'],
    difficulty: 3,
  },

  // ── 9. Djent Pocket Groove ────────────────────────────────────────────
  // Tight pocket with ghost snares, china on downbeats of each beat.
  // Kick locks with the guitar chug pattern. Controlled and groovy.
  {
    pattern: {
      id: 'metal-djent-groove',
      name: 'Djent Pocket Groove',
      category: 'metal',
      suggestedBpm: 100,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,1, 0,0,0,0, 1,0,0,0, 0,1,0,0],
        'snare':           [0,0,0.3,0, 1,0,0.3,0, 0,0,0.3,0, 1,0,0,0.3],
        'china':           [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'hihat-closed':    [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'djent', 'groove', 'ghost notes', 'pocket'],
    difficulty: 2,
  },

  // ── 10. Staccato Djent ────────────────────────────────────────────────
  // Lots of rests, punchy isolated hits. China accents on specific
  // syncopations, large gaps of silence for that staccato djent feel.
  {
    pattern: {
      id: 'metal-djent-staccato',
      name: 'Staccato Djent',
      category: 'metal',
      suggestedBpm: 115,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':        [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,1],
        'hihat-closed': [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'djent', 'staccato', 'sparse', 'punchy'],
    difficulty: 2,
  },
];
