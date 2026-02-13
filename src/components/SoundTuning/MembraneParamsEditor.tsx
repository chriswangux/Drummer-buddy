import type { MembraneParams } from '../../types';
import { ParamSlider } from './ParamSlider';

const NOTES = [
  'C0','C#0','D0','D#0','E0','F0','F#0','G0','G#0','A0','A#0','B0',
  'C1','C#1','D1','D#1','E1','F1','F#1','G1','G#1','A1','A#1','B1',
  'C2','C#2','D2','D#2','E2','F2','F#2','G2','G#2','A2','A#2','B2',
  'C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','A3','A#3','B3','C4',
];

const OSC_LABELS = ['Sine', 'Triangle', 'Sawtooth', 'Square'];

interface Props {
  params: MembraneParams;
  onChange: (update: Partial<MembraneParams>) => void;
}

export function MembraneParamsEditor({ params, onChange }: Props) {
  const noteIndex = NOTES.indexOf(params.pitch);

  return (
    <div className="space-y-0.5">
      <ParamSlider
        label="Pitch"
        value={noteIndex >= 0 ? noteIndex : 12}
        min={0}
        max={NOTES.length - 1}
        step={1}
        displayValue={params.pitch}
        onChange={(v) => onChange({ pitch: NOTES[v] })}
      />
      <ParamSlider
        label="Decay"
        value={params.decay}
        min={0.05}
        max={2.0}
        step={0.01}
        unit="s"
        onChange={(v) => onChange({ decay: v })}
      />
      <ParamSlider
        label="Attack"
        value={params.attack}
        min={0.001}
        max={0.1}
        step={0.001}
        unit="s"
        onChange={(v) => onChange({ attack: v })}
      />
      <ParamSlider
        label="Tone"
        value={params.tone}
        min={0}
        max={3}
        step={1}
        displayValue={OSC_LABELS[params.tone]}
        onChange={(v) => onChange({ tone: v })}
      />
      <ParamSlider
        label="Punch"
        value={params.punch}
        min={0.001}
        max={0.2}
        step={0.001}
        onChange={(v) => onChange({ punch: v })}
      />
      <ParamSlider
        label="Octaves"
        value={params.octaves}
        min={1}
        max={8}
        step={0.5}
        onChange={(v) => onChange({ octaves: v })}
      />
      <ParamSlider
        label="Volume"
        value={params.volume}
        min={-20}
        max={6}
        step={0.5}
        unit="dB"
        onChange={(v) => onChange({ volume: v })}
      />
    </div>
  );
}
