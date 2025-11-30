import React from 'react';
import { MapPin, Clock, Mail, Building2 } from 'lucide-react';

export default function LocationMap() {
  return (
    <div id="location" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4775894927714!2d-0.08555372294847474!3d51.52534097181569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca7c5a82b45%3A0x5b5d3e5c0c8e1f2a!2s86-90%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2suk!4v1701356400000!5m2!1sen!2suk"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
          <div>
            <p className="text-gray-900 dark:text-gray-100 font-light">Thrive Venture Studio Ltd</p>
            <p className="text-gray-500 dark:text-gray-400 font-light text-sm">trading as P0STMAN</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
          <div>
            <p className="text-gray-600 dark:text-gray-300 font-light">3rd Floor, 86-90 Paul Street</p>
            <p className="text-gray-600 dark:text-gray-300 font-light">London, EC2A 4NE</p>
            <p className="text-gray-600 dark:text-gray-300 font-light">United Kingdom</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
          <div>
            <p className="text-gray-600 dark:text-gray-300 font-light">Monday - Friday</p>
            <p className="text-gray-600 dark:text-gray-300 font-light">9:00 AM - 6:00 PM GMT</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
          <div>
            <a
              href="mailto:hello@p0stman.com"
              className="text-gray-600 dark:text-gray-300 font-light hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              hello@p0stman.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}