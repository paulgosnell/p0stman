import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, CheckCircle } from 'lucide-react';

const sessions = [
  {
    title: "Session 1: Foundation",
    description: "Introduction to AI-powered development and project planning",
    topics: [
      "Understanding AI development tools",
      "Project planning and setup",
      "Development environment configuration",
      "Initial project structure"
    ]
  },
  {
    title: "Session 2: Core Development",
    description: "Building core features and functionality",
    topics: [
      "UI/UX implementation",
      "Database integration",
      "Authentication setup",
      "Core feature development"
    ]
  },
  {
    title: "Session 3: Advanced Features",
    description: "Adding advanced features and preparing for launch",
    topics: [
      "Advanced AI features",
      "Performance optimization",
      "Testing and debugging",
      "Deployment preparation"
    ]
  }
];

export default function TrainingProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold">Training Process</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three intensive sessions to master AI-powered development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold">{session.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{session.description}</p>
                  
                  <div className="space-y-2">
                    {session.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {index < sessions.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}