import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, Check, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OnePager() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>P0STMAN | We Build Fast. You Scale Fast.</title>
        <meta name="description" content="Built a yacht management platform in 4 weeks. Agency quoted 3 months. 1000+ products shipped over 20 years with AI workflows." />
      </Helmet>

      {/* Print Button - Hidden in print */}
      <div className="fixed top-6 right-6 z-50 no-print">
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-light text-sm hover:bg-pink-600 transition-colors flex items-center gap-2 shadow-lg"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 px-6 py-20">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden no-print">
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider mb-2">
                P0STMAN
              </h1>
              <p className="text-blue-100 text-sm uppercase tracking-widest font-light">
                AI-Powered Product Studio
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            >
              Built a yacht management<br />
              platform in 4 weeks.
              <br />
              <span className="text-pink-200">Agency quoted 3 months.</span>
            </motion.h2>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/90 text-sm md:text-base font-light"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-pink-300" />
                <span>1000+ products shipped</span>
              </div>
              <div className="hidden md:block text-white/30">|</div>
              <div>20 years experience</div>
              <div className="hidden md:block text-white/30">|</div>
              <div className="text-pink-200 font-medium">40% faster delivery</div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-xl md:text-2xl text-white/90 font-light"
            >
              We've shipped 1000+ products over 20 years.<br />
              Now we do it with AI workflows — <span className="font-medium text-white">same quality, 40% faster, leaner cost.</span>
            </motion.p>
          </div>
        </section>

        {/* Recent Builds Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Recent Builds
          </h3>

          <div className="space-y-12">
            {/* Yacht OS */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:border-blue-300 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Yacht OS — AI-Native Platform
                  </h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap ml-4">
                    4 Weeks
                  </span>
                </div>

                <p className="text-base md:text-lg text-gray-600 font-light mb-4 leading-relaxed">
                  <span className="font-medium text-gray-800">What:</span> AI-powered yacht management with vision, voice, and chat integration
                </p>

                <p className="text-base md:text-lg text-gray-600 font-light mb-4 leading-relaxed">
                  <span className="font-medium text-gray-800">Timeline:</span> 4 weeks, production-ready
                </p>

                <div className="flex items-start gap-2 bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <span className="text-pink-600 font-semibold text-sm">The Kicker:</span>
                  <p className="text-gray-800 text-sm md:text-base font-medium flex-1">
                    Agency quoted 3 months with 10-person team. We did it with 3.
                  </p>
                </div>
              </div>
            </div>

            {/* ADHD App */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:border-blue-300 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                    ADHD Coaching App — Mental Health Platform
                  </h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap ml-4">
                    4 Weeks
                  </span>
                </div>

                <p className="text-base md:text-lg text-gray-600 font-light mb-4 leading-relaxed">
                  <span className="font-medium text-gray-800">What:</span> Mental health app + website, trained on professional coaching frameworks
                </p>

                <p className="text-base md:text-lg text-gray-600 font-light mb-4 leading-relaxed">
                  <span className="font-medium text-gray-800">Timeline:</span> 4 weeks (2 sprints)
                </p>

                <div className="flex items-start gap-2 bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <span className="text-pink-600 font-semibold text-sm">Results:</span>
                  <p className="text-gray-800 text-sm md:text-base font-medium flex-1">
                    Live testing, positive feedback from real users already
                  </p>
                </div>
              </div>
            </div>

            {/* Luxury Sweden */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:border-blue-300 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Luxury Sweden Travel — AI Concierge Website
                  </h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium whitespace-nowrap ml-4">
                    Weeks
                  </span>
                </div>

                <p className="text-base md:text-lg text-gray-600 font-light mb-4 leading-relaxed">
                  <span className="font-medium text-gray-800">What:</span> Context-aware AI concierge (knows if you clicked map/event/review), auto-populates CRM
                </p>

                <p className="text-base md:text-lg text-gray-600 font-light mb-4 leading-relaxed">
                  <span className="font-medium text-gray-800">Timeline:</span> Weeks, not months
                </p>

                <div className="flex items-start gap-2 bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <span className="text-pink-600 font-semibold text-sm">Results:</span>
                  <p className="text-gray-800 text-sm md:text-base font-medium flex-1">
                    Client used it at trade show this week — already getting praise for AI UX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What We Do
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Websites & Apps
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  MVP to enterprise scale
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  AI Integration
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  Voice, chat, agents, automation
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Production-Ready Code
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  In weeks, not months
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Your timeline. Your budget.<br />
              <span className="text-pink-200">Our speed.</span>
            </h3>

            <div className="space-y-4 text-white/90">
              <div className="flex items-center justify-center gap-3 text-lg">
                <ExternalLink size={20} className="text-pink-300" />
                <a href="https://p0stman.com" className="hover:text-pink-200 transition-colors font-light">
                  p0stman.com
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-base font-light">
                <a href="mailto:contact@p0stman.com" className="hover:text-pink-200 transition-colors">
                  contact@p0stman.com
                </a>
                <span className="hidden md:block text-white/30">|</span>
                <a href="https://linkedin.com/company/p0stman" className="hover:text-pink-200 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm font-light">
                P0STMAN — AI-Powered Product Studio
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }

          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          /* Ensure backgrounds print */
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          @page {
            margin: 0;
            size: A4;
          }

          /* Remove animations for print */
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
