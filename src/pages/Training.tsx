import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, CheckCircle, ArrowRight, PlayCircle } from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import TrainingBenefits from '../components/training/TrainingBenefits';
import TrainingProcess from '../components/training/TrainingProcess';
import TrainingShowcase from '../components/training/TrainingShowcase';
import FAQ from '../components/training/FAQ';
import ServicesGrid from '../components/ServicesGrid';
import BookingModal from '../components/modals/BookingModal';
import VideoModal from '../components/modals/VideoModal';

export default function Training() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Expert Training | AI-Powered Development</title>
          <meta name="description" content="Master AI-powered development with personalized training. Three intensive sessions with hands-on guidance and 30 days support included." />
          <meta name="keywords" content="AI development training, technical training, development skills, hands-on learning" />
          <meta property="og:title" content="Expert Training | AI-Powered Development" />
          <meta property="og:description" content="Master AI-powered development with personalized training sessions." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Expert Training | AI-Powered Development" />
          <meta name="twitter:description" content="Master AI-powered development with personalized training sessions." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/training" />
        </Helmet>

        <HeaderV3Global />

        <section ref={ref} className="relative min-h-screen flex items-center bg-white text-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-5" />
          </div>

          <div className="container mx-auto max-w-[90rem] px-8 py-32 md:py-48 relative z-10">
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
                      <Bot className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                      <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">Expert Training</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-6">
                      Master AI-Powered Development
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 font-light">
                      Get personalized training to build production-ready applications in weeks, not months. No coding experience required.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <span className="font-light">One-on-one intensive training</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <span className="font-light">3 x 2-hour sessions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <span className="font-light">Hands-on project development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                        <span className="font-light">Guide included (worth $50)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                      <div>
                        <div className="text-3xl font-light mb-1">$500</div>
                        <div className="text-gray-400 font-light">All-inclusive package</div>
                      </div>
                      <button
                        onClick={() => setShowBookingModal(true)}
                        className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-light"
                      >
                        Book Your Training
                        <ArrowRight className="ml-2 inline-block w-5 h-5" strokeWidth={1.5} />
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
                  <div className="absolute inset-0 bg-gray-200 transform rotate-6" />
                  <img
                    src="https://mediacdn.carrd.co/assets/images/image09.jpg"
                    alt="AI Development Training"
                    className="relative z-10 w-full shadow-2xl"
                  />
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity group"
                  >
                    <div className="flex items-center gap-2 px-6 py-3 bg-white backdrop-blur-sm text-gray-900 border border-gray-200 font-light">
                      <PlayCircle className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                      <span>Watch Video</span>
                    </div>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <TrainingBenefits />
        <TrainingProcess />
        <TrainingShowcase />
        <FAQ />
        <ServicesGrid currentService="training" />

        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
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
