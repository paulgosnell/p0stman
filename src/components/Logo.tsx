import React from 'react';

// P0STMAN Icon - Speed lines with chevron representing motion and delivery
export function P0stmanIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 10L24 16L18 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12H14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M6 16H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M8 20H14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function Logo({ className = '', useGradient = false, hideText = false, showStrapline = false }: {
  className?: string,
  useGradient?: boolean,
  hideText?: boolean,
  showStrapline?: boolean
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
        <P0stmanIcon className="w-7 h-7 text-white" />
      </div>
      {!hideText && (
        <div>
          <h3 className={`text-2xl font-bold ${
            useGradient 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
              : 'text-current'
          }`}>
            P0STMAN
          </h3>
          {showStrapline && (
            <p className="text-gray-400 text-sm">AI-Native Product Studio</p>
          )}
        </div>
      )}
    </div>
  );
}