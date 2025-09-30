// Dead simple includes with local file fallbacks
document.addEventListener('DOMContentLoaded', async () => {
    const includes = document.querySelectorAll('[data-include]');
    
    // Determine base URL for links and includes
    const computeMamoriBase = () => {
        const path = window.location.pathname;
        const split = path.split('/mamori/');
        if (split.length < 2) {
            return '/mamori/';
        }
        const after = split[1];
        // Count directory segments after /mamori/
        const dir = after.endsWith('/') ? after : after.substring(0, after.lastIndexOf('/') + 1);
        const depth = dir.split('/').filter(Boolean).length;
        const isHttp = window.location.protocol.startsWith('http');
        // On http(s), absolute path works best. For file://, use relative backtracking.
        if (isHttp) return '/mamori/';
        return depth === 0 ? '' : '../'.repeat(depth);
    };
    const BASE_URL = computeMamoriBase();

    // Fallback content matching real includes
    const fallbacks = {
        header: `
            <header class="fixed-header">
                <div class="header-content">
                    <div class="header-logo">
                        <a href="index.html" class="logo-link">Mamori</a>
                    </div>
                    
                    <div class="header-search">
                        <div class="ai-search-container">
                            <div class="search-input-wrapper" id="searchWrapper">
                                <i data-lucide="sparkles" class="search-icon"></i>
                                <div class="ai-orb" id="aiOrb">
                                    <div class="orb-inner"></div>
                                    <div class="orb-pulse"></div>
                                    <div class="orb-pulse-2"></div>
                                </div>
                                <input 
                                    type="text" 
                                    class="ai-search-input" 
                                    id="aiSearchInput"
                                    placeholder="Search..."
                                    autocomplete="off"
                                >
                                <div class="ai-badge">
                                    <span class="ai-badge-text">AI</span>
                                </div>
                            </div>
                            <div class="search-suggestions" id="searchSuggestions"></div>
                        </div>
                    </div>
                    
                    <nav class="header-nav">
                        <a href="categories.html" class="nav-link">Categories</a>
                        <a href="about.html" class="nav-link">About</a>
                        <a href="evidence.html" class="nav-link">Evidence</a>
                        <button class="btn btn--ghost btn--small mobile-menu-toggle" aria-label="Menu">
                            <i data-lucide="menu"></i>
                        </button>
                    </nav>
                </div>
                
                <div class="mobile-menu" id="mobileMenu">
                    <a href="categories.html" class="mobile-nav-link">Categories</a>
                    <a href="about.html" class="mobile-nav-link">About</a>
                    <a href="evidence.html" class="mobile-nav-link">Evidence</a>
                </div>
            </header>
        `,
        footer: `
            <footer class="footer">
                <div class="footer-background">
                    <div class="omamori omamori--1">
                        <div class="omamori-charm">守</div>
                    </div>
                    <div class="omamori omamori--2">
                        <div class="omamori-charm">護</div>
                    </div>
                    <div class="omamori omamori--3">
                        <div class="omamori-charm">安</div>
                    </div>
                    <div class="omamori omamori--4">
                        <div class="omamori-charm">福</div>
                    </div>
                    
                    <div class="footer-content">
                        <div class="footer-blessing">
                            <h2 class="footer-title">Protected by Evidence-First Design</h2>
                            <p class="footer-philosophy">
                                From Copenhagen to Kyoto, from Swedish forests to Japanese temples—this marketplace carries 
                                the protective spirit of o-mamori, blessed with Scandinavian lagom and the precision of evidence-based health.
                            </p>
                        </div>
                        
                        <div class="footer-grid">
                            <div class="footer-column footer-column--categories">
                                <h4 class="footer-column-title">Health Categories</h4>
                                <div class="footer-links">
                                    <a href="topics/creatine.html" class="footer-link">Creatine</a>
                                    <a href="topics/magnesium.html" class="footer-link">Magnesium</a>
                                    <a href="topics/sleep-tools.html" class="footer-link">Sleep Tools</a>
                                    <a href="topics/menopause.html" class="footer-link">Menopause</a>
                                </div>
                            </div>
                            <div class="footer-column footer-column--info">
                                <h4 class="footer-column-title">About Mamori</h4>
                                <div class="footer-links">
                                    <a href="about.html" class="footer-link">Our Story</a>
                                    <a href="evidence.html" class="footer-link">How We Score</a>
                                    <a href="trust.html" class="footer-link">Trust Manifesto</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="footer-signature">
                            <p class="footer-credit">Mamori Health Marketplace</p>
                            <p class="footer-year">2024 • Born from evidence, blessed by transparency</p>
                        </div>
                    </div>
                </div>
            </footer>
        `,
        scripts: `
            <script>
                // Mobile menu functionality
                document.querySelector('.mobile-menu-toggle')?.addEventListener('click', () => {
                    document.getElementById('mobileMenu')?.classList.toggle('mobile-menu--open');
                });
                
                // Close mobile menu when clicking outside
                document.addEventListener('click', (e) => {
                    const menu = document.getElementById('mobileMenu');
                    const toggle = document.querySelector('.mobile-menu-toggle');
                    if (menu && !menu.contains(e.target) && !toggle?.contains(e.target)) {
                        menu.classList.remove('mobile-menu--open');
                    }
                });
            </script>
        `
    };
    
    for (const element of includes) {
        const file = element.getAttribute('data-include');
        try {
            // Always fetch includes from Mamori root so nested pages work
            const response = await fetch(`${BASE_URL}includes/${file}.html`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            let html = await response.text();
            // Replace BASE_URL placeholders inside includes
            html = html.replaceAll('{{BASE_URL}}', BASE_URL);
            element.innerHTML = html;
        } catch (error) {
            // Use fallback content for local development
            console.log(`Using fallback for: ${file}`);
            let html = fallbacks[file] || `<!-- ${file} not available -->`;
            html = html.replaceAll('{{BASE_URL}}', BASE_URL);
            element.innerHTML = html;
        }
    }
    
    // Re-initialize icons after content loads
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize search after includes are loaded (only if not already initialized)
    if (typeof MamoriSearch !== 'undefined' && !window.mamoriSearchInstance) {
        window.mamoriSearchInstance = new MamoriSearch();
    }
});