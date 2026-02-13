import type { PatternLibraryEntry } from '../../types';

export const worldPatterns: PatternLibraryEntry[] = [
  // ── 1. Afrobeat (Tony Allen style) ─────────────────────────────────
  // 2-measure pattern with the signature "four on the floor" kick,
  // hi-hat playing steady 8ths with open hat on off-beats, and snare
  // ghost notes creating that hypnotic Tony Allen pocket.
  {
    pattern: {
      id: 'world-afrobeat',
      name: 'Afrobeat (Tony Allen)',
      category: 'world',
      suggestedBpm: 110,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':           [0,0,0,0, 0,0,0.3,0, 0,0,0,0, 1,0,0,0.3, 0,0,0.3,0, 0,0,0,0, 1,0,0,0, 0,0,0.3,0],
        'hihat-closed':    [1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,0,0],
        'hihat-open':      [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'afrobeat', 'african', 'ghost notes'],
    difficulty: 2,
  },

  // ── 2. Highlife ─────────────────────────────────────────────────────
  // Bright, upbeat West African feel. Cross-stick on beats 2 and 4,
  // bell-like ride pattern plays a 3+3+2 grouping over 4/4.
  {
    pattern: {
      id: 'world-highlife',
      name: 'Highlife',
      category: 'world',
      suggestedBpm: 115,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':         [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0],
        'snare':        [0,0,0,0, 0.5,0,0,0, 0,0,0,0, 0.5,0,0,0],
        'ride':         [1,0,0,1, 0,0,1,0, 0,1,0,0, 1,0,0,1],
        'hihat-closed': [0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'highlife', 'african', 'west african'],
    difficulty: 2,
  },

  // ── 3. Reggae One-Drop ──────────────────────────────────────────────
  // The definitive reggae feel. Kick and snare land together on beat 3
  // (the "one drop"). Hi-hat plays cross-stick-style off-beats.
  {
    pattern: {
      id: 'world-reggae-one-drop',
      name: 'Reggae One-Drop',
      category: 'world',
      suggestedBpm: 80,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':           [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-closed':    [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'reggae', 'one-drop', 'jamaican'],
    difficulty: 1,
  },

  // ── 4. Reggae Steppers ──────────────────────────────────────────────
  // Four-on-the-floor kick with snare on 2 and 4. The off-beat hi-hat
  // keeps the reggae skank alive while the kick drives forward.
  {
    pattern: {
      id: 'world-reggae-steppers',
      name: 'Reggae Steppers',
      category: 'world',
      suggestedBpm: 78,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'reggae', 'steppers', 'jamaican'],
    difficulty: 1,
  },

  // ── 5. Ska (offbeat) ───────────────────────────────────────────────
  // Fast, driving ska. Hi-hat pushes constant off-beat 8ths, snare on
  // 2 and 4, kick accents the downbeats with a pickup into beat 3.
  {
    pattern: {
      id: 'world-ska',
      name: 'Ska (Offbeat)',
      category: 'world',
      suggestedBpm: 160,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'ska', 'offbeat', 'jamaican'],
    difficulty: 1,
  },

  // ── 6. Dancehall ────────────────────────────────────────────────────
  // Modern dancehall riddim with a syncopated kick pattern. Snare
  // hits on the "a" of 2 and beat 4 create a lurching, bouncy feel.
  {
    pattern: {
      id: 'world-dancehall',
      name: 'Dancehall',
      category: 'world',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,1, 0,0,1,0, 0,0,0,0],
        'snare':           [0,0,0,0, 0,0,0,1, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'dancehall', 'jamaican', 'syncopated'],
    difficulty: 2,
  },

  // ── 7. Hip-Hop Boom Bap ────────────────────────────────────────────
  // Classic 90s East Coast boom bap. Heavy kick on 1, kick on the
  // "and" of 3, snare on 2 and 4. Laid-back hi-hat with an open hat
  // right before the snare for that swinging head-nod feel.
  {
    pattern: {
      id: 'world-boom-bap',
      name: 'Hip-Hop Boom Bap',
      category: 'world',
      suggestedBpm: 90,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,1, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,0],
        'hihat-open':      [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
      },
    },
    tags: ['intermediate', '4/4', 'hip-hop', 'boom bap', '90s'],
    difficulty: 2,
  },

  // ── 8. Trap (hi-hat rolls) ─────────────────────────────────────────
  // Modern trap: booming 808 kick, snare on 3, and rapid hi-hat rolls
  // with velocity variation (loud/soft) to simulate open/closed rolls.
  {
    pattern: {
      id: 'world-trap',
      name: 'Trap (Hi-Hat Rolls)',
      category: 'world',
      suggestedBpm: 140,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0],
        'snare':           [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'hihat-closed':    [1,0.5,1,0.5, 1,0.5,1,1, 1,1,1,1, 0.5,0.5,0.5,0.5, 1,0.5,0.5,1, 0.5,0.5,1,1, 1,1,1,1, 0.5,0.5,0.5,0.5],
      },
    },
    tags: ['intermediate', '4/4', 'trap', 'hi-hat rolls', 'modern', '808'],
    difficulty: 2,
  },

  // ── 9. Lo-Fi Hip-Hop ───────────────────────────────────────────────
  // Relaxed, dusty feel. Kick has a lazy swing, ghost snare creates
  // texture, and the hi-hat sits back on simple 8th notes.
  {
    pattern: {
      id: 'world-lofi',
      name: 'Lo-Fi Hip-Hop',
      category: 'world',
      suggestedBpm: 75,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 0,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':           [0,0,0,0, 1,0,0,0.3, 0,0,0,0, 1,0,0,0, 0,0,0.3,0, 1,0,0,0, 0,0,0,0.3, 1,0,0,0],
        'hihat-closed':    [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'lo-fi', 'hip-hop', 'chill', 'ghost notes'],
    difficulty: 1,
  },

  // ── 10. House (4 on the floor) ─────────────────────────────────────
  // Classic house beat. Kick on every quarter note, clap/snare on 2
  // and 4, open hi-hat on every off-beat 8th. Simple but infectious.
  {
    pattern: {
      id: 'world-house',
      name: 'House (4 on the Floor)',
      category: 'world',
      suggestedBpm: 124,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'hihat-open':      [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
      },
    },
    tags: ['beginner', '4/4', 'house', 'electronic', 'dance', '4 on floor'],
    difficulty: 1,
  },

  // ── 11. Techno ──────────────────────────────────────────────────────
  // Driving, hypnotic techno. Four-on-the-floor kick, sparse snare/clap
  // on 2 and 4, relentless closed hi-hat 16ths with an open hat
  // accent on the "and" of beat 2 for lift.
  {
    pattern: {
      id: 'world-techno',
      name: 'Techno',
      category: 'world',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [1,1,1,1, 1,1,0,1, 1,1,1,1, 1,1,1,1],
        'hihat-open':      [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,0,0],
      },
    },
    tags: ['beginner', '4/4', 'techno', 'electronic', 'dance', 'driving'],
    difficulty: 1,
  },

  // ── 12. Drum and Bass ──────────────────────────────────────────────
  // Fast breakbeat-derived pattern. Kick on 1 and the "a" of 2,
  // snare on 2 and the "a" of 3 (the classic "amen break" skeleton).
  // Hi-hat rides constant 8ths at high tempo.
  {
    pattern: {
      id: 'world-drum-and-bass',
      name: 'Drum and Bass',
      category: 'world',
      suggestedBpm: 174,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 0,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,1,0],
        'hihat-closed':    [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
      },
    },
    tags: ['advanced', '4/4', 'drum and bass', 'electronic', 'fast', 'breakbeat'],
    difficulty: 3,
  },

  // ── 13. UK Garage (2-step) ─────────────────────────────────────────
  // Shuffled, skippy feel. The kick deliberately avoids landing on every
  // quarter note, and the snare sits on beat 2 only. The "missing" kicks
  // create the signature 2-step bounce.
  {
    pattern: {
      id: 'world-uk-garage',
      name: 'UK Garage (2-Step)',
      category: 'world',
      suggestedBpm: 132,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 0,0,0,1, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,1],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 0,0,0,0],
        'hihat-closed':    [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'hihat-open':      [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1, 0,0,0,0, 0,0,0,0, 0,0,0,0, 1,0,0,0],
      },
    },
    tags: ['intermediate', '4/4', 'uk garage', '2-step', 'electronic', 'skippy'],
    difficulty: 2,
  },

  // ── 14. Breakbeat ──────────────────────────────────────────────────
  // Big beat / breakbeat style inspired by Fatboy Slim and The Chemical
  // Brothers. Syncopated kick with a shuffled snare pattern and driving
  // hi-hats. 2 measures for a full phrase.
  {
    pattern: {
      id: 'world-breakbeat',
      name: 'Breakbeat',
      category: 'world',
      suggestedBpm: 125,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        'snare':           [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,1, 1,0,0,0],
        'hihat-closed':    [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['intermediate', '4/4', 'breakbeat', 'electronic', 'big beat'],
    difficulty: 2,
  },

  // ── 15. Polka ──────────────────────────────────────────────────────
  // Bright oom-pah feel. Kick on beats 1 and 3, snare on 2 and 4,
  // hi-hat playing steady 8ths. Simple and joyful.
  {
    pattern: {
      id: 'world-polka',
      name: 'Polka',
      category: 'world',
      suggestedBpm: 130,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 1,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':           [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        'hihat-closed':    [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        'ride':            [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
      },
    },
    tags: ['beginner', '4/4', 'polka', 'european', 'dance'],
    difficulty: 1,
  },

  // ── 16. Country Train Beat ─────────────────────────────────────────
  // The "freight train" pattern that drives classic country. Cross-stick
  // on 2 and 4 while the kick alternates with a ghost snare to emulate
  // the chugging train rhythm. Hi-hat 16ths keep it rolling.
  {
    pattern: {
      id: 'world-country-train',
      name: 'Country Train Beat',
      category: 'world',
      suggestedBpm: 120,
      timeSignature: [4, 4],
      subdivisions: 16,
      measures: 2,
      tracks: {
        //                    1 e + a  2 e + a  3 e + a  4 e + a | 1 e + a  2 e + a  3 e + a  4 e + a
        'kick':            [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        'snare':           [0,0,0.3,0, 0.5,0,0.3,0, 0,0,0.3,0, 0.5,0,0.3,0, 0,0,0.3,0, 0.5,0,0.3,0, 0,0,0.3,0, 0.5,0,0.3,0],
        'hihat-closed':    [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
      },
    },
    tags: ['intermediate', '4/4', 'country', 'train beat', 'ghost notes'],
    difficulty: 2,
  },
];
