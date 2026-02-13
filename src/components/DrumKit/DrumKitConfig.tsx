import { useDrumKitStore } from '../../stores/useDrumKitStore';

export function DrumKitConfig({ onClose }: { onClose: () => void }) {
  const kitConfig = useDrumKitStore((s) => s.kitConfig);
  const togglePiece = useDrumKitStore((s) => s.togglePiece);

  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-slate-200">Kit Configuration</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-sm"
          >
            Done
          </button>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {kitConfig.pieces.map((piece) => (
            <button
              key={piece.id}
              onClick={() => togglePiece(piece.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs transition-colors ${
                piece.enabled
                  ? 'border-slate-500 bg-slate-800 text-slate-200'
                  : 'border-slate-700 bg-slate-900 text-slate-500'
              }`}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: piece.enabled ? piece.color : '#475569',
                  opacity: piece.enabled ? 1 : 0.3,
                }}
              />
              {piece.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
