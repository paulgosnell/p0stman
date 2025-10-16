# P0STMAN Homepage Redesign
## Product Requirements Document

**Version:** 1.0  
**Date:** October 2025  
**Owner:** Paul Gosnell  
**Status:** Ready for Implementation  

---

## Executive Summary

The current p0stman.com homepage is visually cluttered, lacks clear hierarchy, and fails to communicate P0STMAN's core differentiators to outbound leads. This redesign focuses on:

- **Simplifying visual design** (eliminate color chaos, establish clear brand palette)
- **Establishing hierarchy** (hero dominates, everything else supports)
- **Converting leads** (outbound prospects validate the positioning)
- **Mobile-first UX** (responsive, touch-friendly, no horizontal scroll)
- **Showcasing the AI agent differentiator** (Orb demo as centerpiece)

**Expected outcome:** Increased conversion rate from outbound leads (current ~2-3% → target 7-10%)

---

## Design System

### Color Palette
- **Primary Blue:** `#0066FF` (electric blue - brand primary)
- **Background:** `#FFFFFF` (clean white)
- **Accent Orange:** `#FF6B35` (energy, calls-to-action)
- **Neutrals:** 
  - Gray-50: `#F9FAFB`
  - Gray-100: `#F3F4F6`
  - Gray-600: `#4B5563`
  - Gray-900: `#111827`

**Rules:**
- No other colors in the design
- Remove all existing rainbow boxes, purple backgrounds, etc.
- Use gray scale for secondary/tertiary text
- Reserve orange strictly for CTAs and highlights

### Typography
- **Headlines:** Bold, sans-serif (use Tailwind's font-bold)
- **Body:** Regular weight, 16px base, line-height 1.6
- **Spacing:** Comfortable (60% negative space)
- **Max content width:** 1152px (max-w-6xl)

### Spacing & Layout
- **Section padding:** 128px top/bottom (py-32) on desktop, 64px on mobile (py-16)
- **Horizontal padding:** 24px on mobile (px-6), 0 on desktop
- **Gap between grid items:** 64px (gap-16)
- **Component margin:** Consistent 32px spacing (gap-8)

### Buttons & CTAs
- **Primary CTA:** Blue background, white text, rounded-lg, hover: darker blue
- **Secondary:** Outline style with blue border
- **Sizing:** Min 48px height (touch-friendly)
- **Font:** Medium weight, 14px text

---

## Page Structure

### 1. Header (Sticky)
**Component: Header**

```
[Logo] _____ [Nav Links] [CTA Button]
```

**Elements:**
- Logo: "P0STMAN" in blue, left-aligned, clickable to home
- Navigation links (hidden on mobile, hamburger menu):
  - AI Agents (#agents)
  - Work (#work)
  - Services (#services)
- CTA Button: "Let's Build" → opens contact modal or scrolls to CTA section

**Styling:**
- White background with subtle bottom border (gray-100)
- Sticky positioning (z-50)
- Mobile: Logo + hamburger menu + CTA button only
- Responsive breakpoint: md (768px)

---

### 2. Hero Section
**Component: Hero**

**Layout:**
- Desktop: 2-column grid (text left, demo right)
- Mobile: Single column (text stacks on top)

**Left Column (Copy):**
```
Headline (h1, text-6xl, bold)
"[HEADLINE - Choose One:]"
- "AI Agents That Close Deals"
- "Ship Production AI in 6 Days"
- "Faster Than Your Agency Can Think"

Subheader (text-xl, gray-600)
"One sentence value prop. Something about speed/quality/price."

CTA Button
"Chat with Orb" or "See How It Works"
+ Optional secondary button/link
```

**Right Column (Demo):**
- Embedded Orb agent visualization
- Options:
  - Static screenshot (simplest)
  - Animated demo (Framer Motion)
  - Live interactive chat (requires backend)
- **Minimum:** Shows the orb in action, feels "alive"
- Responsive: Scales down on tablets/mobile

**Spacing:**
- Top margin: 128px (py-32)
- Bottom margin: 128px (py-32)
- Gap between columns: 64px (gap-16)
- Hero section max-width: 1152px

---

### 3. Social Proof Section
**Component: Metrics**

**Layout:** 3-column grid on desktop, 1-column on mobile

**Content:**
```
Metric 1: "20+ Years"
Description: "Shipped 1000+ products"

Metric 2: "40% Faster"
Description: "Than traditional agencies (12-project baseline)"

Metric 3: "Production Ready"
Description: "Not POCs. Live systems in 3 weeks."
```

**Styling:**
- Large number (text-4xl, bold, blue)
- Small description (text-sm, gray-600)
- Centered alignment
- Subtle background (gray-50) OR white with borders
- Spacing: 64px between items

---

### 4. AI Agents Section
**Component: Agents** (id: #agents)

**Headline:**
```
"What We Build"
```

**Layout:** 3-column grid on desktop, stacked on mobile

**Agent Cards (3 total):**

**Card 1: Voice Agents**
- Icon: Speaker/Microphone
- Title: "Voice Agents"
- Description: "ElevenLabs + LiveKit powered. Lead generation, customer support, information delivery. Sounds human, closes deals."
- Tech: "ElevenLabs, LiveKit"

**Card 2: Chat Agents**
- Icon: Chat bubble
- Title: "Chat Agents"
- Description: "AI SDK + custom integrations. Support assistants, interactive demos, product walkthroughs. Deployed in hours."
- Tech: "AI SDK, Custom"

**Card 3: Code Agents**
- Icon: Code brackets
- Title: "Code Agents"
- Description: "Multi-model code generation. Website builders, feature automation, database migrations. chilledsites.com is live proof."
- Tech: "Claude, OpenAI, Gemini, Grok"

**Styling:**
- White cards with subtle border (gray-100) or box-shadow
- Hover effect: Subtle lift or shadow increase
- Padding: 32px inside each card (p-8)
- Gap: 32px between cards (gap-8)
- Icon: 48px size, blue color

---

### 5. Case Studies Section
**Component: CaseStudies** (id: #work)

**Headline:**
```
"Recent Work"
```

**Layout:** Alternate layout per case study
- Case 1: Image left, text right
- Case 2: Text left, image right
- Case 3: Image left, text right

**Each Case Study Card:**
```
Visual (Image or Screenshot)
- 600px x 400px minimum
- Rounded corners (rounded-lg)
- Subtle shadow

Client Name (text-sm, gray-600)

Project Title (text-2xl, bold)

Problem (1 sentence, text-lg, gray-700)

Solution (1-2 sentences, gray-600)

Result/Metric (bold, blue accent)
```

**Three Case Studies (Choose Your Best):**

**Case 1: Voice Agent Build**
- Client: [Your strongest voice agent client]
- Project: "AI Lead Generation Agent"
- Problem: "Manual follow-ups were eating 20 hours/week"
- Solution: "Built a voice agent that qualifies leads automatically"
- Result: "500+ leads qualified/month, 60% conversion improvement"

**Case 2: Code Agent Build**
- Client: "[Internal or customer] - chilledsites.com example"
- Project: "AI Website Generator"
- Problem: "Web design took weeks, cost thousands"
- Solution: "Built multi-model code agent that generates full sites in minutes"
- Result: "70+ sites built, shipping in 2 minutes instead of 2 weeks"

**Case 3: Full Product Build**
- Client: [Your best SaaS/app build]
- Project: "[Your best product]"
- Problem: "[Their problem]"
- Solution: "[How you solved it]"
- Result: "[Metric]"

**Styling:**
- Spacing: 96px between case studies (gap-24)
- Image sizing: Responsive (full width on mobile, constrained on desktop)
- Text hierarchy: Clear title > problem > solution > result
- Padding: 64px around section (p-16)

---

### 6. Services Section
**Component: Services** (id: #services)

**Headline:**
```
"How We Work"
```

**Layout:** 3-column grid on desktop, stacked on mobile

**Service Tier 1: AI Agent Development**
- Headline: "AI Agent Development"
- Description: "Voice agents, chat agents, code agents. From pilot to production."
- Price Range: "$5k-$50k+"
- Timeline: "Pilots in days, production in weeks"
- CTA: "Start a Pilot"

**Service Tier 2: MVP Launch**
- Headline: "MVP to Market"
- Description: "Full-stack web/mobile products. Rapid prototyping, market validation, deployment."
- Price Range: "$10k-$75k"
- Timeline: "6 days to 3 weeks"
- CTA: "Launch Your MVP"

**Service Tier 3: Strategic Services**
- Headline: "Fractional Leadership"
- Description: "CPO/CTO/CIO services. Digital transformation, agency white-label support, creative prototypes."
- Price Range: "Custom pricing"
- Timeline: "Ongoing engagement"
- CTA: "Discuss Strategy"

**Styling:**
- White cards with blue top border (4px)
- Padding: 32px (p-8)
- Price/timeline in accent orange
- Gap: 32px between cards
- Hover: Subtle shadow or lift
- CTA buttons: Blue background, orange text OR orange background

---

### 7. Bottom CTA Section
**Component: CTA**

**Headline:**
```
"Ready to Ship Fast?"
(text-4xl, bold)
```

**Subheader:**
```
"Tell us what you're building. We'll tell you the timeline and price."
(text-lg, gray-600)
```

**Form or Contact:**
- **Email input** (inline or form field)
- **Phone input** (optional, or separate)
- **CTA Button**: "Let's Talk" or "Get Started"
- Alternative: "Or schedule a call" link

**Styling:**
- Center-aligned
- Blue accent for inputs/buttons
- Background: Light gray (gray-50) or white
- Padding: 96px top/bottom, 64px sides
- Max-width: 800px

---

### 8. Footer
**Component: Footer**

**Layout:** 4 columns on desktop, 2 columns on mobile

**Column 1: Brand**
- Logo
- "AI-powered product studio"
- Social icons (LinkedIn, Twitter, GitHub - if applicable)

**Column 2: Product**
- AI Agents
- MVP Launch
- Services
- chilledsites.com link

**Column 3: Company**
- About
- Work
- Blog (if you have one)
- Contact

**Column 4: Legal**
- Privacy Policy
- Terms of Service
- Copyright

**Styling:**
- Dark background (gray-900) with white text OR white with gray text
- Link hover: Blue color
- Spacing: Consistent padding
- Top border: Subtle gray-100 divider

---

## Responsive Breakpoints

```
Mobile (0px - 767px)
- Single column layouts
- Hamburger menu
- Padding: px-6 (24px)
- Hero: Text only, demo below in smaller size
- Case studies: Single column, image full width
- Buttons: Full width or wide (w-full or 2/3)

Tablet (768px - 1023px)
- 2-column layouts where applicable
- Navigation visible
- Padding: px-8 (32px)

Desktop (1024px+)
- 2-3 column layouts
- Full header with all nav
- Optimal spacing (60% negative space)
- max-w-6xl container
```

---

## Navigation & Linking

**Header Links:**
- Logo → Home (#/)
- "AI Agents" → Scroll to #agents section
- "Work" → Scroll to #work section
- "Services" → Scroll to #services section
- "Let's Build" button → Scroll to CTA section OR open contact modal

**Footer Links:**
- All standard footer links (Privacy, Terms, etc.)
- Social icons link to external profiles

**Internal Links:**
- All smooth scroll (CSS scroll-behavior: smooth)

---

## Performance & Technical Requirements

### Image Optimization
- All images: Use Next.js `<Image>` component
- Formats: WebP with fallback
- Sizes: Responsive srcset
- Lazy loading: Enabled by default

### Animations
- Orb demo: Can use Framer Motion (optional)
- Hover effects: CSS transitions (200-300ms)
- Scroll animations: Optional but appreciated
- No heavy animations that impact mobile performance

### Accessibility
- WCAG 2.1 AA compliant
- Semantic HTML (h1, h2, section, nav, etc.)
- Color contrast: 7:1 for text
- Alt text on all images
- Keyboard navigation fully supported
- Focus states visible

### SEO
- Meta title: "P0STMAN | AI-Powered Product Studio"
- Meta description: "Ship production AI products 40% faster than agencies. Voice agents, MVPs, digital transformation."
- H1: Single, matches page intent
- Schema markup: Organization, LocalBusiness (optional)

### Performance Targets
- Lighthouse scores: 90+ on all metrics
- Core Web Vitals: All green
- First Contentful Paint: <2s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

---

## Content Decisions (TBD - Confirm with Paul)

**1. Hero Headline (Choose One):**
- [ ] "AI Agents That Close Deals"
- [ ] "Ship Production AI in 6 Days"
- [ ] "Faster Than Your Agency Can Think"
- [ ] Other: _____________

**2. Hero Subheader:**
Current recommendation: "All three: speed, quality, price. AI-first workflows. Human validation. Ready to deploy."

**3. Orb Demo:**
- [ ] Static screenshot
- [ ] Animated Framer Motion
- [ ] Live interactive (requires backend)

**4. Three Case Studies (Rank Your Best):**
1. Which voice agent win?
2. Which code agent win (chilledsites or other)?
3. Which SaaS/product win?

**5. CTA Section:**
- Email capture only?
- Email + phone?
- Schedule call link?
- Contact form?

---

## Implementation Checklist

**Phase 1: Setup**
- [ ] Create new Git branch: `redesign/homepage-v2`
- [ ] Set up Tailwind CSS with custom color palette
- [ ] Create component structure (Header, Hero, Metrics, Agents, CaseStudies, Services, CTA, Footer)

**Phase 2: Build Components**
- [ ] Header component (sticky, responsive nav, mobile hamburger)
- [ ] Hero section (2-col desktop, 1-col mobile, CTA)
- [ ] Metrics section (3-col grid, social proof)
- [ ] Agents section (3 cards with icons)
- [ ] Case Studies section (alternating layout, 3 projects)
- [ ] Services section (3 pricing tiers)
- [ ] CTA section (contact form or inline capture)
- [ ] Footer (4-col desktop, responsive)

**Phase 3: Polish**
- [ ] Mobile responsiveness audit (all breakpoints)
- [ ] Image optimization (WebP, responsive srcset)
- [ ] Animation polish (Framer Motion on scroll, hover states)
- [ ] Accessibility audit (contrast, keyboard nav, screen reader)
- [ ] SEO validation (meta tags, schema, h1)

**Phase 4: Testing**
- [ ] Lighthouse performance audit
- [ ] Core Web Vitals check
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iOS Safari, Chrome Android)
- [ ] Form submission testing (if applicable)

**Phase 5: Deployment**
- [ ] Code review
- [ ] Merge to main
- [ ] Deploy to Vercel
- [ ] Monitor for errors
- [ ] A/B test vs old design (optional)

---

## Notes for Claude Code

### Tone & Voice
- Direct, no corporate fluff
- Technically honest
- Show personality (dry wit acceptable)
- Demonstrate that you ship

### Design Philosophy
- **Less is more:** 60% negative space
- **Hierarchy rules:** Hero dominates, supporting sections are secondary
- **Mobile-first:** Build for phones, enhance for desktop
- **Speed:** Every interaction should feel instant
- **Proof:** Show work, not marketing fluff

### Avoid
- Rainbow color schemes
- Cramped layouts
- Too many typefaces
- Heavy animations on mobile
- Cluttered hero section
- Generic agency copy

### Git Workflow
- Work on branch: `redesign/homepage-v2`
- Commit messages: Clear and descriptive
- Push to origin for review
- Deploy to preview URL for testing

---

## Success Metrics

**Before Redesign:**
- Outbound lead conversion: ~2-3%
- Homepage bounce rate: High (estimate 60%+)
- Mobile experience: Poor

**After Redesign (Target):**
- Outbound lead conversion: 7-10%
- Homepage bounce rate: <40%
- Mobile experience: Excellent (90+ Lighthouse)
- Time on page: +30% increase
- CTA click-through: +50% increase

---

## Appendix: Component Code Structure

```typescript
// app/page.tsx (Main Page)
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Metrics />
      <Agents />
      <CaseStudies />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

// components/Header.tsx
export function Header() { ... }

// components/Hero.tsx
export function Hero() { ... }

// components/Metrics.tsx
export function Metrics() { ... }

// components/Agents.tsx
export function Agents() { ... }

// components/CaseStudies.tsx
export function CaseStudies() { ... }

// components/Services.tsx
export function Services() { ... }

// components/CTA.tsx
export function CTA() { ... }

// components/Footer.tsx
export function Footer() { ... }
```

---

**Document prepared for Claude Code implementation**  
**Ready to build:** Copy this PRD into Claude Code and start building components
