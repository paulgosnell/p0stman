import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, ArrowLeft, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Thanks() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-4">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Thank You | POSTMAN</title>
      </Helmet>
      <div className="fixed top-8 left-8 z-50">
        <Link to="/">
          <Logo className="text-xl" useGradient={false} />
        </Link>
      </div>

      <div className="max-w-[90rem] mx-auto px-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5
          }}
          className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-12 h-12 text-white" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light">Thank You for Your Purchase</h1>

          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
            We're excited to have you on board. You'll receive an email shortly with all the details.
          </p>

          <div className="flex flex-col items-center gap-8 mt-12">
            <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <Mail className="w-6 h-6 text-gray-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-light text-lg mb-2 text-gray-900">Check Your Email</h3>
                <p className="text-sm font-light text-gray-600">
                  Important information about your purchase will arrive in your inbox soon
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <Bot className="w-6 h-6 text-gray-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-light text-lg mb-2 text-gray-900">Next Steps</h3>
                <p className="text-sm font-light text-gray-600">
                  Follow the instructions in your email to get started with your purchase
                </p>
              </div>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 rounded-full transition-colors font-light"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
              <span>Return Home</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
