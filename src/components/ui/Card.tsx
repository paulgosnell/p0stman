import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  hover = false,
  variant = 'default',
  padding = 'lg'
}: CardProps) {
  // Base styles
  const baseStyles = 'rounded-2xl transition-all duration-300';

  // Padding variants
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  // Variant styles
  const variantStyles = {
    default: 'bg-white border border-gray-100',
    bordered: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-sm'
  };

  // Hover states
  const hoverStyles = hover
    ? 'hover:border-gray-200 hover:shadow-lg cursor-pointer'
    : '';

  // Dark mode support
  const darkModeStyles = 'dark:bg-gray-900 dark:border-gray-800';

  return (
    <div className={`${baseStyles} ${paddingStyles[padding]} ${variantStyles[variant]} ${hoverStyles} ${darkModeStyles} ${className}`}>
      {children}
    </div>
  );
}
