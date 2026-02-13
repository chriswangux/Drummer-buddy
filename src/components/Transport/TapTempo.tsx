import { useCallback, useRef } from 'react';
import { useTransport } from '../../hooks/useTransport';

export function TapTempo() {
  const { setBpm } = useTransport();
  const intervals = useRef<number[]>([]);
  const lastTapTime = useRef(0);

  const onTap = useCallback(() => {
    const now = performance.now();

    if (now - lastTapTime.current > 2000) {
      intervals.current = [];
    }

    if (lastTapTime.current > 0) {
      intervals.current.push(now - lastTapTime.current);
    }
    lastTapTime.current = now;

    if (intervals.current.length >= 3) {
      const recent = intervals.current.slice(-8);
      const avg = recent.reduce((a, b) => a + b) / recent.length;
      const bpm = Math.round(60000 / avg);
      setBpm(Math.max(30, Math.min(300, bpm)));
    }
  }, [setBpm]);

  return (
    <button
      onClick={onTap}
      className="px-2.5 py-1 text-xs rounded-md bg-slate-800 border border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500 transition-colors"
      title="Tap to set tempo"
    >
      TAP
    </button>
  );
}
