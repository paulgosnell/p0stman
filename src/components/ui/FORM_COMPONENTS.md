# Premium Form Components

Production-ready form components for the P0STMAN platform with consistent design system styling.

## Components

### FormInput

A versatile input component that supports text, email, tel, and textarea types with built-in error handling and accessibility features.

#### Props

```typescript
interface FormInputProps {
  label: string;              // Display label for the input
  placeholder: string;        // Placeholder text
  type: 'text' | 'email' | 'tel' | 'textarea';
  value: string;             // Controlled input value
  onChange: (value: string) => void;  // Change handler
  error?: string;            // Optional error message
  required?: boolean;        // Mark field as required
  id?: string;              // Optional custom ID
  name?: string;            // Optional name attribute
  rows?: number;            // Textarea rows (default: 6)
}
```

#### Features

- Soft borders (gray-200) with smooth transitions
- Focus states with blue ring (border-blue-600 + ring-blue-100)
- Error states with red styling (border-red-500, text-red-600)
- Font-light for input text
- Required field indicator (*)
- ARIA accessibility attributes
- Resizable textarea with minimum 6 rows

#### Usage

```tsx
import { FormInput } from '@/components/ui';

function MyForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <FormInput
      label="Email Address"
      placeholder="john@example.com"
      type="email"
      value={email}
      onChange={setEmail}
      error={error}
      required
    />
  );
}
```

### FormGroup

A form wrapper component that provides consistent layout and submit button styling.

#### Props

```typescript
interface FormGroupProps {
  children: React.ReactNode;  // Form fields
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  submitText: string;        // Submit button text
  submitting?: boolean;      // Show loading state
  className?: string;        // Additional classes
}
```

#### Features

- Maximum width of 2xl with centered layout
- Consistent 6-unit vertical spacing between fields
- Gradient submit button (from-blue-600 to-purple-600)
- Loading state with spinner animation
- Hover effects with scale transform
- Disabled state handling
- Focus ring for accessibility

#### Usage

```tsx
import { FormInput, FormGroup } from '@/components/ui';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
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
        placeholder="John Doe"
        type="text"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
        required
      />

      <FormInput
        label="Email"
        placeholder="john@example.com"
        type="email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
        required
      />

      <FormInput
        label="Message"
        placeholder="Tell us about your project..."
        type="textarea"
        value={formData.message}
        onChange={(value) => setFormData({ ...formData, message: value })}
        required
      />
    </FormGroup>
  );
}
```

## Design System

### Colors

- **Borders**: `border-gray-200` (soft, neutral)
- **Focus Border**: `border-blue-600`
- **Focus Ring**: `ring-blue-100`
- **Error Border**: `border-red-500`
- **Error Text**: `text-red-600`
- **Labels**: `text-gray-900`
- **Placeholder**: `text-gray-400`

### Typography

- **Labels**: `text-sm font-medium`
- **Input Text**: `font-light`
- **Placeholder Text**: `font-light`

### Spacing

- **Input Padding**: `px-4 py-3`
- **Label Margin**: `mb-2`
- **Form Field Spacing**: `space-y-6`

### Button Gradient

- **Default**: `from-blue-600 to-purple-600`
- **Hover**: `from-blue-700 to-purple-700`
- **Transform**: `hover:scale-[1.02]`

## Complete Example

See `FormExample.tsx` for a complete working example with:
- State management
- Validation
- Error handling
- Loading states

## Accessibility

Both components follow WCAG 2.1 AA standards:

- Proper label associations (`htmlFor` and `id`)
- ARIA attributes for error states
- Focus indicators
- Required field indicators
- Keyboard navigation support

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)
