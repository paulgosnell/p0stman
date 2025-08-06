import React from 'react';

export default function Logo({ className = '', useGradient = false, hideText = false }: { className?: string, useGradient?: boolean, hideText?: boolean }) {
  return (
    <div className={`inline-flex items-center relative ${className}`}>
      <div className={`relative font-bold ${
        useGradient ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:200%_100%] animate-gradient text-transparent bg-clip-text' : 'text-current'
      }`}>
        <span>P</span>
        <span className="relative">
          <span className={useGradient ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:200%_100%] animate-gradient text-transparent bg-clip-text' : 'text-current'}>0</span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className={`w-[120%] h-[2px] ${
              useGradient ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:200%_100%] animate-gradient' : 'bg-current'
            } rotate-[-45deg] transform origin-center`} />
          </span>
        </span>
        {!hideText && <span>STMAN</span>}
      </div>
    </div>
  );
}