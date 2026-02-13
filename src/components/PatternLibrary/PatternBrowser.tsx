import { useEffect, useMemo } from 'react';
import { usePatternStore } from '../../stores/usePatternStore';
import { allPatterns } from '../../data/patterns';
import { useTransport } from '../../hooks/useTransport';
import { CategoryFilter } from './CategoryFilter';
import { SubcategoryFilter } from './SubcategoryFilter';
import { PatternCard } from './PatternCard';

export function PatternBrowser() {
  const patterns = usePatternStore((s) => s.patterns);
  const currentPattern = usePatternStore((s) => s.currentPattern);
  const selectedCategory = usePatternStore((s) => s.selectedCategory);
  const selectedTag = usePatternStore((s) => s.selectedTag);
  const searchQuery = usePatternStore((s) => s.searchQuery);
  const setPatterns = usePatternStore((s) => s.setPatterns);
  const loadPattern = usePatternStore((s) => s.loadPattern);
  const setCategory = usePatternStore((s) => s.setCategory);
  const setSelectedTag = usePatternStore((s) => s.setSelectedTag);
  const setSearchQuery = usePatternStore((s) => s.setSearchQuery);
  const { setBpm, stop } = useTransport();

  useEffect(() => {
    if (patterns.length === 0) {
      setPatterns(allPatterns);
    }
  }, [patterns.length, setPatterns]);

  const filteredPatterns = useMemo(() => {
    return patterns.filter((entry) => {
      if (selectedCategory && entry.pattern.category !== selectedCategory) return false;
      if (selectedTag && !entry.tags.some((t) => t.includes(selectedTag))) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          entry.pattern.name.toLowerCase().includes(q) ||
          entry.pattern.category.toLowerCase().includes(q) ||
          entry.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [patterns, selectedCategory, selectedTag, searchQuery]);

  const handleSelect = (patternId: string) => {
    const entry = patterns.find((e) => e.pattern.id === patternId);
    stop();
    loadPattern(patternId);
    if (entry) {
      setBpm(entry.pattern.suggestedBpm);
    }
  };

  return (
    <div className="w-72 bg-slate-900/80 border-l border-slate-700/50 flex flex-col shrink-0">
      <div className="px-3 pt-3 pb-1">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Patterns
          <span className="text-slate-600 font-normal ml-1">({filteredPatterns.length})</span>
        </h2>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search patterns..."
          className="w-full bg-slate-800 border border-slate-700 rounded-md px-2.5 py-1.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <CategoryFilter selected={selectedCategory} onChange={setCategory} />

      {selectedCategory === 'metal' && (
        <SubcategoryFilter selected={selectedTag} onChange={setSelectedTag} />
      )}

      <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1.5">
        {filteredPatterns.map((entry) => (
          <PatternCard
            key={entry.pattern.id}
            entry={entry}
            isActive={currentPattern?.id === entry.pattern.id}
            onSelect={() => handleSelect(entry.pattern.id)}
          />
        ))}
        {filteredPatterns.length === 0 && (
          <div className="text-sm text-slate-500 text-center py-8">
            No patterns found
          </div>
        )}
      </div>
    </div>
  );
}
