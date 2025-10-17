import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'gray' | 'green' | 'red' | 'yellow';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'blue',
  size = 'md',
  className = ''
}: BadgeProps) {
  // Base styles
  const baseStyles = 'inline-block rounded-full font-medium transition-all duration-200';

  // Size variants
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm'
  };

  // Color variants
  const variantStyles = {
    blue: 'bg-blue-100 text-blue-700 border border-blue-200',
    purple: 'bg-purple-100 text-purple-700 border border-purple-200',
    gray: 'bg-gray-100 text-gray-700 border border-gray-200',
    green: 'bg-green-100 text-green-700 border border-green-200',
    red: 'bg-red-100 text-red-700 border border-red-200',
    yellow: 'bg-yellow-100 text-yellow-700 border border-yellow-200'
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
