import React from 'react';
import { ContactContent } from '../../types/onepage';
import ContactCTAs from './ContactCTAs';

interface FinalCTAProps {
  content: ContactContent;
  className?: string;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ content, className = '' }) => {
  return (
    <section className={`py-20 lg:py-32 px-4 bg-premium-gradient-subtle ${className}`}>
      <div className="container-premium text-center">
        {/* Main CTA Headline */}
        <h2 className="text-premium-6xl text-white mb-6 animate-fade-in-up">
          {content.finalCTA.headline}
        </h2>
        
        {/* CTA Description */}
        <p className="text-premium-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up-delayed">
          {content.finalCTA.description}
        </p>
        
        {/* Contact CTAs */}
        <div className="animate-fade-in-up-delayed">
          <ContactCTAs 
            contactInfo={content.methods} 
            variant="section"
          />
        </div>
        
        {/* Additional Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800 animate-fade-in-up-slow">
          <p className="text-sm text-gray-400 mb-4">
            Direct contact for immediate consultation
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-subtle"></span>
              Available for Middle East timezone
            </span>
            <span className="hidden sm:block text-gray-700">•</span>
            <span>Response within 24 hours</span>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Minimal Particles */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-blue-500/20 rounded-full animate-pulse-subtle" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-500/15 rounded-full animate-pulse-subtle" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
};

export default FinalCTA;