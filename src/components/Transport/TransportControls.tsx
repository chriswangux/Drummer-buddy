import { useTransport } from '../../hooks/useTransport';
import { BpmControl } from './BpmControl';
import { TapTempo } from './TapTempo';
import { TimeDisplay } from './TimeDisplay';
import { MetronomeToggle } from '../Metronome/MetronomeToggle';
import { BeatIndicator } from '../Metronome/BeatIndicator';

export function TransportControls() {
  const { playbackState, togglePlayPause, stop, loopEnabled, toggleLoop, setLoopRegion, setLoopEnabled } = useTransport();

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-slate-900 border-y border-slate-700/50 select-none">
      {/* Transport buttons */}
      <div className="flex items-center gap-1">
        <button
          onClick={stop}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-700 text-slate-300 transition-colors"
          title="Stop (Esc)"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <rect width="14" height="14" rx="2" />
          </svg>
        </button>

        <button
          onClick={togglePlayPause}
          className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
            playbackState === 'playing'
              ? 'bg-emerald-600 text-white hover:bg-emerald-500'
              : 'hover:bg-slate-700 text-slate-300'
          }`}
          title="Play/Pause (Space)"
        >
          {playbackState === 'playing' ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="1" width="4" height="14" rx="1" />
              <rect x="9" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M2 0.5 L13 7 L2 13.5Z" />
            </svg>
          )}
        </button>

        <button
          onClick={() => {
            if (loopEnabled) {
              setLoopEnabled(false);
              setLoopRegion(null);
            } else {
              toggleLoop();
            }
          }}
          className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
            loopEnabled
              ? 'bg-blue-600 text-white hover:bg-blue-500'
              : 'hover:bg-slate-700 text-slate-400'
          }`}
          title="Loop (L)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 1 21 5 17 9" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <polyline points="7 23 3 19 7 15" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
          </svg>
        </button>
      </div>

      <div className="w-px h-6 bg-slate-700" />

      {/* BPM */}
      <BpmControl />

      <div className="w-px h-6 bg-slate-700" />

      {/* Tap Tempo */}
      <TapTempo />

      <div className="w-px h-6 bg-slate-700" />

      {/* Metronome */}
      <MetronomeToggle />
      <BeatIndicator />

      <div className="flex-1" />

      {/* Time Display */}
      <TimeDisplay />
    </div>
  );
}
