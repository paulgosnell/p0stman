import React from 'react';

interface WaxSealProps {
  className?: string;
  onClick?: () => void;
  isPressed?: boolean;
}

const WaxSeal: React.FC<WaxSealProps> = ({ 
  className = '', 
  onClick,
  isPressed = false 
}) => {
  return (
    <div 
      className={`relative inline-block cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Wax seal base */}
      <div className={`
        w-16 h-16 rounded-full 
        bg-gradient-to-br from-red-700 to-red-900
        border-4 border-red-800
        shadow-lg
        transform transition-all duration-300
        ${isPressed ? 'scale-95 shadow-md' : 'hover:scale-105 hover:shadow-xl'}
      `}>
        {/* Seal impression */}
        <div className="absolute inset-2 rounded-full bg-red-800/50 flex items-center justify-center">
          <div className="text-red-200 font-bold text-xs text-center leading-tight">
            P0ST<br/>MAN
          </div>
        </div>
        
        {/* Wax drip effect */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
          <div className="w-3 h-2 bg-red-800 rounded-b-full"></div>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-red-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
    </div>
  );
};

export default WaxSeal;