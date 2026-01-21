import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { ContactInfo } from '../../types/onepage';

interface ContactCTAsProps {
  contactInfo: ContactInfo;
  variant?: 'hero' | 'section' | 'footer';
  className?: string;
}

const ContactCTAs: React.FC<ContactCTAsProps> = ({ 
  contactInfo, 
  variant = 'hero',
  className = '' 
}) => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('POSTMAN AI Adoption Services Inquiry');
    const body = encodeURIComponent(
      'Hi Paul,\n\nI\'m interested in learning more about POSTMAN\'s AI adoption and advisory services.\n\nBest regards'
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppClick = () => {
    // Middle East optimized number formatting
    // Remove all non-numeric characters and ensure proper international format
    let cleanNumber = contactInfo.whatsapp.number.replace(/[^0-9]/g, '');
    
    // If number doesn't start with country code, assume UAE (+971)
    if (!cleanNumber.startsWith('971') && !cleanNumber.startsWith('966') && !cleanNumber.startsWith('965')) {
      // Remove leading zero if present and add UAE country code
      if (cleanNumber.startsWith('0')) {
        cleanNumber = '971' + cleanNumber.substring(1);
      } else if (cleanNumber.length === 9) {
        cleanNumber = '971' + cleanNumber;
      }
    }
    
    const message = encodeURIComponent(
      contactInfo.whatsapp.message || 
      'Hi Paul, I\'m interested in POSTMAN AI adoption services. Could we schedule a consultation?'
    );
    
    // Use WhatsApp Web for better cross-platform compatibility
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Variant-specific styling
  const getVariantClasses = () => {
    switch (variant) {
      case 'hero':
        return 'flex flex-col sm:flex-row gap-6 justify-center';
      case 'section':
        return 'flex flex-col sm:flex-row gap-4 justify-center';
      case 'footer':
        return 'flex flex-col gap-3';
      default:
        return 'flex flex-col sm:flex-row gap-6 justify-center';
    }
  };

  const getButtonSize = () => {
    switch (variant) {
      case 'hero':
        return 'px-8 py-4 text-base';
      case 'section':
        return 'px-6 py-3 text-sm';
      case 'footer':
        return 'px-6 py-3 text-sm';
      default:
        return 'px-8 py-4 text-base';
    }
  };

  return (
    <div className={`${getVariantClasses()} ${className}`}>
      {/* Email CTA */}
      <button
        onClick={handleEmailClick}
        className={`
          ${getButtonSize()}
          bg-blue-600 text-white border border-blue-600 rounded-lg font-medium
          transition-all duration-300 ease-out
          hover:bg-blue-700 hover:border-blue-700 hover-lift
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
          active:transform active:scale-95
          group
        `}
        aria-label={`Send email to ${contactInfo.email} for POSTMAN AI adoption services inquiry`}
        type="button"
      >
        <Mail 
          className="w-5 h-5 mr-3 inline-block group-hover:scale-110 transition-transform duration-300" 
          aria-hidden="true"
        />
        Email Paul
      </button>
      
      {/* WhatsApp CTA */}
      <button
        onClick={handleWhatsAppClick}
        className={`
          ${getButtonSize()}
          bg-green-600 text-white border border-green-600 rounded-lg font-medium
          transition-all duration-300 ease-out
          hover:bg-green-700 hover:border-green-700 hover-lift
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black
          active:transform active:scale-95
          group
        `}
        aria-label={`Contact Paul via WhatsApp at ${contactInfo.whatsapp.displayNumber} for POSTMAN services`}
        type="button"
      >
        <MessageCircle 
          className="w-5 h-5 mr-3 inline-block group-hover:scale-110 transition-transform duration-300" 
          aria-hidden="true"
        />
        WhatsApp
      </button>
    </div>
  );
};

export default ContactCTAs;