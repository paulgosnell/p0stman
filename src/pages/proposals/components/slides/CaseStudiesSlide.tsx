import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: "Chilled CRM",
    description: "Complete CRM system built in 6 weeks using AI",
    image: "https://mediacdn.carrd.co/assets/images/image06.png",
    stats: [
      { label: 'Build Time', value: '6 weeks' },
      { label: 'Cost Savings', value: '70%' },
      { label: 'Team Size', value: '1 Dev' }
    ],
    link: "/case-study/chilled-crm"
  },
  {
    title: "Harmony",
    description: "AI-powered financial wellness platform",
    image: "https://mediacdn.carrd.co/assets/images/image15.png",
    stats: [
      { label: 'Build Time', value: '4 weeks' },
      { label: 'User Growth', value: '+200%' },
      { label: 'Team Size', value: '1 Dev' }
    ],
    link: "/case-study/harmony"
  },
  {
    title: "Serenity",
    description: "Health & wellness platform with AI features",
    image: "https://mediacdn.carrd.co/assets/images/image07.png",
    stats: [
      { label: 'Build Time', value: '4 weeks' },
      { label: 'Cost Savings', value: '65%' },
      { label: 'Team Size', value: '1 Dev' }
    ],
    link: "/case-study/serenity"
  }
];

export default function CaseStudiesSlide() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white rounded-3xl p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Bot className="w-8 h-8 text-indigo-400" />
          <h2 className="text-3xl font-bold">Success Stories</h2>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Real projects delivered using our AI-powered development approach.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200"
          >
            <div className="relative aspect-video">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold mb-1">{study.title}</h3>
                <p className="text-sm text-gray-300">{study.description}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                to={study.link}
                className="flex items-center justify-between w-full px-4 py-2 bg-indigo-600/20 text-indigo-400 rounded-lg hover:bg-indigo-600/30 transition-colors"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}