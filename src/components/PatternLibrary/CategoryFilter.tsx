import type { PatternCategory } from '../../types';

const CATEGORIES: { value: PatternCategory | null; label: string }[] = [
  { value: null, label: 'All' },
  { value: 'rock', label: 'Rock' },
  { value: 'funk', label: 'Funk' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'latin', label: 'Latin' },
  { value: 'metal', label: 'Metal' },
  { value: 'world', label: 'World / Electronic' },
  { value: 'fills', label: 'Fills' },
  { value: 'rudiments', label: 'Rudiments' },
];

interface CategoryFilterProps {
  selected: PatternCategory | null;
  onChange: (category: PatternCategory | null) => void;
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-1 px-3 py-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.label}
          onClick={() => onChange(cat.value)}
          className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
            selected === cat.value
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
