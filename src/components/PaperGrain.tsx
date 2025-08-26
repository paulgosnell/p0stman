import React from 'react';

interface PaperGrainProps {
  className?: string;
  opacity?: number;
}

const PaperGrain: React.FC<PaperGrainProps> = ({ 
  className = '', 
  opacity = 0.1 
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='${opacity}'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px',
      }}
    />
  );
};

export default PaperGrain;