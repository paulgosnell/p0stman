import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Layout, Code, Rocket, Zap, Globe, Search, Users, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Layout className="w-6 h-6 text-blue-600" />,
    title: "Professional Design",
    description: "Custom design that reflects your brand and engages your audience"
  },
  {
    icon: <Bot className="w-6 h-6 text-blue-600" />,
    title: "AI-Powered Build",
    description: "Cutting-edge AI technology for faster, more efficient development"
  },
  {
    icon: <Search className="w-6 h-6 text-blue-600" />,
    title: "SEO Optimized",
    description: "Built-in best practices to help you rank better in search results"
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: "Lightning Fast",
    description: "Optimized performance for the best user experience"
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Secure & Reliable",
    description: "Built with security best practices and regular backups"
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Full Support",
    description: "30 days of post-launch support included"
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: "Mobile Responsive",
    description: "Perfect display on all devices and screen sizes"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Modern Features",
    description: "Contact forms, analytics, and other essential features included"
  }
];

export default function FeatureGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a complete, professional website with all the features you need to succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}