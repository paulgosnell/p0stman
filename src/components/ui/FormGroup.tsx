import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Premium Form Group Component
 *
 * Design System:
 * - All inputs have soft borders (gray-200)
 * - Focus states: border-blue-600 + ring
 * - Labels are small and medium weight
 * - Inputs use font-light for text
 * - Error text is red-600
 * - Submit buttons use gradient from-blue-600 to-purple-600
 */

export interface FormGroupProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  submitText: string;
  submitting?: boolean;
  className?: string;
}

export default function FormGroup({
  children,
  onSubmit,
  submitText,
  submitting = false,
  className = '',
}: FormGroupProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(e);
  };

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {children}

        <button
          type="submit"
          disabled={submitting}
          className={`
            w-full px-6 py-3 rounded-lg
            bg-gradient-to-r from-blue-600 to-purple-600
            text-white font-medium
            transition-all duration-200
            hover:shadow-lg hover:from-blue-700 hover:to-purple-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
            transform hover:scale-[1.02] active:scale-[0.98]
            flex items-center justify-center gap-2
          `.trim().replace(/\s+/g, ' ')}
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            submitText
          )}
        </button>
      </form>
    </div>
  );
}
