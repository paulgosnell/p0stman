import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface BenefitsProps {
  title: string;
  description: string;
  items: Array<{
    title: string;
    description: string;
    metric: string;
  }>;
  image?: string;
  secondaryImage?: string;
  points?: string[];
  theme?: 'light' | 'dark';
}

export default function Benefits({
  title,
  description,
  items,
  image,
  secondaryImage,
  points,
  theme = 'light'
}: BenefitsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = secondaryImage ? [image, secondaryImage] : [image];

  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  const borderColor = theme === 'light' ? 'border-gray-100' : 'border-gray-800';

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-green-100 rounded-full">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-medium">Results & Impact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {items ? items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-green-100/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="text-lg font-bold text-green-600">{item.metric}</div>
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </motion.div>
              )) : points && points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-green-100/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {point}
                    </p>
                    
                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {images.length > 1 ? (
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl transform rotate-3" />
                      
                      {/* Image Container */}
                      <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                        <img
                          src={images[currentImageIndex]}
                          alt={`Result ${currentImageIndex + 1}`}
                          className="w-full rounded-2xl shadow-lg"
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6">
                    <div className="flex justify-between">
                      <button
                        onClick={prevSlide}
                        className="w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-gray-800 hover:bg-white hover:shadow-xl transition-all transform hover:scale-110"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-gray-800 hover:bg-white hover:shadow-xl transition-all transform hover:scale-110"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Dots Navigation */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-green-600 scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl transform rotate-3" />
                  
                  {/* Image Container */}
                  <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                    <img
                      src={image}
                      alt="Results"
                      className="w-full rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="inline-block p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl">
              <p className="text-lg text-gray-700 font-medium">
                🎯 Project delivered measurable impact across all key metrics
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}