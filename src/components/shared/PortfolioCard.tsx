import React from 'react';

export interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
}) => {
  const CardWrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? {
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Area */}
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-light text-gray-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 font-light leading-relaxed flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-light bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default PortfolioCard;
