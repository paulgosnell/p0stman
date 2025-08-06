import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer: "I specialize in building digital products using AI-powered development, including custom websites, CRM systems, mobile apps, and enterprise solutions. My expertise spans across various industries and technologies."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but thanks to AI-powered development, I can deliver much faster than traditional agencies. A custom website typically takes 2-4 weeks, while larger applications might take 4-8 weeks."
  },
  {
    question: "What are your rates?",
    answer: "I offer various service packages: Builder's Guide ($50), Expert Support ($100), Expert Training ($500), Retainer Service ($2,000/mo), and Custom Websites (from $3,000). Each package is designed to provide maximum value for your investment."
  },
  {
    question: "Do you work with clients globally?",
    answer: "Yes! While I'm based in Dubai, I work with clients worldwide. I use various tools and platforms to ensure smooth communication and collaboration across different time zones."
  },
  {
    question: "What makes your service different?",
    answer: "I combine 20+ years of experience with cutting-edge AI technology to deliver faster, better, and more affordable solutions than traditional agencies. This unique approach allows me to work as efficiently as a full team while maintaining high quality standards."
  },
  {
    question: "What happens after I send a message?",
    answer: "I'll review your message and respond within 24 hours with initial thoughts and next steps. For project inquiries, we'll schedule a consultation call to discuss your needs in detail."
  }
];

export default function ContactFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section ref={ref} id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold">Common Questions</h2>
            </div>
            <p className="text-gray-600">
              Find quick answers to frequently asked questions.
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