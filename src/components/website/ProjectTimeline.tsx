import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, CheckCircle } from 'lucide-react';

const timelineSteps = [
  {
    title: "Project Kickoff",
    description: "We start with a 50% deposit and detailed requirements gathering",
    items: [
      "Project requirements document",
      "Design preferences collection",
      "Content gathering guide",
      "Timeline agreement"
    ]
  },
  {
    title: "Design & Development",
    description: "Your website is built using AI-powered development",
    items: [
      "Custom design creation",
      "Responsive development",
      "Content integration",
      "Feature implementation"
    ]
  },
  {
    title: "Review & Refinement",
    description: "Three rounds of revisions to perfect your website",
    items: [
      "Design adjustments",
      "Content refinements",
      "Functionality testing",
      "Performance optimization"
    ]
  },
  {
    title: "Launch",
    description: "Your website goes live after final approval and payment",
    items: [
      "Final testing",
      "Domain setup",
      "SSL installation",
      "Analytics setup"
    ]
  }
];

export default function ProjectTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Project Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A clear, efficient process to get your website live in 2-4 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
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
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {index < timelineSteps.length - 1 && (
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