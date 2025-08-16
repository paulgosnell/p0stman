import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SubHeader from '../SubHeader';

interface CaseHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  logo?: string;
  logoInvert?: boolean;
  industry?: string;
  timeline?: string;
  teamSize?: string;
  technologies?: string[];
  features?: string[];
  results?: string[];
  theme?: 'light' | 'dark';
  overlayColor?: string;
  stats?: Array<{ label: string; value: string }>;
  prevCase?: {
    title: string;
    path: string;
  };
  nextCase?: {
    title: string;
    path: string;
  };
}

export default function CaseHero({
  title,
  subtitle,
  description,
  image,
  backgroundImage,
  backgroundVideo,
  logo,
  logoInvert = true,
  industry,
  timeline,
  teamSize,
  technologies,
  features,
  results,
  theme = 'light',
  overlayColor = 'from-black/80 to-black/60',
  stats,
  prevCase,
  nextCase
}: CaseHeroProps) {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <SubHeader />
      
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : (backgroundImage || image) ? (
          <img
            src={backgroundImage || image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          />
        ) : null}
        
        {/* Enhanced Overlay System */}
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation Arrows */}
      {(prevCase || nextCase) && (
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 pointer-events-none">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {prevCase ? (
                <Link
                  to={prevCase.path}
                  className="pointer-events-auto w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all group"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </Link>
              ) : (
                <div className="w-12 h-12" />
              )}
              
              {nextCase ? (
                <Link
                  to={nextCase.path}
                  className="pointer-events-auto w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all group"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ) : (
                <div className="w-12 h-12" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Logo - Clean White Style */}
          {logo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <img
                src={logo}
                alt={`${title} Logo`}
                className={`h-16 md:h-20 mx-auto drop-shadow-lg ${logoInvert ? 'filter brightness-0 invert' : ''}`}
              />
            </motion.div>
          )}

          {/* Enhanced Title Section */}
          <div className="text-center mb-20">
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-blue-400/30">
                  {subtitle}
                </span>
              </motion.div>
            )}
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-8 text-white drop-shadow-2xl"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 drop-shadow-lg leading-relaxed font-light"
            >
              {description}
            </motion.p>

            {/* Project Details */}
            {(industry || timeline || teamSize) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                {industry && (
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20">
                    {industry}
                  </span>
                )}
                {timeline && (
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20">
                    {timeline}
                  </span>
                )}
                {teamSize && (
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20">
                    {teamSize}
                  </span>
                )}
              </motion.div>
            )}
          </div>

          {/* Enhanced Stats Grid */}
          {stats && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + (0.1 * index) }}
                  className="group relative"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-1">
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg">
                      <span className="bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-white/80 font-medium text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-white via-white/50 to-transparent" />
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}