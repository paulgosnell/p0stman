import React, { useId } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Heart, Bot, Landmark, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FeaturedSection {
  id: string;
  title: string;
  description: string;
  link: string;
  ctaText: string;
  image: string;
  icon: React.ReactNode;
  stats: { value: string; label: string }[];
  tags: string[];
}

const featuredSections: FeaturedSection[] = [
  {
    id: 'health',
    title: 'Health & Wellness Projects',
    description: 'From AI-powered health platforms to government healthcare apps, we\'ve built across the entire health spectrum. Wearable integration, mental wellness, fitness tracking, clinic management, and corporate wellness—see our deep health expertise.',
    link: '/health',
    ctaText: 'Explore Health Portfolio',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&auto=format&fit=crop',
    icon: <Heart className="w-4 h-4 text-white" strokeWidth={1.5} />,
    stats: [
      { value: '6+', label: 'Health Projects' },
      { value: '60K+', label: 'Active Users' },
      { value: '95%', label: 'Cost Savings' },
      { value: '1-3 wks', label: 'Build Time' }
    ],
    tags: ['Wearables', 'AI Health', 'Mental Wellness', 'Fitness', 'Clinics', 'Government']
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning Projects',
    description: 'Pioneering AI solutions from voice agents to predictive analytics. We build intelligent systems that transform businesses—computer vision, NLP, generative AI, and autonomous agents that deliver measurable results.',
    link: '/case-studies?category=AI',
    ctaText: 'Explore AI Portfolio',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&auto=format&fit=crop',
    icon: <Bot className="w-4 h-4 text-white" strokeWidth={1.5} />,
    stats: [
      { value: '15+', label: 'AI Projects' },
      { value: '80%', label: 'Faster Delivery' },
      { value: '10x', label: 'ROI Average' },
      { value: '24/7', label: 'Autonomous Ops' }
    ],
    tags: ['Voice AI', 'LLMs', 'Computer Vision', 'Agents', 'Analytics', 'Automation']
  },
  {
    id: 'fintech',
    title: 'FinTech & Banking Projects',
    description: 'Enterprise-grade financial solutions from digital banking platforms to payment systems. We\'ve partnered with leading banks and fintech startups to deliver secure, scalable, and innovative financial technology.',
    link: '/case-studies?category=FinTech',
    ctaText: 'Explore FinTech Portfolio',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&auto=format&fit=crop',
    icon: <Landmark className="w-4 h-4 text-white" strokeWidth={1.5} />,
    stats: [
      { value: '10+', label: 'FinTech Projects' },
      { value: '$2B+', label: 'Transactions' },
      { value: '99.9%', label: 'Uptime' },
      { value: '40+', label: 'Team Led' }
    ],
    tags: ['Digital Banking', 'Payments', 'Trading', 'Compliance', 'Blockchain', 'Insurance']
  }
];

export default function FeaturedSectionsCarousel() {
  const uniqueId = useId().replace(/:/g, '-');
  const carouselClass = `featured-carousel-${uniqueId}`;

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`relative ${carouselClass}`}>
            <style>{`
              .${carouselClass} .swiper-button-prev,
              .${carouselClass} .swiper-button-next {
                width: 48px;
                height: 48px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 9999px;
                transition: all 0.3s;
                backdrop-filter: blur(8px);
                top: 50%;
                transform: translateY(-50%);
              }

              .${carouselClass} .swiper-button-prev:hover,
              .${carouselClass} .swiper-button-next:hover {
                background: rgba(255, 255, 255, 0.2);
                border-color: rgba(255, 255, 255, 0.4);
              }

              .${carouselClass} .swiper-button-prev.swiper-button-disabled,
              .${carouselClass} .swiper-button-next.swiper-button-disabled {
                opacity: 0.3;
                cursor: not-allowed;
              }

              .${carouselClass} .swiper-button-prev::after,
              .${carouselClass} .swiper-button-next::after {
                content: '';
              }

              .${carouselClass} .swiper-button-prev {
                left: 16px;
              }

              .${carouselClass} .swiper-button-next {
                right: 16px;
              }

              @media (min-width: 768px) {
                .${carouselClass} .swiper-button-prev {
                  left: 24px;
                }
                .${carouselClass} .swiper-button-next {
                  right: 24px;
                }
              }

              .${carouselClass} .swiper-pagination {
                position: static;
                margin-top: 1.5rem;
              }

              .${carouselClass} .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background: rgba(255, 255, 255, 0.3);
                opacity: 1;
                transition: all 0.3s;
              }

              .${carouselClass} .swiper-pagination-bullet:hover {
                background: rgba(255, 255, 255, 0.5);
              }

              .${carouselClass} .swiper-pagination-bullet-active {
                width: 40px;
                border-radius: 6px;
                background: white;
              }
            `}</style>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                prevEl: `.${carouselClass} .swiper-button-prev`,
                nextEl: `.${carouselClass} .swiper-button-next`,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              loop={true}
              className="!pb-4"
            >
              {featuredSections.map((section) => (
                <SwiperSlide key={section.id}>
                  <Link to={section.link} className="block group">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="relative overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500 min-h-[400px] md:min-h-[450px] flex items-center border-t border-gray-800"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full">
                        <div className="max-w-4xl">
                          {/* Badge */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                            {section.icon}
                            <span className="text-white text-sm font-light">Featured Portfolio</span>
                          </div>

                          {/* Title */}
                          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 group-hover:translate-x-2 transition-transform duration-300">
                            {section.title}
                          </h2>

                          {/* Description */}
                          <p className="text-lg md:text-xl text-white font-light mb-8 leading-relaxed max-w-3xl">
                            {section.description}
                          </p>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                            {section.stats.map((stat, idx) => (
                              <div key={idx} className="border-l border-white/40 pl-4">
                                <div className="text-2xl md:text-3xl font-light text-white">{stat.value}</div>
                                <div className="text-white text-xs md:text-sm font-light">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-light hover:bg-gray-100 transition-all group-hover:gap-4 duration-300">
                            <span>{section.ctaText}</span>
                            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-6">
                            {section.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-light"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev" aria-label="Previous section">
              <ChevronLeft size={24} className="text-white" strokeWidth={1.5} />
            </button>
            <button className="swiper-button-next" aria-label="Next section">
              <ChevronRight size={24} className="text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
