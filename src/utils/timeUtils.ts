export function stepToMBS(
  step: number,
  subdivisions: number,
  timeSignature: [number, number]
): string {
  const beatsPerMeasure = timeSignature[0];
  const subsPerBeat = subdivisions / beatsPerMeasure;

  const measure = Math.floor(step / subdivisions) + 1;
  const beatInMeasure = Math.floor((step % subdivisions) / subsPerBeat) + 1;
  const subInBeat = (step % subsPerBeat) + 1;

  return `${measure}:${beatInMeasure}:${subInBeat}`;
}

export function stepToBeat(step: number, subdivisions: number, beatsPerMeasure: number): number {
  const subsPerBeat = subdivisions / beatsPerMeasure;
  return Math.floor((step % subdivisions) / subsPerBeat);
}

export function isOnBeat(step: number, subdivisions: number, beatsPerMeasure: number): boolean {
  const subsPerBeat = subdivisions / beatsPerMeasure;
  return step % subsPerBeat === 0;
}

export function isOnDownbeat(step: number, subdivisions: number): boolean {
  return step % subdivisions === 0;
}

export function stepToSeconds(step: number, subdivisions: number, bpm: number): number {
  const beatsPerSecond = bpm / 60;
  const stepsPerBeat = subdivisions / 4;
  return step / (beatsPerSecond * stepsPerBeat);
}

export function secondsToStep(seconds: number, subdivisions: number, bpm: number): number {
  const beatsPerSecond = bpm / 60;
  const stepsPerBeat = subdivisions / 4;
  return seconds * beatsPerSecond * stepsPerBeat;
}
