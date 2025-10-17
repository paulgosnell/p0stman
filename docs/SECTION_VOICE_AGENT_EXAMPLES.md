# Section Voice Agent - Real-World Examples

> **Copy-paste examples for common use cases**

## Table of Contents

1. [CTA Section on Homepage](#1-cta-section-on-homepage)
2. [Floating Assistant on Services Page](#2-floating-assistant-on-services-page)
3. [Contact Page with Text Chat](#3-contact-page-with-text-chat)
4. [Pricing Page with Inline Agent](#4-pricing-page-with-inline-agent)
5. [Case Studies Page](#5-case-studies-page)
6. [Mobile-Optimized Implementation](#6-mobile-optimized-implementation)
7. [Multi-Agent Homepage](#7-multi-agent-homepage)
8. [Conditional Rendering Based on User Type](#8-conditional-rendering-based-on-user-type)

---

## 1. CTA Section on Homepage

Perfect for lead generation and getting users started.

```tsx
// src/pages/Home.tsx
import React from 'react';
import SectionVoiceAgent from '../components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '../config/voice-agent-sections';

export default function Home() {
  const ctaConfig = getSectionConfig('cta');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Build Custom AI Agents That Actually Work
          </h1>
          <p className="text-xl text-white/90 mb-12">
            From voice assistants to chatbots, we build AI that delivers results
          </p>

          {/* Voice Agent CTA */}
          <div className="max-w-2xl mx-auto">
            <SectionVoiceAgent
              section="cta"
              prompt={ctaConfig.prompt}
              firstMessage={ctaConfig.firstMessage}
              placement="inline"
              color="blue"
              icon="🤖"
              buttonText="Talk to Our AI Assistant - Get Started Now"
              onConversationStart={() => {
                console.log('User started conversation from hero CTA');
                // Track in analytics
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'voice_agent_start', {
                    section: 'cta',
                    location: 'hero',
                  });
                }
              }}
              onConversationEnd={(conversationId) => {
                console.log('Conversation ended:', conversationId);
                // Show follow-up message
                setTimeout(() => {
                  alert('Thanks for chatting! Check your email for next steps.');
                }, 1000);
              }}
            />
          </div>

          <p className="text-white/70 text-sm mt-4">
            Or email us: hello@p0stman.com
          </p>
        </div>
      </section>

      {/* Rest of homepage content */}
      <section className="py-16">
        {/* Features, testimonials, etc. */}
      </section>
    </div>
  );
}
```

---

## 2. Floating Assistant on Services Page

Always-accessible help without disrupting the page layout.

```tsx
// src/pages/Services.tsx
import React, { useState } from 'react';
import SectionVoiceAgent from '../components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '../config/voice-agent-sections';

export default function Services() {
  const servicesConfig = getSectionConfig('services');
  const [showFloatingAgent, setShowFloatingAgent] = useState(true);

  return (
    <>
      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our AI Development Services</h1>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Voice AI Agents"
            description="24/7 customer support with natural voice conversations"
            price="From $15k"
          />
          <ServiceCard
            title="Chat AI Agents"
            description="Website chatbots with GPT-4 intelligence"
            price="From $10k"
          />
          <ServiceCard
            title="Custom AI Solutions"
            description="Complex workflows and multi-agent systems"
            price="From $50k"
          />
        </div>

        {/* Detailed service descriptions */}
        <div className="prose max-w-none">
          {/* ... service details ... */}
        </div>
      </div>

      {/* Floating voice assistant - bottom right corner */}
      {showFloatingAgent && (
        <div className="fixed bottom-6 right-6 z-50">
          <SectionVoiceAgent
            section="services"
            prompt={servicesConfig.prompt}
            firstMessage={servicesConfig.firstMessage}
            placement="floating"
            color="purple"
            icon="🛠️"
            onConversationStart={() => {
              console.log('User opened floating assistant');
            }}
            onError={(error) => {
              console.error('Voice agent error:', error);
              // Optionally hide the widget on persistent errors
              if (error.message.includes('not configured')) {
                setShowFloatingAgent(false);
              }
            }}
          />
        </div>
      )}
    </>
  );
}

function ServiceCard({ title, description, price }: {
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-2xl font-bold text-blue-600">{price}</p>
    </div>
  );
}
```

---

## 3. Contact Page with Text Chat

Text-only mode for accessibility and mobile users.

```tsx
// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import SectionVoiceAgent from '../components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '../config/voice-agent-sections';

export default function ContactPage() {
  const contactConfig = getSectionConfig('contact');
  const [conversationActive, setConversationActive] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Chat with our AI or fill out the form below
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* AI Chat on left */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2">💬 Chat with Our AI</h2>
            <p className="text-gray-600 mb-6">
              Get instant answers and schedule a call with our team
            </p>

            {conversationActive && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-blue-800 text-sm">
                  🟢 Conversation in progress...
                </p>
              </div>
            )}

            {showSuccessMessage && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 text-sm font-medium">
                  ✓ Thanks! We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            <SectionVoiceAgent
              section="contact"
              prompt={contactConfig.prompt}
              firstMessage={contactConfig.firstMessage}
              placement="inline"
              textOnly={true} // Text-only chat mode
              showTranscript={true} // Show conversation history
              color="blue"
              icon="💬"
              buttonText="Start Chat Conversation"
              onConversationStart={() => {
                setConversationActive(true);
                setShowSuccessMessage(false);
              }}
              onConversationEnd={(conversationId) => {
                setConversationActive(false);
                setShowSuccessMessage(true);
                console.log('Contact form conversation:', conversationId);

                // Track conversion
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'contact_form_complete', {
                    method: 'voice_agent',
                    conversation_id: conversationId,
                  });
                }
              }}
            />
          </div>

          {/* Traditional contact form on right */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2">📧 Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Or use the traditional contact form
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={5}
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact info */}
        <div className="text-center mt-12 text-gray-600">
          <p>Or email us directly: <a href="mailto:hello@p0stman.com" className="text-blue-600">hello@p0stman.com</a></p>
          <p>Response time: Within 24 hours</p>
        </div>
      </div>
    </div>
  );
}
```

---

## 4. Pricing Page with Inline Agent

Help users understand pricing and select the right package.

```tsx
// src/pages/Pricing.tsx
import React from 'react';
import SectionVoiceAgent from '../components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '../config/voice-agent-sections';

export default function Pricing() {
  const pricingConfig = getSectionConfig('pricing');

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Choose the right solution for your business
        </p>

        {/* Pricing tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$10k-$15k"
            features={[
              'Single-purpose AI agent',
              'Basic integrations (1-2 APIs)',
              'Dashboard setup',
              '2 months support',
            ]}
            color="blue"
          />
          <PricingTier
            name="Growth"
            price="$25k-$50k"
            features={[
              'Multi-purpose AI agent',
              'Advanced integrations',
              'Custom UI/UX',
              'Data analytics',
              '6 months support',
            ]}
            color="purple"
            featured={true}
          />
          <PricingTier
            name="Enterprise"
            price="$75k+"
            features={[
              'Multiple specialized agents',
              'Complex workflows',
              'Full system integration',
              'Dedicated support team',
              'SLA guarantees',
            ]}
            color="green"
          />
        </div>

        {/* Voice agent for pricing questions */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            💰 Not Sure Which Plan Is Right?
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Chat with our AI to find the perfect fit for your budget and requirements
          </p>

          <SectionVoiceAgent
            section="pricing"
            prompt={pricingConfig.prompt}
            firstMessage={pricingConfig.firstMessage}
            placement="inline"
            color="green"
            icon="💰"
            buttonText="Get Personalized Pricing Recommendation"
            onConversationEnd={(conversationId) => {
              console.log('Pricing conversation completed:', conversationId);
              // Optionally show next steps
            }}
          />
        </div>
      </div>
    </div>
  );
}

function PricingTier({ name, price, features, color, featured }: {
  name: string;
  price: string;
  features: string[];
  color: string;
  featured?: boolean;
}) {
  return (
    <div className={`
      bg-white rounded-2xl p-8 shadow-lg
      ${featured ? 'ring-2 ring-purple-500 transform scale-105' : ''}
    `}>
      {featured && (
        <div className="bg-purple-500 text-white text-sm font-bold text-center py-2 px-4 rounded-full mb-4 inline-block">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={`text-3xl font-bold mb-6 text-${color}-600`}>{price}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 bg-${color}-600 text-white py-3 rounded-lg font-semibold hover:bg-${color}-700 transition-colors`}>
        Get Started
      </button>
    </div>
  );
}
```

---

## 5. Case Studies Page

Show examples and connect users to relevant success stories.

```tsx
// src/pages/CaseStudies.tsx
import React from 'react';
import SectionVoiceAgent from '../components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '../config/voice-agent-sections';

export default function CaseStudies() {
  const caseStudiesConfig = getSectionConfig('case-studies');

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Success Stories</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          See how we've helped businesses transform with AI
        </p>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <CaseStudyCard
            title="Mamori Health"
            industry="HealthTech"
            result="60% reduction in call volume"
            image="/images/mamori.jpg"
          />
          <CaseStudyCard
            title="HomeFinders"
            industry="Real Estate"
            result="3x qualified leads"
            image="/images/homefinders.jpg"
          />
          <CaseStudyCard
            title="StyleShop"
            industry="E-commerce"
            result="45% fewer support tickets"
            image="/images/styleshop.jpg"
          />
        </div>

        {/* Voice agent for case study recommendations */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-4">
            📊 Find Your Perfect Match
          </h2>
          <p className="text-center mb-6 text-white/90">
            Tell our AI about your business and we'll share the most relevant success stories
          </p>

          <SectionVoiceAgent
            section="case-studies"
            prompt={caseStudiesConfig.prompt}
            firstMessage={caseStudiesConfig.firstMessage}
            placement="inline"
            color="pink"
            icon="📊"
            buttonText="Get Personalized Case Study Recommendations"
          />
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ title, industry, result, image }: {
  title: string;
  industry: string;
  result: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-sm text-blue-600 font-semibold mb-2">{industry}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{result}</p>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Read case study →
        </a>
      </div>
    </div>
  );
}
```

---

## 6. Mobile-Optimized Implementation

Automatically switch between voice and text based on device.

```tsx
// src/pages/MobileOptimizedPage.tsx
import React, { useState, useEffect } from 'react';
import SectionVoiceAgent from '../components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '../config/voice-agent-sections';

export default function MobileOptimizedPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const config = getSectionConfig('services');

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>

      {/* Content */}
      <div className="mb-12">
        {/* ... page content ... */}
      </div>

      {/* Adaptive voice agent */}
      {isMobile ? (
        // Mobile: Floating text-only chat
        <div className="fixed bottom-4 right-4 z-50">
          <SectionVoiceAgent
            section="services"
            prompt={config.prompt}
            firstMessage={config.firstMessage}
            placement="floating"
            textOnly={true}
            color="purple"
            icon="💬"
          />
        </div>
      ) : isTablet ? (
        // Tablet: Inline with transcript
        <div className="max-w-2xl mx-auto">
          <SectionVoiceAgent
            section="services"
            prompt={config.prompt}
            firstMessage={config.firstMessage}
            placement="inline"
            showTranscript={true}
            color="purple"
            icon="🛠️"
          />
        </div>
      ) : (
        // Desktop: Full inline with voice
        <div className="max-w-3xl mx-auto">
          <SectionVoiceAgent
            section="services"
            prompt={config.prompt}
            firstMessage={config.firstMessage}
            placement="inline"
            showTranscript={false}
            color="purple"
            icon="🛠️"
          />
        </div>
      )}

      {/* Device indicator (for demo purposes) */}
      <div className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm">
        {isMobile ? '📱 Mobile' : isTablet ? '📱 Tablet' : '💻 Desktop'}
      </div>
    </div>
  );
}
```

---

## 7. Multi-Agent Homepage

Multiple agents on different sections of the same page.

```tsx
// src/pages/MultiAgentHomePage.tsx
import React from 'react';
import SectionVoiceAgent from '../components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '../config/voice-agent-sections';

export default function MultiAgentHomePage() {
  return (
    <div>
      {/* Hero with CTA agent */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center mb-8">
            Build AI Agents That Drive Results
          </h1>
          <div className="max-w-2xl mx-auto">
            <SectionVoiceAgent
              section="cta"
              prompt={getSectionConfig('cta').prompt}
              firstMessage={getSectionConfig('cta').firstMessage}
              placement="inline"
              color="blue"
              icon="🤖"
            />
          </div>
        </div>
      </section>

      {/* Services section with services agent */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Service cards */}
          </div>
          <div className="max-w-2xl mx-auto">
            <SectionVoiceAgent
              section="services"
              prompt={getSectionConfig('services').prompt}
              firstMessage={getSectionConfig('services').firstMessage}
              placement="inline"
              color="purple"
              icon="🛠️"
            />
          </div>
        </div>
      </section>

      {/* Case studies section with case studies agent */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Case study cards */}
          </div>
          <div className="max-w-2xl mx-auto">
            <SectionVoiceAgent
              section="case-studies"
              prompt={getSectionConfig('case-studies').prompt}
              firstMessage={getSectionConfig('case-studies').firstMessage}
              placement="inline"
              color="pink"
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Final CTA with contact agent */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Ready to Get Started?</h2>
          <div className="max-w-2xl mx-auto">
            <SectionVoiceAgent
              section="contact"
              prompt={getSectionConfig('contact').prompt}
              firstMessage={getSectionConfig('contact').firstMessage}
              placement="inline"
              color="blue"
              icon="📧"
              buttonText="Let's Talk - Schedule a Call"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## 8. Conditional Rendering Based on User Type

Show different agents based on user authentication or type.

```tsx
// src/pages/ConditionalAgentPage.tsx
import React from 'react';
import SectionVoiceAgent from '../components/voice-agent/SectionVoiceAgent';
import { getSectionConfig } from '../config/voice-agent-sections';
import { useAuth } from '../hooks/useAuth'; // Your auth hook

export default function ConditionalAgentPage() {
  const { user, isAuthenticated } = useAuth();

  const getAgentForUser = () => {
    if (!isAuthenticated) {
      // Guest users: CTA to sign up
      return {
        section: 'cta',
        config: getSectionConfig('cta'),
        customFirstMessage: "Hi! I can help you get started with a free demo. Want to learn more?",
      };
    }

    if (user.plan === 'free') {
      // Free users: Upgrade focused
      return {
        section: 'pricing',
        config: getSectionConfig('pricing'),
        customFirstMessage: "Hi! Want to unlock more features? Let me show you our plans.",
      };
    }

    if (user.plan === 'premium') {
      // Premium users: Support focused
      return {
        section: 'contact',
        config: getSectionConfig('contact'),
        customFirstMessage: "Hi! I'm here to help with any questions about your premium features.",
      };
    }

    return {
      section: 'home',
      config: getSectionConfig('home'),
    };
  };

  const { section, config, customFirstMessage } = getAgentForUser();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Welcome{user ? `, ${user.name}` : ''}!</h1>

      <div className="max-w-2xl mx-auto">
        <SectionVoiceAgent
          section={section}
          prompt={config.prompt}
          firstMessage={customFirstMessage || config.firstMessage}
          placement="inline"
          color={config.color}
          icon={config.icon}
        />
      </div>
    </div>
  );
}
```

---

## Tips for Production Use

### 1. Error Boundaries

Wrap agents in error boundaries to prevent crashes:

```tsx
import { ErrorBoundary } from 'react-error-boundary';

<ErrorBoundary
  fallback={<div>Voice assistant unavailable. Please try again later.</div>}
  onError={(error) => console.error('Voice agent error:', error)}
>
  <SectionVoiceAgent {...props} />
</ErrorBoundary>
```

### 2. Loading States

Show loading indicator while component initializes:

```tsx
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  // Check if agent ID is configured
  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;
  setIsLoading(!agentId);
}, []);

if (isLoading) {
  return <div>Loading voice assistant...</div>;
}
```

### 3. Analytics Tracking

Track all interactions:

```tsx
const trackEvent = (event: string, data: any) => {
  // Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', event, data);
  }

  // Mixpanel
  if (typeof mixpanel !== 'undefined') {
    mixpanel.track(event, data);
  }
};

<SectionVoiceAgent
  section="services"
  prompt={config.prompt}
  onConversationStart={() => trackEvent('voice_agent_start', { section: 'services' })}
  onConversationEnd={(id) => trackEvent('voice_agent_complete', { conversation_id: id })}
  onError={(error) => trackEvent('voice_agent_error', { error: error.message })}
/>
```

---

## Need Help?

- View demo: `/voice-agent-demo`
- Read full guide: `docs/SECTION_VOICE_AGENT_GUIDE.md`
- Quick start: `docs/SECTION_VOICE_AGENT_QUICK_START.md`
- Contact: hello@p0stman.com
