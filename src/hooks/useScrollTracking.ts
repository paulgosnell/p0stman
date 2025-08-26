import { useEffect, useRef } from 'react';
import { trackScroll } from '../lib/analytics';

interface UseScrollTrackingProps {
  path: string;
  agency: string;
  thresholds?: number[];
}

export const useScrollTracking = ({ 
  path, 
  agency, 
  thresholds = [25, 50, 75, 90] 
}: UseScrollTrackingProps) => {
  const trackedThresholds = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

      thresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !trackedThresholds.current.has(threshold)) {
          trackedThresholds.current.add(threshold);
          trackScroll(path, agency, threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [path, agency, thresholds]);

  return null;
};