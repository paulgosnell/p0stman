import React from 'react';

// Background image component with overlay and animations
export const PremiumBackground: React.FC<{
  type: 'space' | 'desert' | 'cityscape' | 'tech';
  overlay?: 'dark' | 'blue' | 'purple' | 'gradient';
  children: React.ReactNode;
}> = ({ type, overlay = 'dark', children }) => {
  
  const backgroundImages = {
    space: "url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", // Deep space with stars
    desert: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')", // Arabian desert dunes
    cityscape: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", // Dubai skyline at night
    tech: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80')" // Abstract tech/data visualization
  };

  const overlayStyles = {
    dark: 'bg-black/70',
    blue: 'bg-gradient-to-br from-blue-900/80 via-black/70 to-blue-800/60',
    purple: 'bg-gradient-to-br from-purple-900/80 via-black/70 to-purple-800/60',
    gradient: 'bg-gradient-to-br from-blue-900/60 via-purple-900/70 to-black/80'
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
        style={{ 
          backgroundImage: backgroundImages[type],
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      />
      
      {/* Animated Overlay */}
      <div className={`absolute inset-0 ${overlayStyles[overlay]} animate-pulse-subtle`} />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Parallax background component for more dynamic sections
export const ParallaxBackground: React.FC<{
  imageUrl: string;
  speed?: number;
  children: React.ReactNode;
}> = ({ imageUrl, speed = 0.5, children }) => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${scrollY * speed}px)`,
          filter: 'brightness(0.3) contrast(1.3)',
          scale: '1.1'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-black/70" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Specific background presets for different sections
export const SpaceBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <PremiumBackground type="space" overlay="gradient">
    {children}
  </PremiumBackground>
);

export const DesertBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <PremiumBackground type="desert" overlay="blue">
    {children}
  </PremiumBackground>
);

export const CityscapeBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <PremiumBackground type="cityscape" overlay="purple">
    {children}
  </PremiumBackground>
);

export const TechBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <PremiumBackground type="tech" overlay="dark">
    {children}
  </PremiumBackground>
);