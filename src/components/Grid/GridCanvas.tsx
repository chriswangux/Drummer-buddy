import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { GRID } from '../../constants/grid';
import { GridRenderer } from './GridRenderer';
import { usePatternStore } from '../../stores/usePatternStore';
import { useDrumKitStore } from '../../stores/useDrumKitStore';
import { useTransportStore } from '../../stores/useTransportStore';
import { useGridInteraction } from '../../hooks/useGridInteraction';
import { getTotalSteps } from '../../utils/patternUtils';
import { getGridWidth } from '../../utils/gridMath';

export function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<GridRenderer | null>(null);
  const [scrollX, setScrollX] = useState(0);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const pattern = usePatternStore((s) => s.currentPattern);
  const kitConfig = useDrumKitStore((s) => s.kitConfig);
  const currentPosition = useTransportStore((s) => s.currentPosition);
  const currentStep = useTransportStore((s) => s.currentStep);
  const loopRegion = useTransportStore((s) => s.loopRegion);

  const enabledPieces = useMemo(
    () => kitConfig.pieces.filter((p) => p.enabled),
    [kitConfig.pieces]
  );
  const totalSteps = pattern ? getTotalSteps(pattern) : 0;

  const interaction = useGridInteraction(canvasRef, totalSteps, enabledPieces, scrollX);

  // Canvas sizing — re-runs when pattern appears (canvas enters DOM)
  const hasPattern = !!pattern;
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = container.clientWidth;
      const height = container.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        rendererRef.current = new GridRenderer(ctx);
      }

      setCanvasSize({ width, height });
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    return () => ro.disconnect();
  }, [hasPattern]);

  // Main draw loop
  useEffect(() => {
    const renderer = rendererRef.current;
    const canvas = canvasRef.current;
    if (!renderer || !canvas || !pattern || canvasSize.width === 0) return;

    const { width, height } = canvasSize;
    const gridHeight = enabledPieces.length * GRID.CELL_HEIGHT;

    renderer.clear(width, height);
    renderer.drawGrid(enabledPieces, totalSteps, pattern, scrollX, width, height);
    renderer.drawNotes(enabledPieces, pattern, scrollX, width, currentStep);
    renderer.drawLoopSelection(loopRegion, scrollX, gridHeight);
    renderer.drawHoverHighlight(interaction.hoveredStep, interaction.hoveredRow, scrollX, enabledPieces.length);

    if (interaction.dragSelection) {
      renderer.drawLoopSelection(interaction.dragSelection, scrollX, gridHeight);
    }

    renderer.drawPlayhead(currentPosition, scrollX, gridHeight);
  }, [
    pattern,
    enabledPieces,
    totalSteps,
    scrollX,
    canvasSize,
    currentPosition,
    currentStep,
    loopRegion,
    interaction.hoveredStep,
    interaction.hoveredRow,
    interaction.dragSelection,
  ]);

  // Auto-scroll to follow playhead during playback
  const playbackState = useTransportStore((s) => s.playbackState);
  useEffect(() => {
    if (playbackState !== 'playing') return;

    const playheadX = currentPosition * GRID.CELL_WIDTH;
    const viewStart = scrollX;
    const viewEnd = scrollX + canvasSize.width - GRID.LABEL_WIDTH;

    if (playheadX > viewEnd - GRID.CELL_WIDTH * 2) {
      setScrollX(Math.max(0, playheadX - GRID.CELL_WIDTH * 4));
    } else if (playheadX < viewStart) {
      setScrollX(Math.max(0, playheadX - GRID.CELL_WIDTH * 2));
    }
  }, [currentPosition, playbackState, canvasSize.width, scrollX]);

  const handleScroll = useCallback((e: React.WheelEvent) => {
    const totalWidth = getGridWidth(totalSteps);
    const maxScroll = Math.max(0, totalWidth - canvasSize.width);
    setScrollX((prev) => Math.max(0, Math.min(maxScroll, prev + e.deltaX + e.deltaY)));
  }, [totalSteps, canvasSize.width]);

  if (!pattern) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-500">
        Select a pattern from the library to get started
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex-1 relative overflow-hidden cursor-crosshair"
      onWheel={handleScroll}
    >
      <canvas
        ref={canvasRef}
        onMouseDown={interaction.handleMouseDown}
        onMouseMove={interaction.handleMouseMove}
        onMouseUp={interaction.handleMouseUp}
        onClick={interaction.handleClick}
        onMouseLeave={interaction.handleMouseLeave}
      />
    </div>
  );
}
