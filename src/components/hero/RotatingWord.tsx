import React, { useState, useEffect } from 'react';

interface RotatingWordProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function RotatingWord({
  words,
  interval = 3000,
  className = ''
}: RotatingWordProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 350); // Half of transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-all duration-700 ease-in-out ${className}`}
      style={{
        height: '68px',
        transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
        opacity: isAnimating ? 0 : 1,
      }}
    >
      {words[currentIndex]}
    </span>
  );
}
