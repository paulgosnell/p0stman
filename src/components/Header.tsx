import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="h-24 flex items-center justify-between">
          <Link to="/">
            <Logo useGradient showStrapline />
          </Link>
        </div>
      </div>
    </header>
  );
}