// Shared header and footer for P0STMAN Guides - V3 Design
(function() {
  'use strict';

  // Header component - V3 Style
  const renderHeader = () => {
    return `
      <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" class="flex items-center gap-3">
            <img src="/favicon.svg" alt="P0STMAN Logo" style="height:32px;">
            <span class="text-2xl font-light text-gray-900">P0STMAN</span>
          </a>
          <nav class="flex gap-4">
            <a href="/guides/" class="px-4 py-2 text-sm font-light text-gray-700 hover:text-gray-900 transition-colors">All Guides</a>
            <a href="/contact" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-md text-sm font-light">Contact</a>
          </nav>
        </div>
      </header>
    `;
  };

  // Footer component - V3 Style (matching FooterV3.tsx)
  const renderFooter = () => {
    const currentYear = new Date().getFullYear();
    return `
      <footer class="bg-gray-900 text-white py-16 md:py-24 px-6 md:px-0 border-t border-gray-800">
        <div class="max-w-6xl mx-auto">
          <!-- Footer Grid -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-16 mb-16 md:mb-24">
            <!-- Product Column -->
            <div class="flex flex-col space-y-6">
              <h3 class="text-sm font-light text-gray-400 uppercase tracking-wider">Product</h3>
              <ul class="flex flex-col space-y-4">
                <li><a href="/ai-agents" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">AI Agents</a></li>
                <li><a href="/website" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">MVP Launch</a></li>
                <li><a href="/mobile-app" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Mobile App</a></li>
                <li><a href="/services" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Services</a></li>
                <li><a href="https://chilledsites.com" target="_blank" rel="noopener noreferrer" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">chilledsites.com</a></li>
              </ul>
            </div>

            <!-- Company Column -->
            <div class="flex flex-col space-y-6">
              <h3 class="text-sm font-light text-gray-400 uppercase tracking-wider">Company</h3>
              <ul class="flex flex-col space-y-4">
                <li><a href="/about" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">About</a></li>
                <li><a href="/process" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Process</a></li>
                <li><a href="/case-studies" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Case Studies</a></li>
                <li><a href="/contact" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Contact</a></li>
              </ul>
            </div>

            <!-- Services Column -->
            <div class="flex flex-col space-y-6">
              <h3 class="text-sm font-light text-gray-400 uppercase tracking-wider">Services</h3>
              <ul class="flex flex-col space-y-4">
                <li><a href="/fractional-cpo" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Fractional CPO</a></li>
                <li><a href="/product-strategy" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Product Strategy</a></li>
                <li><a href="/ai-platform-development" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">AI Platform Dev</a></li>
                <li><a href="/digital-transformation" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Digital Transform</a></li>
                <li><a href="/retainer" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Retainer Program</a></li>
                <li><a href="/affiliate" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Affiliate Program</a></li>
              </ul>
            </div>

            <!-- Guides Column -->
            <div class="flex flex-col space-y-6">
              <h3 class="text-sm font-light text-gray-400 uppercase tracking-wider">Guides</h3>
              <ul class="flex flex-col space-y-4">
                <li><a href="/guides" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">All Guides</a></li>
                <li><a href="/guides/ai-agent-development-cost-timeline-guide-2025.html" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">AI Cost Guide</a></li>
                <li><a href="/guides/voice-ai-platforms-elevenlabs-livekit-custom-comparison-2025.html" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Voice AI Platforms</a></li>
                <li><a href="/guides/chatgpt-vs-custom-ai-agent-guide-2025.html" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">ChatGPT vs Custom</a></li>
                <li><a href="/guides/ai-agent-security-data-privacy-guide-2025.html" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">AI Security Guide</a></li>
                <li><a href="/guides/how-ai-agents-work-explained-for-non-technical-founders-2025.html" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">How AI Works</a></li>
                <li><a href="/guides/how-to-hire-ai-development-agency-2025.html" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Hiring AI Agency</a></li>
                <li><a href="/guides/building-saas-roadmap-2025.html" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">SaaS Roadmap</a></li>
              </ul>
            </div>

            <!-- Legal Column -->
            <div class="flex flex-col space-y-6">
              <h3 class="text-sm font-light text-gray-400 uppercase tracking-wider">Legal</h3>
              <ul class="flex flex-col space-y-4">
                <li><a href="/privacy" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" class="text-sm font-light text-gray-300 hover:text-white hover:underline transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <!-- Divider -->
          <div class="border-t border-gray-800 pt-12 md:pt-16">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
              <!-- Brand & Tagline -->
              <div class="text-center md:text-left">
                <a href="/" class="text-xl font-light text-white hover:text-blue-400 transition-colors mb-2 block">P0STMAN</a>
                <p class="text-sm text-gray-500 font-light">AI-Powered Product Studio. Built for speed. Shipped with care.</p>
              </div>

              <!-- Social Icons -->
              <div class="flex gap-4">
                <a href="https://linkedin.com/in/pgosnell" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com/paulgosnell" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://github.com/paulgosnell" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
              </div>

              <!-- Copyright -->
              <p class="text-sm text-gray-500 font-light">&copy; ${currentYear} P0STMAN</p>
            </div>
          </div>
        </div>
      </footer>
    `;
  };

  // CTA component (optional - can be added to articles) - V3 Style
  const renderCTA = (title = "Ready to Build Your AI Agent?", description = "Get in touch for a free consultation") => {
    return `
      <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center my-16 border border-gray-200">
        <h2 class="text-3xl md:text-4xl font-light mb-4 text-gray-900">${title}</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">${description}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-lg font-light">Contact Us</a>
          <a href="/guides/" class="px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-light">More Guides</a>
        </div>
      </div>
    `;
  };

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Inject header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = renderHeader();
    }

    // Inject footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = renderFooter();
    }

    // Inject CTA (if placeholder exists)
    const ctaPlaceholder = document.getElementById('cta-placeholder');
    if (ctaPlaceholder) {
      const title = ctaPlaceholder.dataset.title || undefined;
      const description = ctaPlaceholder.dataset.description || undefined;
      ctaPlaceholder.innerHTML = renderCTA(title, description);
    }
  });

  // Export for manual use if needed
  window.P0STMAN = {
    renderHeader,
    renderFooter,
    renderCTA
  };
})();
