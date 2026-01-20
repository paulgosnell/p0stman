# P0STMAN SEO & LLM Visibility Audit
**Date:** January 2026

## Executive Summary

| Metric | Count |
|--------|-------|
| **Total Indexed URLs** | ~175 |
| **React SPA Pages** | 94 routes |
| **Static HTML Pages** | ~81 |
| **Sitemaps** | 6 |

---

## Site Architecture

### Content Delivery Model
The site uses a **hybrid approach**:
1. **React SPA** (`/index.html`) - Core pages, services, case studies
2. **Static HTML** - SEO content pages (industries, locations, guides, etc.)

Vercel routing config excludes these paths from SPA:
- `/industries/*`
- `/locations/*`
- `/compare/*`
- `/solutions/*`
- `/guides/*`
- `/pricing/*`
- `/use-cases/*`
- `/content-hub/*`

---

## Page Inventory by Category

### 1. Core Service Pages (React SPA)

| URL | Purpose | Priority |
|-----|---------|----------|
| `/` | Homepage | 1.0 |
| `/services` | Services overview | High |
| `/ai-agents` | AI Agents landing | High |
| `/ai-product-studio` | AI Product Studio service | High |
| `/services/ai-agents` | AI Agents service detail | High |
| `/prototype-to-production` | Dev service | High |
| `/fractional-ai-leadership` | Fractional CTO/CPO | High |
| `/fractional-cpo` | Fractional CPO | Medium |
| `/ai-platform-development` | Platform dev | Medium |
| `/product-strategy` | Strategy service | Medium |
| `/digital-transformation` | Digital transformation | Medium |
| `/context-engineering` | Context engineering | Medium |
| `/website` | Website development | Medium |
| `/mobile-app` | Mobile app development | Medium |

### 2. Company Pages (React SPA)

| URL | Purpose |
|-----|---------|
| `/about` | About p0stman |
| `/why` | Why choose p0stman |
| `/process` | Our process |
| `/careers` | Careers page |
| `/paulgosnell` | Founder bio |
| `/contact` | Contact page |
| `/privacy` | Privacy policy |
| `/thanks` | Thank you page |

### 3. Case Studies (22 total - React SPA)

| URL | Client/Project |
|-----|----------------|
| `/case-study/rhythm` | Rhythm |
| `/case-study/experience-a-gift` | Experience A Gift |
| `/case-study/chilled-crm` | Chilled CRM |
| `/case-study/chilled-sites` | Chilled Sites |
| `/case-study/harmony` | Harmony |
| `/case-study/serenity` | Serenity |
| `/case-study/fitlink` | Fitlink |
| `/case-study/clinic-book` | ClinicBook |
| `/case-study/barber-booking` | Barber Booking |
| `/case-study/fab-bank` | FAB Bank |
| `/case-study/al-arabiya` | Al Arabiya |
| `/case-study/etihad-airways` | Etihad Airways |
| `/case-study/doh-health` | DoH Health |
| `/case-study/bfit-web3` | BFIT Web3 |
| `/case-study/arabian-malls` | Arabian Malls |
| `/case-study/genieology` | Genieology |
| `/case-study/mamori-healthos` | Mamori HealthOS |
| `/case-study/luxury-travel-sweden` | Luxury Travel Sweden |
| `/case-study/coach-os` | CoachOS |
| `/case-study/yachtos` | YachtOS |
| `/case-study/pathfinder` | Pathfinder |

**Note:** Case studies are NOT in sitemap.xml - should be added!

### 4. LLM Visibility / GEO Pages (React SPA - NEW)

These are the newest SEO pages targeting AI search optimization:

| URL | Target Keywords | Priority |
|-----|-----------------|----------|
| `/services/llm-visibility-services` | LLM visibility, AI SEO services | 0.9 |
| `/services/chatgpt-advertising-services` | ChatGPT advertising, AI ads | 0.9 |
| `/services/generative-engine-optimization-geo` | GEO, generative engine optimization | 0.9 |
| `/guides/llm-seo-complete-guide-2026` | LLM SEO guide 2026 | 0.9 |
| `/guides/how-to-advertise-on-chatgpt` | ChatGPT advertising how-to | 0.9 |
| `/guides/how-to-get-your-brand-in-chatgpt` | Brand visibility in ChatGPT | 0.9 |
| `/compare/chatgpt-ads-vs-google-ads` | ChatGPT vs Google Ads comparison | 0.8 |
| `/compare/llm-seo-vs-traditional-seo` | LLM SEO vs traditional SEO | 0.8 |
| `/pricing/llm-seo-pricing-guide` | LLM SEO pricing | 0.9 |

### 5. Vibe Coding / Prototype Pages (React SPA)

| URL | Target Keywords |
|-----|-----------------|
| `/from-prototype-to-production` | Prototype to production |
| `/lovable-to-production` | Lovable.dev to production |
| `/bolt-to-production` | Bolt.new to production |
| `/replit-to-production` | Replit to production |
| `/vibe-coding-expert` | Vibe coding expert |
| `/hire-developer-after-prototype` | Hire developer after prototype |

### 6. Industry Pages (30 total - Static HTML)

Hub: `/industries/`

| Industry | URL |
|----------|-----|
| Healthcare | `/industries/healthcare/` |
| Dental | `/industries/dental/` |
| Legal | `/industries/legal/` |
| Accounting | `/industries/accounting/` |
| Real Estate | `/industries/real-estate/` |
| E-commerce | `/industries/ecommerce/` |
| SaaS | `/industries/saas/` |
| Fintech | `/industries/fintech/` |
| Home Services | `/industries/home-services/` |
| Insurance | `/industries/insurance/` |
| Manufacturing | `/industries/manufacturing/` |
| Retail | `/industries/retail/` |
| Hospitality | `/industries/hospitality/` |
| Education | `/industries/education/` |
| Consulting | `/industries/consulting/` |
| Marketing Agencies | `/industries/marketing-agencies/` |
| Construction | `/industries/construction/` |
| Logistics | `/industries/logistics/` |
| Automotive | `/industries/automotive/` |
| Fitness | `/industries/fitness/` |
| Beauty | `/industries/beauty/` |
| Veterinary | `/industries/veterinary/` |
| Recruiting | `/industries/recruiting/` |
| Non-profits | `/industries/non-profits/` |
| Event Planning | `/industries/event-planning/` |
| Property Management | `/industries/property-management/` |
| Travel | `/industries/travel/` |
| Food Delivery | `/industries/food-delivery/` |
| Cleaning Services | `/industries/cleaning-services/` |
| Photography | `/industries/photography/` |

### 7. Location Pages (8 total - Static HTML)

Hub: `/locations/`

| Location | URL |
|----------|-----|
| Dubai | `/locations/dubai/` |
| Abu Dhabi | `/locations/abu-dhabi/` |
| UAE | `/locations/uae/` |
| Middle East | `/locations/middle-east/` |
| UK | `/locations/uk/` |
| US | `/locations/us/` |
| London | `/locations/london/` |
| Saudi Arabia | `/locations/saudi-arabia/` |

### 8. Solution Pages (8 total - Static HTML)

Hub: `/solutions/`

| Solution | URL |
|----------|-----|
| Reduce Call Center Costs | `/solutions/reduce-call-center-costs/` |
| Automate Customer Support | `/solutions/automate-customer-support/` |
| AI Appointment Scheduling | `/solutions/ai-appointment-scheduling/` |
| Scale Support Without Hiring | `/solutions/scale-support-without-hiring/` |
| Eliminate Phone Tag | `/solutions/eliminate-phone-tag/` |
| Handle After Hours Calls | `/solutions/handle-after-hours-calls/` |
| AI Lead Qualification | `/solutions/ai-lead-qualification/` |
| Reduce No-Show Rates | `/solutions/reduce-no-show-rates/` |

### 9. Use Case Pages (12 total - Static HTML)

Hub: `/use-cases/`

| Use Case | URL |
|----------|-----|
| Appointment Scheduling AI | `/use-cases/appointment-scheduling-ai/` |
| Customer Support Automation | `/use-cases/customer-support-automation/` |
| Lead Generation Voice AI | `/use-cases/lead-generation-voice-ai/` |
| Order Status Tracking AI | `/use-cases/order-status-tracking-ai/` |
| Prescription Refill Automation | `/use-cases/prescription-refill-automation/` |
| Payment Collection Automation | `/use-cases/payment-collection-automation/` |
| Patient Intake Automation | `/use-cases/patient-intake-automation/` |
| Insurance Quote Automation | `/use-cases/insurance-quote-automation/` |
| Home Service Dispatch Automation | `/use-cases/home-service-dispatch-automation/` |
| Interview Scheduling Automation | `/use-cases/interview-scheduling-automation/` |
| Vehicle Service Scheduling AI | `/use-cases/vehicle-service-scheduling-ai/` |
| Client Onboarding Automation | `/use-cases/client-onboarding-automation/` |

### 10. Comparison Pages (9 in sitemap - Static HTML)

Hub: `/compare/`

| Comparison | URL |
|------------|-----|
| Vapi Alternative | `/compare/vapi-alternative/` |
| Voiceflow Alternative | `/compare/voiceflow-alternative/` |
| AI Agents vs Chatbots | `/compare/ai-agents-vs-chatbots/` |
| ElevenLabs vs LiveKit | `/compare/elevenlabs-vs-livekit/` |
| Build vs Buy AI Agents | `/compare/build-vs-buy-ai-agents/` |
| Agency vs Freelancer AI | `/compare/agency-vs-freelancer-ai/` |
| ChatGPT Integration vs Custom | `/compare/chatgpt-integration-vs-custom/` |
| In-house vs Outsource AI | `/compare/in-house-vs-outsource-ai/` |
| AI Voice Agents vs Call Centers | `/compare/ai-voice-agents-vs-call-centers/` |

**Plus LLM-focused comparisons (React SPA):**
- `/compare/chatgpt-ads-vs-google-ads`
- `/compare/llm-seo-vs-traditional-seo`

### 11. Guide Pages (37 total - Static HTML)

Hub: `/guides/`

**AI Agent Guides:**
- `what-is-an-ai-agent-complete-guide-2025.html` (Priority 1.0)
- `best-ai-agent-platforms-2025.html` (Priority 1.0)
- `ai-agent-development-cost-timeline-guide-2025.html`
- `ai-agent-vs-chatbot-comparison-guide-2025.html`
- `ai-agent-vs-chatbot-which-do-you-need-2025.html`
- `how-ai-agents-work-explained-for-non-technical-founders-2025.html`
- `ai-agent-security-data-privacy-guide-2025.html`
- `do-i-need-ai-agent-decision-framework-2025.html`
- `can-i-build-ai-agent-myself-diy-guide-2025.html`
- `agentic-ai-workflows-explained-2025.html`

**Voice AI Guides:**
- `voice-ai-for-small-business-complete-guide-2025.html` (Priority 1.0)
- `conversational-ai-explained-voice-chat-agent-types-2025.html` (Priority 1.0)
- `voice-agents-vs-chatbots-difference-guide-2025.html`
- `voice-ai-platforms-elevenlabs-livekit-custom-comparison-2025.html`
- `voice-ai-vs-traditional-call-center-cost-comparison-2025.html`
- `vapi-vs-bland-ai-voice-platform-comparison-2025.html`
- `customer-support-automation-ai-voice-agents-2025.html`

**Business/ROI Guides:**
- `how-ai-agents-improve-business-roi-guide-2025.html`
- `ai-lead-qualification-b2b-sales-guide-2025.html`
- `ai-lead-generation-bot-build-vs-buy-guide-2025.html`
- `ai-agents-real-estate-lead-generation-guide-2025.html`
- `ecommerce-ai-customer-service-roi-guide-2025.html`
- `ai-saas-onboarding-reduce-churn-guide-2025.html`
- `ai-appointment-scheduling-automation-guide-2025.html`
- `ai-agents-customer-service-automation-guide-2025.html`

**Technical Guides:**
- `ai-model-selection-guide-claude-gpt4-gemini-2025.html`
- `multi-model-ai-systems-guide-2025.html`
- `ai-prompt-engineering-guide-2025.html`
- `ai-vibe-coding-guide-2025.html`
- `chatgpt-vs-custom-ai-agent-guide-2025.html`

**Hiring/Agency Guides:**
- `how-to-hire-ai-development-agency-2025.html`
- `ai-agency-vs-freelancer-vs-inhouse-cost-comparison-2025.html`
- `ai-development-red-flags-avoid-bad-agencies-2025.html`
- `why-ai-consultants-dont-ship-what-to-do-instead-2025.html`

**Development Guides:**
- `mvp-to-production-ai-agent-roadmap-2025.html`
- `building-saas-roadmap-2025.html`

### 12. Pricing Pages (3 in static + 1 React)

Hub: `/pricing/`

| Page | URL |
|------|-----|
| AI Voice Agent Pricing Guide 2025 | `/pricing/ai-voice-agent-pricing-guide-2025/` |
| AI Automation Cost Calculator | `/pricing/ai-automation-cost-calculator/` |
| Build vs Buy AI Comparison | `/pricing/build-vs-buy-ai-comparison/` |
| LLM SEO Pricing Guide | `/pricing/llm-seo-pricing-guide` (React) |

### 13. Content Hub (Legacy - Static HTML)

Hub: `/content-hub/`

**Posts:**
- `/content-hub/posts/ai-growth-hacks.html`
- `/content-hub/posts/future-ai-product-development.html`
- `/content-hub/posts/why-vibe-coding-matters.html`

**Tips:**
- `/content-hub/tips/10-ai-productivity-hacks.html`
- `/content-hub/tips/ai-product-tips.html`
- `/content-hub/tips/growth-hacking-2025.html`

**Marketing:**
- `/content-hub/marketing/seo-ai-content.html`
- `/content-hub/marketing/viral-marketing-strategies.html`

**Training:**
- `/content-hub/training/ai-tool-mastery-workshop.html`
- `/content-hub/training/product-management-bootcamp.html`

**Videos:**
- `/content-hub/videos/ai-expert-interview.html`
- `/content-hub/videos/building-first-ai-app.html`

---

## Issues & Recommendations

### Critical Issues

1. **Case Studies Not in Sitemap**
   - 22 case studies exist but none are in `sitemap.xml`
   - These are valuable for E-E-A-T and should be indexed
   - **Action:** Add all `/case-study/*` URLs to sitemap

2. **Duplicate Content Risk**
   - Some guides exist as both static HTML AND React routes
   - Example: LLM SEO guides exist in both `/guides/` (static) and `/guides/` (React)
   - **Action:** Audit for canonical URL conflicts

3. **Outdated Dates in Sitemap**
   - Many URLs show `lastmod: 2025-08-28` or `2025-11-01`
   - Should update to reflect actual content changes
   - **Action:** Update lastmod dates or implement auto-generation

### Moderate Issues

4. **Missing Sitemap Index**
   - 6 separate sitemaps but no sitemap index file
   - robots.txt only references main sitemap
   - **Action:** Create `sitemap-index.xml` referencing all sitemaps

5. **No Structured Data**
   - Pages likely missing JSON-LD schema markup
   - Important for LLM citation and rich snippets
   - **Action:** Add Article, Service, FAQ, Organization schema

6. **Content Hub Appears Stale**
   - Content hub articles dated 2025-08-28
   - May be legacy content not being maintained
   - **Action:** Either update or consider deprecating

### SEO Opportunities

7. **LLM Visibility Pages Well-Structured**
   - Good topical clustering for GEO/LLM SEO
   - Service pages + guides + comparisons + pricing
   - **Opportunity:** Ensure internal linking between cluster pages

8. **Industry Pages Comprehensive**
   - 30 industries covered
   - Good for local/vertical search
   - **Opportunity:** Add more specific use cases per industry

9. **Location Pages Limited**
   - Only 8 locations (mostly Middle East focused)
   - **Opportunity:** Add more UK/US cities if target market

---

## Sitemap Summary

| Sitemap | URLs | Last Updated |
|---------|------|--------------|
| `sitemap.xml` | ~175 | Mixed dates |
| `industries-sitemap.xml` | 31 | 2025-11-01 |
| `locations-sitemap.xml` | 9 | 2025-11-01 |
| `solutions-sitemap.xml` | 9 | 2025-11-01 |
| `use-cases-sitemap.xml` | 13 | 2025-11-01 |
| `comparisons-sitemap.xml` | 10 | 2025-11-01 |

---

## Orphaned/Unused Files

### Files to Remove

| Path | Reason |
|------|--------|
| `p0stman-seo-pages 2/` | Planning docs, not used by app |
| `templates/` | Legacy templates, not in build |
| `scripts/add-conversion-elements.js` | Unused script |
| `src/pages/Projects.tsx` | Component with no route |

### Files in Sitemap but May Not Exist

- Need to verify all static HTML pages actually exist at their URLs
- Some `content-hub` pages may be broken

---

## Next Steps

1. **Immediate (This Week)**
   - [ ] Add case studies to sitemap
   - [ ] Create sitemap index file
   - [ ] Remove orphaned files
   - [ ] Verify all sitemap URLs resolve

2. **Short Term (This Month)**
   - [ ] Add JSON-LD schema to all pages
   - [ ] Audit internal linking on LLM visibility cluster
   - [ ] Update lastmod dates
   - [ ] Consider deprecating content-hub or refreshing it

3. **Long Term**
   - [ ] Expand location pages for UK/US
   - [ ] Add industry-specific case studies
   - [ ] Create more comparison content for LLM visibility
   - [ ] Build backlink strategy for high-priority guides
