# P0STMAN V3 Design System - UI Component Library

A comprehensive, reusable UI component library built for P0STMAN's V3 design system. All components are TypeScript-first, fully typed, and follow the design principles established in the V3 pages.

## Installation & Usage

```tsx
// Import individual components
import { Button, Card, Section, SectionHeader, Badge, FormInput } from '@/components/ui';

// Or import specific components
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
```

## Components

### Button

A versatile button component with multiple variants, sizes, and icon support.

**Props:**
- `variant?: 'gradient' | 'outline' | 'solid'` - Visual style (default: 'solid')
- `size?: 'sm' | 'md' | 'lg'` - Button size (default: 'md')
- `disabled?: boolean` - Disabled state
- `iconLeft?: React.ReactNode` - Icon on left side
- `iconRight?: React.ReactNode` - Icon on right side
- `onClick?: (e: React.MouseEvent) => void` - Click handler
- `className?: string` - Additional CSS classes
- `type?: 'button' | 'submit' | 'reset'` - Button type

**Examples:**

```tsx
import { Button } from '@/components/ui';
import { ArrowRight, Download } from 'lucide-react';

// Solid button (default)
<Button onClick={() => console.log('clicked')}>
  Get Started
</Button>

// Gradient button with icon
<Button variant="gradient" iconRight={<ArrowRight size={18} />}>
  Launch Your MVP
</Button>

// Outline button
<Button variant="outline" size="sm">
  Learn More
</Button>

// Disabled button
<Button disabled>
  Processing...
</Button>

// Button with left icon
<Button iconLeft={<Download size={18} />}>
  Download Report
</Button>
```

---

### Card

A flexible card component with hover effects and multiple variants.

**Props:**
- `children: React.ReactNode` - Card content (required)
- `className?: string` - Additional CSS classes
- `hover?: boolean` - Enable hover effect (default: false)
- `variant?: 'default' | 'bordered' | 'elevated'` - Card style (default: 'default')
- `padding?: 'sm' | 'md' | 'lg'` - Padding size (default: 'lg')

**Examples:**

```tsx
import { Card } from '@/components/ui';

// Default card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Card with hover effect
<Card hover>
  <h3>Hover Me</h3>
  <p>I lift up on hover!</p>
</Card>

// Bordered card with custom padding
<Card variant="bordered" padding="md">
  <p>Compact card</p>
</Card>

// Elevated card
<Card variant="elevated">
  <h3>Featured Content</h3>
  <p>This card has a shadow</p>
</Card>
```

---

### Section

A layout component for consistent page sections with container support.

**Props:**
- `children: React.ReactNode` - Section content (required)
- `className?: string` - Additional CSS classes
- `bgColor?: 'white' | 'gray' | 'gradient'` - Background color (default: 'white')
- `id?: string` - HTML id attribute
- `container?: boolean` - Add max-width container (default: true)
- `paddingY?: 'sm' | 'md' | 'lg' | 'xl'` - Vertical padding (default: 'lg')

**Examples:**

```tsx
import { Section } from '@/components/ui';

// Default section with container
<Section id="services">
  <h2>Our Services</h2>
  {/* Content */}
</Section>

// Section with gradient background
<Section bgColor="gradient" paddingY="xl">
  <h2>Hero Section</h2>
</Section>

// Section without container (full width)
<Section container={false}>
  {/* Full-width carousel or content */}
</Section>

// Gray background section with small padding
<Section bgColor="gray" paddingY="sm">
  <p>Compact section</p>
</Section>
```

---

### SectionHeader

A consistent header component for section titles and subtitles.

**Props:**
- `title: string` - Section title (required)
- `subtitle?: string` - Optional subtitle/description
- `centered?: boolean` - Center align text (default: false)
- `className?: string` - Additional CSS classes
- `animate?: boolean` - Enable fade-in-up animation (default: true)

**Examples:**

```tsx
import { SectionHeader } from '@/components/ui';

// Basic section header
<SectionHeader title="How We Work" />

// Centered header with subtitle
<SectionHeader
  title="AI Agent Development"
  subtitle="Voice agents, chat agents, code agents. From pilot to production in days."
  centered
/>

// Header without animation
<SectionHeader
  title="Contact Us"
  subtitle="Let's build something amazing together"
  animate={false}
/>
```

---

### Badge

A small label component for status indicators, tags, and categories.

**Props:**
- `children: React.ReactNode` - Badge content (required)
- `variant?: 'blue' | 'purple' | 'gray' | 'green' | 'red' | 'yellow'` - Color variant (default: 'blue')
- `size?: 'sm' | 'md'` - Badge size (default: 'md')
- `className?: string` - Additional CSS classes

**Examples:**

```tsx
import { Badge } from '@/components/ui';

// Default blue badge
<Badge>New</Badge>

// Small purple badge
<Badge variant="purple" size="sm">Featured</Badge>

// Status badges
<Badge variant="green">Active</Badge>
<Badge variant="red">Urgent</Badge>
<Badge variant="yellow">Pending</Badge>

// In use with other components
<div className="flex items-center gap-2">
  <h3>Product Launch</h3>
  <Badge variant="blue" size="sm">Beta</Badge>
</div>
```

---

### FormInput

A form input component with label, validation, and textarea support.

**Props:**
- `label: string` - Input label (required)
- `placeholder: string` - Placeholder text (required)
- `type: 'text' | 'email' | 'tel' | 'textarea'` - Input type (required)
- `value: string` - Input value (required)
- `onChange: (value: string) => void` - Change handler (required)
- `error?: string` - Error message
- `required?: boolean` - Mark as required
- `id?: string` - HTML id attribute
- `name?: string` - HTML name attribute
- `rows?: number` - Textarea rows (default: 6)

**Examples:**

```tsx
import { FormInput } from '@/components/ui';
import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form>
      <FormInput
        label="Your Name"
        placeholder="John Doe"
        type="text"
        value={name}
        onChange={setName}
        required
        error={errors.name}
      />

      <FormInput
        label="Email Address"
        placeholder="john@example.com"
        type="email"
        value={email}
        onChange={setEmail}
        required
        error={errors.email}
      />

      <FormInput
        label="Message"
        placeholder="Tell us about your project..."
        type="textarea"
        value={message}
        onChange={setMessage}
        required
        rows={8}
        error={errors.message}
      />
    </form>
  );
}
```

---

### FormGroup

A form wrapper component with built-in submit button and loading state.

**Props:**
- `children: React.ReactNode` - Form fields (required)
- `onSubmit: (e: React.FormEvent) => void | Promise<void>` - Submit handler (required)
- `submitText: string` - Submit button text (required)
- `submitting?: boolean` - Loading state
- `className?: string` - Additional CSS classes

**Examples:**

```tsx
import { FormGroup, FormInput } from '@/components/ui';
import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Send form data
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ name, email })
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormGroup
      onSubmit={handleSubmit}
      submitText="Send Message"
      submitting={isSubmitting}
    >
      <FormInput
        label="Name"
        placeholder="Your name"
        type="text"
        value={name}
        onChange={setName}
        required
      />
      <FormInput
        label="Email"
        placeholder="your@email.com"
        type="email"
        value={email}
        onChange={setEmail}
        required
      />
    </FormGroup>
  );
}
```

---

## Complete Example

Here's a complete example combining multiple components:

```tsx
import {
  Section,
  SectionHeader,
  Card,
  Button,
  Badge
} from '@/components/ui';
import { ArrowRight } from 'lucide-react';

function ServicesSection() {
  return (
    <Section id="services" bgColor="gray">
      <SectionHeader
        title="Our Services"
        subtitle="Comprehensive solutions for modern digital products"
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card hover>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-2xl font-light">AI Agents</h3>
            <Badge variant="blue" size="sm">Hot</Badge>
          </div>
          <p className="text-gray-600 font-light mb-6">
            Voice agents, chat agents, code agents. From pilot to production.
          </p>
          <Button
            variant="solid"
            iconRight={<ArrowRight size={18} />}
            onClick={() => console.log('Start pilot')}
          >
            Start a Pilot
          </Button>
        </Card>

        <Card hover>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-2xl font-light">MVP Development</h3>
            <Badge variant="green" size="sm">Fast</Badge>
          </div>
          <p className="text-gray-600 font-light mb-6">
            Full-stack web/mobile products. 6 days to 3 weeks.
          </p>
          <Button
            variant="outline"
            iconRight={<ArrowRight size={18} />}
          >
            Launch Your MVP
          </Button>
        </Card>

        <Card hover>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-2xl font-light">Fractional Leadership</h3>
            <Badge variant="purple" size="sm">Strategic</Badge>
          </div>
          <p className="text-gray-600 font-light mb-6">
            CPO/CTO/CIO services. Digital transformation expertise.
          </p>
          <Button
            variant="gradient"
            iconRight={<ArrowRight size={18} />}
          >
            Discuss Strategy
          </Button>
        </Card>
      </div>
    </Section>
  );
}
```

## Design System Principles

### Typography
- Use `font-thin` (100) or `font-light` (300) for large headings
- Use `font-light` (300) for body text
- Use `font-medium` (500) for buttons and emphasis
- Never use `font-bold` in V3 design system

### Colors
- **Primary Blue**: `blue-600` (#2563eb)
- **Purple**: `purple-600` (#9333ea)
- **Text**: `gray-900` (headings), `gray-600` (body)
- **Borders**: `gray-100`, `gray-200`
- **Backgrounds**: `white`, `gray-50`

### Spacing
- Use `py-24 md:py-28` for section padding
- Use `p-8` for card padding
- Use `gap-8` or `gap-16` for grid spacing

### Animations
- All animations are subtle and respect `prefers-reduced-motion`
- Fade-in-up animation is built into CSS (0.8s ease-out)
- Hover transitions are 300ms

### Dark Mode
- Card component includes dark mode support
- Use Tailwind's `dark:` prefix for dark mode styles
- Dark backgrounds: `dark:bg-gray-900`
- Dark borders: `dark:border-gray-800`

## Browser Support

All components support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design (mobile-first)
- Accessibility features (ARIA labels, keyboard navigation)

## Contributing

When adding new components:
1. Follow the existing TypeScript patterns
2. Include comprehensive prop interfaces
3. Use Tailwind utility classes (no custom CSS)
4. Support responsive design
5. Include dark mode support where appropriate
6. Add examples to this README
