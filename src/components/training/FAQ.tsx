import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What experience level is required?",
    answer: "No technical experience is required. The training is designed for anyone who wants to build products, regardless of their background. We'll start from the basics and progress at your pace."
  },
  {
    question: "What's included in the training?",
    answer: "You get three 2-hour one-on-one sessions, the Bolt Builder's Guide (worth $50), access to the Bolt Builder Network, and 30 days of follow-up support. Each session includes hands-on practice and project work."
  },
  {
    question: "How are the sessions structured?",
    answer: "Sessions are conducted virtually via video call. We'll work on a real project of your choice, covering everything from initial setup to deployment. Each session builds on the previous one, with homework and practice between sessions."
  },
  {
    question: "Can I build my own project?",
    answer: "Yes! You're encouraged to bring your own project idea. We'll help you plan, design, and build it during the training sessions. This gives you practical experience with a real-world project."
  },
  {
    question: "What happens after the training?",
    answer: "You'll have ongoing access to the Bolt Builder Network for support and collaboration. You'll also get 30 days of direct support for any questions or issues that come up as you continue building."
  },
  {
    question: "How do I prepare for the training?",
    answer: "No preparation is needed! Just come with an idea of what you'd like to build. We'll handle all the technical setup and provide everything you need during the first session."
  }
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold">Common Questions</h2>
            </div>
            <p className="text-gray-600">
              Everything you need to know about the training program.
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