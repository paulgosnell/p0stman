import React, { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CardCarouselProps {
  cards: React.ReactNode[];
  cardsPerView: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export default function CardCarousel({ cards, cardsPerView }: CardCarouselProps) {
  const uniqueId = useId().replace(/:/g, '-');
  const carouselClass = `card-carousel-${uniqueId}`;

  return (
    <div className={`relative w-full ${carouselClass}`}>
      <style>{`
        /* Custom navigation button styles */
        .${carouselClass} .swiper-button-prev,
        .${carouselClass} .swiper-button-next {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgb(229, 231, 235);
          border-radius: 9999px;
          transition: all 0.2s;
          backdrop-filter: blur(8px);
        }

        .dark .${carouselClass} .swiper-button-prev,
        .dark .${carouselClass} .swiper-button-next {
          background: rgba(31, 41, 55, 0.9);
          border-color: rgb(55, 65, 81);
        }

        .${carouselClass} .swiper-button-prev:hover,
        .${carouselClass} .swiper-button-next:hover {
          background: rgb(255, 255, 255);
          transform: scale(1.1);
        }

        .dark .${carouselClass} .swiper-button-prev:hover,
        .dark .${carouselClass} .swiper-button-next:hover {
          background: rgb(31, 41, 55);
          transform: scale(1.1);
        }

        .${carouselClass} .swiper-button-prev.swiper-button-disabled,
        .${carouselClass} .swiper-button-next.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .${carouselClass} .swiper-button-prev::after,
        .${carouselClass} .swiper-button-next::after {
          content: '';
        }

        .${carouselClass} .swiper-button-prev {
          left: -16px;
        }

        .${carouselClass} .swiper-button-next {
          right: -16px;
        }

        @media (min-width: 768px) {
          .${carouselClass} .swiper-button-prev {
            left: -40px;
          }

          .${carouselClass} .swiper-button-next {
            right: -40px;
          }
        }

        /* Custom pagination styles */
        .${carouselClass} .swiper-pagination {
          position: static;
          margin-top: 2rem;
        }

        .${carouselClass} .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgb(209, 213, 219);
          opacity: 1;
          transition: all 0.3s;
        }

        .dark .${carouselClass} .swiper-pagination-bullet {
          background: rgb(75, 85, 99);
        }

        .${carouselClass} .swiper-pagination-bullet:hover {
          background: rgb(156, 163, 175);
        }

        .dark .${carouselClass} .swiper-pagination-bullet:hover {
          background: rgb(107, 114, 128);
        }

        .${carouselClass} .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 4px;
          background: rgb(37, 99, 235);
        }

        .dark .${carouselClass} .swiper-pagination-bullet-active {
          background: rgb(96, 165, 250);
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={cardsPerView.mobile}
        navigation={{
          prevEl: `.${carouselClass} .swiper-button-prev`,
          nextEl: `.${carouselClass} .swiper-button-next`,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: cardsPerView.tablet,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: cardsPerView.desktop,
            spaceBetween: 32,
          },
        }}
        className="!pb-12"
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <div className="h-full">{card}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {cards.length > cardsPerView.desktop && (
        <>
          <button className="swiper-button-prev" aria-label="Previous slide">
            <ChevronLeft size={16} className="text-gray-500 dark:text-gray-400" strokeWidth={1.5} />
          </button>
          <button className="swiper-button-next" aria-label="Next slide">
            <ChevronRight size={16} className="text-gray-500 dark:text-gray-400" strokeWidth={1.5} />
          </button>
        </>
      )}
    </div>
  );
}
