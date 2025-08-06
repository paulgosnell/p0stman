import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Partner Program Benefits",
    points: [
      "20% commission on all sales",
      "Up to $8,000 per referral"
    ]
  },
  {
    title: "Easy Promotion",
    points: [
      "Unique referral links",
      "Regular updates"
    ]
  },
  {
    title: "Regular Payments",
    points: [
      "Monthly payouts",
      "Unlimited earning potential"
    ]
  },
  {
    title: "Quality Products",
    points: [
      "High-value offerings",
      "Proven success rate"
    ]
  }
];

export default function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-pink-600" />
              <h2 className="text-3xl font-bold">Partner Benefits</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed as a partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <div className="space-y-3">
                  {benefit.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{point}</span>
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