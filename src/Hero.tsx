import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';
import HeroHeading from './hero/HeroHeading';
import HeroShowcase from './hero/HeroShowcase';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { Bot, Play } from 'lucide-react';
import VideoModal from './modals/VideoModal';

// Bolt videos moved from BoltPromotion.tsx
const boltVideos = [
  {
    id: "Y0g_9ZhqiRg",
    title: "How I used Bolt to build a CRM system in one week",
    thumbnail: `https://i.ytimg.com/vi/Y0g_9ZhqiRg/maxresdefault.jpg`
  },
  {
    id: "dxuct08lLyY",
    title: "Add Stripe to your bolt.new app",
    thumbnail: `https://i.ytimg.com/vi/dxuct08lLyY/maxresdefault.jpg`
  }
];

export default function Hero() {
  const { t } = useLanguage();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");

  const openVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    setShowVideoModal(true);
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/p0stman-page-bg.png')] bg-cover bg-center opacity-20" />
      </div>
      
      <Header />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <HeroHeading />
            <HeroShowcase />
          </div>
          
          {/* Building the Future with Bolt AI Section - Moved from BoltPromotion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-24 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626751003555-4b9cbbd178a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>
            
            <div className="relative z-10 p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">Why We Do It</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column - Ambassador Text */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 flex items-center">
                  <p className="text-gray-300 text-lg">
                    We believe bold ideas deserve to be built. P0STMAN is our product studio, and Chilled Tools are the AI products we've created to help founders, brands, and agencies go faster.
                  </p>
                </div>
                
                {/* Middle and Right Columns - Videos */}
                {boltVideos.map((video, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => openVideo(video.id)}
                  >
                    <div className="relative aspect-video">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/70 backdrop-blur-sm border-t border-gray-700/50">
                      <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">{video.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-24 md:mt-32 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 blur-xl" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-xl">
              <p className="text-xl md:text-2xl text-center leading-relaxed text-gray-300">
                {t('home.hero.mission')}
              </p>
              <p className="text-lg text-center mt-4 text-gray-300">
                Learn more about my background and expertise on the <Link to="/about" className="text-blue-400 hover:text-blue-300 transition-colors">About Me</Link> page.
              </p>
              
              <div className="flex justify-center mt-8">
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] font-medium text-lg"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId={currentVideoId}
      />
    </section>
  );
}