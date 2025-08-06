import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does the partner program work?",
    answer: "You'll receive a unique partner link to share with your audience. When someone buys via your link within 30 days, you earn a 20% commission. We track all referrals and pay out when we get paid by the client."
  },
  {
    question: "When and how do I get paid?",
    answer: "Commissions are paid as soons as we get paid for all qualified sales. We offer multiple payment methods including Wise and bank transfer."
  },
  {
    question: "What marketing materials are provided?",
    answer: "We provide banners, email templates, social media content, and product descriptions. You'll also get access to performance data and insights to help optimize your promotions."
  },
  {
    question: "Is there a minimum sales requirement?",
    answer: "No, there's no minimum sales requirement to maintain your partner status. However, we do have a minimum payout threshold of $50 for commission payments."
  },
  {
    question: "How long are referrals tracked?",
    answer: "Our tracking system monitors referrals for 30 days. This means if someone clicks your link and makes a purchase within 30 days, you'll receive the commission, even if they don't buy immediately."
  },
  {
    question: "Can I promote on social media?",
    answer: "Yes! You can promote on any platform where your audience is active, including social media, blogs, YouTube, email newsletters, etc. We just ask that you follow our promotional guidelines."
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
              <HelpCircle className="w-6 h-6 text-pink-600" />
              <h2 className="text-3xl font-bold">Common Questions</h2>
            </div>
            <p className="text-gray-600">
              Everything you need to know about our partner program.
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