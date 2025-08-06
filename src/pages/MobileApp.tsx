import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Smartphone, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import SubHeader from '../components/SubHeader';
import ServicesGrid from '../components/ServicesGrid';
import AppShowcase from '../components/mobile-app/AppShowcase';
import PlatformFeatures from '../components/mobile-app/PlatformFeatures';
import MobileAppModal from '../components/modals/MobileAppModal';

const benefits = [
  "Native iOS & Android apps",
  "React Native development",
  "App Store submission guidance",
  "ASO (App Store Optimization)",
  "30 days post-launch support"
];

const features = [
  {
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    title: "AI-Powered Development",
    description: "Rapid development using cutting-edge AI technology"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    title: "Cross-Platform",
    description: "Single codebase for iOS and Android"
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    title: "Fast Delivery",
    description: "4 week turnaround time"
  }
];

export default function MobileApp() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showMobileAppModal, setShowMobileAppModal] = useState(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Mobile App Development | AI-Powered Build</title>
          <meta name="description" content="Transform your idea into a native iOS & Android app in just 6-8 weeks using AI-powered development. Professional mobile app development with React Native and Flutter." />
          <meta name="keywords" content="mobile app development, iOS app, Android app, React Native, Flutter, AI development" />
          <meta property="og:title" content="Mobile App Development | AI-Powered Build" />
          <meta property="og:description" content="Transform your idea into a native iOS & Android app in just 6-8 weeks using AI-powered development." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://p0stman.com/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mobile App Development | AI-Powered Build" />
          <meta name="twitter:description" content="Transform your idea into a native iOS & Android app in just 4 weeks using AI-powered development." />
          <meta name="twitter:image" content="https://p0stman.com/og-image.png" />
          <link rel="canonical" href="https://p0stman.com/mobile-app" />
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
                      <Smartphone className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-400 font-medium">Mobile App Development</span>
                    </div>

                    <h1 className="text-5xl font-bold mb-6">
                      Transform Your Idea Into a Mobile App
                    </h1>
                    
                    <p className="text-xl text-gray-300 mb-8">
                      Get your mobile app built in 4 weeks using AI-powered development. Native apps for both iOS and Android platforms.
                    </p>

                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                      <div>
                        <div className="text-3xl font-bold mb-1">$20,000</div>
                        <div className="text-gray-400">iOS & Android</div>
                      </div>
                      <button
                        onClick={() => setShowMobileAppModal(true)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 inline-block w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                    >
                      <div className="flex items-center gap-4">
                        {feature.icon}
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <AppShowcase />
        <PlatformFeatures />
        <ServicesGrid currentService="mobile-app" />

        <MobileAppModal 
          isOpen={showMobileAppModal}
          onClose={() => setShowMobileAppModal(false)}
        />
      </div>
    </HelmetProvider>
  );
}