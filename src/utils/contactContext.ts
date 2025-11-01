// Context-aware messaging for contact page based on referrer

export interface ContactContext {
  title: string;
  subtitle: string;
  proof: string;
  industry?: string;
  caseStudyFilter?: string;
}

export function getContactContext(referrer: string = ''): ContactContext {
  // Default fallback
  const defaultContext: ContactContext = {
    title: "Ready to Build Your AI Solution?",
    subtitle: "From $5K. 6-day MVP. Proven results across 18+ industries.",
    proof: "2,500+ projects delivered. Start in 6 days."
  };

  if (!referrer) {
    return defaultContext;
  }

  // Industries
  if (referrer.includes('/industries/healthcare')) {
    return {
      title: "Ready to Transform Your Healthcare Practice?",
      subtitle: "We've built AI voice agents for medical practices. Let us build yours.",
      proof: "Reduced no-shows 35% for DoH Health. 6-day implementation.",
      industry: "healthcare",
      caseStudyFilter: "healthcare,dental"
    };
  }

  if (referrer.includes('/industries/real-estate')) {
    return {
      title: "Ready to Transform Your Real Estate Business?",
      subtitle: "We've built AI lead qualification systems. Let us build yours.",
      proof: "From $5K. 6-day implementation. Proven ROI.",
      industry: "real estate",
      caseStudyFilter: "real-estate,property"
    };
  }

  if (referrer.includes('/industries/fintech')) {
    return {
      title: "Ready to Build Your Fintech Solution?",
      subtitle: "We've built platforms for major banks. Let us build yours.",
      proof: "Trusted by FAB Bank. Enterprise-grade security. 6-day MVP.",
      industry: "fintech",
      caseStudyFilter: "fintech,banking"
    };
  }

  if (referrer.includes('/industries/ecommerce')) {
    return {
      title: "Ready to Scale Your E-commerce Business?",
      subtitle: "We've built AI-powered platforms that drive sales. Let us build yours.",
      proof: "2,500+ websites built. From $5K. 6-day launch.",
      industry: "ecommerce",
      caseStudyFilter: "ecommerce,retail"
    };
  }

  if (referrer.includes('/industries/saas')) {
    return {
      title: "Ready to Launch Your SaaS Product?",
      subtitle: "We've built platforms serving 1,000+ active users. Let us build yours.",
      proof: "1,000+ active users. Token-based scaling. 6-day MVP.",
      industry: "saas",
      caseStudyFilter: "saas,platform"
    };
  }

  if (referrer.includes('/industries/')) {
    const industry = referrer.split('/industries/')[1]?.split('/')[0]?.replace(/-/g, ' ');
    return {
      title: `Ready to Transform ${industry}?`,
      subtitle: "We've built AI solutions across 30+ industries. Let us build yours.",
      proof: "From $5K. 6-day implementation. Proven ROI.",
      industry: industry || undefined
    };
  }

  // Locations
  if (referrer.includes('/locations/dubai')) {
    return {
      title: "Ready to Build in Dubai?",
      subtitle: "Based in Dubai, we've built solutions for FAB Bank, DoH Health, Etihad Airways, and more.",
      proof: "Local presence. 5+ major UAE clients. 6-day MVP.",
      industry: "dubai",
      caseStudyFilter: "uae,middle-east"
    };
  }

  if (referrer.includes('/locations/uae')) {
    return {
      title: "Ready to Build in the UAE?",
      subtitle: "We've built platforms for leading UAE organizations. Let us build yours.",
      proof: "Dubai-based. Trusted by FAB Bank, DoH Health, Etihad. 6-day MVP.",
      industry: "uae",
      caseStudyFilter: "uae,middle-east"
    };
  }

  if (referrer.includes('/locations/')) {
    const location = referrer.split('/locations/')[1]?.split('/')[0]?.replace(/-/g, ' ');
    return {
      title: `Ready to Build in ${location}?`,
      subtitle: "Global delivery. Local expertise. AI-powered development.",
      proof: "Serving clients in 8+ countries. From $5K. 6-day MVP."
    };
  }

  // Comparisons
  if (referrer.includes('/compare/elevenlabs') || referrer.includes('/compare/livekit')) {
    return {
      title: "Ready to Build Your Voice AI Solution?",
      subtitle: "We've built with ElevenLabs, LiveKit, and custom solutions. Let us help you choose.",
      proof: "Voice AI experts. Multiple platform experience. 6-day MVP.",
      caseStudyFilter: "voice-ai,ai-agent"
    };
  }

  if (referrer.includes('/compare/vapi') || referrer.includes('/compare/voiceflow')) {
    return {
      title: "Ready to Build Your AI Agent?",
      subtitle: "Custom AI agents that integrate with your systems. No platform lock-in.",
      proof: "Full control. Custom integrations. From $5K.",
      caseStudyFilter: "ai-agent,voice-ai"
    };
  }

  if (referrer.includes('/compare/')) {
    return {
      title: "Ready to Build the Right Solution?",
      subtitle: "We'll help you choose the best technology for your needs.",
      proof: "Platform-agnostic. Best-fit solutions. 6-day MVP."
    };
  }

  // Solutions
  if (referrer.includes('/solutions/reduce-call-center')) {
    return {
      title: "Ready to Reduce Call Center Costs?",
      subtitle: "AI voice agents that handle calls 24/7 for a fraction of the cost.",
      proof: "Save 60-80% on call handling. 6-day implementation.",
      caseStudyFilter: "voice-ai,automation"
    };
  }

  if (referrer.includes('/solutions/automate-customer-support')) {
    return {
      title: "Ready to Automate Customer Support?",
      subtitle: "24/7 AI agents that never sleep, never quit, and never have a bad day.",
      proof: "Handle unlimited requests. From $5K. 6-day MVP.",
      caseStudyFilter: "ai-agent,automation"
    };
  }

  if (referrer.includes('/solutions/')) {
    return {
      title: "Ready to Solve This Challenge?",
      subtitle: "We've built AI solutions for complex business problems. Let us tackle yours.",
      proof: "Proven ROI. 6-day implementation. From $5K."
    };
  }

  // Case studies
  if (referrer.includes('/case-study/')) {
    return {
      title: "Ready to Get Similar Results?",
      subtitle: "We can build a custom solution for your business. Let's discuss your needs.",
      proof: "18+ case studies. 6-day MVP. From $5K."
    };
  }

  // Services
  if (referrer.includes('/services')) {
    return {
      title: "Ready to Get Started?",
      subtitle: "Let's discuss your project and create a plan that works for you.",
      proof: "From $50 consultation to $20K full builds. 6-day MVPs."
    };
  }

  // Default
  return defaultContext;
}

export function getIndustryFromReferrer(referrer: string = ''): string | undefined {
  const context = getContactContext(referrer);
  return context.industry;
}
