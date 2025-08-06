import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function DarkModeToggle({ isDark, onToggle }: DarkModeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`fixed top-8 right-8 z-50 p-3 rounded-full transition-colors ${
        isDark 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-white text-gray-900 hover:bg-gray-100'
      } shadow-lg border border-gray-200/20`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}