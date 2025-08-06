import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, CheckCircle, ArrowRight, PlayCircle } from 'lucide-react';
import SubHeader from '../components/SubHeader';
import BenefitsSection from '../components/guide/BenefitsSection';
import ChapterGrid from '../components/guide/ChapterGrid';
import ProjectShowcase from '../components/guide/ProjectShowcase';
import FAQ from '../components/guide/FAQ';
import ServicesGrid from '../components/ServicesGrid';
import GuideModal from '../components/modals/GuideModal';
import VideoModal from '../components/modals/VideoModal';

export default function Guide() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Bolt Builder's Guide | AI-Powered Development</title>
          <meta name="description" content="Comprehensive guide to building with AI. 200+ pages of practical guidance, real-world examples, and lifetime updates included." />
          <meta name="keywords" content="AI development guide, technical guide, development learning, AI building" />
          <meta property="og:title" content="Bolt Builder's Guide | AI-Powered Development" />
          <meta property="og:description" content="Learn to build production-ready applications with AI. Step-by-step guide included." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Bolt Builder's Guide | AI-Powered Development" />
          <meta name="twitter:description" content="Learn to build production-ready applications with AI." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/guide" />
        </Helmet>

        <SubHeader />

        <section ref={ref} className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Bot className="w-6 h-6 text-green-400" />
                      <span className="text-green-400 font-medium">Bolt Builder's Guide</span>
                    </div>

                    <h1 className="text-5xl font-bold mb-6">
                      Build Your Next Product with AI
                    </h1>
                    
                    <p className="text-xl text-gray-300 mb-8">
                      Learn to build production-ready applications in weeks, not months. No coding experience required.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>200+ pages of practical guidance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Step-by-step instructions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Real-world examples</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>Access to Bolt Builder Network</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                      <div>
                        <div className="text-3xl font-bold mb-1">$50</div>
                        <div className="text-gray-400">Lifetime access</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Link
                          to="/guide/content"
                          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          View Guide
                          <ArrowRight className="ml-2 inline-block w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => setShowGuideModal(true)}
                          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Get Access Token
                          <ArrowRight className="ml-2 inline-block w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">
                      An access token is required to view the guide content. Purchase includes lifetime access.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl transform rotate-6" />
                  <img
                    src="https://mediacdn.carrd.co/assets/images/image09.jpg"
                    alt="Bolt Builder's Guide"
                    className="relative z-10 w-full rounded-3xl shadow-2xl"
                  />
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded-3xl group"
                  >
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
                      <PlayCircle className="w-6 h-6" />
                      <span>Watch Video</span>
                    </div>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <BenefitsSection />
        <ChapterGrid />
        <ProjectShowcase />
        <FAQ />
        <ServicesGrid currentService="guide" />

        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Building?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get instant access to the guide and start building your next product with AI.
              </p>
              <button
                onClick={() => setShowGuideModal(true)}
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg"
              >
                Get the Guide
                <ArrowRight className="ml-2 w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        <GuideModal 
          isOpen={showGuideModal}
          onClose={() => setShowGuideModal(false)}
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