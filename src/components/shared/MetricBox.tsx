import React from 'react';

export interface MetricBoxProps {
  metric: string | number;
  label: string;
  icon?: React.ReactNode;
}

export const MetricBox: React.FC<MetricBoxProps> = ({
  metric,
  label,
  icon,
}) => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 text-center">
      {icon && (
        <div className="flex justify-center mb-4">
          {icon}
        </div>
      )}

      <div className="text-5xl font-thin text-gray-900">
        {metric}
      </div>

      <div className="text-base text-gray-600 font-light mt-4">
        {label}
      </div>
    </div>
  );
};

export default MetricBox;
