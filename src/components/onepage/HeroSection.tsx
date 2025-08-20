import React from 'react';
import { HeroContent, ContactInfo } from '../../types/onepage';
import ContactCTAs from './ContactCTAs';

interface HeroSectionProps {
  content: HeroContent;
  contactMethods: ContactInfo;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content, contactMethods }) => {

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-premium-gradient premium-grid">
      {/* Content Container */}
      <div className="container-premium text-center relative z-10">
        {/* Main Headline */}
        <h1 className="text-premium-9xl text-white mb-6 animate-fade-in-up">
          {content.headline}
        </h1>
        
        {/* Subheading */}
        <p className="text-premium-3xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up-delayed">
          {content.subheadline}
        </p>
        
        {/* CTA Buttons */}
        <div className="mb-16 animate-fade-in-up-delayed">
          <ContactCTAs 
            contactInfo={contactMethods} 
            variant="hero"
          />
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up-slow">
          {content.socialProof.map((proof, index) => (
            <span 
              key={index} 
              className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-sm text-gray-400 hover-lift-subtle backdrop-blur-sm"
            >
              {proof}
            </span>
          ))}
        </div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        
        {/* Minimal Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse-subtle" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse-subtle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-cyan-500/20 rounded-full animate-pulse-subtle" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default HeroSection;