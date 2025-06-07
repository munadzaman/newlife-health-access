
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <div className="flex items-center justify-center mb-4">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-20"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mx-6">
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-20"></div>
      </div>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
