# Shared V3 Design System Components

This directory contains reusable components for the V3 design system. All components follow premium styling guidelines with thin fonts, light weights, and clean aesthetics.

## CTASection

A flexible call-to-action section with gradient background support.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Main heading text |
| `subtitle` | `string` | No | - | Optional subheading |
| `buttonText` | `string` | Yes | - | Button label |
| `buttonOnClick` | `() => void` | Yes | - | Click handler |
| `bgColor` | `string` | No | - | Custom Tailwind background class |
| `variant` | `'gradient' \| 'solid'` | No | `'gradient'` | Background style |

### Usage Examples

```tsx
import { CTASection } from '@/components/shared/CTASection';

// Basic usage with gradient background
<CTASection
  title="Ready to Get Started?"
  subtitle="Join thousands of satisfied customers building the future."
  buttonText="Start Free Trial"
  buttonOnClick={() => console.log('CTA clicked')}
/>

// Custom background color
<CTASection
  title="Schedule a Demo"
  subtitle="See how we can help your team ship faster."
  buttonText="Book Now"
  buttonOnClick={() => window.location.href = '/demo'}
  bgColor="bg-gradient-to-r from-purple-600 to-pink-600"
/>

// Solid variant
<CTASection
  title="Download Our Guide"
  buttonText="Get the PDF"
  buttonOnClick={() => downloadPDF()}
  variant="solid"
/>
```

## ProcessStep

A card component for displaying numbered process steps with features.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | `number` | Yes | - | Step number (1, 2, 3, etc.) |
| `title` | `string` | Yes | - | Step title |
| `description` | `string` | Yes | - | Step description |
| `features` | `string[]` | Yes | - | List of features/benefits |
| `icon` | `React.ReactNode` | No | - | Optional icon for corner |
| `variant` | `'default' \| 'highlighted'` | No | `'default'` | Style variant |

### Usage Examples

```tsx
import { ProcessStep } from '@/components/shared/ProcessStep';
import { Rocket } from 'lucide-react';

// Basic process step
<ProcessStep
  number={1}
  title="Discovery & Planning"
  description="We analyze your requirements and create a detailed roadmap."
  features={[
    'Initial consultation',
    'Technical architecture review',
    'Timeline and milestone planning',
    'Resource allocation'
  ]}
/>

// With icon and highlighted variant
<ProcessStep
  number={2}
  title="Rapid Development"
  description="Our AI-assisted workflow accelerates development by 40%."
  features={[
    'AI-powered code generation',
    'Daily progress updates',
    'Continuous testing and QA',
    'Real-time collaboration'
  ]}
  icon={<Rocket size={32} />}
  variant="highlighted"
/>

// Process flow example
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <ProcessStep
    number={1}
    title="Discover"
    description="Understanding your vision and requirements."
    features={['Consultation', 'Planning', 'Architecture']}
  />
  <ProcessStep
    number={2}
    title="Build"
    description="Rapid development with quality assurance."
    features={['AI Development', 'Testing', 'Integration']}
    variant="highlighted"
  />
  <ProcessStep
    number={3}
    title="Deploy"
    description="Launch your product to the world."
    features={['Cloud Setup', 'Monitoring', 'Support']}
  />
</div>
```

## Design Principles

All components follow these V3 design principles:

- **Typography**: `font-thin` and `font-light` for elegant, minimal aesthetic
- **Spacing**: Generous padding and margins for breathing room
- **Colors**: Premium blue/purple gradients, muted grays
- **Borders**: Subtle `border-gray-100` for definition
- **Shadows**: Light shadows on hover for depth
- **Transitions**: Smooth 300ms transitions on all interactions
- **Responsiveness**: Mobile-first with `md:` breakpoints

## Other Shared Components

- **MetricBox**: Display key metrics with large numbers
- **TestimonialCard**: Customer quotes and reviews
- **FeatureCard**: Feature highlights with icons
- **PortfolioCard**: Project showcase cards
