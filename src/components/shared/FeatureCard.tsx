import React from 'react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  accent = false,
}) => {
  return (
    <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Accent Top Border */}
      {accent && (
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-blue-600" />
      )}

      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 text-blue-600 mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-light text-gray-900 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
