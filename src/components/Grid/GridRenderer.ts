import { GRID } from '../../constants/grid';
import type { DrumPattern, DrumPieceConfig, LoopRegion } from '../../types';

export class GridRenderer {
  constructor(private ctx: CanvasRenderingContext2D) {}

  clear(width: number, height: number): void {
    this.ctx.clearRect(0, 0, width, height);
  }

  drawGrid(
    pieces: DrumPieceConfig[],
    totalSteps: number,
    pattern: DrumPattern,
    scrollX: number,
    canvasWidth: number,
    canvasHeight: number
  ): void {
    const ctx = this.ctx;
    const { LABEL_WIDTH, CELL_WIDTH, CELL_HEIGHT, HEADER_HEIGHT } = GRID;

    // Background
    ctx.fillStyle = '#0c1222';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Row backgrounds (alternating)
    for (let i = 0; i < pieces.length; i++) {
      const y = HEADER_HEIGHT + i * CELL_HEIGHT;
      ctx.fillStyle = i % 2 === 0 ? GRID.CELL_BG_EVEN : GRID.CELL_BG_ODD;
      ctx.fillRect(LABEL_WIDTH, y, canvasWidth - LABEL_WIDTH, CELL_HEIGHT);
    }

    // Determine visible step range
    const firstVisibleStep = Math.max(0, Math.floor(scrollX / CELL_WIDTH));
    const lastVisibleStep = Math.min(totalSteps, Math.ceil((scrollX + canvasWidth - LABEL_WIDTH) / CELL_WIDTH));

    // Vertical subdivision lines
    for (let step = firstVisibleStep; step <= lastVisibleStep; step++) {
      const x = LABEL_WIDTH + step * CELL_WIDTH - scrollX;

      if (step % pattern.subdivisions === 0) {
        ctx.strokeStyle = GRID.MEASURE_LINE_COLOR;
        ctx.lineWidth = 2;
      } else if (step % (pattern.subdivisions / pattern.timeSignature[0]) === 0) {
        ctx.strokeStyle = GRID.BEAT_LINE_COLOR;
        ctx.lineWidth = 1;
      } else {
        ctx.strokeStyle = GRID.SUBDIVISION_LINE_COLOR;
        ctx.lineWidth = 0.5;
      }

      ctx.beginPath();
      ctx.moveTo(x, HEADER_HEIGHT);
      ctx.lineTo(x, HEADER_HEIGHT + pieces.length * CELL_HEIGHT);
      ctx.stroke();
    }

    // Horizontal row dividers
    ctx.strokeStyle = GRID.SUBDIVISION_LINE_COLOR;
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= pieces.length; i++) {
      const y = HEADER_HEIGHT + i * CELL_HEIGHT;
      ctx.beginPath();
      ctx.moveTo(LABEL_WIDTH, y);
      ctx.lineTo(canvasWidth, y);
      ctx.stroke();
    }

    // Header background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvasWidth, HEADER_HEIGHT);

    // Beat/measure markers in header
    ctx.fillStyle = '#94a3b8';
    ctx.font = '11px system-ui, sans-serif';
    ctx.textAlign = 'center';

    const subsPerBeat = pattern.subdivisions / pattern.timeSignature[0];
    for (let step = firstVisibleStep; step <= lastVisibleStep; step++) {
      if (step % subsPerBeat === 0) {
        const x = LABEL_WIDTH + step * CELL_WIDTH - scrollX + CELL_WIDTH / 2;
        const measure = Math.floor(step / pattern.subdivisions) + 1;
        const beat = Math.floor((step % pattern.subdivisions) / subsPerBeat) + 1;

        if (step % pattern.subdivisions === 0) {
          ctx.fillStyle = '#e2e8f0';
          ctx.fillText(`${measure}`, x, HEADER_HEIGHT - 8);
        } else {
          ctx.fillStyle = '#64748b';
          ctx.fillText(`${beat}`, x, HEADER_HEIGHT - 8);
        }
      }
    }

    // Row labels (fixed position, left side)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, LABEL_WIDTH, canvasHeight);

    // Label separator line
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(LABEL_WIDTH, 0);
    ctx.lineTo(LABEL_WIDTH, canvasHeight);
    ctx.stroke();

    ctx.textAlign = 'right';
    ctx.font = '12px system-ui, sans-serif';
    for (let i = 0; i < pieces.length; i++) {
      const piece = pieces[i];
      const y = HEADER_HEIGHT + i * CELL_HEIGHT + CELL_HEIGHT / 2 + 4;

      // Color dot
      ctx.fillStyle = piece.color;
      ctx.beginPath();
      ctx.arc(12, y - 3, 4, 0, Math.PI * 2);
      ctx.fill();

      // Label text
      ctx.fillStyle = '#cbd5e1';
      ctx.textAlign = 'left';
      ctx.fillText(piece.shortLabel, 22, y);

      ctx.fillStyle = '#64748b';
      ctx.font = '10px system-ui, sans-serif';
      ctx.fillText(piece.label, 46, y);
      ctx.font = '12px system-ui, sans-serif';
    }
  }

  drawNotes(
    pieces: DrumPieceConfig[],
    pattern: DrumPattern,
    scrollX: number,
    canvasWidth: number,
    currentStep: number
  ): void {
    const ctx = this.ctx;
    const { LABEL_WIDTH, CELL_WIDTH, CELL_HEIGHT, HEADER_HEIGHT, NOTE_PADDING } = GRID;

    const totalSteps = pattern.subdivisions * pattern.measures;
    const firstVisibleStep = Math.max(0, Math.floor(scrollX / CELL_WIDTH));
    const lastVisibleStep = Math.min(totalSteps, Math.ceil((scrollX + canvasWidth - LABEL_WIDTH) / CELL_WIDTH));

    for (let i = 0; i < pieces.length; i++) {
      const piece = pieces[i];
      const track = pattern.tracks[piece.id];
      if (!track) continue;

      const y = HEADER_HEIGHT + i * CELL_HEIGHT + NOTE_PADDING;
      const h = CELL_HEIGHT - NOTE_PADDING * 2;

      for (let step = firstVisibleStep; step < lastVisibleStep; step++) {
        if (step >= track.length) break;
        const velocity = track[step];
        if (velocity <= 0) continue;

        const x = LABEL_WIDTH + step * CELL_WIDTH - scrollX + NOTE_PADDING / 2;
        const w = CELL_WIDTH - NOTE_PADDING;

        const opacity = GRID.VELOCITY_MIN_OPACITY + velocity * (GRID.VELOCITY_MAX_OPACITY - GRID.VELOCITY_MIN_OPACITY);

        ctx.globalAlpha = opacity;
        ctx.fillStyle = piece.color;

        // Rounded rect
        const radius = GRID.CELL_ACTIVE_RADIUS;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + w - radius, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
        ctx.lineTo(x + w, y + h - radius);
        ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
        ctx.lineTo(x + radius, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();

        // Brighter if on current step
        if (step === currentStep) {
          ctx.fillStyle = '#ffffff';
          ctx.globalAlpha = 0.3;
          ctx.fill();
        }

        ctx.globalAlpha = 1;
      }
    }
  }

  drawLoopSelection(loopRegion: LoopRegion | null, scrollX: number, gridHeight: number): void {
    if (!loopRegion) return;

    const ctx = this.ctx;
    const { LABEL_WIDTH, CELL_WIDTH, HEADER_HEIGHT } = GRID;

    const x1 = LABEL_WIDTH + loopRegion.startStep * CELL_WIDTH - scrollX;
    const x2 = LABEL_WIDTH + loopRegion.endStep * CELL_WIDTH - scrollX;

    // Selection area
    ctx.fillStyle = GRID.LOOP_SELECTION_COLOR;
    ctx.fillRect(x1, HEADER_HEIGHT, x2 - x1, gridHeight);

    // Selection borders
    ctx.strokeStyle = GRID.LOOP_BORDER_COLOR;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);

    ctx.beginPath();
    ctx.moveTo(x1, HEADER_HEIGHT);
    ctx.lineTo(x1, HEADER_HEIGHT + gridHeight);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x2, HEADER_HEIGHT);
    ctx.lineTo(x2, HEADER_HEIGHT + gridHeight);
    ctx.stroke();

    ctx.setLineDash([]);
  }

  drawPlayhead(position: number, scrollX: number, gridHeight: number): void {
    const ctx = this.ctx;
    const { LABEL_WIDTH, CELL_WIDTH } = GRID;

    const x = LABEL_WIDTH + position * CELL_WIDTH - scrollX;
    if (x < LABEL_WIDTH || x > ctx.canvas.width) return;

    ctx.strokeStyle = GRID.PLAYHEAD_COLOR;
    ctx.lineWidth = GRID.PLAYHEAD_WIDTH;
    ctx.shadowColor = GRID.PLAYHEAD_COLOR;
    ctx.shadowBlur = 6;

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, gridHeight + GRID.HEADER_HEIGHT);
    ctx.stroke();

    ctx.shadowBlur = 0;

    // Playhead triangle in header
    ctx.fillStyle = GRID.PLAYHEAD_COLOR;
    ctx.beginPath();
    ctx.moveTo(x - 5, 0);
    ctx.lineTo(x + 5, 0);
    ctx.lineTo(x, 8);
    ctx.closePath();
    ctx.fill();
  }

  drawHoverHighlight(
    hoveredStep: number | null,
    hoveredRow: number | null,
    scrollX: number,
    totalRows: number
  ): void {
    if (hoveredStep === null || hoveredRow === null) return;
    if (hoveredRow < 0 || hoveredRow >= totalRows) return;

    const ctx = this.ctx;
    const { LABEL_WIDTH, CELL_WIDTH, CELL_HEIGHT, HEADER_HEIGHT, NOTE_PADDING } = GRID;

    const x = LABEL_WIDTH + hoveredStep * CELL_WIDTH - scrollX + NOTE_PADDING / 2;
    const y = HEADER_HEIGHT + hoveredRow * CELL_HEIGHT + NOTE_PADDING;
    const w = CELL_WIDTH - NOTE_PADDING;
    const h = CELL_HEIGHT - NOTE_PADDING * 2;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;

    const radius = GRID.CELL_ACTIVE_RADIUS;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.stroke();
  }
}
