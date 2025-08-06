import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
  isDark?: boolean;
}

export default function Breadcrumbs({ items, isDark = false }: BreadcrumbsProps) {
  const textColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const hoverColor = isDark ? 'hover:text-white' : 'hover:text-gray-900';
  const separatorColor = isDark ? 'text-gray-500' : 'text-gray-400';

  return (
    <nav className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
      <Link
        to="/"
        className={`${textColor} ${hoverColor} transition-colors`}
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className={`w-4 h-4 ${separatorColor}`} />
          {item.href ? (
            <Link
              to={item.href}
              className={`${textColor} ${hoverColor} transition-colors`}
            >
              {item.label}
            </Link>
          ) : (
            <span className={`${isDark ? 'text-white' : 'text-gray-900'} break-all`}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}