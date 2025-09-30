/**
 * Mamori Search Functionality
 * Basic client-side search implementation for MVP
 */

class MamoriSearch {
    constructor() {
        this.searchData = {
            pages: [
                {
                    title: "Creatine - Evidence-Based Reviews",
                    url: "topics/creatine.html",
                    category: "Supplements",
                    keywords: ["creatine", "strength", "muscle", "performance", "workout", "athletic", "power"],
                    evidence: "A",
                    description: "The most researched sports supplement with proven benefits for strength, power, and muscle mass."
                },
                {
                    title: "Magnesium - Sleep & Recovery Support", 
                    url: "topics/magnesium.html",
                    category: "Supplements",
                    keywords: ["magnesium", "sleep", "recovery", "muscle", "stress", "relaxation", "cramps"],
                    evidence: "B",
                    description: "Essential mineral for sleep, muscle function, and stress management with solid research backing."
                },
                {
                    title: "Sleep Tools - Tracking & Optimization",
                    url: "topics/sleep-tools.html", 
                    category: "Devices",
                    keywords: ["sleep", "tracking", "devices", "oura", "rings", "wake up light", "weighted blanket"],
                    evidence: "B",
                    description: "Devices and aids designed to improve sleep quality, tracking, and duration."
                },
                {
                    title: "Menopause Support - Natural Approaches",
                    url: "topics/menopause.html",
                    category: "Supplements", 
                    keywords: ["menopause", "hot flashes", "women", "hormone", "black cohosh", "calcium", "bone health"],
                    evidence: "C",
                    description: "Evidence-based support for menopause symptoms and wellness with varying research backing."
                },
                {
                    title: "Health Categories - All Products",
                    url: "categories.html",
                    category: "Navigation",
                    keywords: ["categories", "all products", "supplements", "devices", "health", "browse"],
                    evidence: null,
                    description: "Browse all health categories and product types in our evidence-based marketplace."
                },
                {
                    title: "About Mamori - Our Story",
                    url: "about.html",
                    category: "Info",
                    keywords: ["about", "story", "team", "mission", "nordic", "japanese", "evidence-first"],
                    evidence: null,
                    description: "Learn about our evidence-first approach and cultural foundation."
                },
                {
                    title: "Trust Manifesto - Our Promise",
                    url: "trust.html", 
                    category: "Info",
                    keywords: ["trust", "manifesto", "evidence", "transparency", "no house brands", "methodology"],
                    evidence: null,
                    description: "Our commitment to evidence-based recommendations and transparency."
                },
                {
                    title: "Evidence Methodology - How We Grade",
                    url: "evidence.html",
                    category: "Info", 
                    keywords: ["methodology", "grading", "a-d system", "research", "studies", "scientific"],
                    evidence: null,
                    description: "The systematic approach we use to evaluate health products and assign evidence grades."
                }
            ],
            
            quickAnswers: [
                {
                    query: "best creatine",
                    answer: "For strength training, creatine monohydrate has A-grade evidence. Try Optimum Nutrition or BulkSupplements.",
                    url: "topics/creatine.html"
                },
                {
                    query: "sleep better",
                    answer: "Magnesium glycinate (B-grade evidence) or sleep tracking devices like Oura Ring can help.",
                    url: "topics/magnesium.html"  
                },
                {
                    query: "menopause hot flashes",
                    answer: "Black cohosh has C-grade evidence for hot flashes. Consider consulting your doctor first.",
                    url: "topics/menopause.html"
                },
                {
                    query: "how do you grade",
                    answer: "We use an A-D system based on research quality: A=strong evidence, B=good, C=limited, D=poor.",
                    url: "evidence.html"
                },
                {
                    query: "no house brands",
                    answer: "We don't make or sell products - just provide evidence-based recommendations with transparent affiliate links.",
                    url: "trust.html"
                }
            ]
        };
        
        this.init();
    }
    
    init() {
        this.setupSearchListeners();
        this.setupSuggestions();
        this.setupFocusEffects();
    }
    
    setupSearchListeners() {
        const searchInputs = document.querySelectorAll('.ai-search-input');
        
        searchInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                this.handleSearch(e.target.value, e.target);
            });
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch(e.target.value);
                }
            });
            
            // Hide suggestions when clicking outside
            document.addEventListener('click', (e) => {
                const wrapper = document.getElementById('searchWrapper');
                if (wrapper && !wrapper.contains(e.target)) {
                    this.hideSuggestions();
                    this.collapseSearch();
                }
            });
        });
    }
    
    setupFocusEffects() {
        const searchInput = document.getElementById('aiSearchInput');
        const searchWrapper = document.getElementById('searchWrapper');
        
        if (!searchInput || !searchWrapper) return;
        
        // Expand on focus
        searchInput.addEventListener('focus', () => {
            this.expandSearch();
        });
        
        // Collapse on blur if empty
        searchInput.addEventListener('blur', () => {
            if (!searchInput.value.trim()) {
                setTimeout(() => {
                    this.collapseSearch();
                }, 200);
            }
        });
    }
    
    expandSearch() {
        const searchWrapper = document.getElementById('searchWrapper');
        const searchInput = document.getElementById('aiSearchInput');
        
        if (searchWrapper && searchInput) {
            searchWrapper.classList.add('expanded');
            searchInput.placeholder = 'Ask me anything... health questions, product recommendations, advice...';
            
            // Show default suggestions if input is empty
            if (!searchInput.value.trim()) {
                this.showAskMeAnythingSuggestions();
            }
        }
    }
    
    collapseSearch() {
        const searchWrapper = document.getElementById('searchWrapper');
        const searchInput = document.getElementById('aiSearchInput');
        
        if (searchWrapper && searchInput) {
            searchWrapper.classList.remove('expanded');
            searchInput.placeholder = 'Search...';
            this.hideSuggestions();
        }
    }
    
    setupSuggestions() {
        // Add placeholder suggestions on focus
        const searchInputs = document.querySelectorAll('.ai-search-input');
        
        searchInputs.forEach(input => {
            input.addEventListener('focus', () => {
                if (!input.value.trim()) {
                    this.showDefaultSuggestions();
                }
            });
        });
    }
    
    handleSearch(query, inputElement) {
        const trimmedQuery = query.trim();
        
        if (trimmedQuery.length === 0) {
            this.showDefaultSuggestions();
            return;
        }
        
        if (trimmedQuery.length < 2) {
            this.hideSuggestions();
            return;
        }
        
        const results = this.search(trimmedQuery);
        this.showSuggestions(results, trimmedQuery);
    }
    
    search(query) {
        const lowerQuery = query.toLowerCase();
        const results = [];
        
        // Check for quick answers first
        const quickAnswer = this.searchQuickAnswers(lowerQuery);
        if (quickAnswer) {
            results.push({
                type: 'quick-answer',
                ...quickAnswer
            });
        }
        
        // Search pages
        const pageResults = this.searchPages(lowerQuery);
        results.push(...pageResults);
        
        return results.slice(0, 6); // Limit to 6 results
    }
    
    searchQuickAnswers(query) {
        for (const qa of this.searchData.quickAnswers) {
            if (query.includes(qa.query) || qa.query.includes(query)) {
                return qa;
            }
        }
        return null;
    }
    
    searchPages(query) {
        const results = [];
        
        for (const page of this.searchData.pages) {
            let score = 0;
            const lowerTitle = page.title.toLowerCase();
            const lowerDesc = page.description.toLowerCase();
            
            // Title exact match (highest score)
            if (lowerTitle.includes(query)) {
                score += 10;
            }
            
            // Keywords match
            for (const keyword of page.keywords) {
                if (keyword.includes(query) || query.includes(keyword)) {
                    score += 5;
                }
            }
            
            // Description match
            if (lowerDesc.includes(query)) {
                score += 3;
            }
            
            if (score > 0) {
                results.push({
                    type: 'page',
                    score,
                    ...page
                });
            }
        }
        
        // Sort by score (highest first)
        return results.sort((a, b) => b.score - a.score);
    }
    
    showDefaultSuggestions() {
        const suggestions = [
            { type: 'suggestion', text: 'best creatine for strength' },
            { type: 'suggestion', text: 'magnesium for sleep' },
            { type: 'suggestion', text: 'sleep tracking devices' },
            { type: 'suggestion', text: 'menopause natural support' },
            { type: 'suggestion', text: 'how do you grade evidence?' }
        ];
        
        this.displaySuggestions(suggestions);
    }
    
    showAskMeAnythingSuggestions() {
        const suggestions = [
            { type: 'ai-prompt', icon: 'heart-pulse', text: 'What can help with sleep quality?', category: 'Health Question' },
            { type: 'ai-prompt', icon: 'dumbbell', text: 'Best supplements for muscle recovery?', category: 'Product Advice' },
            { type: 'ai-prompt', icon: 'brain', text: 'How does magnesium help with stress?', category: 'Health Question' },
            { type: 'ai-prompt', icon: 'zap', text: 'Which creatine type should I choose?', category: 'Product Advice' },
            { type: 'ai-prompt', icon: 'shield-check', text: 'How do you verify product claims?', category: 'Methodology' }
        ];
        
        this.displayAISuggestions(suggestions);
    }
    
    displayAISuggestions(suggestions) {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (!suggestionsContainer) return;
        
        let html = '<div class="search-results ai-suggestions">';
        html += '<div class="ai-suggestions-header">';
        html += '<div class="ai-orb-small">';
        html += '<div class="orb-inner-small"></div>';
        html += '</div>';
        html += '<span class="ai-suggestions-title">Ask me anything</span>';
        html += '</div>';
        
        for (const item of suggestions) {
            const searchInput = document.getElementById('aiSearchInput');
            html += `
                <div class="search-result search-result--ai" onclick="document.getElementById('aiSearchInput').value='${item.text.replace(/'/g, "\\'")}'; document.getElementById('aiSearchInput').dispatchEvent(new Event('input'));">
                    <div class="result-icon">
                        <i data-lucide="${item.icon}"></i>
                    </div>
                    <div class="result-content">
                        <div class="result-text">${item.text}</div>
                        <div class="result-category-small">${item.category}</div>
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        
        suggestionsContainer.innerHTML = html;
        suggestionsContainer.style.display = 'block';
        
        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    showSuggestions(results, query) {
        if (results.length === 0) {
            const noResults = [{
                type: 'no-results',
                text: `No results found for "${query}"`,
                suggestion: 'Try searching for "creatine", "sleep", or "categories"'
            }];
            this.displaySuggestions(noResults);
            return;
        }
        
        this.displaySuggestions(results);
    }
    
    displaySuggestions(suggestions) {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (!suggestionsContainer) return;
        
        let html = '<div class="search-results">';
        
        for (const item of suggestions) {
            if (item.type === 'quick-answer') {
                html += `
                    <div class="search-result search-result--quick" onclick="location.href='${item.url}'">
                        <div class="result-icon">
                            <i data-lucide="zap"></i>
                        </div>
                        <div class="result-content">
                            <div class="result-label">Quick Answer</div>
                            <div class="result-answer">${item.answer}</div>
                        </div>
                    </div>
                `;
            } else if (item.type === 'page') {
                const evidgeBadge = item.evidence ? 
                    `<div class="evidence-badge evidence-badge--${item.evidence.toLowerCase()}">${item.evidence}</div>` : '';
                
                html += `
                    <div class="search-result" onclick="location.href='${item.url}'">
                        <div class="result-content">
                            <div class="result-header">
                                <span class="result-title">${item.title}</span>
                                ${evidgeBadge}
                            </div>
                            <div class="result-description">${item.description}</div>
                            <div class="result-category">${item.category}</div>
                        </div>
                    </div>
                `;
            } else if (item.type === 'suggestion') {
                html += `
                    <div class="search-result search-result--suggestion" onclick="this.parentElement.parentElement.previousElementSibling.querySelector('.ai-search-input').value='${item.text}'; this.parentElement.parentElement.previousElementSibling.querySelector('.ai-search-input').dispatchEvent(new Event('input'));">
                        <div class="result-icon">
                            <i data-lucide="search"></i>
                        </div>
                        <div class="result-content">
                            <div class="result-text">${item.text}</div>
                        </div>
                    </div>
                `;
            } else if (item.type === 'no-results') {
                html += `
                    <div class="search-result search-result--no-results">
                        <div class="result-content">
                            <div class="result-text">${item.text}</div>
                            <div class="result-suggestion">${item.suggestion}</div>
                        </div>
                    </div>
                `;
            }
        }
        
        html += '</div>';
        
        suggestionsContainer.innerHTML = html;
        suggestionsContainer.style.display = 'block';
        
        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
    
    hideSuggestions() {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (suggestionsContainer) {
            suggestionsContainer.style.display = 'none';
        }
    }
    
    performSearch(query) {
        if (!query.trim()) return;
        
        const results = this.search(query.trim());
        
        if (results.length > 0) {
            // Navigate to the first result
            const firstResult = results[0];
            if (firstResult.url) {
                window.location.href = firstResult.url;
            }
        } else {
            // Show "no results" message or navigate to categories
            window.location.href = 'categories.html';
        }
    }
}

// Make search available globally
window.MamoriSearch = MamoriSearch;

// Auto-initialize if DOM is already loaded (for direct script includes)
// Otherwise, let the includes system initialize it after header loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!window.mamoriSearchInstance) {
            const searchInput = document.getElementById('aiSearchInput');
            if (searchInput) {
                window.mamoriSearchInstance = new MamoriSearch();
            }
        }
    });
} else {
    // DOM already loaded, initialize if header exists
    if (document.getElementById('aiSearchInput')) {
        window.mamoriSearchInstance = new MamoriSearch();
    }
}