import React from 'react';

interface PostalStampProps {
  text: string;
  className?: string;
  variant?: 'delivered' | 'special' | 'priority';
}

const PostalStamp: React.FC<PostalStampProps> = ({ 
  text, 
  className = '', 
  variant = 'delivered' 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'special':
        return 'bg-gradient-to-br from-purple-600 to-blue-600';
      case 'priority':
        return 'bg-gradient-to-br from-red-600 to-orange-600';
      default:
        return 'bg-gradient-to-br from-green-600 to-emerald-600';
    }
  };

  return (
    <div className={`inline-block ${className}`}>
      <div className={`
        ${getVariantStyles()}
        text-white font-bold text-xs px-3 py-1 rounded
        border-2 border-white shadow-lg
        transform rotate-12 hover:rotate-0 transition-transform duration-300
        relative
      `}>
        {/* Perforated edges effect */}
        <div className="absolute -inset-1 bg-white rounded opacity-20 -z-10"></div>
        <div className="relative z-10">{text}</div>
      </div>
    </div>
  );
};

export default PostalStamp;