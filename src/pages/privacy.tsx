import React from 'react';

const PrivacyPage: React.FC = () => (
  <div className="min-h-screen bg-black text-white py-20 px-6 md:px-0">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-thin mb-8 text-center">Privacy Policy</h1>
      <p className="text-lg text-gray-300 mb-8 text-center">Last updated: August 19, 2025</p>
      <div className="space-y-8 text-gray-400 text-base">
        <section>
          <h2 className="text-2xl font-light mb-4 text-white">Your Privacy Matters</h2>
          <p>
            P0STMAN is committed to protecting your privacy. We only collect the minimum personal information required to deliver our services and improve your experience. We do not sell your data, and we never send spam.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-light mb-2 text-white">What We Collect</h2>
          <ul className="list-disc ml-6">
            <li>Email address (for report delivery and updates)</li>
            <li>Basic analytics (site usage, page views, device type)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-light mb-2 text-white">How We Use Your Data</h2>
          <ul className="list-disc ml-6">
            <li>To send you the AI Playbook and related updates</li>
            <li>To improve our products and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-light mb-2 text-white">Your Rights</h2>
          <ul className="list-disc ml-6">
            <li>You can unsubscribe at any time using the link in our emails</li>
            <li>You can request deletion of your data by contacting us at <a href="mailto:privacy@p0stman.com" className="underline text-blue-400">privacy@p0stman.com</a></li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-light mb-2 text-white">Third Parties</h2>
          <p>
            We use trusted third-party services (such as Supabase and analytics providers) to operate our site. These providers are required to protect your data and comply with privacy laws.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-light mb-2 text-white">Contact Us</h2>
          <p>
            For any privacy-related questions, email <a href="mailto:privacy@p0stman.com" className="underline text-blue-400">privacy@p0stman.com</a>.
          </p>
        </section>
      </div>
      <div className="mt-16 text-center">
        <a href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 text-white">
          ← Back to Home
        </a>
      </div>
    </div>
  </div>
);

export default PrivacyPage;
