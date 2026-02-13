interface ParamSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  displayValue?: string;
  onChange: (value: number) => void;
}

export function ParamSlider({ label, value, min, max, step, unit, displayValue, onChange }: ParamSliderProps) {
  const display = displayValue ?? `${Math.round(value * 1000) / 1000}${unit ? ` ${unit}` : ''}`;

  return (
    <div className="flex items-center gap-3 py-1">
      <span className="text-xs text-slate-400 w-20 shrink-0">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 h-1.5 accent-emerald-500 cursor-pointer"
      />
      <span className="text-xs text-slate-500 w-16 text-right font-mono">{display}</span>
    </div>
  );
}
