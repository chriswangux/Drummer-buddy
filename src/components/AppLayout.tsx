import { useState, useCallback } from 'react';
import { useAudioEngine } from '../hooks/useAudioEngine';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import { DrumKitSVG } from './DrumKit/DrumKitSVG';
import { DrumKitConfig } from './DrumKit/DrumKitConfig';
import { SoundTuningPanel } from './SoundTuning/SoundTuningPanel';
import { TransportControls } from './Transport/TransportControls';
import { GridCanvas } from './Grid/GridCanvas';
import { PatternBrowser } from './PatternLibrary/PatternBrowser';

export function AppLayout() {
  const { isInitialized, initialize } = useAudioEngine();
  const [showKitConfig, setShowKitConfig] = useState(false);
  const [showSoundTuning, setShowSoundTuning] = useState(false);

  useKeyboardShortcuts();

  const handleInit = useCallback(async () => {
    await initialize();
  }, [initialize]);

  if (!isInitialized) {
    return (
      <div
        className="flex flex-col h-screen bg-slate-950 text-slate-200 items-center justify-center cursor-pointer"
        onClick={handleInit}
      >
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-slate-100">Drummer Buddy</h1>
          <p className="text-slate-400 text-lg">Your drum practice companion</p>
          <div className="mt-8">
            <button
              onClick={handleInit}
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-lg font-medium transition-colors shadow-lg shadow-emerald-600/20"
            >
              Click to Start
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-4">Audio requires user interaction to initialize</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-200">
      {/* Drum Kit Visualization */}
      <div className="relative shrink-0">
        <DrumKitSVG />
        <div className="absolute top-2 right-4 flex gap-1">
          <button
            onClick={() => { setShowSoundTuning(!showSoundTuning); setShowKitConfig(false); }}
            className={`px-2 py-1 text-xs border rounded transition-colors ${
              showSoundTuning
                ? 'bg-emerald-600 border-emerald-500 text-white'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-400 hover:text-slate-200'
            }`}
          >
            Sound
          </button>
          <button
            onClick={() => { setShowKitConfig(!showKitConfig); setShowSoundTuning(false); }}
            className={`px-2 py-1 text-xs border rounded transition-colors ${
              showKitConfig
                ? 'bg-emerald-600 border-emerald-500 text-white'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-400 hover:text-slate-200'
            }`}
          >
            Kit Setup
          </button>
        </div>
        {showKitConfig && <DrumKitConfig onClose={() => setShowKitConfig(false)} />}
        {showSoundTuning && <SoundTuningPanel onClose={() => setShowSoundTuning(false)} />}
      </div>

      {/* Transport Controls */}
      <TransportControls />

      {/* Main Content: Grid + Pattern Browser */}
      <div className="flex flex-1 min-h-0">
        <GridCanvas />
        <PatternBrowser />
      </div>
    </div>
  );
}
