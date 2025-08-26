import { useEffect, useRef } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

export const useKonamiCode = (callback: () => void) => {
  const sequence = useRef<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      sequence.current.push(event.code);
      
      // Keep only the last 10 keys
      if (sequence.current.length > KONAMI_CODE.length) {
        sequence.current = sequence.current.slice(-KONAMI_CODE.length);
      }
      
      // Check if the sequence matches
      if (sequence.current.length === KONAMI_CODE.length) {
        const matches = sequence.current.every((key, index) => key === KONAMI_CODE[index]);
        if (matches) {
          callback();
          sequence.current = []; // Reset sequence
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback]);
};