import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does the support session work?",
    answer: "Support sessions are conducted virtually via video call with screen sharing capabilities. You'll receive a meeting link after booking. During the 45-minute session, we can address your specific questions, debug issues, and provide guidance on your Bolt Builder projects."
  },
  {
    question: "What should I prepare for the session?",
    answer: "To make the most of your session, have your project ready to share, prepare specific questions or issues you'd like to address, and ensure you have a stable internet connection for screen sharing. Having your development environment set up will help us dive right in."
  },
  {
    question: "Can we cover multiple topics in one session?",
    answer: "Yes! We can address multiple questions or issues during the 45-minute session. It's helpful to prioritize your most important questions to ensure we cover them first."
  },
  {
    question: "What if I need more time?",
    answer: "If we need more time to address your questions, you can book additional sessions. We'll make sure to provide clear next steps and documentation for any unresolved items at the end of the session."
  },
  {
    question: "How soon can I book a session?",
    answer: "After purchasing, you'll receive a link to schedule your session. Slots are typically available within 1-2 business days, and you can choose a time that works best for you."
  },
  {
    question: "What if I need to reschedule?",
    answer: "You can reschedule your session up to 24 hours before the scheduled time. Just use the link in your confirmation email to select a new time slot."
  }
];

export default function SupportFAQ() {
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
              Everything you need to know about support sessions.
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