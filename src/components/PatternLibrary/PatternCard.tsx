import type { PatternLibraryEntry } from '../../types';

interface PatternCardProps {
  entry: PatternLibraryEntry;
  isActive: boolean;
  onSelect: () => void;
}

const CATEGORY_COLORS: Record<string, string> = {
  rock: 'bg-red-900/50 text-red-300',
  funk: 'bg-purple-900/50 text-purple-300',
  jazz: 'bg-blue-900/50 text-blue-300',
  latin: 'bg-orange-900/50 text-orange-300',
  metal: 'bg-slate-700/50 text-slate-300',
  world: 'bg-teal-900/50 text-teal-300',
  fills: 'bg-emerald-900/50 text-emerald-300',
  rudiments: 'bg-amber-900/50 text-amber-300',
};

const DIFFICULTY_LABELS = ['', 'Easy', 'Medium', 'Hard'];

export function PatternCard({ entry, isActive, onSelect }: PatternCardProps) {
  const { pattern, difficulty } = entry;

  return (
    <button
      onClick={onSelect}
      className={`w-full text-left px-3 py-2 rounded-lg border transition-colors ${
        isActive
          ? 'border-emerald-500 bg-emerald-950/50'
          : 'border-slate-700/50 bg-slate-800/50 hover:bg-slate-700/50 hover:border-slate-600'
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-slate-200 font-medium truncate">{pattern.name}</span>
        <span className="text-xs text-slate-500 ml-2 shrink-0">{pattern.suggestedBpm} BPM</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-[10px] px-1.5 py-0.5 rounded ${CATEGORY_COLORS[pattern.category] || 'bg-slate-700 text-slate-400'}`}>
          {pattern.category}
        </span>
        <span className="text-[10px] text-slate-500">
          {pattern.timeSignature[0]}/{pattern.timeSignature[1]}
        </span>
        <span className="text-[10px] text-slate-500">
          {pattern.measures}m
        </span>
        <span className={`text-[10px] ml-auto ${
          difficulty === 1 ? 'text-emerald-400' : difficulty === 2 ? 'text-amber-400' : 'text-red-400'
        }`}>
          {DIFFICULTY_LABELS[difficulty]}
        </span>
      </div>
    </button>
  );
}
