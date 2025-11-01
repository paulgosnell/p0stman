import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  result?: string;
  image?: string;
}

export default function TestimonialCard({ quote, author, role, company, result, image }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
    >
      <Quote className="w-8 h-8 text-blue-400 dark:text-blue-400 mb-4 opacity-50" />

      <p className="text-gray-700 dark:text-gray-300 font-light mb-6 leading-relaxed">
        "{quote}"
      </p>

      <div className="flex items-center gap-3 mb-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-medium text-gray-900 dark:text-gray-100">{author}</div>
          {role && (
            <div className="text-sm text-gray-600 dark:text-gray-400 font-light">
              {role}{company && `, ${company}`}
            </div>
          )}
        </div>
      </div>

      {result && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {result}
          </div>
        </div>
      )}
    </motion.div>
  );
}
