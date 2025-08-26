import React, { useEffect, useState } from 'react';

interface ConfettiStampProps {
  isActive: boolean;
  onComplete?: () => void;
}

const ConfettiStamp: React.FC<ConfettiStampProps> = ({ isActive, onComplete }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);

  useEffect(() => {
    if (isActive) {
      const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
      }));
      
      setParticles(newParticles);
      
      // Clear particles after animation
      const timer = setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Special Delivery Mode Banner */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎉</span>
            <span className="font-bold">SPECIAL DELIVERY MODE ACTIVATED!</span>
            <span className="text-2xl">🎉</span>
          </div>
        </div>
      </div>
      
      {/* Confetti Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full animate-ping"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: '2s',
          }}
        />
      ))}
      
      {/* Floating Stamps */}
      <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold transform rotate-12">
          ULTRA FAST
        </div>
      </div>
      
      <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="bg-green-600 text-white px-3 py-1 rounded text-xs font-bold transform -rotate-12">
          PREMIUM DELIVERY
        </div>
      </div>
      
      <div className="absolute bottom-1/3 left-1/3 animate-bounce" style={{ animationDelay: '1.5s' }}>
        <div className="bg-purple-600 text-white px-3 py-1 rounded text-xs font-bold transform rotate-6">
          AI POWERED
        </div>
      </div>
    </div>
  );
};

export default ConfettiStamp;