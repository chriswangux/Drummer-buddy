import * as Tone from 'tone';
import type { DrumPattern, DrumPieceId, LoopRegion } from '../types';
import type { DrumSampler } from './DrumSampler';
import type { MetronomeEngine } from './MetronomeEngine';

export type StepCallback = (step: number, activePieces: DrumPieceId[]) => void;
export type PositionCallback = (position: number) => void;

export class TransportController {
  private scheduledEventId: number | null = null;
  private rafId: number | null = null;
  private currentPattern: DrumPattern | null = null;

  schedulePattern(
    pattern: DrumPattern,
    enabledPieces: DrumPieceId[],
    sampler: DrumSampler,
    metronome: MetronomeEngine,
    onStep: StepCallback,
    getPattern: () => DrumPattern | null
  ): void {
    this.clearSchedule();
    this.currentPattern = pattern;

    const totalSteps = pattern.subdivisions * pattern.measures;

    this.scheduledEventId = Tone.getTransport().scheduleRepeat((time) => {
      const livePattern = getPattern();
      if (!livePattern) return;

      const pos = Tone.getTransport().position as string;
      const step = this.positionToStep(pos, livePattern.subdivisions, totalSteps);

      const activePieces: DrumPieceId[] = [];
      for (const pieceId of enabledPieces) {
        const track = livePattern.tracks[pieceId];
        if (track && step < track.length && track[step] > 0) {
          sampler.trigger(pieceId, time, track[step]);
          activePieces.push(pieceId);
        }
      }

      metronome.tick(time, step, livePattern.subdivisions, livePattern.timeSignature);

      Tone.getDraw().schedule(() => {
        onStep(step, activePieces);
      }, time);
    }, '16n', 0);
  }

  startPlayheadRAF(onPosition: PositionCallback, totalSteps: number, subdivisions: number): void {
    this.stopPlayheadRAF();

    const tick = () => {
      if (Tone.getTransport().state !== 'started') {
        this.rafId = requestAnimationFrame(tick);
        return;
      }
      const seconds = Tone.getTransport().seconds;
      const bpm = Tone.getTransport().bpm.value;
      const beatsPerSecond = bpm / 60;
      const stepsPerBeat = subdivisions / 4;
      const stepsPerSecond = beatsPerSecond * stepsPerBeat;
      const position = (seconds * stepsPerSecond) % totalSteps;
      onPosition(position);
      this.rafId = requestAnimationFrame(tick);
    };

    this.rafId = requestAnimationFrame(tick);
  }

  stopPlayheadRAF(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  play(): void {
    Tone.getTransport().start('+0.05');
  }

  pause(): void {
    Tone.getTransport().pause();
  }

  stop(): void {
    Tone.getTransport().stop();
    Tone.getTransport().position = 0;
  }

  seekTo(step: number, subdivisions: number): void {
    const stepsPerBeat = subdivisions / 4;
    const beat = step / stepsPerBeat;
    const bars = Math.floor(beat / 4);
    const remainBeats = beat % 4;
    Tone.getTransport().position = `${bars}:${remainBeats}:0`;
  }

  setBpm(bpm: number): void {
    Tone.getTransport().bpm.value = bpm;
  }

  setLoop(enabled: boolean, region?: LoopRegion, subdivisions?: number): void {
    const transport = Tone.getTransport();
    transport.loop = enabled;
    if (enabled && region && subdivisions) {
      const stepsPerBeat = subdivisions / 4;
      const startBeat = region.startStep / stepsPerBeat;
      const endBeat = region.endStep / stepsPerBeat;

      const startBars = Math.floor(startBeat / 4);
      const startRemain = startBeat % 4;
      const endBars = Math.floor(endBeat / 4);
      const endRemain = endBeat % 4;

      transport.loopStart = `${startBars}:${startRemain}:0`;
      transport.loopEnd = `${endBars}:${endRemain}:0`;
    }
  }

  private clearSchedule(): void {
    if (this.scheduledEventId !== null) {
      Tone.getTransport().clear(this.scheduledEventId);
      this.scheduledEventId = null;
    }
  }

  private positionToStep(position: string, subdivisions: number, totalSteps: number): number {
    const parts = position.split(':');
    const bars = parseInt(parts[0], 10);
    const beats = parseInt(parts[1], 10);
    const sixteenths = parseFloat(parts[2]);

    const stepsPerBeat = subdivisions / 4;
    const step = Math.floor((bars * 4 + beats) * stepsPerBeat + sixteenths * (stepsPerBeat / 4));
    return ((step % totalSteps) + totalSteps) % totalSteps;
  }

  dispose(): void {
    this.clearSchedule();
    this.stopPlayheadRAF();
  }
}
