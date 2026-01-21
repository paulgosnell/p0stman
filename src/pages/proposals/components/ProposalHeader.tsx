import React from 'react';
import { Link } from 'react-router-dom';

export default function ProposalHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://p0stman.com/favicon.svg" 
              alt="POSTMAN" 
              className="w-8 h-8"
            />
            <span className="font-medium text-gray-900">POSTMAN</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
            <Link to="/#case-studies" className="text-sm text-gray-600 hover:text-gray-900">Portfolio</Link>
          </div>
        </div>
      </div>
    </header>
  );
}