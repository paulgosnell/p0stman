import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ShowcaseContent } from '../../types/onepage';

interface MotionShowcaseProps {
  content: ShowcaseContent;
}

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-premium-7xl text-white">
      {count}{suffix}
    </div>
  );
};

const CapabilityChip: React.FC<{ 
  label: string; 
  index: number; 
  isVisible: boolean;
}> = ({ label, index, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 hover-lift-subtle"
    >
      <span className="text-premium-lg">{label}</span>
    </motion.div>
  );
};

const ProjectMockup: React.FC<{ 
  mockup: { title: string; image: string; category: string }; 
  index: number;
  isVisible: boolean;
}> = ({ mockup, index, isVisible }) => {
  const [imageError, setImageError] = useState(false);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'dashboard':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'mobile':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
          </svg>
        );
      case 'web':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'ai':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : { 
        opacity: 0, 
        y: 30, 
        scale: 0.95 
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover-lift-subtle"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        {mockup.image && !imageError ? (
          <img 
            src={mockup.image} 
            alt={mockup.title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-lg flex items-center justify-center">
              {getCategoryIcon(mockup.category)}
            </div>
            <h3 className="text-premium-xl text-gray-900 mb-2">{mockup.title}</h3>
            <p className="text-sm text-gray-400 capitalize">{mockup.category} Solution</p>
          </div>
        )}
      </div>
      
      {/* Overlay with title - only show if image is loaded */}
      {mockup.image && !imageError && (
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
          <div className="p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-premium-xl text-gray-900 mb-1">{mockup.title}</h3>
            <p className="text-sm text-gray-300 capitalize">{mockup.category} Solution</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const MotionShowcase: React.FC<MotionShowcaseProps> = ({ content }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // AI-focused metrics for P0STMAN showcase
  const metrics = [
    { label: 'AI Projects', value: 50, suffix: '+' },
    { label: 'Years in MEA', value: 20, suffix: '+' },
    { label: 'Success Rate', value: 98, suffix: '%' },
    { label: 'Implementations', value: 150, suffix: '+' }
  ];

  // Sample mockups if none provided
  const mockups = content.mockups.length > 0 ? content.mockups : [
    { id: '1', title: 'AI Dashboard', image: '', category: 'dashboard', animationDelay: 0 },
    { id: '2', title: 'Mobile AI App', image: '', category: 'mobile', animationDelay: 0.15 },
    { id: '3', title: 'Web Platform', image: '', category: 'web', animationDelay: 0.3 },
    { id: '4', title: 'AI Agent System', image: '', category: 'ai', animationDelay: 0.45 }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen py-20 px-4 bg-premium-gradient-subtle premium-grid relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-premium-7xl text-white mb-6">
            Proven <span className="text-gradient">AI Delivery</span>
          </h2>
          <p className="text-premium-2xl text-gray-300 max-w-3xl mx-auto">
            From strategy to implementation, see how P0STMAN transforms organizations 
            with AI-powered solutions that deliver measurable results.
          </p>
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center hover-lift-subtle">
              <Counter 
                value={metric.value} 
                suffix={metric.suffix}
                duration={2 + index * 0.2}
              />
              <div className="text-premium-lg text-gray-400 mt-2">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Capability Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {content.capabilities.map((capability, index) => (
            <CapabilityChip
              key={capability.id}
              label={capability.label}
              index={index}
              isVisible={isInView}
            />
          ))}
        </motion.div>

        {/* Project Mockups Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {mockups.map((mockup, index) => (
            <ProjectMockup
              key={mockup.id}
              mockup={mockup}
              index={index}
              isVisible={isInView}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <p className="text-premium-xl text-gray-300 mb-8">
            Ready to transform your organization with AI?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium text-lg px-10 py-4"
            >
              Start Your AI Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-secondary text-lg px-10 py-4"
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MotionShowcase;