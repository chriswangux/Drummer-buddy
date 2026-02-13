interface SubcategoryFilterProps {
  selected: string | null;
  onChange: (tag: string | null) => void;
}

const METAL_SUBCATEGORIES = [
  { label: 'All', tag: null },
  { label: 'Blasts', tag: 'blast beat' },
  { label: 'Double Bass', tag: 'double bass' },
  { label: 'DB Practice', tag: 'practice' },
  { label: 'Breakdowns', tag: 'breakdown' },
  { label: 'Djent', tag: 'djent' },
  { label: 'Groove', tag: 'groove' },
  { label: 'Progressive', tag: 'progressive' },
  { label: 'BFW', tag: 'bfw-style' },
  { label: 'Artists', tag: 'artist-style' },
  { label: 'Fills', tag: 'fill' },
];

export function SubcategoryFilter({ selected, onChange }: SubcategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-1 px-3 pb-1">
      {METAL_SUBCATEGORIES.map((sub) => (
        <button
          key={sub.label}
          onClick={() => onChange(sub.tag)}
          className={`px-1.5 py-0.5 text-[10px] rounded-full transition-colors ${
            selected === sub.tag
              ? 'bg-red-600 text-white'
              : 'bg-slate-800/60 text-slate-500 hover:text-slate-300 hover:bg-slate-700/60'
          }`}
        >
          {sub.label}
        </button>
      ))}
    </div>
  );
}
