import * as Tone from 'tone';
import type { DrumPattern, DrumPieceId, LoopRegion, KitSoundParams, PieceSoundParams } from '../types';
import { DrumSampler } from './DrumSampler';
import { MetronomeEngine } from './MetronomeEngine';
import { TransportController, type StepCallback, type PositionCallback } from './TransportController';

export class AudioEngine {
  private sampler: DrumSampler | null = null;
  private metronome: MetronomeEngine | null = null;
  private transport: TransportController | null = null;
  private _isInitialized = false;

  get isInitialized(): boolean {
    return this._isInitialized;
  }

  async initialize(soundParams?: KitSoundParams): Promise<void> {
    if (this._isInitialized) return;

    await Tone.start();

    this.sampler = new DrumSampler(soundParams);
    this.metronome = new MetronomeEngine();
    this.transport = new TransportController();

    this._isInitialized = true;
  }

  schedulePattern(
    pattern: DrumPattern,
    enabledPieces: DrumPieceId[],
    onStep: StepCallback,
    onPosition: PositionCallback,
    getPattern: () => DrumPattern | null
  ): void {
    if (!this.sampler || !this.metronome || !this.transport) return;

    const totalSteps = pattern.subdivisions * pattern.measures;

    this.transport.schedulePattern(
      pattern,
      enabledPieces,
      this.sampler,
      this.metronome,
      onStep,
      getPattern
    );

    this.transport.startPlayheadRAF(onPosition, totalSteps, pattern.subdivisions);
  }

  play(): void {
    this.transport?.play();
  }

  pause(): void {
    this.transport?.pause();
  }

  stop(): void {
    this.transport?.stop();
    this.transport?.stopPlayheadRAF();
  }

  seekTo(step: number, subdivisions: number): void {
    this.transport?.seekTo(step, subdivisions);
  }

  setBpm(bpm: number): void {
    this.transport?.setBpm(bpm);
  }

  setLoop(enabled: boolean, region?: LoopRegion, subdivisions?: number): void {
    this.transport?.setLoop(enabled, region, subdivisions);
  }

  setMetronomeEnabled(enabled: boolean): void {
    this.metronome?.setEnabled(enabled);
  }

  setMetronomeVolume(volume: number): void {
    this.metronome?.setVolume(volume);
  }

  updatePieceSound(pieceId: DrumPieceId, params: PieceSoundParams): void {
    this.sampler?.updatePieceParams(pieceId, params);
  }

  applySoundPreset(kitParams: KitSoundParams): void {
    this.sampler?.applyPreset(kitParams);
  }

  dispose(): void {
    this.transport?.dispose();
    this.sampler?.dispose();
    this.metronome?.dispose();
    this.transport = null;
    this.sampler = null;
    this.metronome = null;
    this._isInitialized = false;
  }
}
