import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FooterCTAProps {
  headline: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
  dark?: boolean;
  className?: string;
}

export function FooterCTA({
  headline,
  description,
  buttonText,
  buttonHref = '/contact',
  dark = true,
  className = ''
}: FooterCTAProps) {
  const bgClass = dark ? 'bg-black' : 'bg-gray-50';
  const textClass = dark ? 'text-white' : 'text-gray-900';
  const descClass = dark ? 'text-gray-400' : 'text-gray-600';
  const btnClass = dark
    ? 'bg-white text-black hover:bg-gray-100'
    : 'bg-black text-white hover:bg-gray-800';

  return (
    <section className={`py-24 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-light ${textClass} mb-6`}>
            {headline}
          </h2>
          {description && (
            <p className={`text-xl ${descClass} font-light mb-10 max-w-2xl mx-auto`}>
              {description}
            </p>
          )}
          <Link to={buttonHref}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center gap-3 px-8 py-4 ${btnClass} transition-all font-light text-lg`}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default FooterCTA;
