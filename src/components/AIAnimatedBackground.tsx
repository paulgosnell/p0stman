import React from 'react';

const AIAnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Electric Grid */}
      <div className="electric-grid"></div>
      
      {/* AI Sparkles */}
      <div className="ai-sparkles">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>



      {/* Data Flow Particles */}
      <div className="data-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full animate-ai-breathe"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full animate-ai-breathe" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-cyan-500/5 rounded-full animate-ai-breathe" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default AIAnimatedBackground;