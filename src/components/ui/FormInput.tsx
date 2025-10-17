import React from 'react';

/**
 * Premium Form Input Component
 *
 * Design System:
 * - All inputs have soft borders (gray-200)
 * - Focus states: border-blue-600 + ring (ring-blue-100)
 * - Labels are small (text-sm) and medium weight (font-medium)
 * - Inputs use font-light for text
 * - Error text is red-600
 * - Placeholders are gray-400 and font-light
 */

export interface FormInputProps {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  id?: string;
  name?: string;
  rows?: number;
}

export default function FormInput({
  label,
  placeholder,
  type,
  value,
  onChange,
  error,
  required = false,
  id,
  name,
  rows = 6,
}: FormInputProps) {
  const inputId = id || name || label.toLowerCase().replace(/\s+/g, '_');

  const baseClasses = `
    w-full px-4 py-3 rounded-lg
    border
    transition-all duration-200
    font-light
    placeholder:text-gray-400 placeholder:font-light
    ${error
      ? 'border-red-500 text-red-900 focus:border-red-500 focus:ring-2 focus:ring-red-100'
      : 'border-gray-200 text-gray-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
    }
    focus:outline-none
  `.trim().replace(/\s+/g, ' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-900 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name || inputId}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${baseClasses} resize-y`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      ) : (
        <input
          type={type}
          id={inputId}
          name={name || inputId}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      )}

      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-2 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
