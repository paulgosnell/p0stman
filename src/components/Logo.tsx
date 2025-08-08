import React from 'react';
import { Bot } from 'lucide-react';

export default function Logo({ className = '', useGradient = false, hideText = false, showStrapline = false }: { 
  className?: string, 
  useGradient?: boolean, 
  hideText?: boolean,
  showStrapline?: boolean 
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
        <Bot className="w-7 h-7 text-white" />
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