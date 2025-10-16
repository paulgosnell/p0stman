import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CardCarouselProps {
  cards: React.ReactNode[];
  cardsPerView: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export default function CardCarousel({ cards, cardsPerView }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(cardsPerView.desktop);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(cardsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(cardsPerView.tablet);
      } else {
        setItemsPerView(cardsPerView.desktop);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, [cardsPerView]);

  const maxIndex = Math.max(0, cards.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex gap-6 md:gap-8"
          animate={{ x: -currentIndex * (100 / itemsPerView) + '%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ width: `${(cards.length / itemsPerView) * 100}%` }}
        >
          {cards.map((card, idx) => (
            <div key={idx} style={{ width: `${100 / (cards.length / itemsPerView)}%` }} className="flex-shrink-0">
              {card}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      {cards.length > itemsPerView && (
        <>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {cards.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil((cards.length - itemsPerView) / 1) + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
