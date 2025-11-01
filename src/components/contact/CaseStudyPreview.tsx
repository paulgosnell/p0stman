import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  subtitle: string;
  industry: string;
  image: string;
  path: string;
  metric?: string;
}

interface CaseStudyPreviewProps {
  filter?: string;
}

const allCaseStudies: CaseStudy[] = [
  {
    title: "Chilled Sites",
    subtitle: "AI Website Builder",
    industry: "SaaS & No-Code",
    image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/chilledsites-homepage.png",
    path: "/case-study/chilled-sites",
    metric: "2,500+ websites built"
  },
  {
    title: "DoH Health",
    subtitle: "Healthcare Platform",
    industry: "Healthcare",
    image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/doh-health.png",
    path: "/case-study/doh-health-luxury",
    metric: "35% reduced no-shows"
  },
  {
    title: "FAB Bank",
    subtitle: "Banking Platform",
    industry: "Fintech",
    image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/fab-bank.png",
    path: "/case-study/fab-bank-luxury",
    metric: "Enterprise security"
  }
];

export default function CaseStudyPreview({ filter }: CaseStudyPreviewProps) {
  // Filter case studies if filter is provided
  const caseStudies = filter
    ? allCaseStudies
    : allCaseStudies.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-3">
            Recent Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            See how we've helped businesses like yours build and scale their solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={study.path}
                className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {study.industry}
                  </div>
                  <h4 className="text-xl font-light text-gray-900 dark:text-gray-100 mb-2">
                    {study.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-light mb-4">
                    {study.subtitle}
                  </p>
                  {study.metric && (
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                      {study.metric}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-light transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
