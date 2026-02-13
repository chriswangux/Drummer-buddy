import { useTransport } from '../../hooks/useTransport';
import { AUDIO } from '../../constants/audio';

export function BpmControl() {
  const { bpm, setBpm } = useTransport();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-500 uppercase tracking-wide">BPM</span>
      <input
        type="range"
        min={AUDIO.MIN_BPM}
        max={AUDIO.MAX_BPM}
        value={bpm}
        onChange={(e) => setBpm(Number(e.target.value))}
        className="w-20 h-1 accent-emerald-500 cursor-pointer"
      />
      <input
        type="number"
        min={AUDIO.MIN_BPM}
        max={AUDIO.MAX_BPM}
        value={bpm}
        onChange={(e) => setBpm(Number(e.target.value))}
        className="w-14 bg-slate-800 border border-slate-600 rounded px-1.5 py-0.5 text-center text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
      />
    </div>
  );
}
