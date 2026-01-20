import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

interface PricingTableProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  className?: string;
}

export function PricingTable({
  title,
  subtitle,
  tiers,
  className = ''
}: PricingTableProps) {
  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {(title || subtitle) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {title && (
                <h2 className="text-4xl font-light text-gray-900 mb-4">{title}</h2>
              )}
              {subtitle && (
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}

          <div className={`grid gap-8 ${
            tiers.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' :
            tiers.length === 3 ? 'md:grid-cols-3' :
            'md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 border-t transition-all ${
                  tier.popular
                    ? 'bg-gray-900 border-gray-700'
                    : 'bg-gray-50 border-gray-200 hover:shadow-xl'
                }`}
              >
                {tier.popular && (
                  <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
                    Most Popular
                  </div>
                )}

                <h3 className={`text-xl font-light mb-2 ${
                  tier.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {tier.name}
                </h3>

                <div className="mb-4">
                  <span className={`text-3xl font-light ${
                    tier.popular ? 'text-white' : 'text-gray-900'
                  }`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm ${
                      tier.popular ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {tier.period}
                    </span>
                  )}
                </div>

                <p className={`text-sm font-light mb-6 ${
                  tier.popular ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {tier.description}
                </p>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          tier.popular ? 'text-white' : 'text-gray-400'
                        }`}
                        strokeWidth={1.5}
                      />
                      <span className={`text-sm font-light ${
                        tier.popular ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {tier.ctaText && (
                  <a
                    href={tier.ctaHref || '/contact'}
                    className={`block text-center py-3 px-6 transition-all font-light text-sm ${
                      tier.popular
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {tier.ctaText}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
