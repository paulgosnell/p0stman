import React from 'react';
import { Check } from 'lucide-react';

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  features: string[];
  icon?: React.ReactNode;
  variant?: 'default' | 'highlighted';
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  features,
  icon,
  variant = 'default',
}) => {
  const isHighlighted = variant === 'highlighted';

  return (
    <div
      className={`
        relative p-8 rounded-2xl transition-all duration-300
        ${isHighlighted
          ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg hover:shadow-xl'
          : 'bg-white border border-gray-100 hover:shadow-md'
        }
      `}
    >
      {/* Optional icon in top-right corner */}
      {icon && (
        <div className="absolute top-6 right-6 text-gray-300">
          {icon}
        </div>
      )}

      {/* Step number - large, muted */}
      <div
        className={`
          text-5xl font-thin mb-6
          ${isHighlighted ? 'text-blue-300' : 'text-gray-200'}
        `}
      >
        {number.toString().padStart(2, '0')}
      </div>

      {/* Title */}
      <h3
        className={`
          text-2xl font-light mb-4 leading-tight
          ${isHighlighted ? 'text-gray-900' : 'text-gray-900'}
        `}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`
          text-base font-light mb-6 leading-relaxed
          ${isHighlighted ? 'text-gray-700' : 'text-gray-600'}
        `}
      >
        {description}
      </p>

      {/* Features list with checkmarks */}
      {features.length > 0 && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm font-light text-gray-600"
            >
              <Check
                size={16}
                className={`
                  mt-0.5 flex-shrink-0
                  ${isHighlighted ? 'text-blue-600' : 'text-green-500'}
                `}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProcessStep;
