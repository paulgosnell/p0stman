import React from 'react';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  image,
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100">
      <blockquote className="text-lg text-gray-900 italic font-light mb-6">
        "{quote}"
      </blockquote>

      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}

        <div>
          <div className="font-medium text-gray-900">{author}</div>
          <div className="text-sm text-gray-600 font-light">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
