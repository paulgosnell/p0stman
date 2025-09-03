import React from 'react';
import Header from './Header';
import HeroHeading from './hero/HeroHeading';
import HeroShowcase from './hero/HeroShowcase';

export default function Hero() {

  return (
    <section id="hero" className="min-h-[80vh] relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-bg.png')] bg-cover bg-center opacity-20" />
      </div>
      
      <Header />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <HeroHeading />
            <HeroShowcase />
          </div>
          

        </div>
      </div>
    </section>
  );
}