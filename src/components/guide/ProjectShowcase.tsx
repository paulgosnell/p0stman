import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Chilled CRM",
    description: "Complete CRM system built in 6 weeks",
    image: "https://mediacdn.carrd.co/assets/images/image06.png",
    url: "/case-study/chilled-crm"
  },
  {
    title: "Harmony",
    description: "AI-Powered FinTech Platform",
    image: "https://mediacdn.carrd.co/assets/images/image15.png",
    url: "/case-study/harmony"
  },
  {
    title: "Serenity",
    description: "Health & Wellness Platform",
    image: "https://mediacdn.carrd.co/assets/images/image07.png",
    url: "/case-study/serenity"
  }
];

export default function ProjectShowcase() {
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
              <Bot className="w-6 h-6 text-green-600" />
              <h2 className="text-3xl font-bold">Real Projects Built With Bolt</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See examples of applications built using the techniques from this guide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-white">
                        <span>View Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}