import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone } from 'lucide-react';

const apps = [
  {
    title: "Harmony",
    description: "AI-powered financial wellness platform",
    image: "https://mediacdn.carrd.co/assets/images/image15.png",
    features: [
      "Personal finance tracking",
      "AI-powered insights",
      "Goal setting & tracking",
      "Investment recommendations"
    ]
  },
  {
    title: "Serenity",
    description: "Mindfulness and wellness companion",
    image: "https://mediacdn.carrd.co/assets/images/image23.png",
    features: [
      "Guided meditations",
      "Sleep stories",
      "Mood tracking",
      "Personalized recommendations"
    ]
  },
  {
    title: "Rhythm",
    description: "AI running coach with adaptive music",
    image: "https://mediacdn.carrd.co/assets/images/image16.png",
    features: [
      "Real-time coaching",
      "Adaptive music",
      "Performance tracking",
      "Training plans"
    ]
  }
];

export default function AppShowcase() {
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
              <Smartphone className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold">Featured Mobile Apps</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Examples of mobile applications built using our AI-powered development process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[9/14] bg-gray-300">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <div className="space-y-2">
                    {app.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}