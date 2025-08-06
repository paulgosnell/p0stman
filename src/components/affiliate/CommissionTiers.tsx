import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign } from 'lucide-react';

const tiers = [
  {
    title: "Mobile App Sales",
    price: "$40,000",
    commission: "$8,000",
    features: [
      "Native iOS & Android apps",
      "Cross-platform development",
      "Modern UI/UX design",
      "Push notifications"
    ]
  },
  {
    title: "Website Sales",
    price: "$40,000",
    commission: "$8,000",
    features: [
      "Custom website development",
      "Professional design",
      "SEO optimization",
      "30 days support"
    ]
  },
  {
    title: "Retainer Sales",
    price: "$5,000/mo",
    commission: "$1,000",
    features: [
      "Ongoing expert support",
      "Technical advisory",
      "Priority access",
      "Monthly recurring payments"
    ]
  }
];

export default function CommissionTiers() {
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
              <DollarSign className="w-6 h-6 text-pink-600" />
              <h2 className="text-3xl font-bold">Commission Structure</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Earn generous commissions on all our products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{tier.title}</h3>
                
                <div className="flex items-end gap-2 mb-6">
                  <div className="text-3xl font-bold text-pink-600">{tier.commission}</div>
                  <div className="text-gray-500 mb-1">commission per sale</div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <div className="text-sm text-gray-500">Product Price</div>
                  <div className="text-2xl font-bold">{tier.price}</div>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-pink-600 rounded-full" />
                      {feature}
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