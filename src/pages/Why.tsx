import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Heart,
  Zap,
  Target,
  Users,
  Lightbulb,
  Rocket,
  Building2,
  Globe
} from 'lucide-react';
import HeaderV3Global from '../components/v3/HeaderV3Global';
import FooterV3 from '../components/v3/FooterV3';

export default function Why() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Ship Fast, Ship Smart",
      description: "We believe speed without quality is just chaos. We help you move quickly while building something that lasts."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Founders First",
      description: "Every decision we make is through the lens of what helps founders succeed. Your success is our success."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI-Native Thinking",
      description: "We don't just add AI to existing products. We reimagine what's possible when AI is at the core."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Product Studio Approach",
      description: "We're not just consultants. We're builders who understand the full journey from idea to market."
    }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Why We Do It | P0STMAN - AI Product Studio</title>
          <meta name="description" content="Learn about our mission to help bold ideas get built faster with AI-native product development and our founder-first approach." />
        </Helmet>

        <HeaderV3Global />

        {/* Hero Section */}
        <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Heart className="w-6 h-6 text-red-500" />
                  <span className="text-red-500 font-medium">Why We Do It</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
                  Bold Ideas Deserve to Be Built
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                  We believe bold ideas deserve to be built. P0STMAN is our product studio, and Chilled Tools are the AI products we've created to help founders, brands, and agencies go faster.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To bridge the gap between visionary founders and the AI-native products they need to build. 
                    We're here to turn "what if" into "what's next" by making cutting-edge technology accessible, 
                    practical, and profitable.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">What Drives Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every project, every decision, and every line of code we write.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="text-blue-500 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">The Journey So Far</h2>
                <p className="text-xl text-gray-600">
                  From motorsport to AI - here's how we got to where we are today.
                </p>
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-semibold text-gray-900">High-Speed Beginnings</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Started in motorsport with MSV Trackdays and UK Trackdays. Ten years of high-octane event management 
                    taught us about logistics, customer experience, and running operations under pressure.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Global Expansion</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Expanded into MENA markets, worked with IBM iX, and learned to scale across cultures and continents. 
                    Each market taught us something new about building products that work everywhere.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-900">AI-Native Future</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we're focused on AI-native product development. We're not just adding AI to existing products - 
                    we're reimagining what's possible when artificial intelligence is built into the foundation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <FooterV3 />
      </div>
    </HelmetProvider>
  );
}