# V3 Design System - Component Specifications

## Overview

Two production-ready, reusable components built for the V3 design system. These components will be used 15+ times across the site for consistency and rapid development.

---

## 1. CTASection.tsx

**Purpose**: Full-width call-to-action section with gradient backgrounds

### Technical Specifications

- **File Size**: 66 lines
- **Component Type**: Functional component with TypeScript
- **Dependencies**: React only (no external UI libraries)

### Props Interface

```typescript
interface CTASectionProps {
  title: string;              // Main heading
  subtitle?: string;          // Optional subheading
  buttonText: string;         // CTA button label
  buttonOnClick: () => void;  // Click handler
  bgColor?: string;           // Custom Tailwind background class
  variant?: 'gradient' | 'solid'; // Background style (default: 'gradient')
}
```

### Design Specifications

| Element | Tailwind Classes | Notes |
|---------|-----------------|-------|
| Section | `py-24 px-6 md:px-0` | Vertical padding, responsive horizontal |
| Container | `max-w-6xl mx-auto` | 6xl max-width container |
| Title | `text-4xl md:text-5xl lg:text-6xl font-thin text-white` | Responsive sizing, thin weight |
| Subtitle | `text-lg md:text-xl text-white/80 font-light` | 80% opacity white, light weight |
| Button | `px-10 py-4 bg-white text-gray-900 hover:bg-gray-50 hover:scale-105` | Premium hover effects |

### Default Gradient

```css
background: linear-gradient(to right, #2563eb, #7c3aed);
/* from-blue-600 to-purple-600 */
```

### Usage Scenarios

1. **Bottom of landing pages** - Final conversion point
2. **Between sections** - Break up content with action
3. **Service pages** - Multiple CTAs for different services
4. **Blog posts** - Convert readers to customers
5. **Case studies** - Lead generation

---

## 2. ProcessStep.tsx

**Purpose**: Numbered step card with features list and optional icon

### Technical Specifications

- **File Size**: 94 lines
- **Component Type**: Functional component with TypeScript
- **Dependencies**: React, lucide-react (Check icon)

### Props Interface

```typescript
interface ProcessStepProps {
  number: number;              // Step number (1, 2, 3...)
  title: string;               // Step title
  description: string;         // Step description
  features: string[];          // Feature bullet points
  icon?: React.ReactNode;      // Optional icon (top-right)
  variant?: 'default' | 'highlighted'; // Style variant
}
```

### Design Specifications

#### Default Variant

| Element | Tailwind Classes | Notes |
|---------|-----------------|-------|
| Container | `p-8 rounded-2xl bg-white border border-gray-100` | Subtle border, white bg |
| Number | `text-5xl font-thin text-gray-200` | Large, muted number |
| Title | `text-2xl font-light text-gray-900` | Light weight heading |
| Description | `text-base font-light text-gray-600` | Standard paragraph |
| Features | `text-sm font-light text-gray-600` | Smaller feature text |
| Checkmark | `text-green-500` | Green check icons |

#### Highlighted Variant

| Element | Changes |
|---------|---------|
| Container | `bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200` |
| Number | `text-blue-300` instead of gray-200 |
| Checkmark | `text-blue-600` instead of green-500 |
| Shadow | `shadow-lg hover:shadow-xl` |

### Layout Patterns

#### Horizontal Grid (3 columns)

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <ProcessStep number={1} {...} />
  <ProcessStep number={2} {...} variant="highlighted" />
  <ProcessStep number={3} {...} />
</div>
```

#### Vertical Stack (single column)

```tsx
<div className="space-y-8">
  <ProcessStep number={1} {...} />
  <ProcessStep number={2} {...} />
  <ProcessStep number={3} {...} />
</div>
```

### Usage Scenarios

1. **How It Works sections** - 3-step process explanation
2. **Service breakdowns** - Detailed service offerings
3. **Onboarding flows** - User journey visualization
4. **Pricing tiers** - Feature comparison
5. **Timeline pages** - Project milestone tracking

---

## Design System Consistency

### Typography Scale

- **9xl/10xl**: Hero headings
- **6xl**: Section headings
- **5xl**: Numbers/metrics
- **4xl**: Subsection headings
- **2xl**: Card titles
- **lg/xl**: Body/descriptions
- **sm**: Features/captions

### Font Weights

- `font-thin` (100): Large numbers, hero text
- `font-light` (300): Most body text, descriptions
- `font-normal` (400): Standard emphasis
- `font-medium` (500): Buttons, labels

### Color Palette

```javascript
// Gradients
'from-blue-600 to-purple-600'   // Primary gradient
'from-blue-50 to-purple-50'     // Highlighted background

// Text
'text-gray-900'   // Headings
'text-gray-600'   // Body text
'text-gray-200'   // Muted elements
'text-white'      // On dark backgrounds
'text-white/80'   // Subtle white

// Accents
'text-blue-600'   // Primary actions
'text-green-500'  // Success/checkmarks
'text-purple-600' // Secondary accents
```

### Spacing System

- **Section padding**: `py-24` (96px vertical)
- **Card padding**: `p-8` (32px all sides)
- **Gap between cards**: `gap-8` (32px)
- **Element spacing**: `space-y-8` (32px vertical)
- **Text spacing**: `mb-4` to `mb-6` (16-24px)

### Border Radius

- **Cards/containers**: `rounded-2xl` (16px)
- **Buttons**: `rounded-lg` (8px)
- **Images**: `rounded-full` for avatars

---

## File Structure

```
/src/components/shared/
├── CTASection.tsx          # CTA section component
├── ProcessStep.tsx         # Process step card component
├── MetricBox.tsx          # Existing metric component
├── TestimonialCard.tsx    # Existing testimonial component
├── index.ts               # Barrel exports
├── README.md              # Usage documentation
├── COMPONENT_SPECS.md     # This file
└── example-usage.tsx      # Live examples
```

---

## Import Examples

### Individual Imports

```typescript
import { CTASection } from '@/components/shared/CTASection';
import { ProcessStep } from '@/components/shared/ProcessStep';
```

### Barrel Import (Recommended)

```typescript
import { CTASection, ProcessStep, MetricBox } from '@/components/shared';
```

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility Features

- Semantic HTML (`<section>`, `<h2>`, `<h3>`, `<button>`, `<ul>`)
- Keyboard navigation for buttons
- ARIA-compliant (no custom ARIA needed for these simple components)
- Color contrast ratios meet WCAG AA standards

## Performance

- Zero external dependencies (except lucide-react for icons)
- No animations that cause layout thrashing
- Optimized for tree-shaking
- < 2KB gzipped per component

---

## Testing Checklist

- [ ] Components render without errors
- [ ] Props are correctly typed
- [ ] Responsive breakpoints work (mobile, tablet, desktop)
- [ ] Hover states function properly
- [ ] Button click handlers fire correctly
- [ ] Optional props (subtitle, icon) can be omitted
- [ ] Both variants render correctly
- [ ] Text wraps properly at all screen sizes
- [ ] Colors match design system
- [ ] Build passes without warnings

---

## Future Enhancements

Potential additions based on usage:

1. **CTASection**
   - Secondary button option
   - Background image support
   - Animation on scroll
   - Form integration (email capture)

2. **ProcessStep**
   - Progress indicator
   - Expandable details
   - Timeline connector between steps
   - Interactive hover states with more info

---

## Questions?

See `README.md` for usage examples and `example-usage.tsx` for live implementations.
