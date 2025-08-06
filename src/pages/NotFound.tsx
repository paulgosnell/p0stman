import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Home, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Bot */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Bot className="w-24 h-24 text-blue-400 mx-auto" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Houston, we have a problem!</h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Looks like the P0STMAN got lost in the digital cosmos. Don't worry though, our AI is working on bringing it back!
          </p>

          {/* Animated Stars */}
          <div className="relative h-16">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 20, opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute left-1/2 top-1/2"
              >
                <Zap className="w-6 h-6 text-yellow-400 transform -rotate-45" />
              </motion.div>
            ))}
          </div>

          {/* Navigation Options */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
            <a
              href="mailto:hello@p0stman.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}