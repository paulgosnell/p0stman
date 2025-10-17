import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, CheckCircle, Clock, ArrowRight, PlayCircle } from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import SupportTopics from '../components/support/SupportTopics';
import SupportBenefits from '../components/support/SupportBenefits';
import SupportFAQ from '../components/support/SupportFAQ';
import ServicesGrid from '../components/ServicesGrid';
import SupportModal from '../components/modals/SupportModal';
import VideoModal from '../components/modals/VideoModal';

export default function Support() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Bolt Builder Support | Expert Guidance</title>
          <meta name="description" content="Get expert guidance and support for your development projects. One-on-one sessions with screen sharing, code review, and direct problem solving." />
          <meta name="keywords" content="technical support, expert guidance, development help, code review, debugging assistance" />
          <meta property="og:title" content="Expert Support | One-on-One Technical Guidance" />
          <meta property="og:description" content="Get personalized support and expert guidance for your development projects." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Expert Support | One-on-One Technical Guidance" />
          <meta name="twitter:description" content="Get personalized support and expert guidance for your development projects." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/support" />
        </Helmet>

        <HeaderV3Global />

        <section ref={ref} className="relative min-h-[70vh] flex items-center bg-white text-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Bot className="w-6 h-6 text-indigo-400" />
                      <span className="text-indigo-400 font-medium">Expert Support</span>
                    </div>

                    <h1 className="text-5xl font-thin mb-6">
                      Get Unstuck with Expert Guidance
                    </h1>
                    
                    <p className="text-xl text-gray-600 mb-8">
                      Book a 45-minute support session for personalized help with your Bolt Builder projects. Get expert guidance on integrations, deployment, debugging, and more.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-indigo-400" />
                        <span>One-on-one virtual support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-indigo-400" />
                        <span>Screen sharing for direct assistance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-indigo-400" />
                        <span>Expert guidance and troubleshooting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-indigo-400" />
                        <span>Flexible scheduling options</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                      <div>
                        <div className="text-3xl font-light mb-1">$100</div>
                        <div className="text-gray-400">45-minute session</div>
                      </div>
                      <button
                        onClick={() => setShowSupportModal(true)}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Book Your Session
                        <ArrowRight className="ml-2 inline-block w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl transform rotate-6" />
                  <div className="relative z-10 bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 bg-gray-50 backdrop-blur-sm rounded-xl p-6">
                        <Clock className="w-8 h-8 text-indigo-400" />
                        <div>
                          <div className="text-sm text-gray-600">Duration</div>
                          <div className="text-2xl font-light">45 Minutes</div>
                        </div>
                      </div>
                      <div className="p-6 bg-gray-50 backdrop-blur-sm rounded-xl">
                        <h3 className="font-light mb-4">Session Includes:</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-indigo-400" />
                            <span>Live video call with screen sharing</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-indigo-400" />
                            <span>Direct problem solving assistance</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-indigo-400" />
                            <span>Code review and debugging help</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-indigo-400" />
                            <span>Best practices and recommendations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowVideoModal(true)}
                      className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded-3xl group"
                    >
                      <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 backdrop-blur-sm rounded-full text-white border border-gray-200">
                        <PlayCircle className="w-6 h-6" />
                        <span>Watch Video</span>
                      </div>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <SupportTopics />
        <SupportBenefits />
        <SupportFAQ />
        <ServicesGrid currentService="support" />

        <SupportModal
          isOpen={showSupportModal}
          onClose={() => setShowSupportModal(false)}
        />

        <VideoModal
          isOpen={showVideoModal}
          onClose={() => setShowVideoModal(false)}
          videoId="Y0g_9ZhqiRg"
        />
      </div>
    </HelmetProvider>
  );
}