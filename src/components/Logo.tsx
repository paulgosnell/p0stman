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

export default function Logo({ className = '', useGradient = false, hideText = false, showStrapline = false, size = 'default' }: {
  className?: string,
  useGradient?: boolean,
  hideText?: boolean,
  showStrapline?: boolean,
  size?: 'small' | 'default' | 'large'
}) {
  const sizeClasses = {
    small: { container: 'w-8 h-8', icon: 'w-5 h-5', text: 'text-lg', gap: 'gap-2' },
    default: { container: 'w-10 h-10', icon: 'w-6 h-6', text: 'text-xl', gap: 'gap-2.5' },
    large: { container: 'w-12 h-12', icon: 'w-7 h-7', text: 'text-2xl', gap: 'gap-3' }
  };

  const sizes = sizeClasses[size];

  return (
    <div className={`inline-flex items-center ${sizes.gap} ${className}`}>
      {/* Icon container with premium styling */}
      <div className={`${sizes.container} relative group`}>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg blur-sm opacity-50 group-hover:opacity-70 transition-opacity" />
        {/* Main icon box */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-lg border border-gray-700/50">
          <P0stmanIcon className={`${sizes.icon} text-white/90`} />
        </div>
      </div>
      {!hideText && (
        <div className="flex flex-col">
          <span className={`${sizes.text} font-semibold tracking-tight ${
            useGradient
              ? 'bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent'
              : 'text-current'
          }`}>
            P0STMAN
          </span>
          {showStrapline && (
            <span className="text-gray-500 text-xs tracking-wide">AI-Native Product Studio</span>
          )}
        </div>
      )}
    </div>
  );
}