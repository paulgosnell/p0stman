import { useState } from 'react';
import { Smartphone } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import MobileAppModal from './MobileAppModal';
import { mobileApps } from './appData';
import { MobileApp } from './types';

export default function MobileAppsV3() {
  const [selectedApp, setSelectedApp] = useState<MobileApp | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (app: MobileApp) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedApp to allow exit animation
    setTimeout(() => setSelectedApp(null), 300);
  };

  return (
    <>
      <section id="mobile-apps" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Heading - Centered */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold">Live App Demos</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore fully interactive mobile applications we've built. Click to minimize the info panel and try them yourself.
              </p>
            </div>

            {/* Desktop: 4-Column Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mobileApps.map((app, index) => (
                <div key={index} className="flex justify-center">
                  <PhoneMockup app={app} />
                </div>
              ))}
            </div>

            {/* Mobile: Preview Cards with Modal Trigger */}
            <div className="md:hidden space-y-6">
              {mobileApps.map((app, index) => (
                <button
                  key={index}
                  onClick={() => handleOpenModal(app)}
                  className="w-full group rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 bg-white dark:bg-gray-900 text-left"
                >
                  {/* Placeholder for screenshot - will be added later */}
                  {app.screenshotUrl ? (
                    <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800" style={{ aspectRatio: '390 / 844' }}>
                      <img
                        src={app.screenshotUrl}
                        alt={`${app.name} preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center" style={{ aspectRatio: '390 / 844' }}>
                      <Smartphone className="w-24 h-24 text-gray-300 dark:text-gray-600" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="text-xl font-light text-gray-900 dark:text-gray-100">
                      {app.name}
                    </h3>
                    <p className="text-sm font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                      {app.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                        <span>Open Demo</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Modal */}
      <MobileAppModal
        app={selectedApp}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
