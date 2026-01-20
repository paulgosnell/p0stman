import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  pricing?: string;
  index?: number;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  pricing,
  index = 0,
  className = ''
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white p-8 border-t border-gray-200 hover:shadow-xl transition-all group ${className}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 bg-black text-white group-hover:bg-gray-800 transition-colors">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-light text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 font-light mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="text-sm text-gray-700 font-light flex items-start gap-2"
          >
            <span className="text-gray-400">—</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {pricing && (
        <div className="pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500 font-light">{pricing}</span>
        </div>
      )}
    </motion.div>
  );
}

export default ServiceCard;
