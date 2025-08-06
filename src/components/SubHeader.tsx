import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function SubHeader() {
  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center">
      <Link
        to="/"
        className="block"
      >
        <Logo className="text-xl" useGradient />
      </Link>
    </div>
  );
}