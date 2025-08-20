import React from 'react';
import { ServicesContent } from '../../types/onepage';

interface ServicesSectionProps {
  content: ServicesContent;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ content }) => {
  const { primaryService, complementaryService } = content;

  return (
    <section className="py-20 px-4 bg-premium-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-premium-7xl text-white mb-6">
            AI Advisory & Digital Delivery
          </h2>
          <p className="text-premium-xl text-gray-300 max-w-3xl mx-auto">
            P0STMAN leads AI adoption strategy while Chilled Sites accelerates your team's digital delivery
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* P0STMAN Service Card - 2/3 width */}
          <div className="lg:col-span-2 card-premium-flat hover-lift-subtle">
            {/* Service Badge */}
            {primaryService.badge && (
              <div className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-400 mb-4">
                {primaryService.badge}
              </div>
            )}
            
            {/* Service Title */}
            <h3 className="text-premium-6xl text-white mb-4">
              {primaryService.title}
            </h3>
            
            {/* Service Description */}
            <p className="text-premium-xl text-gray-300 mb-8 leading-relaxed">
              {primaryService.description}
            </p>
            
            {/* Capability Chips */}
            <div className="flex flex-wrap gap-3">
              {primaryService.features.map((feature, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-800/80 border border-gray-700/50 text-gray-300 rounded-lg text-sm font-medium transition-all duration-300 ease-out hover:bg-gray-700/80 hover:border-gray-600/50 hover:text-white hover:-translate-y-0.5"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Chilled Sites Card - 1/3 width */}
          <div className="card-premium-flat hover-lift-subtle">
            {/* Service Title */}
            <h3 className="text-premium-4xl text-white mb-4">
              {complementaryService.title}
            </h3>
            
            {/* Service Description */}
            <p className="text-premium-lg text-gray-300 mb-8 leading-relaxed">
              {complementaryService.description}
            </p>
            
            {/* Capability Chips */}
            <div className="flex flex-wrap gap-2">
              {complementaryService.features.map((feature, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-gray-800/80 border border-gray-700/50 text-gray-300 rounded text-sm font-medium transition-all duration-300 ease-out hover:bg-gray-700/80 hover:border-gray-600/50 hover:text-white hover:-translate-y-0.5"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <p className="text-premium-lg text-gray-400 max-w-2xl mx-auto">
            Combined approach: Strategic AI leadership with rapid digital execution
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;