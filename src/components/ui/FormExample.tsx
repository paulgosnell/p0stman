import React, { useState } from 'react';
import FormInput from './FormInput';
import FormGroup from './FormGroup';

/**
 * Example usage of FormInput and FormGroup components
 *
 * This demonstrates how to use the premium form components
 * with proper state management and error handling.
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function FormExample() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Form submitted:', formData);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <FormGroup
          onSubmit={handleSubmit}
          submitText="Send Message"
          submitting={isSubmitting}
        >
          <FormInput
            label="Full Name"
            placeholder="John Doe"
            type="text"
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })}
            error={errors.name}
            required
          />

          <FormInput
            label="Email Address"
            placeholder="john@example.com"
            type="email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            error={errors.email}
            required
          />

          <FormInput
            label="Phone Number"
            placeholder="+1 (555) 123-4567"
            type="tel"
            value={formData.phone}
            onChange={(value) => setFormData({ ...formData, phone: value })}
            error={errors.phone}
          />

          <FormInput
            label="Message"
            placeholder="Tell us about your project..."
            type="textarea"
            value={formData.message}
            onChange={(value) => setFormData({ ...formData, message: value })}
            error={errors.message}
            required
            rows={6}
          />
        </FormGroup>
      </div>
    </div>
  );
}
