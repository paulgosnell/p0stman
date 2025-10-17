import React, { useState } from 'react';
import { Bot, Globe, ChevronDown, ChevronUp, Mail, PlayCircle } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  link: string;
  color: string;
}

const services: Service[] = [
  {
    icon: <Bot className="w-6 h-6 text-violet-400" />,
    title: "AI Agents",
    description: "Custom autonomous AI agents for your business",
    price: "From $5,000",
    link: "/ai-agents",
    color: "bg-violet-600 hover:bg-violet-700"
  },
  {
    icon: <Bot className="w-6 h-6 text-teal-400" />,
    title: "Retainer Service",
    description: "Get on-demand expert guidance and support for all your tech needs",
    price: "$5,000/mo",
    link: "/retainer",
    color: "bg-teal-600 hover:bg-teal-700"
  },
  {
    icon: <Bot className="w-6 h-6 text-blue-400" />,
    title: "Mobile App",
    description: "Native iOS & Android apps built with AI",
    price: "$40,000",
    link: "/mobile-app",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    title: "Custom Website",
    description: "Professional website built with AI",
    price: "$10,000",
    link: "/website",
    color: "bg-purple-600 hover:bg-purple-700"
  }
];

export default function Links() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <div className="max-w-lg mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2">Paul Gosnell</h1>
          <p className="text-gray-300 mb-4">AI Product Development Expert</p>
          <p className="text-gray-400 text-sm">
            Building faster, better, and more affordable solutions than traditional agencies.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-4 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${service.color.split(' ')[0].replace('bg-', 'bg-opacity-20')} rounded-lg`}>
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="font-medium">{service.title}</h2>
                      <div className="text-sm text-gray-400">{service.price}</div>
                    </div>
                  </div>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              {expandedIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <a
                    href={service.link}
                    className={`block w-full py-2 text-center rounded-lg ${service.color} transition-colors`}
                  >
                    Learn More
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4">
          <a
            href="https://www.youtube.com/watch?v=Y0g_9ZhqiRg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="p-2 bg-red-600/20 rounded-lg">
              <PlayCircle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h2 className="font-medium group-hover:text-red-400 transition-colors">Watch Demo</h2>
              <div className="text-sm text-gray-400">See how I built Chilled CRM using Bolt</div>
            </div>
          </a>
        </div>

        {/* Contact CTA */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <a
            href="mailto:hello@p0stman.com"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://p0stman.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Globe className="w-4 h-4" />
            Website
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} P0STMAN</p>
          <p>Built with <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bolt</a></p>
        </div>
      </div>
    </div>
  );
}