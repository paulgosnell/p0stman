import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroLuxury() {
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
          <h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-light leading-[0.9] tracking-tight mb-8"
            style={{
              color: '#FFFFFF',
              fontFamily: "'Playfair Display', 'Georgia', serif",
              textShadow: '0 8px 40px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)'
            }}
          >
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
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)'
            }}
          >
            AI-powered product studio building the impossible — fast, brilliant, limitless
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/case-studies"
              className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all font-light text-lg"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all font-light text-lg"
            >
              Start Your Project
            </Link>
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
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-light"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            Scroll
          </span>
          <ArrowDown className="w-5 h-5 text-white/60" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
