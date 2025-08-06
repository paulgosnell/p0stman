import React, { useState, useEffect } from 'react';

interface ReadingProgressProps {
  isDark?: boolean;
}

export default function ReadingProgress({ isDark }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrolled / maxHeight) * 100;
      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-1 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} z-50`}>
      <div
        className="h-full bg-blue-600 transition-transform duration-200 ease-out"
        style={{ transform: `translateX(${progress - 100}%)` }}
      />
    </div>
  );
}