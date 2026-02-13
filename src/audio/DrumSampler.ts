import * as Tone from 'tone';
import type { DrumPieceId, PieceSoundParams, MembraneParams, MetalSynthParams, NoiseParams, KitSoundParams } from '../types';
import { DEFAULT_SOUND_PARAMS } from '../constants/soundDefaults';

const OSC_TYPES: OscillatorType[] = ['sine', 'triangle', 'sawtooth', 'square'];
const NOISE_TYPES: Array<'white' | 'pink' | 'brown'> = ['white', 'pink', 'brown'];

interface DrumVoice {
  trigger: (time: number, velocity: number) => void;
  updateParams: (params: PieceSoundParams) => void;
  dispose: () => void;
}

function createMembraneVoice(p: MembraneParams, duration: string): DrumVoice {
  const synth = new Tone.MembraneSynth({
    pitchDecay: p.punch,
    octaves: p.octaves,
    oscillator: { type: OSC_TYPES[p.tone] },
    envelope: { attack: p.attack, decay: p.decay, sustain: 0.01, release: p.decay },
  }).toDestination();
  synth.volume.value = p.volume;

  let pitch = p.pitch;

  return {
    trigger: (time, velocity) => synth.triggerAttackRelease(pitch, duration, time, velocity),
    updateParams: (params) => {
      const m = params.membrane;
      if (!m) return;
      pitch = m.pitch;
      synth.set({
        pitchDecay: m.punch,
        octaves: m.octaves,
        oscillator: { type: OSC_TYPES[m.tone] },
        envelope: { attack: m.attack, decay: m.decay, sustain: 0.01, release: m.decay },
      });
      synth.volume.value = m.volume;
    },
    dispose: () => synth.dispose(),
  };
}

function createSnareVoice(p: PieceSoundParams): DrumVoice {
  const mp = p.membrane!;
  const np = p.noise!;

  const membrane = new Tone.MembraneSynth({
    pitchDecay: mp.punch,
    octaves: mp.octaves,
    oscillator: { type: OSC_TYPES[mp.tone] },
    envelope: { attack: mp.attack, decay: mp.decay, sustain: 0, release: mp.decay },
  }).toDestination();
  membrane.volume.value = mp.volume;

  const noise = new Tone.NoiseSynth({
    noise: { type: NOISE_TYPES[np.type] },
    envelope: { attack: 0.001, decay: np.decay, sustain: 0, release: np.decay * 0.7 },
  }).toDestination();
  noise.volume.value = np.volume;

  let pitch = mp.pitch;

  return {
    trigger: (time, velocity) => {
      membrane.triggerAttackRelease(pitch, '16n', time, velocity * 0.7);
      noise.triggerAttack(time, velocity * 0.5);
    },
    updateParams: (params) => {
      if (params.membrane) {
        const m = params.membrane;
        pitch = m.pitch;
        membrane.set({
          pitchDecay: m.punch,
          octaves: m.octaves,
          oscillator: { type: OSC_TYPES[m.tone] },
          envelope: { attack: m.attack, decay: m.decay, sustain: 0, release: m.decay },
        });
        membrane.volume.value = m.volume;
      }
      if (params.noise) {
        const n = params.noise;
        noise.set({
          noise: { type: NOISE_TYPES[n.type] },
          envelope: { attack: 0.001, decay: n.decay, sustain: 0, release: n.decay * 0.7 },
        });
        noise.volume.value = n.volume;
      }
    },
    dispose: () => { membrane.dispose(); noise.dispose(); },
  };
}

function createMetalVoice(p: MetalSynthParams, _duration: string, velocityScale: number): DrumVoice {
  const synth = new Tone.MetalSynth({
    frequency: p.brightness,
    envelope: { attack: 0.001, decay: p.decay, release: p.decay * 0.5 },
    harmonicity: p.tone,
    modulationIndex: p.sizzle,
    resonance: p.resonance,
    octaves: 1.5,
  }).toDestination();
  synth.volume.value = p.volume;

  let freq = p.brightness;

  return {
    // MetalSynth extends Monophonic: triggerAttack(note, time, velocity)
    // Pass frequency as the "note" — MetalSynth uses it to set its base frequency.
    trigger: (time, velocity) => {
      synth.triggerAttack(freq, time, velocity * velocityScale);
    },
    updateParams: (params) => {
      const m = params.metal;
      if (!m) return;
      freq = m.brightness;
      synth.set({
        frequency: m.brightness,
        envelope: { attack: 0.001, decay: m.decay, release: m.decay * 0.5 },
        harmonicity: m.tone,
        modulationIndex: m.sizzle,
        resonance: m.resonance,
      });
      synth.volume.value = m.volume;
    },
    dispose: () => synth.dispose(),
  };
}

export class DrumSampler {
  private voices: Map<DrumPieceId, DrumVoice> = new Map();

  constructor(params?: KitSoundParams) {
    const p = params ?? DEFAULT_SOUND_PARAMS;

    this.voices.set('kick', createMembraneVoice(p.kick.membrane!, '8n'));
    this.voices.set('snare', createSnareVoice(p.snare));
    this.voices.set('hihat-closed', createMetalVoice(p['hihat-closed'].metal!, '16n', 0.9));
    this.voices.set('hihat-open', createMetalVoice(p['hihat-open'].metal!, '8n', 0.9));
    this.voices.set('tom-high', createMembraneVoice(p['tom-high'].membrane!, '8n'));
    this.voices.set('tom-mid', createMembraneVoice(p['tom-mid'].membrane!, '8n'));
    this.voices.set('tom-floor', createMembraneVoice(p['tom-floor'].membrane!, '8n'));
    this.voices.set('ride', createMetalVoice(p.ride.metal!, '4n', 0.8));
    this.voices.set('crash', createMetalVoice(p.crash.metal!, '4n', 0.8));
    this.voices.set('china', createMetalVoice(p.china.metal!, '4n', 0.8));
  }

  trigger(pieceId: DrumPieceId, time: number, velocity: number): void {
    this.voices.get(pieceId)?.trigger(time, velocity);
  }

  updatePieceParams(pieceId: DrumPieceId, params: PieceSoundParams): void {
    this.voices.get(pieceId)?.updateParams(params);
  }

  applyPreset(kitParams: KitSoundParams): void {
    for (const [pieceId, params] of Object.entries(kitParams)) {
      this.updatePieceParams(pieceId as DrumPieceId, params);
    }
  }

  dispose(): void {
    this.voices.forEach(voice => voice.dispose());
    this.voices.clear();
  }
}
