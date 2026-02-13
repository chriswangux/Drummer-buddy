import { useCallback, useRef, useState, type RefObject, type MouseEvent } from 'react';
import { GRID } from '../constants/grid';
import { xToStep, yToRow, isInHeader, isInGrid, isInLabelArea, clampStep } from '../utils/gridMath';
import type { DrumPieceConfig, LoopRegion } from '../types';
import { usePatternStore } from '../stores/usePatternStore';
import { useTransport } from './useTransport';

export function useGridInteraction(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  totalSteps: number,
  pieces: DrumPieceConfig[],
  scrollX: number
) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartStep = useRef<number | null>(null);
  const [dragSelection, setDragSelection] = useState<LoopRegion | null>(null);

  const toggleCell = usePatternStore((s) => s.toggleCell);
  const { seekTo, setLoopRegion } = useTransport();

  const getCanvasCoords = useCallback(
    (e: MouseEvent): { x: number; y: number } => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    },
    [canvasRef]
  );

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      const { x, y } = getCanvasCoords(e);

      if (isInHeader(y) && !isInLabelArea(x)) {
        // Start loop selection or seek
        const step = clampStep(xToStep(x, scrollX), totalSteps);
        dragStartStep.current = step;
        setIsDragging(true);
        setDragSelection(null);
      }
    },
    [getCanvasCoords, scrollX, totalSteps]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const { x, y } = getCanvasCoords(e);

      if (isInGrid(y, pieces.length) && !isInLabelArea(x)) {
        const step = xToStep(x, scrollX);
        const row = yToRow(y);
        setHoveredStep(step >= 0 && step < totalSteps ? step : null);
        setHoveredRow(row >= 0 && row < pieces.length ? row : null);
      } else {
        setHoveredStep(null);
        setHoveredRow(null);
      }

      if (isDragging && dragStartStep.current !== null) {
        const step = clampStep(xToStep(x, scrollX), totalSteps);
        const start = Math.min(dragStartStep.current, step);
        const end = Math.max(dragStartStep.current, step) + 1;
        if (end - start > 1) {
          setDragSelection({ startStep: start, endStep: end });
        }
      }
    },
    [getCanvasCoords, scrollX, pieces.length, totalSteps, isDragging]
  );

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        if (dragSelection && dragSelection.endStep - dragSelection.startStep > 1) {
          setLoopRegion(dragSelection);
        } else if (dragStartStep.current !== null) {
          // Single click on header = seek
          const { x } = getCanvasCoords(e);
          const step = clampStep(xToStep(x, scrollX), totalSteps);
          seekTo(step);
        }
        setIsDragging(false);
        dragStartStep.current = null;
        setDragSelection(null);
      }
    },
    [isDragging, dragSelection, getCanvasCoords, scrollX, totalSteps, seekTo, setLoopRegion]
  );

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const { x, y } = getCanvasCoords(e);

      if (isInGrid(y, pieces.length) && !isInLabelArea(x)) {
        const step = xToStep(x, scrollX);
        const row = yToRow(y);

        if (step >= 0 && step < totalSteps && row >= 0 && row < pieces.length) {
          toggleCell(pieces[row].id, step);
        }
      }
    },
    [getCanvasCoords, scrollX, pieces, totalSteps, toggleCell]
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredStep(null);
    setHoveredRow(null);
    if (isDragging) {
      setIsDragging(false);
      dragStartStep.current = null;
      setDragSelection(null);
    }
  }, [isDragging]);

  return {
    hoveredStep,
    hoveredRow,
    isDragging,
    dragSelection,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleClick,
    handleMouseLeave,
  };
}
