import React from 'react';
import { Linkedin, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { ContactInfo } from '../../types/onepage';

interface FooterProps {
  contactInfo: ContactInfo;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ contactInfo, className = '' }) => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    const subject = encodeURIComponent('POSTMAN Services Inquiry');
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}`;
  };

  const handleWhatsAppClick = () => {
    let cleanNumber = contactInfo.whatsapp.number.replace(/[^0-9]/g, '');
    
    if (!cleanNumber.startsWith('971') && !cleanNumber.startsWith('966') && !cleanNumber.startsWith('965')) {
      if (cleanNumber.startsWith('0')) {
        cleanNumber = '971' + cleanNumber.substring(1);
      } else if (cleanNumber.length === 9) {
        cleanNumber = '971' + cleanNumber;
      }
    }
    
    const message = encodeURIComponent('Hi Paul, I\'m interested in POSTMAN services.');
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInClick = () => {
    if (contactInfo.linkedin) {
      window.open(contactInfo.linkedin, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className={`py-12 px-4 border-t border-gray-800 bg-black ${className}`}>
      <div className="container-premium">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-premium-2xl text-white mb-4">POSTMAN</h3>
            <p className="text-sm text-gray-400 mb-4">
              AI Adoption • Advisory • Delivery
            </p>
            <p className="text-xs text-gray-500">
              20+ years in Middle East & Africa<br />
              Production-ready • Arabic-first • Security/Gov
            </p>
          </div>
          
          {/* Quick Contact */}
          <div className="text-center">
            <h4 className="text-lg font-medium text-white mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <button
                onClick={handleEmailClick}
                className="flex items-center justify-center mx-auto text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
                aria-label={`Send email to ${contactInfo.email}`}
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {contactInfo.email}
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center mx-auto text-sm text-gray-400 hover:text-green-400 transition-colors duration-300 group"
                aria-label={`Contact via WhatsApp at ${contactInfo.whatsapp.displayNumber}`}
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {contactInfo.whatsapp.displayNumber}
              </button>
              
              {contactInfo.linkedin && (
                <button
                  onClick={handleLinkedInClick}
                  className="flex items-center justify-center mx-auto text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  LinkedIn Profile
                  <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                </button>
              )}
            </div>
          </div>
          
          {/* Services */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-medium text-white mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>AI Adoption Strategy</div>
              <div>GenAI Implementation</div>
              <div>Senior Advisory</div>
              <div>Agents & Copilots</div>
              <div>RAG Pipelines</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-500">
              © {currentYear} POSTMAN. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <button 
                className="hover:text-gray-400 transition-colors duration-300"
                onClick={() => window.open('/privacy', '_blank')}
              >
                Privacy Policy
              </button>
              <span className="text-gray-700">•</span>
              <button 
                className="hover:text-gray-400 transition-colors duration-300"
                onClick={() => window.open('/terms', '_blank')}
              >
                Terms of Service
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {contactInfo.linkedin && (
                <button
                  onClick={handleLinkedInClick}
                  className="p-2 text-gray-500 hover:text-blue-400 transition-colors duration-300 hover-lift-subtle"
                  aria-label="Follow on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              )}
              
              <button
                onClick={handleEmailClick}
                className="p-2 text-gray-500 hover:text-white transition-colors duration-300 hover-lift-subtle"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="p-2 text-gray-500 hover:text-green-400 transition-colors duration-300 hover-lift-subtle"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;