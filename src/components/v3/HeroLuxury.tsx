import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedWaveform from './AnimatedWaveform';
import { useVoiceWaveform } from '../../hooks/useVoiceWaveform';
import VoiceAgentSettings, { VoiceSettings } from './VoiceAgentSettings';

const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'agent_8701k6q7xc5af4f8dkjj8pqda592';

const DEFAULT_VOICE_SETTINGS: VoiceSettings = {
  voice: 'Puck',
  silenceDuration: 500,
  threshold: 0.5,
};

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
    video: 'https://cdn.pixabay.com/video/2018/10/02/18534-293472901_large.mp4',
    title: 'Serenity',
    subtitle: 'Mental Wellness',
    path: '/case-study/serenity'
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
    subtitle: 'Fintech Platform',
    path: '/case-study/harmony'
  }
];

export default function HeroLuxury() {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(DEFAULT_VOICE_SETTINGS);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const voiceAgent = useVoiceWaveform(AGENT_ID, {
    voice: voiceSettings.voice,
    threshold: voiceSettings.threshold,
    silenceDuration: voiceSettings.silenceDuration,
  });

  // Cycle through videos every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % CASE_STUDY_VIDEOS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Cleanup camera stream on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
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

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 320, height: 240 }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraActive(true);

      // If voice is active, we could send a frame to the AI
      // For now, just enable the camera view
    } catch (error) {
      console.error('Failed to start camera:', error);
      alert('Unable to access camera. Please ensure camera permissions are allowed.');
    }
  };

  const handleStopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
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

      {/* User Camera Feed - Picture in Picture style */}
      <AnimatePresence>
        {isCameraActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 right-8 z-30 w-48 h-36 rounded-lg overflow-hidden border-2 border-white/30 shadow-2xl"
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover transform -scale-x-100"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
              <span className="text-xs text-white/80 font-light">You</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            {/* Voice Waveform with Controls */}
            <div className="w-48 sm:w-64 h-12 sm:h-16 flex items-center justify-center">
              <AnimatedWaveform
                barCount={40}
                color="#FFFFFF"
                hoverColor="#3B82F6"
                animate={!voiceAgent.isActive}
                frequencyData={voiceAgent.frequencyData}
                isLive={voiceAgent.isActive}
                onVoiceStart={handleStartVoice}
                onVoiceStop={handleStopVoice}
                onCameraStart={handleStartCamera}
                onCameraStop={handleStopCamera}
                isVoiceActive={isVoiceActive}
                isCameraActive={isCameraActive}
                showControls={true}
              />
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

      {/* Voice Settings Button - Bottom Left */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => setShowSettings(true)}
        className="hidden md:flex absolute bottom-8 left-8 z-20 items-center gap-0 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all group overflow-hidden"
        aria-label="Voice agent settings"
      >
        <Settings className="w-4 h-4 text-white/60 group-hover:text-white group-hover:rotate-90 transition-all duration-300" strokeWidth={1.5} />
        <span className="text-xs text-white/60 group-hover:text-white transition-all font-light max-w-0 group-hover:max-w-[100px] group-hover:ml-2 overflow-hidden whitespace-nowrap">
          Voice Settings
        </span>
      </motion.button>

      {/* Voice Settings Panel */}
      <VoiceAgentSettings
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        settings={voiceSettings}
        onSettingsChange={setVoiceSettings}
      />
    </section>
  );
}
