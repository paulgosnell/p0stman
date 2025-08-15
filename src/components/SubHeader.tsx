import React from 'react';
import { Link } from 'react-router-dom';
import FlyoutNavigation from './FlyoutNavigation';

export default function SubHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Simple P0STMAN Icon */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
          </Link>
          
          {/* Burger Menu */}
          <FlyoutNavigation />
        </div>
      </div>
    </header>
  );
}