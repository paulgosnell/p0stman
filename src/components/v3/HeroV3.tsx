import React, { useState } from 'react';
import { ArrowRight, X, Mic, Volume2, Loader } from 'lucide-react';
import AnimatedWaveform from './AnimatedWaveform';
import { useVoiceWaveform } from '../../hooks/useVoiceWaveform';

const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_8701k6q7xc5af4f8dkjj8pqda592';

export default function HeroV3() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const voiceAgent = useVoiceWaveform(AGENT_ID);

  const handleStartVoice = () => {
    setIsVoiceActive(true);
    voiceAgent.startConversation();
  };

  const handleStopVoice = () => {
    setIsVoiceActive(false);
    voiceAgent.stopConversation();
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center py-40 md:py-48 overflow-hidden bg-white dark:bg-gray-900">

      <div className="relative max-w-6xl mx-auto px-6 md:px-0 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          {/* Left Column - Copy */}
          <div className="flex flex-col justify-center space-y-8 md:space-y-10">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                Faster Than Your Agency Can Think
              </h1>
              <p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                Ship production-ready products 40% faster. AI agents, websites, mobile apps. All three: speed, quality, price. AI-first workflows. Human validation. Ready to deploy.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleStartVoice}
                disabled={voiceAgent.isActive}
                className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-light text-base hover:bg-pink-600 disabled:bg-gray-400 transition-colors flex items-center justify-center gap-2 group"
              >
                {voiceAgent.isConnecting ? 'Connecting...' : 'Chat with AI Agent'}
                {!voiceAgent.isConnecting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('agents');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-light text-base hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Column - Animated Waveform */}
          <div className="flex flex-col items-center justify-center h-96 md:h-full md:min-h-[500px] relative">
            {/* Subtle frame effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-transparent opacity-50 blur-2xl" />

            {/* Waveform container */}
            <div className="relative z-10 w-full h-64 md:h-80 flex items-center justify-center px-8 md:px-0 group">
              <AnimatedWaveform
                barCount={60}
                color="#0066FF"
                hoverColor="#FF1493"
                animate={!voiceAgent.isActive}
                frequencyData={voiceAgent.frequencyData}
                isLive={voiceAgent.isActive}
                onBarClick={() => !voiceAgent.isActive && handleStartVoice()}
              />

              {/* Hover hint - only show on demo mode */}
              {!voiceAgent.isActive && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="text-center space-y-2">
                    <div className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                      <p className="text-sm font-light">Click to talk</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Status and Controls - Below Waveform */}
            <div className="relative z-10 mt-8 w-full flex flex-col items-center gap-4">
              {/* Status Indicator */}
              {voiceAgent.isActive && (
                <div className="flex items-center gap-2 text-sm font-light text-gray-600 dark:text-gray-400">
                  {voiceAgent.isConnecting && (
                    <>
                      <Loader size={16} className="animate-spin text-blue-600" />
                      <span>Connecting...</span>
                    </>
                  )}
                  {voiceAgent.isConnected && !voiceAgent.isSpeaking && (
                    <>
                      <Mic size={16} className="text-blue-600" />
                      <span>Listening...</span>
                    </>
                  )}
                  {voiceAgent.isConnected && voiceAgent.isSpeaking && (
                    <>
                      <Volume2 size={16} className="text-blue-600 animate-pulse" />
                      <span>AI is speaking...</span>
                    </>
                  )}
                </div>
              )}

              {/* Control Button - Subtle when active */}
              {voiceAgent.isActive && (
                <button
                  onClick={handleStopVoice}
                  className="px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-light text-sm transition-colors flex items-center gap-2 group"
                >
                  <X size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Stop</span>
                </button>
              )}

              {/* Idle State Text */}
              {!voiceAgent.isActive && (
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
                  AI Agent Ready • 6 Days to Production
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
