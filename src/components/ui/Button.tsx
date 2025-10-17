import React from 'react';

export interface ButtonProps {
  variant?: 'gradient' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'solid',
  size = 'md',
  disabled = false,
  children,
  iconLeft,
  iconRight,
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  // Base styles
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 group';

  // Size variants
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-base'
  };

  // Variant styles
  const variantStyles = {
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500',
    outline: 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 disabled:border-gray-300 disabled:text-gray-400',
    solid: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400'
  };

  const disabledStyles = disabled ? 'cursor-not-allowed opacity-60' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`}
    >
      {iconLeft && (
        <span className="transition-transform group-hover:scale-110">
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="transition-transform group-hover:translate-x-1">
          {iconRight}
        </span>
      )}
    </button>
  );
}
