import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do I need coding experience?",
    answer: "No coding experience is required. The guide is designed for anyone who wants to build products, regardless of technical background. AI handles the coding while you focus on product vision."
  },
  {
    question: "What's included in the guide?",
    answer: "The guide includes 200+ pages of step-by-step instructions, real-world examples, case studies, best practices, and access to the Bolt Builder Network for ongoing support."
  },
  {
    question: "How is this different from traditional development?",
    answer: "AI-powered development is 10x faster and 70% cheaper than traditional development. You can build production-ready applications in weeks instead of months, with professional quality and best practices built-in."
  },
  {
    question: "What kind of projects can I build?",
    answer: "You can build any web-based application including CRM systems, e-commerce platforms, mobile apps, dashboards, and more. The guide covers a wide range of project types and features."
  },
  {
    question: "Do I get updates to the guide?",
    answer: "Yes, you get lifetime access to the guide including all future updates. As AI technology evolves, we'll keep the guide current with new techniques and best practices."
  },
  {
    question: "What support is available?",
    answer: "You get access to the Bolt Builder Network where you can get help from other builders and experts. The guide also includes comprehensive troubleshooting sections and best practices."
  }
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-3xl font-bold">Common Questions</h2>
            </div>
            <p className="text-gray-600">
              Everything you need to know about the Bolt Builder's Guide.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}