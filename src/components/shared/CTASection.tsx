import React from 'react';
import { trackCTAButtonClick } from '../../lib/analytics';

export interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonOnClick: () => void;
  bgColor?: string;
  variant?: 'gradient' | 'solid';
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonOnClick,
  bgColor,
  variant = 'gradient',
}) => {
  // Default gradient background
  const gradientBg = 'bg-gradient-to-r from-blue-600 to-purple-600';

  // Use custom bgColor if provided, otherwise use default gradient or solid
  const backgroundClass = bgColor
    ? bgColor
    : variant === 'gradient'
      ? gradientBg
      : 'bg-blue-600';

  return (
    <section className={`py-24 px-6 md:px-0 ${backgroundClass}`}>
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white leading-tight tracking-tight">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* CTA Button */}
        <div className="pt-4">
          <button
            onClick={() => {
              trackCTAButtonClick(buttonText, 'cta_section', window.location.pathname);
              buttonOnClick();
            }}
            className={`
              px-10 py-4 rounded-lg font-light text-base transition-all duration-300
              ${variant === 'gradient'
                ? 'bg-white text-gray-900 hover:bg-gray-50 hover:scale-105 shadow-lg hover:shadow-xl'
                : 'bg-white text-gray-900 hover:bg-gray-50 hover:scale-105 shadow-lg hover:shadow-xl'
              }
              inline-flex items-center justify-center gap-2
            `}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
