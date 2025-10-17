import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'gradient';
  id?: string;
  container?: boolean;
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({
  children,
  className = '',
  bgColor = 'white',
  id,
  container = true,
  paddingY = 'lg'
}: SectionProps) {
  // Base padding styles
  const paddingStyles = {
    sm: 'py-16 md:py-20',
    md: 'py-20 md:py-24',
    lg: 'py-24 md:py-28',
    xl: 'py-32 md:py-40'
  };

  // Background color variants
  const bgColorStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white via-gray-50/30 to-white'
  };

  // Container styles
  const containerStyles = container
    ? 'max-w-6xl mx-auto px-4 md:px-6'
    : 'px-4 md:px-6';

  return (
    <section
      id={id}
      className={`${paddingStyles[paddingY]} ${bgColorStyles[bgColor]} ${className}`}
    >
      <div className={containerStyles}>
        {children}
      </div>
    </section>
  );
}
