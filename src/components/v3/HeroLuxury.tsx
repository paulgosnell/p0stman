import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedWaveform from './AnimatedWaveform';
import { useVoiceWaveform } from '../../hooks/useVoiceWaveform';

const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_8701k6q7xc5af4f8dkjj8pqda592';

const CASE_STUDY_VIDEOS = [
  {
    video: 'https://cdn.pixabay.com/video/2022/11/24/140352-774824285_large.mp4',
    title: 'Luxury Travel Sweden',
    subtitle: 'AI-Powered Travel',
    path: '/case-study/luxury-travel-sweden'
  },
  {
    video: 'https://api.chilledsites.com/storage/v1/object/public/p0stman/Yacht_Gliding_Through_Calm_Sea.mp4',
    title: 'YachtOS Command',
    subtitle: 'Maritime Intelligence',
    path: '/case-study/yachtos'
  },
  {
    video: 'https://videos.pexels.com/video-files/856694/856694-hd_1920_1080_25fps.mp4',
    title: 'Pathfinder',
    subtitle: 'ADHD Coaching',
    path: '/case-study/pathfinder'
  },
  {
    video: 'https://videos.pexels.com/video-files/3995973/3995973-uhd_2560_1440_25fps.mp4',
    title: 'ChilledSites',
    subtitle: 'AI Website Builder',
    path: '/case-study/chilled-sites'
  },
  {
    video: 'https://cdn.pixabay.com/video/2023/11/19/189731-886596163_large.mp4',
    title: 'Fitlink',
    subtitle: 'Fitness Platform',
    path: '/case-study/fitlink'
  },
  {
    video: 'https://cdn.pixabay.com/video/2022/03/03/109471-685078475_large.mp4',
    title: 'Harmony',
    subtitle: 'Mental Wellness',
    path: '/case-study/harmony'
  }
];

export default function HeroLuxury() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const voiceAgent = useVoiceWaveform(AGENT_ID);

  // Cycle through videos every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % CASE_STUDY_VIDEOS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    // Scroll to Selected Work section
    const workSection = document.getElementById('selected-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartVoice = () => {
    try {
      voiceAgent.startConversation();
      setIsVoiceActive(true);
    } catch (error) {
      console.error('Failed to start voice conversation:', error);
      alert('Unable to start voice conversation. Please ensure microphone access is allowed and try again.');
    }
  };

  const handleStopVoice = () => {
    voiceAgent.stopConversation();
    setIsVoiceActive(false);
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const currentCaseStudy = CASE_STUDY_VIDEOS[currentVideoIndex];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Full-Screen Cycling Video Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideoIndex}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <source src={currentCaseStudy.video} type="video/mp4" />
          </motion.video>
        </AnimatePresence>

        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Case Study Link - Bottom Right (hidden on mobile to avoid overlap) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVideoIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block absolute bottom-8 right-8 z-20"
        >
          <Link
            to={currentCaseStudy.path}
            className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all"
          >
            <div className="text-left">
              <div className="text-xs tracking-[0.2em] uppercase text-white/60 font-light mb-1">
                {currentCaseStudy.subtitle}
              </div>
              <div className="text-white font-light text-lg">
                {currentCaseStudy.title}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-8 w-full max-w-[90rem] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline - Dramatic Typography */}
          <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] font-light leading-[0.95] tracking-tight mb-6 sm:mb-8 text-white px-2">
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-white/90 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            AI-powered product studio building the impossible — fast, brilliant, limitless
          </motion.p>

          {/* Voice Waveform CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center mb-16 sm:mb-0"
          >
            {/* Voice Waveform Button */}
            <div className="relative group">
              <div className="w-48 sm:w-64 h-12 sm:h-16 flex items-center justify-center cursor-pointer">
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
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm text-black rounded-lg text-xs sm:text-sm font-light">
                  {voiceAgent.isActive ? 'Click to end call' : 'Talk to our AI agent'}
                </div>
              </div>
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
