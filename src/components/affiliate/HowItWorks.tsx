import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "Join the Program",
    description: "Sign up for free and get your unique referral links",
    items: [
      "Quick application process",
      "Instant approval",
      "Access to partner dashboard",
      "Marketing resources"
    ]
  },
  {
    title: "Share & Promote",
    description: "Share your links with your audience",
    items: [
      "Social media promotion",
      "Blog content",
      "Email marketing",
      "Direct referrals"
    ]
  },
  {
    title: "Track Performance",
    description: "Monitor your referrals and earnings",
    items: [
      "Real-time statistics",
      "Click tracking",
      "Conversion data",
      "Performance insights"
    ]
  },
  {
    title: "Get Paid",
    description: "Receive payments for your referrals",
    items: [
      "Regular payouts",
      "Multiple payment methods",
      "Transparent reporting",
      "Reliable payments"
    ]
  }
];

export default function HowItWorks() {
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
              <Clock className="w-6 h-6 text-pink-600" />
              <h2 className="text-3xl font-bold">How It Works</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start earning commissions in four simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}