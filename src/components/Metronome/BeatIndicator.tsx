import { useMetronomeStore } from '../../stores/useMetronomeStore';
import { usePatternStore } from '../../stores/usePatternStore';
import { useTransportStore } from '../../stores/useTransportStore';

export function BeatIndicator() {
  const currentBeat = useMetronomeStore((s) => s.currentBeat);
  const pattern = usePatternStore((s) => s.currentPattern);
  const playbackState = useTransportStore((s) => s.playbackState);

  if (!pattern) return null;

  const beatsPerMeasure = pattern.timeSignature[0];
  const isPlaying = playbackState === 'playing';

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: beatsPerMeasure }).map((_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-75 ${
            isPlaying && currentBeat === i
              ? i === 0
                ? 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]'
                : 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]'
              : 'bg-slate-700'
          }`}
        />
      ))}
    </div>
  );
}
