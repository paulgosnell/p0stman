import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake, Star, Bot, Sparkles, Gift } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Logo from '../components/Logo';

const snowflakes = Array(20).fill(null);
const stars = Array(15).fill(null);

export default function ChristmasCard() {
  const [showMessage, setShowMessage] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Helmet>
        <title>{`Season's Greetings from P0STMAN | Happy Holidays ${currentYear}`}</title>
        <meta name="description" content={`Wishing you a wonderful holiday season filled with joy, innovation, and success. Thank you for being part of our journey in ${currentYear}.`} />
        <meta property="og:title" content="Season's Greetings from P0STMAN" />
        <meta property="og:description" content={`Wishing you joy and innovation this holiday season. Happy ${currentYear}!`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://p0stman.com/seasons-greetings.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Season's Greetings from P0STMAN" />
        <meta name="twitter:description" content={`Wishing you joy and innovation this holiday season. Happy ${currentYear}!`} />
        <meta name="twitter:image" content="https://p0stman.com/seasons-greetings.png" />
      </Helmet>
      {/* Animated Snowflakes */}
      {snowflakes.map((_, i) => (
        <motion.div
          key={`snow-${i}`}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            opacity: 0
          }}
          animate={{
            y: window.innerHeight + 20,
            opacity: [0, 1, 1, 0],
            x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 100}px)`
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        >
          <Snowflake className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Twinkling Stars */}
      {stars.map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          <Star className="w-3 h-3 text-gray-400" strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5
          }}
          className="mb-12"
        >
          <Logo className="text-3xl md:text-4xl" useGradient={false} />
        </motion.div>

        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto space-y-8"
            >
              <div className="relative">
                <h1 className="relative text-4xl md:text-6xl font-light mb-6 text-white">
                  Season's Greetings!
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                Wishing you a wonderful holiday season filled with joy, innovation, and success.
                Thank you for being part of our journey in {currentYear}.
              </p>

              <div className="flex flex-wrap justify-center gap-4 py-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800"
                >
                  <Bot className="w-8 h-8 text-gray-400 mb-2" strokeWidth={1.5} />
                  <p className="text-sm font-light text-gray-400">Building the Future</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800"
                >
                  <Gift className="w-8 h-8 text-gray-400 mb-2" strokeWidth={1.5} />
                  <p className="text-sm font-light text-gray-400">Spreading Joy</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800"
                >
                  <Sparkles className="w-8 h-8 text-gray-400 mb-2" strokeWidth={1.5} />
                  <p className="text-sm font-light text-gray-400">Creating Magic</p>
                </motion.div>
              </div>

              <div className="text-gray-500 text-sm font-light">
                <p>Here's to an amazing {currentYear + 1}!</p>
                <p className="mt-2">- Paul & the P0STMAN team</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </HelmetProvider>
  );
}
