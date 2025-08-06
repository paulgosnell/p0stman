import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { services } from '../data/services';

interface ServicesGridProps {
  currentService?: string;
}

export default function ServicesGrid({ currentService }: ServicesGridProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  });

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((emblaApi: any) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Filter out the current service
  const otherServices = services.filter(service => 
    service.link !== `/${currentService || ''}`
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Explore More Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our full range of AI-powered development solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group block h-full bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 ${service.iconBg} rounded-lg`}>
                    <service.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="font-medium group-hover:text-blue-600 transition-colors">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold mb-4">{service.price}</div>
                <div className={`w-full px-4 py-2 ${service.bgColor} text-white rounded-lg text-center`}>
                  Learn More
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}