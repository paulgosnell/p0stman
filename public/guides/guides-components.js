// Shared header and footer for P0STMAN Guides
(function() {
  'use strict';

  // Header component
  const renderHeader = () => {
    return `
      <header class="container-premium-wide py-8 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/favicon.svg" alt="P0STMAN Logo" style="height:40px;">
          <span class="text-premium-3xl font-bold text-gradient-purple">P0STMAN</span>
        </a>
        <nav class="flex gap-4">
          <a href="/guides/" class="btn-premium-secondary">All Guides</a>
          <a href="/contact" class="btn-premium-primary">Contact</a>
        </nav>
      </header>
    `;
  };

  // Footer component
  const renderFooter = () => {
    const currentYear = new Date().getFullYear();
    return `
      <footer class="bg-gray-900 border-t border-gray-800 py-12 mt-20">
        <div class="container-premium-wide">
          <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 class="text-premium-xl font-bold mb-4 text-gradient-purple">P0STMAN</h3>
              <p class="text-gray-400">AI-powered product studio. Building faster, better, and more affordable solutions than traditional agencies.</p>
            </div>
            <div>
              <h4 class="text-premium-lg font-semibold mb-4 text-white">Services</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/ai-agents" class="hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="/website" class="hover:text-white transition-colors">Custom Websites</a></li>
                <li><a href="/mobile-app" class="hover:text-white transition-colors">Mobile Apps</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-premium-lg font-semibold mb-4 text-white">Resources</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/guides/" class="hover:text-white transition-colors">Guides</a></li>
                <li><a href="/case-studies" class="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="/process" class="hover:text-white transition-colors">Our Process</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-premium-lg font-semibold mb-4 text-white">Company</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/about" class="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" class="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; ${currentYear} P0STMAN. All rights reserved.</p>
            <div class="flex gap-6 mt-4 md:mt-0">
              <a href="https://twitter.com/paulgosnell" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Twitter</a>
              <a href="https://linkedin.com/in/pgosnell" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  };

  // CTA component (optional - can be added to articles)
  const renderCTA = (title = "Ready to Build Your AI Agent?", description = "Get in touch for a free consultation") => {
    return `
      <div class="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl p-8 md:p-12 text-center my-16">
        <h2 class="text-premium-3xl font-bold mb-4 text-gradient-purple">${title}</h2>
        <p class="text-premium-lg text-gray-300 mb-8 max-w-2xl mx-auto">${description}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="btn-premium-primary">Contact Us</a>
          <a href="/guides/" class="btn-premium-secondary">More Guides</a>
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
