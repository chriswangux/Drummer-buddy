import type { PatternLibraryEntry } from '../../../types';

export const bfwStylePatterns: PatternLibraryEntry[] = [
  // ═══════════════════════════════════════════════════════════════════════
  //  BLEED FROM WITHIN – Ali Richardson style
  //  "Stoppy-starty, fidgety" drumming that follows guitars closely.
  //  Thunderous, precise — metalcore grooves, melodeath blasts, breakdowns.
  // ═══════════════════════════════════════════════════════════════════════

  // ── 1. BFW Syncopated Breakdown ────────────────────────────────────────
  // Stoppy-starty kick+china with rests then heavy hits. Slow, crushing.
  {
    pattern: {
      id: 'metal-bfw-syncopated-bd',
      name: 'BFW Syncopated Breakdown',
      category: 'metal',
      suggestedBpm: 95,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,1,0],
        'snare':     [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':     [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,1,0],
        'crash':     [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'metalcore', 'breakdown', 'syncopated', 'BFW', 'stoppy-starty'],
    difficulty: 3,
  },

  // ── 2. BFW Melodeath Groove ────────────────────────────────────────────
  // Driving double bass with ride, snare on 2+4. Melodic death metal feel.
  {
    pattern: {
      id: 'metal-bfw-melodeath-groove',
      name: 'BFW Melodeath Groove',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,1, 1,0,1,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'melodic death metal', 'double bass', 'driving', 'BFW'],
    difficulty: 3,
  },

  // ── 3. BFW Stop-Start ─────────────────────────────────────────────────
  // Alternating between full blast and dead stops. M1=blast, M2=rests+hits.
  {
    pattern: {
      id: 'metal-bfw-stop-start',
      name: 'BFW Stop-Start',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':     [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':     [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'crash':     [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'metalcore', 'stop-start', 'blast', 'dynamic', 'BFW'],
    difficulty: 3,
  },

  // ── 4. BFW Blast with Groove ──────────────────────────────────────────
  // M1=blast beat, M2=groove with ghost notes. Dynamic contrast.
  {
    pattern: {
      id: 'metal-bfw-blast-groove',
      name: 'BFW Blast with Groove',
      category: 'metal',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':        [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,0.3,0, 1,0,0,0, 0.3,0,0,0, 1,0,0.3,0],
        'hihat-closed': [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'ride':         [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'blast beat', 'groove', 'ghost notes', 'dynamic', 'BFW'],
    difficulty: 3,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  SONG-SPECIFIC BFW PATTERNS
  // ═══════════════════════════════════════════════════════════════════════

  // ── 5. "The End of All We Know" – Main Groove ─────────────────────────
  // Driving metalcore with syncopated kick, china accents. Tight and punchy.
  {
    pattern: {
      id: 'metal-bfw-end-groove',
      name: '"The End of All We Know" Main Groove',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,1, 0,0,1,0, 0,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0, 1,0,0,1, 0,0,0,0],
        'snare':        [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [1,0,0,0, 1,0,1,0, 0,0,0,0, 0,0,1,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-closed': [0,0,0,0, 0,0,0,0, 1,0,1,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'metalcore', 'syncopated', 'BFW', 'The End of All We Know'],
    difficulty: 3,
  },

  // ── 6. "The End of All We Know" – Breakdown ───────────────────────────
  // Heavy half-time, china on 8th notes. Slow and crushing.
  {
    pattern: {
      id: 'metal-bfw-end-breakdown',
      name: '"The End of All We Know" Breakdown',
      category: 'metal',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        'snare':     [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':     [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'metalcore', 'breakdown', 'half-time', 'heavy', 'BFW', 'The End of All We Know'],
    difficulty: 2,
  },

  // ── 7. "The End of All We Know" – Chorus ──────────────────────────────
  // Open, powerful. Crash on 1, ride 8ths. Driving, anthemic feel.
  {
    pattern: {
      id: 'metal-bfw-end-chorus',
      name: '"The End of All We Know" Chorus',
      category: 'metal',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'metalcore', 'chorus', 'powerful', 'BFW', 'The End of All We Know'],
    difficulty: 2,
  },

  // ── 8. "Levitate" – Verse ─────────────────────────────────────────────
  // Tight groove, hi-hat 16ths, syncopated kick. Fidgety BFW precision.
  {
    pattern: {
      id: 'metal-bfw-levitate-verse',
      name: '"Levitate" Verse',
      category: 'metal',
      suggestedBpm: 125,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,1, 0,0,0,0, 0,0,1,0, 0,1,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,1, 0,0,1,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [0.7,0.3,0.7,0.3, 0.7,0.3,0.7,0.3, 0.7,0.3,0.7,0.3, 0.7,0.3,0.7,0.3, 0.7,0.3,0.7,0.3, 0.7,0.3,0.7,0.3, 0.7,0.3,0.7,0.3, 0.7,0.3,0.7,0.3],
      },
    },
    tags: ['advanced', '4/4', 'metalcore', 'verse', 'syncopated', 'tight', 'BFW', 'Levitate'],
    difficulty: 3,
  },

  // ── 9. "Levitate" – Chorus ────────────────────────────────────────────
  // Big and open, crash on 1, driving kick. Anthemic metalcore energy.
  {
    pattern: {
      id: 'metal-bfw-levitate-chorus',
      name: '"Levitate" Chorus',
      category: 'metal',
      suggestedBpm: 125,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,1,0, 0,0,1,0, 1,0,0,0, 0,0,1,0, 1,0,1,0, 0,0,1,0, 1,0,0,0, 0,0,0,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'ride':      [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'metalcore', 'chorus', 'open', 'driving', 'BFW', 'Levitate'],
    difficulty: 2,
  },

  // ── 10. "Shrine" – Main Groove ────────────────────────────────────────
  // Aggressive, double bass runs with china accents. Fast and relentless.
  {
    pattern: {
      id: 'metal-bfw-shrine',
      name: '"Shrine" Main Groove',
      category: 'metal',
      suggestedBpm: 135,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //              1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':      [1,0,1,1, 0,0,1,0, 1,0,1,1, 0,0,1,0, 1,1,1,0, 1,0,1,0, 1,0,1,1, 1,0,0,0],
        'snare':     [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':     [1,0,0,0, 1,0,1,0, 0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0],
        'crash':     [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'metalcore', 'aggressive', 'double bass', 'BFW', 'Shrine'],
    difficulty: 3,
  },

  // ── 11. "Crown of Misery" – Breakdown ─────────────────────────────────
  // Slow, crushing. China on every hit with kick. Massive half-time.
  {
    pattern: {
      id: 'metal-bfw-crown-bd',
      name: '"Crown of Misery" Breakdown',
      category: 'metal',
      suggestedBpm: 85,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'china':        [1,0,0,0, 0,0,0,0, 1,0,1,0, 0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,1,0, 0,0,0,0],
        'tom-floor':    [0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'breakdown', 'crushing', 'half-time', 'BFW', 'Crown of Misery'],
    difficulty: 2,
  },

  // ── 12. "Into Nothing" – Verse ────────────────────────────────────────
  // Atmospheric, spacious groove. Ride carries the pulse, sparse kick.
  {
    pattern: {
      id: 'metal-bfw-into-nothing',
      name: '"Into Nothing" Verse',
      category: 'metal',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 0.3,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0.3,0, 1,0,0,0],
        'ride':            [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'hihat-open':      [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'atmospheric', 'spacious', 'ghost notes', 'BFW', 'Into Nothing'],
    difficulty: 2,
  },

  // ── 13. "Pathfinder" – Main ───────────────────────────────────────────
  // Fast, intense. M1=blast-influenced 8th note feel, M2=syncopated groove.
  {
    pattern: {
      id: 'metal-bfw-pathfinder',
      name: '"Pathfinder" Main',
      category: 'metal',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,1, 0,0,1,0, 0,0,1,0, 0,0,0,0],
        'snare':        [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'china':        [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'ride':         [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':        [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['advanced', '4/4', 'metalcore', 'fast', 'intense', 'blast', 'BFW', 'Pathfinder'],
    difficulty: 3,
  },

  // ── 14. "Night Crossing" – Groove ─────────────────────────────────────
  // Mid-tempo groove with ghost notes. Relaxed but heavy. Fidgety kick.
  {
    pattern: {
      id: 'metal-bfw-night-crossing',
      name: '"Night Crossing" Groove',
      category: 'metal',
      suggestedBpm: 115,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,1,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        'snare':           [0,0,0.3,0, 1,0,0,0, 0.3,0,0,0, 1,0,0.3,0, 0,0,0.3,0, 1,0,0,0, 0.3,0,0,0, 1,0,0,0],
        'hihat-closed':    [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'hihat-open':      [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'mid-tempo', 'groove', 'ghost notes', 'BFW', 'Night Crossing'],
    difficulty: 2,
  },

  // ── 15. "Fall Away" – Pattern ─────────────────────────────────────────
  // Emotional, building dynamics. M1=quiet/sparse, M2=opens up with crashes.
  {
    pattern: {
      id: 'metal-bfw-fall-away',
      name: '"Fall Away" Pattern',
      category: 'metal',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [0.7,0,0,0, 0,0,0,0, 0,0,0.7,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        'snare':           [0,0,0,0, 0.3,0,0,0, 0,0,0,0, 0.3,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [0.3,0,0.3,0, 0.3,0,0.3,0, 0.3,0,0.3,0, 0.3,0,0.3,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'ride':            [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'crash':           [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        'tom-floor':       [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1],
      },
    },
    tags: ['intermediate', '4/4', 'metalcore', 'emotional', 'dynamic', 'building', 'BFW', 'Fall Away'],
    difficulty: 2,
  },
];
