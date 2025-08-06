import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Layers, Webhook, Database, Cloud, Code, Bot } from 'lucide-react';

const topics = [
  {
    icon: <Webhook className="w-6 h-6 text-blue-600" />,
    title: "Third-Party Integrations",
    description: "Get help with Stripe setup, API integrations, and third-party services",
    examples: [
      "Stripe payment setup",
      "OAuth implementation",
      "API configuration",
      "Webhook handling"
    ]
  },
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    title: "Database & Backend",
    description: "Support with Supabase setup, database design, and SQL queries",
    examples: [
      "Supabase configuration",
      "Database schema design",
      "SQL query optimization",
      "Data modeling"
    ]
  },
  {
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    title: "Deployment & DevOps",
    description: "Assistance with deployment, hosting, and infrastructure setup",
    examples: [
      "Cloud deployment",
      "Domain configuration",
      "SSL certificates",
      "Environment setup"
    ]
  },
  {
    icon: <Code className="w-6 h-6 text-blue-600" />,
    title: "Debugging & Testing",
    description: "Help with troubleshooting issues and implementing testing strategies",
    examples: [
      "Error resolution",
      "Performance optimization",
      "Testing implementation",
      "Code review"
    ]
  },
  {
    icon: <Bot className="w-6 h-6 text-blue-600" />,
    title: "AI Implementation",
    description: "Guidance on implementing AI features and optimizing prompts",
    examples: [
      "AI feature planning",
      "Prompt engineering",
      "Model selection",
      "Integration patterns"
    ]
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    title: "Architecture & Planning",
    description: "Support with project architecture and development planning",
    examples: [
      "Project structure",
      "Feature planning",
      "Best practices",
      "Scalability planning"
    ]
  }
];

export default function SupportTopics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Support Topics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get expert help with any aspect of your Bolt Builder projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  {topic.icon}
                  <h3 className="font-semibold text-gray-900">{topic.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{topic.description}</p>
                
                <div className="space-y-2">
                  {topic.examples.map((example, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 mt-1.5 bg-blue-600 rounded-full" />
                      {example}
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