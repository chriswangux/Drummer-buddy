import type { MetalSynthParams } from '../../types';
import { ParamSlider } from './ParamSlider';

interface Props {
  params: MetalSynthParams;
  onChange: (update: Partial<MetalSynthParams>) => void;
}

export function MetalParamsEditor({ params, onChange }: Props) {
  return (
    <div className="space-y-0.5">
      <ParamSlider
        label="Brightness"
        value={params.brightness}
        min={100}
        max={800}
        step={10}
        unit="Hz"
        onChange={(v) => onChange({ brightness: v })}
      />
      <ParamSlider
        label="Decay"
        value={params.decay}
        min={0.01}
        max={3.0}
        step={0.01}
        unit="s"
        onChange={(v) => onChange({ decay: v })}
      />
      <ParamSlider
        label="Tone"
        value={params.tone}
        min={1.0}
        max={12.0}
        step={0.1}
        onChange={(v) => onChange({ tone: v })}
      />
      <ParamSlider
        label="Sizzle"
        value={params.sizzle}
        min={1}
        max={64}
        step={1}
        onChange={(v) => onChange({ sizzle: v })}
      />
      <ParamSlider
        label="Resonance"
        value={params.resonance}
        min={1000}
        max={8000}
        step={100}
        unit="Hz"
        onChange={(v) => onChange({ resonance: v })}
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
