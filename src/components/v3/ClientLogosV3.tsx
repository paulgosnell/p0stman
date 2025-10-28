import React from 'react';
import { motion } from 'framer-motion';
import CardCarousel from './CardCarousel';

const clientLogos = [
  { name: "IBM iX", logo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png" },
  { name: "FAB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/500px-First_Abu_Dhabi_Bank_Logo.svg.png" },
  { name: "Al Arabiya", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Al-Arabiya_new_logo.svg/500px-Al-Arabiya_new_logo.svg.png" },
  { name: "DoH Abu Dhabi", logo: "https://api.chilledsites.com/storage/v1/object/public/p0stman/doh-logo.png" },
  { name: "Etihad Airways", logo: "https://api.chilledsites.com/storage/v1/object/public/p0stman/etihad-logo.png" },
  { name: "Al-Futtaim Group", logo: "https://api.chilledsites.com/storage/v1/object/public/p0stman/al-futtaim-logo.png" }
];

export default function ClientLogosV3() {
  const logoCards = clientLogos.map((client, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center h-full opacity-60 hover:opacity-100 transition-opacity"
    >
      <img
        src={client.logo}
        alt={client.name}
        className="h-12 object-contain filter grayscale dark:brightness-200 dark:invert transition-all duration-300"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </motion.div>
  ));

  return (
    <section className="py-16 md:py-24 px-6 md:px-0 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 dark:text-gray-100 font-light text-lg">Trusted by leading organizations</p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <CardCarousel
            cards={logoCards}
            cardsPerView={{
              mobile: 2,
              tablet: 2,
              desktop: 2
            }}
          />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain filter grayscale dark:brightness-200 dark:invert transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
