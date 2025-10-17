/**
 * Example Usage of V3 Design System Components
 *
 * This file demonstrates how to use CTASection and ProcessStep components
 * in a real-world scenario. Copy and adapt these examples for your pages.
 */

import React from 'react';
import { CTASection } from './CTASection';
import { ProcessStep } from './ProcessStep';
import { Rocket, Code, CheckCircle } from 'lucide-react';

export default function ExampleUsage() {
  // Example 1: Simple CTA Section
  const handleGetStarted = () => {
    console.log('CTA clicked - redirect to signup');
    // window.location.href = '/signup';
  };

  // Example 2: Process Flow (How It Works)
  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, goals, and technical requirements. Our team analyzes your needs and creates a detailed roadmap.',
      features: [
        'Initial 30-minute consultation',
        'Technical architecture review',
        'Timeline and milestone planning',
        'Resource allocation and team assignment'
      ],
      icon: <Code size={32} />
    },
    {
      number: 2,
      title: 'Rapid Development',
      description: 'Using AI-assisted workflows, we accelerate development by 40% while maintaining high quality standards and best practices.',
      features: [
        'AI-powered code generation',
        'Daily progress updates via Slack',
        'Continuous testing and QA',
        'Real-time collaboration tools'
      ],
      icon: <Rocket size={32} />,
      variant: 'highlighted' as const
    },
    {
      number: 3,
      title: 'Deploy & Support',
      description: 'We handle deployment to production and provide ongoing support to ensure your product runs smoothly and scales effectively.',
      features: [
        'Cloud infrastructure setup',
        'Performance monitoring',
        '30-day post-launch support',
        'Documentation and training'
      ],
      icon: <CheckCircle size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section (not using new components) */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-6xl font-thin text-gray-900 mb-4">
          Component Examples
        </h1>
        <p className="text-xl text-gray-600 font-light">
          V3 Design System in Action
        </p>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 px-6 md:px-0 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Our proven 3-step process to ship your product fast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                features={step.features}
                icon={step.icon}
                variant={step.variant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <CTASection
        title="Ready to Ship 40% Faster?"
        subtitle="Join hundreds of companies who trust us to build their AI products. Get a quote in 24 hours."
        buttonText="Start Your Project"
        buttonOnClick={handleGetStarted}
      />

      {/* Alternative Process Steps - Vertical Flow */}
      <section className="py-24 px-6 md:px-0 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-gray-900 mb-4">
              Our Services
            </h2>
          </div>

          <ProcessStep
            number={1}
            title="AI Product Development"
            description="From concept to production, we build AI products that users love."
            features={[
              'Custom LLM integrations',
              'Voice AI and conversational interfaces',
              'Computer vision and image processing',
              'Recommendation systems'
            ]}
          />

          <ProcessStep
            number={2}
            title="Web & Mobile Apps"
            description="Beautiful, performant applications built with modern frameworks."
            features={[
              'React, Next.js, Vue.js',
              'Native iOS and Android',
              'Progressive Web Apps',
              'Real-time features'
            ]}
            variant="highlighted"
          />

          <ProcessStep
            number={3}
            title="API & Backend Systems"
            description="Scalable infrastructure that grows with your business."
            features={[
              'RESTful and GraphQL APIs',
              'Microservices architecture',
              'Database optimization',
              'Cloud deployment (AWS, GCP, Azure)'
            ]}
          />
        </div>
      </section>

      {/* CTA Section - Custom Background */}
      <CTASection
        title="Have Questions?"
        subtitle="Schedule a free 30-minute consultation to discuss your project."
        buttonText="Book a Call"
        buttonOnClick={() => console.log('Book call clicked')}
        bgColor="bg-gradient-to-r from-purple-600 to-pink-600"
      />

      {/* Final CTA - Solid Background */}
      <CTASection
        title="Download Our Product Playbook"
        subtitle="Learn the exact process we use to ship AI products in 6 days."
        buttonText="Get Free Guide"
        buttonOnClick={() => console.log('Download clicked')}
        variant="solid"
      />
    </div>
  );
}
