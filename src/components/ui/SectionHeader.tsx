import React from 'react';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  animate?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = '',
  animate = true
}: SectionHeaderProps) {
  // Alignment styles
  const alignmentStyles = centered ? 'text-center' : '';

  // Animation styles
  const animationStyles = animate
    ? 'animate-fade-in-up'
    : '';

  return (
    <div className={`mb-12 md:mb-16 ${alignmentStyles} ${animationStyles} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-thin text-gray-900 leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
