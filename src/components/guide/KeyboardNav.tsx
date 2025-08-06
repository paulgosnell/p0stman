import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface KeyboardNavProps {
  nextSectionId?: number;
  prevSectionId?: number;
}

export default function KeyboardNav({ nextSectionId, prevSectionId }: KeyboardNavProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowRight' && nextSectionId) {
        navigate(`/guide/content/${nextSectionId}`);
      }
      if (e.key === 'ArrowLeft' && prevSectionId) {
        navigate(`/guide/content/${prevSectionId}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, nextSectionId, prevSectionId]);

  return null;
}