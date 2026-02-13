import { useState } from 'react';
import { useSoundStore } from '../../stores/useSoundStore';
import { useDrumKitStore } from '../../stores/useDrumKitStore';
import { MembraneParamsEditor } from './MembraneParamsEditor';
import { MetalParamsEditor } from './MetalParamsEditor';
import { ParamSlider } from './ParamSlider';
import type { DrumPieceId } from '../../types';

const NOISE_LABELS = ['White', 'Pink', 'Brown'];

export function SoundTuningPanel({ onClose }: { onClose: () => void }) {
  const kitConfig = useDrumKitStore((s) => s.kitConfig);
  const enabledPieces = kitConfig.pieces.filter((p) => p.enabled);

  const selectedPiece = useSoundStore((s) => s.selectedPiece);
  const setSelectedPiece = useSoundStore((s) => s.setSelectedPiece);
  const currentParams = useSoundStore((s) => s.currentParams);
  const setPieceParams = useSoundStore((s) => s.setPieceParams);
  const activePresetId = useSoundStore((s) => s.activePresetId);
  const presets = useSoundStore((s) => s.presets);
  const applyPreset = useSoundStore((s) => s.applyPreset);
  const saveCustomPreset = useSoundStore((s) => s.saveCustomPreset);
  const deleteCustomPreset = useSoundStore((s) => s.deleteCustomPreset);

  const [savingName, setSavingName] = useState('');
  const [showSaveInput, setShowSaveInput] = useState(false);

  const pieceParams = currentParams[selectedPiece];
  const pieceConfig = kitConfig.pieces.find((p) => p.id === selectedPiece);

  const handleSave = () => {
    if (savingName.trim()) {
      saveCustomPreset(savingName.trim());
      setSavingName('');
      setShowSaveInput(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4 max-h-[70vh] overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-slate-200">Sound Tuning</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 text-sm">
            Done
          </button>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-slate-500">Preset</span>
          <select
            value={activePresetId ?? ''}
            onChange={(e) => e.target.value && applyPreset(e.target.value)}
            className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
          >
            {!activePresetId && <option value="">Custom</option>}
            {presets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          {showSaveInput ? (
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={savingName}
                onChange={(e) => setSavingName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                placeholder="Preset name..."
                className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-xs text-slate-200 w-32 focus:outline-none focus:border-emerald-500"
                autoFocus
              />
              <button onClick={handleSave} className="text-xs text-emerald-400 hover:text-emerald-300">
                Save
              </button>
              <button onClick={() => setShowSaveInput(false)} className="text-xs text-slate-500 hover:text-slate-300">
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSaveInput(true)}
              className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1 bg-slate-800 border border-slate-700 rounded"
            >
              Save As...
            </button>
          )}

          {activePresetId && !presets.find((p) => p.id === activePresetId)?.builtIn && (
            <button
              onClick={() => deleteCustomPreset(activePresetId)}
              className="text-xs text-red-400 hover:text-red-300"
            >
              Delete
            </button>
          )}
        </div>

        {/* Piece Tabs */}
        <div className="flex flex-wrap gap-1 mb-3">
          {enabledPieces.map((piece) => (
            <button
              key={piece.id}
              onClick={() => setSelectedPiece(piece.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors ${
                selectedPiece === piece.id
                  ? 'bg-slate-700 text-slate-100 border border-slate-500'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:text-slate-200'
              }`}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: piece.color }}
              />
              {piece.shortLabel}
            </button>
          ))}
        </div>

        {/* Parameter Editors */}
        <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/30">
          <div className="text-xs text-slate-400 mb-2 font-medium">
            {pieceConfig?.label ?? selectedPiece}
          </div>

          {pieceParams.membrane && (
            <div>
              {selectedPiece === 'snare' && (
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Drum</div>
              )}
              <MembraneParamsEditor
                params={pieceParams.membrane}
                onChange={(update) => setPieceParams(selectedPiece, { membrane: { ...pieceParams.membrane!, ...update } })}
              />
            </div>
          )}

          {pieceParams.noise && (
            <div className="mt-2 pt-2 border-t border-slate-700/30">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Snare Wire</div>
              <ParamSlider
                label="Type"
                value={pieceParams.noise.type}
                min={0}
                max={2}
                step={1}
                displayValue={NOISE_LABELS[pieceParams.noise.type]}
                onChange={(v) => setPieceParams(selectedPiece, { noise: { ...pieceParams.noise!, type: v } })}
              />
              <ParamSlider
                label="Buzz"
                value={pieceParams.noise.decay}
                min={0.01}
                max={0.5}
                step={0.01}
                unit="s"
                onChange={(v) => setPieceParams(selectedPiece, { noise: { ...pieceParams.noise!, decay: v } })}
              />
              <ParamSlider
                label="Volume"
                value={pieceParams.noise.volume}
                min={-20}
                max={6}
                step={0.5}
                unit="dB"
                onChange={(v) => setPieceParams(selectedPiece, { noise: { ...pieceParams.noise!, volume: v } })}
              />
            </div>
          )}

          {pieceParams.metal && (
            <MetalParamsEditor
              params={pieceParams.metal}
              onChange={(update) => setPieceParams(selectedPiece, { metal: { ...pieceParams.metal!, ...update } })}
            />
          )}
        </div>
      </div>
    </div>
  );
}
