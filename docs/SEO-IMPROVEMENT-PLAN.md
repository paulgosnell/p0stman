# P0STMAN SEO & LLM Improvement Plan
**Created:** January 2026
**Priority:** Fix CTR → Add Schema → Create Content

---

## Phase 1: CTR Optimization (Highest Priority)

### Target Pages - High Impressions, Low/Zero CTR

Based on GSC data, these pages need title/meta rewrites:

| Page | Current Impressions | Current CTR | Position | Priority |
|------|---------------------|-------------|----------|----------|
| AI Lead Qualification Guide | 3,570 | 0% | 6.5 | Critical |
| Voice Agent Pricing Guide | 3,153 | 0.03% | 6.3 | Critical |
| Best AI Agent Platforms | 2,394 | 0% | 7.1 | Critical |
| Claude/GPT4/Gemini Guide | 2,372 | 0% | 6.8 | Critical |

### Title Tag Formula

**Pattern:** `[Specific Benefit] + [Proof/Numbers] + [Year/Freshness]`

| Page | New Title | New Meta Description |
|------|-----------|---------------------|
| `/guides/ai-lead-qualification-b2b-sales-guide-2025.html` | "AI Lead Qualification: 7 Tools Tested + Real ROI Numbers [2026]" | "We tested AI lead qualification tools on 10,000+ leads. See which platforms actually convert, with pricing from $99-$2,000/mo and implementation timelines." |
| `/pricing/ai-voice-agent-pricing-guide-2025/` | "Voice Agent Pricing: Real Costs from $0.05-$2/min Exposed [2026]" | "Transparent voice AI pricing breakdown. Compare Vapi, Bland, ElevenLabs, and custom builds. Includes hidden costs most vendors don't mention." |
| `/guides/best-ai-agent-platforms-2025.html` | "Best AI Agent Platforms Compared: 12 Tools, Honest Reviews [2026]" | "We've built on most of these platforms. Here's what actually works for customer service, sales, and support automation. Updated January 2026." |
| `/guides/ai-model-selection-guide-claude-gpt4-gemini-2025.html` | "Claude vs GPT-4 vs Gemini: Which AI Model for Your Agent? [2026]" | "Real performance comparisons for agent development. Speed, cost, accuracy tested. Plus: when to use multiple models together." |

### Additional High-Value Pages to Optimize

| Page | Suggested New Title |
|------|---------------------|
| `/guides/what-is-an-ai-agent-complete-guide-2025.html` | "What is an AI Agent? Complete Guide with Examples [2026]" |
| `/guides/voice-ai-for-small-business-complete-guide-2025.html` | "Voice AI for Small Business: Setup Guide + Cost Breakdown [2026]" |
| `/guides/how-to-hire-ai-development-agency-2025.html` | "How to Hire an AI Agency: Red Flags, Questions & Costs [2026]" |
| `/guides/ai-agent-development-cost-timeline-guide-2025.html` | "AI Agent Development: Real Costs & Timelines from 50+ Projects" |

---

## Phase 2: JSON-LD Schema Implementation

### Organization Schema (Add to all pages via layout)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "p0stman",
  "url": "https://p0stman.com",
  "logo": "https://p0stman.com/logo.png",
  "description": "AI-native product studio specializing in voice agents, AI automation, and product development",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Paul Gosnell",
    "url": "https://p0stman.com/paulgosnell"
  },
  "sameAs": [
    "https://linkedin.com/company/p0stman",
    "https://twitter.com/p0stman"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://p0stman.com/contact"
  }
}
```

### Service Schema (Add to service pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Voice Agent Development",
  "provider": {
    "@type": "Organization",
    "name": "p0stman"
  },
  "description": "Custom AI voice agent development for customer service, sales, and support automation",
  "areaServed": ["US", "UK", "UAE"],
  "serviceType": "AI Development"
}
```

### Article Schema (Add to all guides)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Page Title]",
  "author": {
    "@type": "Person",
    "name": "Paul Gosnell",
    "url": "https://p0stman.com/paulgosnell"
  },
  "publisher": {
    "@type": "Organization",
    "name": "p0stman"
  },
  "datePublished": "[Date]",
  "dateModified": "[Date]"
}
```

### FAQ Schema (Add to pages with FAQ sections)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does an AI voice agent cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI voice agent costs range from $500/month for basic platforms to $50,000+ for custom enterprise solutions..."
      }
    }
  ]
}
```

---

## Phase 3: FAQ Sections

Add FAQ sections to these high-value pages:

### Service Pages
- `/services/llm-visibility-services`
- `/services/chatgpt-advertising-services`
- `/ai-agents`
- `/ai-product-studio`
- `/fractional-ai-leadership`

### Guide Pages (Top performers)
- Voice Agent Pricing Guide
- Best AI Agent Platforms
- AI Lead Qualification Guide
- How to Hire AI Agency

### FAQ Content Examples

**For AI Agents page:**
1. How much does a custom AI agent cost?
2. How long does it take to build an AI agent?
3. What's the difference between an AI agent and a chatbot?
4. Can AI agents integrate with my existing systems?
5. Do I need technical expertise to use AI agents?

**For LLM Visibility Services:**
1. What is LLM SEO / Generative Engine Optimization?
2. How do I get my brand mentioned in ChatGPT?
3. How long does LLM visibility optimization take?
4. Is LLM SEO different from traditional SEO?
5. How do you measure LLM visibility success?

---

## Phase 4: New Comparison Pages

Based on the ElevenLabs vs LiveKit success (20% CTR, position 1), create:

| Comparison | Target Keywords | Notes |
|------------|-----------------|-------|
| Vapi vs Bland AI | "vapi vs bland", "bland ai alternative" | Both are voice AI platforms, direct competitors |
| Retell AI vs Vapi | "retell ai vs vapi", "retell alternative" | Emerging voice AI comparison |
| Voiceflow vs Botpress | "voiceflow vs botpress", "voiceflow alternative" | Chatbot builder comparison |
| Custom AI Agent vs ChatGPT Plugins | "chatgpt plugin vs custom", "custom ai agent" | Decision-stage content |
| Bland AI vs ElevenLabs | "bland ai vs elevenlabs" | Voice synthesis comparison |

### Comparison Page Template

Each comparison page should include:
1. **Quick verdict** (above fold)
2. **Feature comparison table**
3. **Pricing comparison**
4. **Pros/cons for each**
5. **Use case recommendations** ("Choose X if..., Choose Y if...")
6. **FAQ section**
7. **Author byline + credentials**

---

## Phase 5: Fractional CPO/AI Leadership

### Current State
- `/fractional-cpo` exists but ranks position 81 for "fractional cpo" (93 impressions)
- Opportunity to capture this traffic

### Actions
1. Audit current page content
2. Optimize title: "Fractional CPO Services | Part-Time Product Leadership"
3. Add more content depth (what's included, pricing model, case studies)
4. Create supporting content:
   - `/guides/when-to-hire-fractional-cpo`
   - `/compare/fractional-cpo-vs-full-time-cpo`

---

## Phase 6: Author Authority

### Add to all guide pages:

**Author Box Component:**
```
Written by Paul Gosnell
Founder of p0stman | 15+ years in product & AI
Paul has led product development for Fortune 500 companies and built AI agents for 50+ businesses.
[LinkedIn] [Full Bio]
```

### Update `/paulgosnell` page:
- Add credentials, certifications
- List notable clients/projects
- Add "Articles by Paul" section
- Ensure page has Person schema markup

---

## Implementation Priority

| Phase | Task | Effort | Impact | Priority |
|-------|------|--------|--------|----------|
| 1 | Title/meta rewrites (10 pages) | 2 hours | High | **Do First** |
| 2 | Organization schema (global) | 1 hour | Medium | High |
| 2 | Article schema (guides) | 2 hours | Medium | High |
| 3 | FAQ sections (5 pages) | 3 hours | High | High |
| 4 | 3 new comparison pages | 6 hours | High | Medium |
| 5 | Fractional CPO optimization | 2 hours | Medium | Medium |
| 6 | Author boxes | 2 hours | Medium | Medium |

---

## Success Metrics

### 30-Day Targets
- CTR improvement: 0.18% → 0.5%+ on optimized pages
- Click increase: 45/month → 100+/month
- New comparison pages ranking top 10

### 90-Day Targets
- Overall CTR: 0.5%+
- Clicks: 200+/month
- Featured snippets from FAQ schema
- LLM citation monitoring (check ChatGPT/Claude for brand mentions)
