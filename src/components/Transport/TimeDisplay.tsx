import { useTransportStore } from '../../stores/useTransportStore';
import { usePatternStore } from '../../stores/usePatternStore';
import { stepToMBS } from '../../utils/timeUtils';

export function TimeDisplay() {
  const currentStep = useTransportStore((s) => s.currentStep);
  const pattern = usePatternStore((s) => s.currentPattern);

  if (!pattern) {
    return <span className="font-mono text-sm text-slate-500">--:--:--</span>;
  }

  const mbs = stepToMBS(currentStep, pattern.subdivisions, pattern.timeSignature);

  return (
    <span className="font-mono text-sm text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
      {mbs}
    </span>
  );
}
