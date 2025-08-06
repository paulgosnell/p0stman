import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail } from 'lucide-react';

export default function LocationMap() {
  return (
    <div id="location" className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.7276657667184!2d55.30374091501636!3d25.067488983956827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c3e5ee6e4c9%3A0xc478c0c6c32cfb8a!2sMeydan%20Grandstand!5e0!3m2!1sen!2sae!4v1647887842013!5m2!1sen!2sae"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="font-medium text-gray-900 mb-4">Office Location</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-900 font-medium">Meydan Grandstand</p>
              <p className="text-gray-600">6th floor, Meydan Road</p>
              <p className="text-gray-600">Nad Al Sheba, Dubai</p>
              <p className="text-gray-600">United Arab Emirates</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-900 font-medium">Working Hours</p>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">9:00 AM - 6:00 PM GST</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-900 font-medium">Email</p>
              <a 
                href="mailto:hello@p0stman.com"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                hello@p0stman.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}