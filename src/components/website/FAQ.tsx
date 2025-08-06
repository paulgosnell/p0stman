import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What's included in the website package?",
    answer: "The package includes custom design, responsive development, SEO optimization, contact forms, analytics integration, and essential features like SSL certificates and performance optimization. You'll also get 30 days of post-launch support."
  },
  {
    question: "How long does it take to build my website?",
    answer: "Most websites are completed within 2-4 weeks, depending on the complexity and how quickly you can provide content and feedback. The timeline includes design, development, and three rounds of revisions."
  },
  {
    question: "What's the payment structure?",
    answer: "We require a 50% deposit to begin the project, with the remaining balance due before the website goes live. You can secure current pricing by paying the deposit now and starting development when you're ready."
  },
  {
    question: "How does the revision process work?",
    answer: "You get three rounds of revisions included in the package. Each round can include multiple changes to design, content, and functionality. Additional revisions are available at an hourly rate."
  },
  {
    question: "What do I need to provide?",
    answer: "You'll need to provide your brand assets (logo, colors), content (text and images), and any specific design preferences. We'll guide you through this process with our content collection guide."
  },
  {
    question: "Can I update the website myself after launch?",
    answer: "Yes, for a small one-off charge we'll set up a user-friendly content management system that allows you to make basic updates to content, images, and pages. We also offer ongoing support packages for more complex changes."
  },
  {
    question: "What makes your service different from traditional agencies?",
    answer: "We use AI-powered development tools to build websites faster and more efficiently, passing the cost savings on to you. You get the same quality and features as traditional agencies at 50% of the cost."
  },
  {
    question: "Do you handle hosting and domain setup?",
    answer: "Yes, for a low one-off charge we can set this up for you. But also happy to guide and advise on the technical aspects including domain configuration, hosting setup and SSL installation. Hosting costs are not included in the package price but we'll recommend affordable options."
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
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <p className="text-gray-600">
              Everything you need to know about our website package.
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