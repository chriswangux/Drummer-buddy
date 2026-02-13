import * as Tone from 'tone';

export class MetronomeEngine {
  private clickHi: Tone.Synth;
  private clickLo: Tone.Synth;
  private gain: Tone.Gain;
  private _enabled = false;

  constructor() {
    this.gain = new Tone.Gain(0.5).toDestination();

    this.clickHi = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.01 },
    }).connect(this.gain);

    this.clickLo = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.04, sustain: 0, release: 0.01 },
    }).connect(this.gain);
  }

  tick(time: number, step: number, subdivisions: number, timeSignature: [number, number]): void {
    if (!this._enabled) return;

    const beatsPerMeasure = timeSignature[0];
    const subsPerBeat = subdivisions / beatsPerMeasure;

    if (step % subsPerBeat !== 0) return;

    if (step % subdivisions === 0) {
      this.clickHi.triggerAttackRelease('C6', '32n', time, 0.8);
    } else {
      this.clickLo.triggerAttackRelease('G5', '32n', time, 0.4);
    }
  }

  get enabled(): boolean {
    return this._enabled;
  }

  setEnabled(enabled: boolean): void {
    this._enabled = enabled;
  }

  setVolume(volume: number): void {
    this.gain.gain.value = volume;
  }

  dispose(): void {
    this.clickHi.dispose();
    this.clickLo.dispose();
    this.gain.dispose();
  }
}
