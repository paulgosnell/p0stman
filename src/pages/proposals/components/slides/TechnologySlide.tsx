import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Lock, Zap, Bot } from 'lucide-react';

const techStacks = [
  {
    title: "Frontend Technologies",
    icon: <Code className="w-8 h-8 text-blue-400" />,
    items: [
      "React & TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "WebAssembly",
      "Progressive Web Apps"
    ]
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-8 h-8 text-green-400" />,
    items: [
      "Node.js & Express",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "WebSockets"
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    items: [
      "OpenAI GPT-4",
      "TensorFlow.js",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="w-8 h-8 text-indigo-400" />,
    items: [
      "AWS / Azure / GCP",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Serverless Functions",
      "Edge Computing"
    ]
  },
  {
    title: "Security & Performance",
    icon: <Lock className="w-8 h-8 text-red-400" />,
    items: [
      "OAuth 2.0 & JWT",
      "End-to-End Encryption",
      "OWASP Security",
      "Performance Monitoring",
      "Load Balancing"
    ]
  },
  {
    title: "Development Tools",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    items: [
      "Git & GitHub",
      "Jest & Testing Library",
      "ESLint & Prettier",
      "Webpack & Vite",
      "VS Code & WebStorm"
    ]
  }
];

export default function TechnologySlide() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-3xl p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Code className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl font-bold">Technology Stack</h2>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Modern, scalable technologies chosen for performance and future-readiness.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStacks.map((stack, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              {stack.icon}
              <h3 className="text-xl font-semibold">{stack.title}</h3>
            </div>

            <div className="space-y-3">
              {stack.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}