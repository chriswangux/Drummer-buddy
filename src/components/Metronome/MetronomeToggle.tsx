import { useMetronome } from '../../hooks/useMetronome';

export function MetronomeToggle() {
  const { enabled, toggle, volume, setVolume } = useMetronome();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggle}
        className={`px-2.5 py-1 text-xs rounded-md border transition-colors ${
          enabled
            ? 'bg-amber-600 border-amber-500 text-white hover:bg-amber-500'
            : 'bg-slate-800 border-slate-600 text-slate-400 hover:bg-slate-700'
        }`}
        title="Metronome (M)"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline mr-1">
          <path d="M12 2L4 22h16L12 2z" />
          <line x1="12" y1="22" x2="18" y2="8" />
        </svg>
        MET
      </button>
      {enabled && (
        <input
          type="range"
          min={0}
          max={100}
          value={volume * 100}
          onChange={(e) => setVolume(Number(e.target.value) / 100)}
          className="w-14 h-1 accent-amber-500 cursor-pointer"
          title="Metronome volume"
        />
      )}
    </div>
  );
}
