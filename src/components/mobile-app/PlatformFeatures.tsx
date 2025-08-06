import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot } from 'lucide-react';

const platforms = [
  {
    name: "React Native",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    features: [
      "Cross-platform development",
      "Native performance",
      "Hot reloading",
      "Large ecosystem"
    ]
  },
  {
    name: "Flutter",
    icon: "https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg",
    features: [
      "Beautiful UI components",
      "Fast development",
      "Native performance",
      "Custom animations"
    ]
  },
  {
    name: "iOS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg",
    features: [
      "Native experience",
      "App Store optimization",
      "iOS guidelines",
      "Swift/SwiftUI"
    ]
  },
  {
    name: "Android",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
    features: [
      "Material Design",
      "Play Store support",
      "Native features",
      "Kotlin/Jetpack"
    ]
  }
];

export default function PlatformFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bot className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold">Platform Support</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use modern frameworks and tools to deliver high-quality native apps for both iOS and Android.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="text-xl font-semibold">{platform.name}</h3>
                </div>
                <div className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}