import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Code, Rocket, Bot, ExternalLink, Shield, Database, Cloud, DollarSign } from 'lucide-react';

interface SolutionProps {
  title: string;
  description: string;
  approach?: string[];
  outcome?: string;
  image?: string;
  technologies?: string[];
  features?: string[];
  aiIntegrations?: string[];
  liveUrl?: string;
  mobileOptimized?: boolean;
  theme?: 'light' | 'dark';
}

export default function Solution({
  title,
  description,
  approach,
  outcome,
  image,
  technologies,
  features,
  aiIntegrations,
  liveUrl,
  mobileOptimized,
  theme = 'light'
}: SolutionProps) {
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';

  // Get appropriate icon for technology based on name
  const getTechIcon = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('react') || lowerTech.includes('vue') || lowerTech.includes('angular') || lowerTech.includes('typescript')) 
      return <Code className="w-3.5 h-3.5" />;
    if (lowerTech.includes('supabase') || lowerTech.includes('firebase') || lowerTech.includes('postgres') || lowerTech.includes('sql')) 
      return <Database className="w-3.5 h-3.5" />;
    if (lowerTech.includes('aws') || lowerTech.includes('azure') || lowerTech.includes('netlify') || lowerTech.includes('cloud')) 
      return <Cloud className="w-3.5 h-3.5" />;
    if (lowerTech.includes('stripe') || lowerTech.includes('payment')) 
      return <DollarSign className="w-3.5 h-3.5" />;
    if (lowerTech.includes('auth') || lowerTech.includes('security') || lowerTech.includes('oauth')) 
      return <Shield className="w-3.5 h-3.5" />;
    
    // Default icon
    return <Rocket className="w-3.5 h-3.5" />;
  };

  const getBadgeColor = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('react') || lowerTech.includes('typescript')) 
      return 'bg-blue-100 text-blue-800';
    if (lowerTech.includes('supabase')) 
      return 'bg-green-100 text-green-800';
    if (lowerTech.includes('stripe')) 
      return 'bg-purple-100 text-purple-800';
    if (lowerTech.includes('firebase')) 
      return 'bg-yellow-100 text-yellow-800';
    if (lowerTech.includes('aws') || lowerTech.includes('azure') || lowerTech.includes('netlify')) 
      return 'bg-indigo-100 text-indigo-800';
    if (lowerTech.includes('node') || lowerTech.includes('express')) 
      return 'bg-green-100 text-green-800';
    if (lowerTech.includes('tailwind')) 
      return 'bg-cyan-100 text-cyan-800';
    
    // Default color
    return theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-700 text-gray-300';
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-blue-100 rounded-full">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">The Solution</span>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className={`${image ? 'grid lg:grid-cols-2 gap-16 items-start' : 'max-w-4xl mx-auto'} mb-20`}>
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {description}
              </p>

              {/* Approach */}
              {approach && approach.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Our Approach</h3>
                  <ul className="space-y-3">
                    {approach.map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-blue-600 text-sm font-semibold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcome */}
              {outcome && (
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Outcome</h3>
                  <p className="text-gray-700">{outcome}</p>
                </div>
              )}
              
              {/* Tech Stack Badges */}
              {technologies && technologies.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Built With</h3>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, index) => (
                    <motion.div 
                      key={`tech-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${getBadgeColor(tech)} shadow-sm hover:shadow-md transition-shadow`}
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* CTA Button */}
              {liveUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="pt-4"
                >
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg"
                  >
                    View Live Project
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {mobileOptimized && (
                    <p className="mt-3 text-sm text-gray-500">
                      ✨ Optimized for mobile experience
                    </p>
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Right Column - Image */}
            {image && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl transform rotate-3" />
                
                {/* Image Container - Made Bigger */}
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                  <img
                    src={image}
                    alt={title}
                    className="w-full rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105"
                    style={{ minHeight: '400px', objectFit: 'contain', padding: '20px' }}
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Features Grid - Only show if there's data */}
          {(technologies && technologies.length > 0) || (features && features.length > 0) || (aiIntegrations && aiIntegrations.length > 0) ? (
            <div className={`grid gap-8 ${
              [technologies && technologies.length > 0, features && features.length > 0, aiIntegrations && aiIntegrations.length > 0]
                .filter(Boolean).length === 1 ? 'md:grid-cols-1 max-w-md mx-auto' :
              [technologies && technologies.length > 0, features && features.length > 0, aiIntegrations && aiIntegrations.length > 0]
                .filter(Boolean).length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
            }`}>
              {/* Tech Stack */}
              {technologies && technologies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Tech Stack</h3>
                  </div>
                  <div className="space-y-3">
                    {technologies.slice(0, 6).map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-blue-600">
                          {getTechIcon(tech)}
                        </div>
                        <span className="text-gray-700 font-medium">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Key Features */}
              {features && features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                  </div>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* AI Integrations */}
              {aiIntegrations && aiIntegrations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">AI Features</h3>
                  </div>
                  <div className="space-y-3">
                    {aiIntegrations.map((integration, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Bot className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{integration}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}