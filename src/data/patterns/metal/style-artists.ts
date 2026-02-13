import type { PatternLibraryEntry } from '../../../types';

export const artistStylePatterns: PatternLibraryEntry[] = [
  // ═══════════════════════════════════════════════════════════════════════
  //  ARTIST-STYLE METAL PATTERNS
  //  Famous metal/metalcore drummers: Meshuggah, Gojira, ABR, Trivium,
  //  Converge.
  // ═══════════════════════════════════════════════════════════════════════

  // ── 1. Meshuggah Polyrhythmic Pattern 1 ────────────────────────────────
  // 4/4 china on 8th notes. Kick plays a 23-note cycle that repeats over
  // the 32 sixteenth-note grid, creating a polyrhythmic offset against
  // steady 4/4. Snare anchors on 2+4. Tomas Haake signature.
  // 23-note kick cycle: 1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0
  // repeating across 32 steps (wraps at step 23, continues from beginning)
  {
    pattern: {
      id: 'metal-style-meshuggah-1',
      name: 'Meshuggah Poly Pattern 1',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,0,1, 0,1,0,0, 1,0,0,1, 0,1,0,0, 1,0,0,1, 0,1,0,1, 0,0,1,0, 1,0,0,1],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':     [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'polyrhythm', 'djent', 'Meshuggah', 'Tomas Haake'],
    difficulty: 3,
  },

  // ── 2. Meshuggah Herta Pattern ─────────────────────────────────────────
  // Kick plays "Herta" rudiment: 2 fast notes + 1 slow note, repeating.
  // In 16th-note grid: fast-fast-slow = LLR at 16th-8th = positions 0,1,_,3
  // pattern repeating every 4 sixteenths (triplet-ish against 4/4).
  // China holds steady 8th notes. Snare on 2+4.
  {
    pattern: {
      id: 'metal-style-meshuggah-2',
      name: 'Meshuggah Herta Pattern',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        // Herta: 2 16ths + gap + 1 16th, repeating every 4 steps: [1,1,0,1]
        'kick':      [1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,0,1],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':     [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'Herta', 'djent', 'Meshuggah', 'Tomas Haake', 'rudiment'],
    difficulty: 3,
  },

  // ── 3. Gojira Power Groove ─────────────────────────────────────────────
  // Heavy unison kick+china on downbeats, tom accents, snare on 2+4.
  // Mario Duplantier's primal, tribal approach. Massive and deliberate.
  {
    pattern: {
      id: 'metal-style-gojira-1',
      name: 'Gojira Power Groove',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0, 1,0,0,1, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0, 1,0,0,1, 0,0,0,0],
        'tom-mid':      [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', '4/4', 'groove', 'heavy', 'Gojira', 'Mario Duplantier', 'tribal'],
    difficulty: 2,
  },

  // ── 4. Gojira Double Bass Drive ────────────────────────────────────────
  // Extended double bass 16ths, ride 8ths, snare 2+4. Relentless forward
  // momentum. Mario Duplantier's stamina-driven approach.
  {
    pattern: {
      id: 'metal-style-gojira-2',
      name: 'Gojira Double Bass Drive',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,1,0, 1,0,1,0, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,0,1,0, 1,0,1,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'double bass', 'driving', 'Gojira', 'Mario Duplantier', 'endurance'],
    difficulty: 3,
  },

  // ── 5. ABR Odd-Time Blast (7/8) ────────────────────────────────────────
  // Matt Greiner's blast beat in 7/8. 14 subdivisions per measure (7 8ths
  // x 2 16ths each). Relentless snare+kick on 8ths with HH 16ths.
  // 2 measures = 28 steps.
  {
    pattern: {
      id: 'metal-style-abr-1',
      name: 'ABR Odd-Time Blast',
      category: 'metal',
      suggestedBpm: 160,
      timeSignature: [7, 8],
      subdivisions: 14,
      measures: 2,
      tracks: {
        //                    |--- 1 ---|--- 2 ---|--- 3 ---|--- 4 ---|--- 5 ---|--- 6 ---|--- 7 ---| (x2)
        'kick':            [1,0, 1,0, 1,0, 1,0, 1,0, 1,0, 1,0, 1,0, 1,0, 1,0, 1,0, 1,0, 1,0, 1,0],
        'snare':           [0,0, 1,0, 0,0, 1,0, 0,0, 1,0, 0,0, 0,0, 1,0, 0,0, 1,0, 0,0, 1,0, 1,0],
        'hihat-closed':    [1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1],
        'crash':           [1,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 1,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0],
      },
    },
    tags: ['advanced', '7/8', 'blast beat', 'odd time', 'ABR', 'Matt Greiner', 'August Burns Red'],
    difficulty: 3,
  },

  // ── 6. ABR Technical Groove ────────────────────────────────────────────
  // Matt Greiner's intricate groove work. Odd accents, ghost notes on snare,
  // complex syncopated kick pattern. Technical metalcore precision.
  {
    pattern: {
      id: 'metal-style-abr-2',
      name: 'ABR Technical Groove',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,1, 0,0,1,0, 0,1,0,0, 0,0,1,0, 1,0,0,0, 0,1,0,0, 1,0,0,1, 0,0,0,0],
        'snare':           [0,0,0.3,0, 1,0,0,0.3, 0,0,0.3,0, 1,0,0,0, 0.3,0,0,0.3, 1,0,0,0, 0,0,0.3,0, 1,0,0,0.3],
        'hihat-closed':    [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'china':           [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
        'tom-high':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'technical', 'ghost notes', 'syncopated', 'ABR', 'Matt Greiner', 'August Burns Red'],
    difficulty: 3,
  },

  // ── 7. Trivium Gallop ──────────────────────────────────────────────────
  // Iron Maiden-style gallop kick (8th + two 16ths repeating) with 16th
  // hi-hat and snare on 2+4. Alex Bent's precision gallop. 1 measure.
  // Gallop rhythm per beat: [1,0,1,1] = dotted-8th feel
  {
    pattern: {
      id: 'metal-style-trivium-1',
      name: 'Trivium Gallop',
      category: 'metal',
      suggestedBpm: 155,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,1,1, 1,0,1,1, 1,0,1,1, 1,0,1,1],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7, 1,0.7,0.7,0.7],
      },
    },
    tags: ['advanced', '4/4', 'gallop', 'thrash', 'Trivium', 'Alex Bent', 'NWOBHM'],
    difficulty: 3,
  },

  // ── 8. Trivium Power Thrash ────────────────────────────────────────────
  // Thrash grooves with double bass fills. M1=driving thrash groove,
  // M2=double bass fill leading into next section. Alex Bent's power.
  {
    pattern: {
      id: 'metal-style-trivium-2',
      name: 'Trivium Power Thrash',
      category: 'metal',
      suggestedBpm: 170,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,1,0, 0,0,1,0, 1,0,1,0, 0,0,1,0, 1,0,1,0, 1,0,1,0, 1,1,1,1, 1,1,1,1],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 0,0,0,0, 0,0,0,0],
        'crash':           [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'tom-high':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        'tom-floor':       [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', '4/4', 'thrash', 'double bass', 'fill', 'Trivium', 'Alex Bent', 'power'],
    difficulty: 3,
  },

  // ── 9. Converge Jazz D-Beat ────────────────────────────────────────────
  // Ben Koller's d-beat with jazz-influenced variations. M1=classic d-beat,
  // M2=jazz variation with ride + ghost notes + unexpected fills.
  {
    pattern: {
      id: 'metal-style-converge-1',
      name: 'Converge Jazz D-Beat',
      category: 'metal',
      suggestedBpm: 175,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        'snare':           [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,0.3,0, 1,0,0,0.3, 0,0,1,0, 0.3,0,0,0],
        'crash':           [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'ride':            [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'tom-high':        [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', '4/4', 'd-beat', 'jazz', 'chaotic', 'Converge', 'Ben Koller', 'hardcore'],
    difficulty: 3,
  },

  // ── 10. Converge Chaotic Blast ─────────────────────────────────────────
  // Chaotic blast with unexpected accents and breaks. Ben Koller's
  // controlled chaos: full blast M1, then M2 breaks apart with accented
  // hits, rests, and explosive bursts.
  {
    pattern: {
      id: 'metal-style-converge-2',
      name: 'Converge Chaotic Blast',
      category: 'metal',
      suggestedBpm: 200,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,1,1,1, 1,0,0,0, 0,0,0,0, 1,1,0,1, 1,0,0,0],
        'snare':           [0,0,1,0, 0,0,1,0, 0,0,1,0, 1,0,1,0, 0,0,0,0, 1,0,0,0, 1,0,0,1, 0,0,1,0],
        'hihat-closed':    [1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'crash':           [1,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':           [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'tom-floor':       [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'chaotic', 'breaks', 'Converge', 'Ben Koller', 'hardcore'],
    difficulty: 3,
  },
];
