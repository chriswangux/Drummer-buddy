import type { DrumPieceConfig } from '../../types';
import type { DrumPieceSVG } from './drumPaths';

interface DrumPieceProps {
  svg: DrumPieceSVG;
  config: DrumPieceConfig;
  isActive: boolean;
}

export function DrumPiece({ svg, config, isActive }: DrumPieceProps) {
  const isCymbal = ['crash', 'china', 'ride', 'hihat-closed', 'hihat-open'].includes(config.id);
  const strokeWidth = isCymbal ? 1.5 : 2;
  const baseOpacity = 0.6;

  return (
    <g>
      {/* Shadow / depth */}
      <ellipse
        cx={svg.cx + 2}
        cy={svg.cy + 3}
        rx={svg.rx}
        ry={svg.ry}
        fill="rgba(0,0,0,0.3)"
      />

      {/* Main shape */}
      <ellipse
        cx={svg.cx}
        cy={svg.cy}
        rx={svg.rx}
        ry={svg.ry}
        fill={isActive ? config.color : '#1e293b'}
        fillOpacity={isActive ? 0.8 : baseOpacity}
        stroke={config.color}
        strokeWidth={strokeWidth}
        strokeOpacity={isActive ? 1 : 0.5}
        filter={isActive ? 'url(#glow)' : undefined}
        style={{
          transition: 'fill 0.05s ease-out, fill-opacity 0.15s ease-out, stroke-opacity 0.15s ease-out',
        }}
      />

      {/* Inner ring for drums (not cymbals) */}
      {!isCymbal && (
        <ellipse
          cx={svg.cx}
          cy={svg.cy}
          rx={svg.rx * 0.6}
          ry={svg.ry * 0.6}
          fill="none"
          stroke={config.color}
          strokeWidth={0.5}
          strokeOpacity={isActive ? 0.8 : 0.2}
          style={{ transition: 'stroke-opacity 0.15s ease-out' }}
        />
      )}

      {/* Cymbal line detail */}
      {isCymbal && (
        <>
          <line
            x1={svg.cx - svg.rx * 0.3}
            y1={svg.cy}
            x2={svg.cx + svg.rx * 0.3}
            y2={svg.cy}
            stroke={config.color}
            strokeWidth={0.5}
            strokeOpacity={isActive ? 0.6 : 0.15}
          />
          <circle
            cx={svg.cx}
            cy={svg.cy}
            r={3}
            fill={config.color}
            fillOpacity={isActive ? 1 : 0.3}
          />
        </>
      )}

      {/* Label */}
      <text
        x={svg.cx}
        y={svg.cy + svg.ry + 14}
        textAnchor="middle"
        fill="#94a3b8"
        fontSize="10"
        fontFamily="system-ui, sans-serif"
        style={{ pointerEvents: 'none' }}
      >
        {config.shortLabel}
      </text>
    </g>
  );
}
