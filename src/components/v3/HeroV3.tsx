import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedWaveform from './AnimatedWaveform';

export default function HeroV3() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center py-32 md:py-40 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-0 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Column - Copy */}
          <div className="flex flex-col justify-center space-y-8 md:space-y-10">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-gray-900 mb-6">
                Faster Than Your Agency Can Think
              </h1>
              <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed">
                Ship production AI products 40% faster. All three: speed, quality, price. AI-first workflows. Human validation. Ready to deploy.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-light text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group">
                Chat with AI Agent
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-900 rounded-lg font-light text-base hover:bg-gray-50 transition-colors">
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Column - Animated Waveform */}
          <div className="flex flex-col items-center justify-center h-96 md:h-full md:min-h-[500px] relative">
            {/* Subtle frame effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-50 blur-2xl" />

            {/* Waveform container */}
            <div className="relative z-10 w-full h-64 md:h-80 flex items-center justify-center px-8 md:px-0">
              <AnimatedWaveform
                barCount={60}
                color="#0066FF"
                height="h-64"
                animate={true}
              />
            </div>

            {/* Status text */}
            <p className="relative z-10 text-sm text-gray-500 font-light mt-8">
              AI Agent Ready • 6 Days to Production
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
