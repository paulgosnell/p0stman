import React from 'react';
import { motion } from 'framer-motion';
import { Users, Bot, Brain, Code, Zap, Shield } from 'lucide-react';

const teamMembers = [
  {
    role: "AI Development Expert",
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    responsibilities: [
      "AI-powered development",
      "System architecture",
      "Technical leadership",
      "Code quality"
    ]
  },
  {
    role: "AI Integration Specialist",
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    responsibilities: [
      "AI model integration",
      "Performance optimization",
      "Data processing",
      "Machine learning"
    ]
  },
  {
    role: "Full-Stack Developer",
    icon: <Code className="w-8 h-8 text-green-400" />,
    responsibilities: [
      "Frontend development",
      "Backend systems",
      "Database design",
      "API integration"
    ]
  },
  {
    role: "DevOps Engineer",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    responsibilities: [
      "Infrastructure setup",
      "CI/CD pipelines",
      "Cloud deployment",
      "Performance monitoring"
    ]
  },
  {
    role: "Security Expert",
    icon: <Shield className="w-8 h-8 text-red-400" />,
    responsibilities: [
      "Security audits",
      "Compliance checks",
      "Vulnerability testing",
      "Security best practices"
    ]
  }
];

export default function TeamSlide() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white rounded-3xl p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Users className="w-8 h-8 text-purple-400" />
          <h2 className="text-3xl font-bold">Our Expert Team</h2>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A dedicated team of experts working together to deliver exceptional results.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl transform rotate-3 group-hover:rotate-1 transition-transform" />
            <div className="relative bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                {member.icon}
                <h3 className="text-xl font-semibold">{member.role}</h3>
              </div>

              <div className="space-y-3">
                {member.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    <span className="text-gray-300">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}