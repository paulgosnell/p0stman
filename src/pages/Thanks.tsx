import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, ArrowLeft, Bot, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Thanks() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-4">
      <div className="fixed top-8 left-8 z-50">
        <Link to="/">
          <Logo className="text-xl" useGradient />
        </Link>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5 
          }}
          className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold">Thank You for Your Purchase!</h1>
          
          <p className="text-xl text-gray-300">
            We're excited to have you on board. You'll receive an email shortly with all the details.
          </p>

          <div className="flex flex-col items-center gap-8 mt-12">
            <div className="grid gap-6 md:grid-cols-2 w-full">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <Mail className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="font-medium mb-2">Check Your Email</h3>
                <p className="text-sm text-gray-400">
                  Important information about your purchase will arrive in your inbox soon
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <Bot className="w-6 h-6 text-purple-400 mb-4" />
                <h3 className="font-medium mb-2">Next Steps</h3>
                <p className="text-sm text-gray-400">
                  Follow the instructions in your email to get started with your purchase
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-full" />
              <Link
                to="/"
                className="relative flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 backdrop-blur-sm rounded-full border border-gray-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + i * 0.2,
                  duration: 0.5
                }}
                className="absolute"
                style={{
                  top: `${20 + i * 30}%`,
                  left: `${10 + i * 40}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Sparkles className={`w-${6 + i * 2} h-${6 + i * 2} text-blue-400/20`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}