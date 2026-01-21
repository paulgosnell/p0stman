import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Smartphone, Zap, Check, ArrowRight } from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import AppShowcase from '../components/mobile-app/AppShowcase';
import PlatformFeatures from '../components/mobile-app/PlatformFeatures';
import MobileAppModal from '../components/modals/MobileAppModal';
import AIAgentShowcaseSimple from '../components/v3/AIAgentShowcaseSimple';
import MobileAppsV3 from '../components/v3/mobile-apps';
import FooterV3 from '../components/v3/FooterV3';

const benefits = [
  "Native iOS & Android apps",
  "React Native development",
  "App Store submission guidance",
  "ASO (App Store Optimization)",
  "30 days post-launch support"
];

const features = [
  {
    icon: <Bot className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "AI-Powered Development",
    description: "Rapid development using cutting-edge AI technology"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
    title: "Cross-Platform",
    description: "Single codebase for iOS and Android"
  },
  {
    icon: <Zap className="w-8 h-8 text-gray-400" strokeWidth={1.5} />,
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
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Mobile App Development",
              "description": "Transform your idea into a native iOS & Android app in just 4 weeks using AI-powered development. Professional mobile app development with React Native.",
              "provider": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
              "serviceType": ["iOS App Development", "Android App Development", "React Native Development", "Cross-Platform Apps"],
              "areaServed": "Worldwide",
              "offers": { "@type": "Offer", "price": "20000", "priceCurrency": "USD" }
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
                { "@type": "ListItem", "position": 2, "name": "Mobile App Development", "item": "https://p0stman.com/mobile-app" }
              ]
            })}
          </script>
        </Helmet>

        <HeaderV3Global darkMode={false} />

        {/* Hero Section */}
        <section ref={ref} className="py-32 md:py-48 bg-white">
          <div className="container mx-auto px-8 max-w-[90rem]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Eyebrow */}
                <div>
                  <span className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
                    Mobile App Development
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.05] tracking-tight">
                  Transform Your Idea Into a Mobile App
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                  Get your mobile app built in 4 weeks using AI-powered development. Native apps for both iOS and Android platforms.
                </p>

                {/* Benefits List */}
                <div className="space-y-4 pt-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-gray-900 font-light">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8">
                  <div>
                    <div className="text-4xl md:text-5xl font-light text-gray-900 mb-2">$20,000</div>
                    <div className="text-sm text-gray-400 uppercase tracking-[0.2em]">iOS & Android</div>
                  </div>
                  <button
                    onClick={() => setShowMobileAppModal(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors font-light text-lg group"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </button>
                </div>
              </motion.div>

              {/* Right Column - Features */}
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white p-8 border-t border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      {feature.icon}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AppShowcase />
        <PlatformFeatures />
        <AIAgentShowcaseSimple />
        <MobileAppsV3 />
        <FooterV3 />

        <MobileAppModal
          isOpen={showMobileAppModal}
          onClose={() => setShowMobileAppModal(false)}
        />
      </div>
    </HelmetProvider>
  );
}
