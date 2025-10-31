import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AnimatedWaveform from './AnimatedWaveform';
import { useVoiceWaveform } from '../../hooks/useVoiceWaveform';

const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_8701k6q7xc5af4f8dkjj8pqda592';

export default function HeroLuxury() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const voiceAgent = useVoiceWaveform(AGENT_ID);

  const scrollToWork = () => {
    // Scroll to Selected Work section
    const workSection = document.getElementById('selected-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartVoice = () => {
    setIsVoiceActive(true);
    voiceAgent.startConversation();
  };

  const handleStopVoice = () => {
    setIsVoiceActive(false);
    voiceAgent.stopConversation();
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Full-Screen Space Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2023/11/19/189734-886596182_large.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-8 w-full max-w-[90rem] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline - Dramatic Typography */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-light leading-[0.9] tracking-tight mb-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Ambition.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Accelerated.
            </motion.div>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            AI-powered product studio building the impossible — fast, brilliant, limitless
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={scrollToWork}
              className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all font-light text-lg"
            >
              View Our Work
            </button>

            {/* Voice Waveform Button */}
            <div className="relative group">
              <div className="w-64 h-16 flex items-center justify-center cursor-pointer">
                <AnimatedWaveform
                  barCount={40}
                  color="#FFFFFF"
                  hoverColor="#3B82F6"
                  animate={!voiceAgent.isActive}
                  frequencyData={voiceAgent.frequencyData}
                  isLive={voiceAgent.isActive}
                  onBarClick={() => !voiceAgent.isActive ? handleStartVoice() : handleStopVoice()}
                />
              </div>

              {/* Hover hint */}
              {!voiceAgent.isActive && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black rounded-lg text-sm font-light">
                    Talk to our AI agent
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-light">
            Scroll
          </span>
          <ArrowDown className="w-5 h-5 text-white/60" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
