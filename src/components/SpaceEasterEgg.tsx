import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  Zap, 
  Rocket, 
  Globe, 
  Star,
  Moon,
  Sun
} from 'lucide-react';

// Floating star component
const FloatingStar = ({ delay = 0, size = 'small' }) => {
  const sizeClasses = {
    small: 'w-1 h-1',
    medium: 'w-2 h-2',
    large: 'w-3 h-3'
  };

  return (
    <motion.div
      className={`absolute bg-white rounded-full ${sizeClasses[size]}`}
      initial={{ 
        x: Math.random() * window.innerWidth, 
        y: Math.random() * window.innerHeight,
        opacity: 0,
        scale: 0
      }}
      animate={{ 
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0, 1, 0.8, 1.2, 0],
        rotate: 360
      }}
      transition={{ 
        duration: Math.random() * 8 + 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%'
      }}
    />
  );
};

// Shooting star component
const ShootingStar = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      initial={{ 
        x: -100, 
        y: Math.random() * window.innerHeight * 0.5,
        opacity: 0
      }}
      animate={{ 
        x: window.innerWidth + 100,
        y: Math.random() * window.innerHeight * 0.5 + 200,
        opacity: [0, 1, 1, 0]
      }}
      transition={{ 
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 10 + 5,
        ease: "linear"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-20 h-0.5 -translate-y-0.5" />
    </motion.div>
  );
};

// Planet component
const Planet = ({ size, color, x, y, rotationSpeed = 1 }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${size} ${color} shadow-2xl`}
      style={{ left: x, top: y }}
      animate={{ rotate: 360 }}
      transition={{ 
        duration: 20 / rotationSpeed,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
    </motion.div>
  );
};

// Nebula cloud component
const NebulaCloud = ({ x, y, color, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48',
    large: 'w-64 h-64'
  };

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} rounded-full opacity-20 blur-xl ${color}`}
      style={{ left: x, top: y }}
      animate={{ 
        scale: [1, 1.2, 0.8, 1],
        opacity: [0.2, 0.4, 0.1, 0.2]
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Constellation component
const Constellation = ({ points, x, y }) => {
  return (
    <svg 
      className="absolute" 
      style={{ left: x, top: y }}
      width="200" 
      height="200"
    >
      {points.map((point, i) => (
        <g key={i}>
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="2"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ 
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {i < points.length - 1 && (
            <motion.line
              x1={point.x}
              y1={point.y}
              x2={points[i + 1].x}
              y2={points[i + 1].y}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          )}
        </g>
      ))}
    </svg>
  );
};

// Floating message component
const FloatingMessage = ({ message, x, y, delay = 0 }) => {
  return (
    <motion.div
      className="absolute bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg p-4 text-white text-sm max-w-xs"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        y: [20, 0, 0, -20]
      }}
      transition={{ 
        duration: 6,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 10
      }}
    >
      {message}
    </motion.div>
  );
};

export default function SpaceEasterEgg({ isOpen, onClose }) {
  const [showMessages, setShowMessages] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShowMessages(true);
      // Add space ambient sound effect (optional)
      // if (audioRef.current) {
      //   audioRef.current.play();
      // }
    } else {
      setShowMessages(false);
    }
  }, [isOpen]);

  const constellations = [
    {
      points: [
        { x: 20, y: 30 },
        { x: 60, y: 20 },
        { x: 100, y: 40 },
        { x: 80, y: 80 },
        { x: 40, y: 70 }
      ],
      x: '10%',
      y: '20%'
    },
    {
      points: [
        { x: 30, y: 20 },
        { x: 70, y: 30 },
        { x: 50, y: 60 },
        { x: 90, y: 80 }
      ],
      x: '70%',
      y: '40%'
    }
  ];

  const messages = [
    "🚀 Welcome to the P0STMAN universe!",
    "✨ Where AI meets infinite possibilities",
    "🌟 Building the future, one line of code at a time",
    "🛸 Thanks for discovering our secret space!",
    "🌌 The cosmos of creativity awaits..."
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            onClick={onClose}
          >
            {/* Space Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black overflow-hidden">
              
              {/* Animated Grid */}
              <div className="absolute inset-0">
                <svg className="w-full h-full">
                  <defs>
                    <pattern
                      id="space-grid"
                      width="100"
                      height="100"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 100 0 L 0 0 0 100"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.05)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#space-grid)" />
                </svg>
              </div>

              {/* Stars */}
              {Array.from({ length: 100 }).map((_, i) => (
                <FloatingStar 
                  key={i} 
                  delay={i * 0.1} 
                  size={i % 3 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small'} 
                />
              ))}

              {/* Shooting Stars */}
              {Array.from({ length: 5 }).map((_, i) => (
                <ShootingStar key={i} delay={i * 2} />
              ))}

              {/* Planets */}
              <Planet 
                size="w-16 h-16" 
                color="bg-gradient-to-br from-blue-400 to-blue-600" 
                x="15%" 
                y="25%" 
                rotationSpeed={1.5}
              />
              <Planet 
                size="w-12 h-12" 
                color="bg-gradient-to-br from-red-400 to-red-600" 
                x="75%" 
                y="15%" 
                rotationSpeed={0.8}
              />
              <Planet 
                size="w-20 h-20" 
                color="bg-gradient-to-br from-purple-400 to-purple-600" 
                x="60%" 
                y="70%" 
                rotationSpeed={0.5}
              />
              <Planet 
                size="w-8 h-8" 
                color="bg-gradient-to-br from-green-400 to-green-600" 
                x="85%" 
                y="60%" 
                rotationSpeed={2}
              />

              {/* Nebula Clouds */}
              <NebulaCloud 
                x="20%" 
                y="40%" 
                color="bg-gradient-to-br from-pink-500 to-purple-500" 
                size="large"
              />
              <NebulaCloud 
                x="70%" 
                y="20%" 
                color="bg-gradient-to-br from-blue-500 to-cyan-500" 
                size="medium"
              />
              <NebulaCloud 
                x="40%" 
                y="80%" 
                color="bg-gradient-to-br from-yellow-500 to-orange-500" 
                size="small"
              />

              {/* Constellations */}
              {constellations.map((constellation, i) => (
                <Constellation 
                  key={i}
                  points={constellation.points}
                  x={constellation.x}
                  y={constellation.y}
                />
              ))}

              {/* Floating Messages */}
              {showMessages && messages.map((message, i) => (
                <FloatingMessage
                  key={i}
                  message={message}
                  x={`${Math.random() * 60 + 20}%`}
                  y={`${Math.random() * 60 + 20}%`}
                  delay={i * 2}
                />
              ))}

              {/* Central Logo/Icon */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  rotate: [0, 360, 0]
                }}
                transition={{ 
                  duration: 2,
                  ease: "easeOut"
                }}
              >
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <Rocket className="w-16 h-16 text-white" />
                  </div>
                  
                  {/* Orbiting Icons */}
                  {[Sparkles, Zap, Globe, Star].map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-gray-100 backdrop-blur-sm rounded-full flex items-center justify-center"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '0 0'
                      }}
                      animate={{
                        rotate: 360,
                        x: Math.cos((i * Math.PI) / 2) * 80 - 16,
                        y: Math.sin((i * Math.PI) / 2) * 80 - 16
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5
                      }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Pulsing Rings */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-200 rounded-full"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 3, 4],
                    opacity: [1, 0.5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1.3,
                    ease: "easeOut"
                  }}
                  style={{
                    width: '200px',
                    height: '200px'
                  }}
                />
              ))}

              {/* Interactive Elements */}
              <motion.div
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
              >
                <motion.div
                  className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-white max-w-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-2xl font-bold mb-2">🌌 You Found It!</h3>
                  <p className="text-sm opacity-80 mb-4">
                    Welcome to the P0STMAN universe - where AI-powered development 
                    meets infinite creativity. Thanks for exploring!
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs opacity-60">
                    <Sparkles className="w-4 h-4" />
                    <span>Built with love and lots of coffee ☕</span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 1 }}
            onClick={onClose}
            className="fixed top-8 right-8 z-60 w-12 h-12 bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Hidden audio element for ambient space sounds */}
          <audio ref={audioRef} loop>
            {/* Add space ambient sound file here if desired */}
            {/* <source src="/sounds/space-ambient.mp3" type="audio/mpeg" /> */}
          </audio>
        </>
      )}
    </AnimatePresence>
  );
}