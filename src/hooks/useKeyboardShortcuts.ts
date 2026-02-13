import { useEffect } from 'react';
import { useTransport } from './useTransport';
import { useMetronome } from './useMetronome';

export function useKeyboardShortcuts() {
  const { togglePlayPause, stop, setBpm, bpm, seekTo, currentStep, toggleLoop } = useTransport();
  const { toggle: toggleMetronome } = useMetronome();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'Escape':
        case 'Enter':
          e.preventDefault();
          stop();
          break;
        case 'ArrowRight':
          e.preventDefault();
          seekTo(currentStep + 1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          seekTo(Math.max(0, currentStep - 1));
          break;
        case 'KeyM':
          e.preventDefault();
          toggleMetronome();
          break;
        case 'KeyL':
          e.preventDefault();
          toggleLoop();
          break;
        case 'Equal':
        case 'NumpadAdd':
          e.preventDefault();
          setBpm(bpm + 5);
          break;
        case 'Minus':
        case 'NumpadSubtract':
          e.preventDefault();
          setBpm(bpm - 5);
          break;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [togglePlayPause, stop, setBpm, bpm, seekTo, currentStep, toggleMetronome, toggleLoop]);
}
