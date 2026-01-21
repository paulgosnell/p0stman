import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Home, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Bot */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Bot className="w-24 h-24 text-gray-400 mx-auto" strokeWidth={1.5} />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-4 text-gray-900"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-light text-gray-900">Houston, we have a problem!</h2>
          <p className="text-gray-600 max-w-md mx-auto font-light">
            Looks like the POSTMAN got lost in the digital cosmos. Don't worry though, our AI is working on bringing it back!
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
                <Zap className="w-6 h-6 text-gray-400 transform -rotate-45" strokeWidth={1.5} />
              </motion.div>
            ))}
          </div>

          {/* Navigation Options */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-light"
            >
              <Home className="w-5 h-5" strokeWidth={1.5} />
              Return Home
            </Link>
            <a
              href="mailto:hello@p0stman.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-light"
            >
              <Rocket className="w-5 h-5" strokeWidth={1.5} />
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
