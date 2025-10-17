import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, CheckCircle, ArrowRight, PlayCircle } from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import BenefitsSection from '../components/guide/BenefitsSection';
import ChapterGrid from '../components/guide/ChapterGrid';
import ProjectShowcase from '../components/guide/ProjectShowcase';
import FAQ from '../components/guide/FAQ';
import ServicesGrid from '../components/ServicesGrid';
import GuideModal from '../components/modals/GuideModal';
import VideoModal from '../components/modals/VideoModal';
import FooterV3 from '../components/v3/FooterV3';

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

        <HeaderV3Global />

        <section ref={ref} className="relative min-h-screen flex items-center bg-white text-gray-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-10" />
          </div>

          <div className="container mx-auto px-4 md:px-6 py-24 md:py-28 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Bot className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium text-sm tracking-wide">Bolt Builder's Guide</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-thin mb-6 leading-tight">
                      Build Your Next Product with AI
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                      Learn to build production-ready applications in weeks, not months. No coding experience required.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">200+ pages of practical guidance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">Step-by-step instructions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">Real-world examples</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">Access to Bolt Builder Network</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
                      <div>
                        <div className="text-3xl font-light mb-1">$50</div>
                        <div className="text-gray-400 text-sm">Lifetime access</div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to="/guide/content"
                          className="inline-flex items-center justify-center px-6 py-3 bg-gray-50 backdrop-blur-sm border border-gray-200 text-white rounded-lg hover:bg-white/20 transition-all transform hover:scale-[1.02] font-medium"
                        >
                          View Guide
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => setShowGuideModal(true)}
                          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] font-medium"
                        >
                          Get Access Token
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-gray-400 leading-relaxed">
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
                    <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 backdrop-blur-sm rounded-full text-white border border-gray-200">
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

        <section className="py-24 md:py-28 bg-white text-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-thin mb-8">Ready to Start Building?</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Get instant access to the guide and start building your next product with AI.
              </p>
              <button
                onClick={() => setShowGuideModal(true)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-[1.02] text-lg font-medium"
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

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}