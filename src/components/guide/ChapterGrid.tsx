import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Code, Bot, Zap, Layout, Rocket } from 'lucide-react';

const chapters = [
  {
    icon: <Bot className="w-6 h-6 text-green-600" />,
    title: "Getting Started with Bolt",
    topics: [
      "Understanding AI development",
      "Setting up your environment",
      "Project planning best practices",
      "Working with AI tools"
    ]
  },
  {
    icon: <Code className="w-6 h-6 text-green-600" />,
    title: "Building Your First Product",
    topics: [
      "UI/UX design with AI",
      "Database integration",
      "Authentication setup",
      "Payment processing"
    ]
  },
  {
    icon: <Layout className="w-6 h-6 text-green-600" />,
    title: "Advanced Features",
    topics: [
      "AI-powered components",
      "Real-time functionality",
      "Third-party integrations",
      "Custom AI features"
    ]
  },
  {
    icon: <Rocket className="w-6 h-6 text-green-600" />,
    title: "Deployment & Beyond",
    topics: [
      "Production deployment",
      "Performance optimization",
      "Monitoring & analytics",
      "Scaling strategies"
    ]
  }
];

export default function ChapterGrid() {
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
              <BookOpen className="w-6 h-6 text-green-600" />
              <h2 className="text-3xl font-bold">What You'll Learn</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive guide to building production-ready applications with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    {chapter.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{chapter.title}</h3>
                </div>
                <div className="space-y-2">
                  {chapter.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                      {topic}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}