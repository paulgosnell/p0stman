import React from 'react';
import { Bot } from 'lucide-react';
import Logo from './Logo';
import { downloadAsImage } from '../lib/downloadUtils';

export default function SocialShare() {
  const handleDownload = () => {
    downloadAsImage('social-share-card', 'p0stman-social-share');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <div 
        id="social-share-card"
        className="w-[600px] h-[315px] bg-gradient-to-br from-gray-900 to-black relative overflow-hidden border-2 border-dashed border-gray-600 rounded-lg"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-bg.png')] bg-cover bg-center opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
          {/* Logo */}
          <div className="mb-8">
            <Logo className="text-6xl" useGradient />
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-3 mb-8">
            <Bot className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 text-xl font-medium">AI-Powered Product Studio</span>
          </div>

          {/* Contact */}
          <div className="text-gray-400 text-base space-y-2 text-center">
            <p>POSTMAN.com</p>
            <p>hello@POSTMAN.com</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-2xl rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-2xl rounded-full transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <p className="mt-4 text-gray-400 text-sm">Size: 600x315px - Perfect for social media sharing</p>
      <button
        onClick={handleDownload}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Download Image
      </button>
    </div>
  );
}