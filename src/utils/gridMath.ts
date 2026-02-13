import { GRID } from '../constants/grid';

export function xToStep(canvasX: number, scrollX: number): number {
  return Math.floor((canvasX - GRID.LABEL_WIDTH + scrollX) / GRID.CELL_WIDTH);
}

export function stepToX(step: number, scrollX: number): number {
  return GRID.LABEL_WIDTH + step * GRID.CELL_WIDTH - scrollX;
}

export function yToRow(canvasY: number): number {
  return Math.floor((canvasY - GRID.HEADER_HEIGHT) / GRID.CELL_HEIGHT);
}

export function rowToY(rowIndex: number): number {
  return GRID.HEADER_HEIGHT + rowIndex * GRID.CELL_HEIGHT;
}

export function isInHeader(canvasY: number): boolean {
  return canvasY < GRID.HEADER_HEIGHT;
}

export function isInGrid(canvasY: number, totalRows: number): boolean {
  return canvasY >= GRID.HEADER_HEIGHT && canvasY < GRID.HEADER_HEIGHT + totalRows * GRID.CELL_HEIGHT;
}

export function isInLabelArea(canvasX: number): boolean {
  return canvasX < GRID.LABEL_WIDTH;
}

export function clampStep(step: number, totalSteps: number): number {
  return Math.max(0, Math.min(step, totalSteps - 1));
}

export function getGridWidth(totalSteps: number): number {
  return GRID.LABEL_WIDTH + totalSteps * GRID.CELL_WIDTH;
}

export function getGridHeight(totalRows: number): number {
  return GRID.HEADER_HEIGHT + totalRows * GRID.CELL_HEIGHT;
}
