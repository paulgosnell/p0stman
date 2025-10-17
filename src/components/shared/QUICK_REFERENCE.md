# Quick Reference - V3 Design System Components

## CTASection - Call to Action

### Basic Usage
```tsx
import { CTASection } from '@/components/shared';

<CTASection
  title="Your Heading Here"
  subtitle="Optional subtitle text"
  buttonText="Get Started"
  buttonOnClick={() => handleClick()}
/>
```

### With Custom Background
```tsx
<CTASection
  title="Ready to Begin?"
  buttonText="Start Now"
  buttonOnClick={handleStart}
  bgColor="bg-gradient-to-r from-purple-600 to-pink-600"
/>
```

### Solid Variant
```tsx
<CTASection
  title="Download Guide"
  buttonText="Get PDF"
  buttonOnClick={downloadPDF}
  variant="solid"
/>
```

---

## ProcessStep - Numbered Step Card

### Basic Usage
```tsx
import { ProcessStep } from '@/components/shared';

<ProcessStep
  number={1}
  title="Step Title"
  description="Detailed description of this step."
  features={[
    'Feature one',
    'Feature two',
    'Feature three'
  ]}
/>
```

### With Icon & Highlighted
```tsx
import { Rocket } from 'lucide-react';

<ProcessStep
  number={2}
  title="Development"
  description="AI-powered rapid development."
  features={['Fast', 'Quality', 'Tested']}
  icon={<Rocket size={32} />}
  variant="highlighted"
/>
```

### Grid Layout (3 columns)
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <ProcessStep number={1} {...props} />
  <ProcessStep number={2} {...props} variant="highlighted" />
  <ProcessStep number={3} {...props} />
</div>
```

### Vertical Stack
```tsx
<div className="space-y-8">
  <ProcessStep number={1} {...props} />
  <ProcessStep number={2} {...props} />
  <ProcessStep number={3} {...props} />
</div>
```

---

## Common Patterns

### Full Landing Page Section
```tsx
<section className="py-24 px-6 md:px-0 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-thin text-gray-900 mb-4">
        How It Works
      </h2>
      <p className="text-lg text-gray-600 font-light">
        Our 3-step process
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProcessStep number={1} {...} />
      <ProcessStep number={2} {...} variant="highlighted" />
      <ProcessStep number={3} {...} />
    </div>
  </div>
</section>

{/* CTA */}
<CTASection
  title="Ready to Start?"
  subtitle="Get your project done in 6 days"
  buttonText="Get Started"
  buttonOnClick={handleGetStarted}
/>
```

---

## Props Cheat Sheet

### CTASection Props
| Prop | Type | Required | Default |
|------|------|----------|---------|
| title | string | Yes | - |
| subtitle | string | No | - |
| buttonText | string | Yes | - |
| buttonOnClick | function | Yes | - |
| bgColor | string | No | gradient |
| variant | 'gradient' \| 'solid' | No | 'gradient' |

### ProcessStep Props
| Prop | Type | Required | Default |
|------|------|----------|---------|
| number | number | Yes | - |
| title | string | Yes | - |
| description | string | Yes | - |
| features | string[] | Yes | - |
| icon | ReactNode | No | - |
| variant | 'default' \| 'highlighted' | No | 'default' |

---

## Color Combinations

### CTASection Backgrounds
```tsx
// Default blue-purple
bgColor="bg-gradient-to-r from-blue-600 to-purple-600"

// Purple-pink
bgColor="bg-gradient-to-r from-purple-600 to-pink-600"

// Blue-cyan
bgColor="bg-gradient-to-r from-blue-600 to-cyan-500"

// Solid blue
variant="solid"
```

---

## Icons (lucide-react)

Common icons for ProcessStep:
```tsx
import {
  Rocket,        // Launch/Deploy
  Code,          // Development
  CheckCircle,   // Success/Complete
  Users,         // Team/Collaboration
  Zap,           // Fast/Performance
  Shield,        // Security
  TrendingUp,    // Growth
  Clock          // Timeline
} from 'lucide-react';

<ProcessStep icon={<Rocket size={32} />} {...} />
```

---

## Responsive Breakpoints

```
Mobile:  < 768px   → Single column, smaller text
Tablet:  768px+    → 2 columns for ProcessStep
Desktop: 1024px+   → 3 columns, full size text
```

---

## Performance Tips

1. Use barrel imports: `import { CTASection } from '@/components/shared'`
2. Pass stable references for onClick handlers (useCallback)
3. Keep features array under 8 items for readability
4. Lazy load icons if using many: `const Rocket = lazy(() => ...)`

---

## Accessibility

Both components are accessible by default:
- Semantic HTML elements
- Keyboard navigable buttons
- WCAG AA color contrast
- No custom ARIA needed

---

## Need More Examples?

See `/src/components/shared/example-usage.tsx` for complete implementations
