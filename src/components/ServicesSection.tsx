import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Globe, Smartphone, Users, Zap, Database, Cloud, Shield, DollarSign } from 'lucide-react';
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
              <span className="text-blue-600 font-medium">Service Packages</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Solutions Tailored to Your Needs
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of expertly designed service packages, each leveraging the power of AI to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col h-full bg-white rounded-xl border ${service.borderColor || 'border-gray-200'} shadow-sm hover:shadow-md transition-all`}
              >
                <div className="p-6">
                  <div className={`p-3 ${service.iconBg} rounded-xl inline-block mb-4`}>
                    {React.isValidElement(service.icon) ? service.icon : <Bot />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  {/* Tech Stack Badges */}
                  {service.techStack && (
                    <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
                      {service.techStack.map((tech, idx) => (
                        <div 
                          key={`${index}-tech-${idx}`} 
                          className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(tech)}`}
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="mt-auto p-6 pt-0">
                  <div className="text-2xl font-bold mb-4">
                    {service.price}
                  </div>
                  <Link
                    to={service.link}
                    className={`w-full inline-block px-6 py-3 text-center ${service.bgColor} ${service.hoverColor || 'hover:bg-blue-700'} text-white rounded-lg transition-colors`}
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}