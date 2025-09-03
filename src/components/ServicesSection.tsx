import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Globe, Smartphone, Users, Zap, Database, Cloud, Shield, DollarSign, Rocket, Sparkles, Building2 } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { services } from '../data/services';

// Get appropriate icon for technology based on name
const getTechIcon = (tech: string) => {
  const lowerTech = tech.toLowerCase();
  if (lowerTech.includes('supabase') || lowerTech.includes('firebase') || lowerTech.includes('postgres') || lowerTech.includes('sql')) 
    return <Database className="w-3.5 h-3.5" />;
  if (lowerTech.includes('aws') || lowerTech.includes('azure') || lowerTech.includes('netlify') || lowerTech.includes('cloud') || lowerTech.includes('edge')) 
    return <Cloud className="w-3.5 h-3.5" />;
  if (lowerTech.includes('stripe') || lowerTech.includes('payment')) 
    return <DollarSign className="w-3.5 h-3.5" />;
  if (lowerTech.includes('auth') || lowerTech.includes('security') || lowerTech.includes('oauth')) 
    return <Shield className="w-3.5 h-3.5" />;
  
  // Default icon
  return <Bot className="w-3.5 h-3.5" />;
};

const getBadgeColor = (tech: string) => {
  const lowerTech = tech.toLowerCase();
  if (lowerTech.includes('react') || lowerTech.includes('native')) 
    return 'bg-blue-100 text-blue-800';
  if (lowerTech.includes('supabase')) 
    return 'bg-green-100 text-green-800';
  if (lowerTech.includes('stripe')) 
    return 'bg-purple-100 text-purple-800';
  if (lowerTech.includes('firebase')) 
    return 'bg-yellow-100 text-yellow-800';
  if (lowerTech.includes('openai') || lowerTech.includes('ai ')) 
    return 'bg-indigo-100 text-indigo-800';
  if (lowerTech.includes('edge') || lowerTech.includes('function')) 
    return 'bg-cyan-100 text-cyan-800';
  if (lowerTech.includes('aws') || lowerTech.includes('azure') || lowerTech.includes('netlify')) 
    return 'bg-indigo-100 text-indigo-800';
  if (lowerTech.includes('node') || lowerTech.includes('express')) 
    return 'bg-green-100 text-green-800';
  
  // Default color
  return 'bg-gray-100 text-gray-800';
};

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t, isRTL } = useLanguage();

  return (
    <section ref={ref} className="py-24 bg-white" id="packages">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-medium">Services</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Services
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From startups to global brands, we design and deliver digital products that move fast and make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Digital Products",
                description: "Websites, apps, and platforms built to perform and scale.",
                icon: <Globe className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "MVP Launches",
                description: "Fast, focused builds that validate your ideas in weeks, not months.",
                icon: <Rocket className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Creative Prototypes",
                description: "Live demos and proof-of-concepts that win pitches and secure buy-in.",
                icon: <Sparkles className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Enterprise Delivery",
                description: "Reliable support for large-scale projects with complex requirements.",
                icon: <Building2 className="w-6 h-6" />,
                color: "from-orange-500 to-red-500"
              },
              {
                title: "AI-Powered Speed",
                description: "Smart tools and methods that help us move faster where it counts.",
                icon: <Bot className="w-6 h-6" />,
                color: "from-indigo-500 to-purple-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-gray-300 group"
              >
                <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl inline-block mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}