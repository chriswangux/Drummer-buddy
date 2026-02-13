import { useDrumKitStore } from '../../stores/useDrumKitStore';
import { DRUM_PIECES_SVG } from './drumPaths';
import { DrumPiece } from './DrumPiece';

export function DrumKitSVG() {
  const kitConfig = useDrumKitStore((s) => s.kitConfig);
  const activePieces = useDrumKitStore((s) => s.activePieces);

  const enabledPieces = kitConfig.pieces.filter((p) => p.enabled);

  return (
    <div className="w-full flex justify-center bg-slate-950/50 py-2">
      <svg
        viewBox="0 0 800 280"
        className="w-full max-w-3xl h-auto"
        style={{ maxHeight: '220px' }}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <radialGradient id="stage-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Stage floor hint */}
        <ellipse cx="400" cy="200" rx="350" ry="100" fill="url(#stage-gradient)" />

        {/* Kick drum pedal line */}
        <line x1="400" y1="220" x2="400" y2="270" stroke="#334155" strokeWidth="1" />

        {/* Hi-hat stand line */}
        <line x1="120" y1="140" x2="120" y2="270" stroke="#334155" strokeWidth="1" />

        {/* Cymbal stands */}
        <line x1="200" y1="50" x2="200" y2="270" stroke="#334155" strokeWidth="0.5" />
        <line x1="600" y1="50" x2="600" y2="270" stroke="#334155" strokeWidth="0.5" />
        <line x1="650" y1="130" x2="650" y2="270" stroke="#334155" strokeWidth="0.5" />

        {/* Render pieces */}
        {enabledPieces.map((piece) => {
          const svgPiece = DRUM_PIECES_SVG.find((s) => s.id === piece.id);
          if (!svgPiece) return null;
          return (
            <DrumPiece
              key={piece.id}
              svg={svgPiece}
              config={piece}
              isActive={activePieces.has(piece.id)}
            />
          );
        })}
      </svg>
    </div>
  );
}
