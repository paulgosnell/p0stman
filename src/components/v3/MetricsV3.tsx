import React from 'react';

interface Metric {
  number: string;
  label: string;
}

const metrics: Metric[] = [
  {
    number: '20+',
    label: 'Years\nShipped 1000+ products'
  },
  {
    number: '40%',
    label: 'Faster\nThan traditional agencies'
  },
  {
    number: 'Live',
    label: 'In Production\nNot POCs. Real systems in 3 weeks'
  }
];

export default function MetricsV3() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-0 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 px-6 md:px-0"
            >
              {/* Large number */}
              <div className="text-5xl md:text-6xl font-light text-blue-600 leading-tight">
                {metric.number}
              </div>

              {/* Label */}
              <div className="text-base md:text-lg text-gray-600 font-light leading-relaxed whitespace-pre-line">
                {metric.label}
              </div>

              {/* Subtle divider on mobile, gap visual on desktop */}
              {index < metrics.length - 1 && (
                <div className="md:hidden w-12 h-px bg-gray-200 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
