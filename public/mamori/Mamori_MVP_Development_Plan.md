# Mamori MVP Development Plan

## 🎯 Core MVP Architecture

### Design Foundation
- **Nordic DLS Compliance**: All components must align with existing glass morphism, Aurora/Fjord/Glacier/Birch color palette
- **Mobile-First**: Progressive enhancement from mobile to desktop
- **Fixed Header**: Persistent navigation with AI search integration
- **Lifestyle Imagery**: Hero sections, category cards using authentic lifestyle photos/videos
- **Lucid Icons**: Clean iconography throughout (no emojis)

## 📱 Page Structure & Components

### 1. Fixed Header Component
```
- Logo (left)
- AI-Powered Search Bar (center) - "Ask anything about health..."
- Navigation Menu (right) - Categories, About, Account
- Glass morphism styling with backdrop blur
- Sticky positioning on scroll
```

### 2. Home Page
```
Hero Section:
- Lifestyle video background (people exercising, cooking, sleeping)
- "Evidence-first health marketplace" messaging
- CTA button to explore categories

Featured Topic Hubs (4 cards):
- Lifestyle imagery for each (creatine → gym, magnesium → bedtime)
- Evidence score badges (A-D system)
- Glass morphism cards

Trust Manifesto Highlights:
- Clean, Nordic design blocks
- "No house brands, no pay-to-play" messaging

Community Teaser:
- Lifestyle photos of diverse people
- "See what real people report" CTA
```

### 3. Categories Grid Page
```
Header: "Explore Health Categories"
Grid Layout:
- Live categories: Lifestyle imagery with glass overlay
- Coming soon: Greyed with waitlist signup
- Evidence score indicators on each card
- Hover animations using DLS patterns
```

### 4. Topic Hub Pages (Creatine, Magnesium, Sleep Tools, Menopause)
```
Hero: Lifestyle imagery relevant to topic
Overview Section: Clean Nordic typography
Evidence Summary: Visual A-D scoring system
Fit Guide: Contextual lifestyle imagery
Product Listings: Standardized cards with:
  - Lifestyle product photography
  - Evidence scores (colored badges)
  - Certification icons (Lucid design)
  - Price ranges
  - Merchant links
Community Outcomes: Real people testimonials with lifestyle context
```

### 5. Product Detail Pages
```
Hero: Product lifestyle photography
Info Layout:
- Evidence scoring with visual indicators
- Fit guidance with lifestyle context
- Certification badges (Lucid icons)
- Transparent merchant options
```

## 🔍 AI-Powered Search Features

### Search Functionality
```
- Natural language queries: "best magnesium for sleep"
- Contextual suggestions based on lifestyle factors
- Evidence-based result ranking
- Category filtering
- Voice search capability (mobile)
- Search history and suggestions
```

## 🎨 Visual Design Implementation

### Lifestyle Imagery Strategy
```
Hero Sections: Short looping videos (exercise, meditation, cooking)
Category Cards: Authentic lifestyle photography
Product Context: Real-world usage scenarios
Community: Diverse people in natural settings
```

### Glass Morphism Components
```
- Search bar with backdrop blur
- Category cards with translucent overlays
- Product cards with frosted glass effect
- Navigation menus with glass styling
- Modal dialogs and tooltips
```

### Nordic Color Application
```
- Aurora (#0EA5E9): Primary CTAs, evidence A-grade
- Fjord (#10B981): Success states, evidence B-grade  
- Glacier (#64748B): Secondary text, evidence C-grade
- Birch (#F59E0B): Warnings, evidence D-grade
- Neutrals: Background gradients, card overlays
```

## 📱 Mobile-First Implementation

### Progressive Enhancement
```
Mobile (320px+):
- Single column layout
- Thumb-friendly touch targets
- Swipeable category cards
- Collapsible search filters

Tablet (768px+):
- Two-column product grids
- Enhanced search filters
- Side navigation option

Desktop (1024px+):
- Multi-column layouts
- Advanced search features
- Hover interactions
```

## 🛠️ Technical Requirements

### Core Technologies
```
- Responsive CSS Grid/Flexbox
- Glass morphism CSS effects
- Lazy loading for lifestyle imagery
- Progressive image enhancement
- Touch-friendly interactions
- Accessibility compliance (WCAG 2.1 AA)
```

### Performance Optimization
```
- Optimized lifestyle video/image assets
- Lazy loading implementation
- Mobile-first CSS delivery
- Search API optimization
- Caching strategy for evidence data
```

## 🚀 Development Phases

### Phase 1: Foundation (Minute 1-2)
- Fixed header with AI search
- Home page with lifestyle hero
- Basic category grid
- Mobile-responsive framework

### Phase 2: Core Features (Minute 3-4)
- Topic hub templates
- Product detail pages
- Evidence scoring system
- Search functionality

### Phase 3: Enhancement (Minute 5-6)
- Community features
- Trust manifesto page
- Performance optimization
- Accessibility audit

### Phase 4: Polish (Minute 7-8)
- Lifestyle imagery integration
- Animation refinements
- Cross-browser testing
- Launch preparation