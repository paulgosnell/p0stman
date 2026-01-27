const fs = require('fs');
const path = require('path');

// Load data
const aiBuilders = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/ai-builders.json'), 'utf8'));

// Output directories
const outputDirs = {
  limitations: path.join(__dirname, '../public/guides'),
  toProduction: path.join(__dirname, '../public/guides'),
  comparisons: path.join(__dirname, '../public/compare')
};

// Ensure directories exist
Object.values(outputDirs).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Current date for sitemaps
const today = new Date().toISOString().split('T')[0];

// ============================================
// TEMPLATE: Header
// ============================================
function generateHeader(meta) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}">
  <link rel="canonical" href="${meta.canonical}">

  <!-- Open Graph -->
  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.description}">
  <meta property="og:url" content="${meta.canonical}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="POSTMAN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${meta.title}">
  <meta name="twitter:description" content="${meta.description}">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'p0stman-blue': '#2563eb',
            'p0stman-purple': '#9333ea',
          },
          fontFamily: {
            sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Schema Markup -->
  <script type="application/ld+json">
${JSON.stringify(meta.schema, null, 2)}
  </script>

  <style>
    body { font-weight: 300; }
    .mobile-menu { display: none; }
    .mobile-menu.active { display: block; }
    .answer-box {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      border-left: 4px solid #0ea5e9;
    }
    .key-point {
      background: #fefce8;
      border-left: 4px solid #eab308;
    }
  </style>
</head>
<body class="bg-white text-gray-900 font-light">`;
}

// ============================================
// TEMPLATE: Navigation
// ============================================
function generateNav() {
  return `
  <!-- Navigation -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="/" class="flex items-center">
        <span class="text-2xl font-light tracking-tight text-gray-900">P0STMAN</span>
      </a>
      <nav class="hidden md:flex items-center gap-8">
        <a href="/case-studies" class="text-sm font-light text-gray-600 hover:text-gray-900">Work</a>
        <a href="/services" class="text-sm font-light text-gray-600 hover:text-gray-900">Services</a>
        <a href="/about" class="text-sm font-light text-gray-600 hover:text-gray-900">About</a>
        <a href="/contact" class="px-4 py-2 bg-gray-900 text-white text-sm font-light rounded-lg hover:bg-gray-800">Contact</a>
      </nav>
      <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-gray-50">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div id="mobile-menu" class="mobile-menu md:hidden bg-white border-t border-gray-100">
      <div class="p-4 space-y-2">
        <a href="/case-studies" class="block p-3 rounded-lg hover:bg-gray-50">Work</a>
        <a href="/services" class="block p-3 rounded-lg hover:bg-gray-50">Services</a>
        <a href="/about" class="block p-3 rounded-lg hover:bg-gray-50">About</a>
        <a href="/contact" class="block p-3 bg-gray-900 text-white rounded-lg text-center">Contact</a>
      </div>
    </div>
  </header>`;
}

// ============================================
// TEMPLATE: Footer
// ============================================
function generateFooter() {
  return `
  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 class="text-sm font-light text-gray-400 uppercase tracking-wider mb-4">Services</h3>
          <ul class="space-y-3">
            <li><a href="/prototype-to-production" class="text-sm text-gray-300 hover:text-white">Prototype to Production</a></li>
            <li><a href="/services/ai-agents" class="text-sm text-gray-300 hover:text-white">AI Agents</a></li>
            <li><a href="/fractional-ai-leadership" class="text-sm text-gray-300 hover:text-white">Fractional AI Leadership</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-light text-gray-400 uppercase tracking-wider mb-4">Guides</h3>
          <ul class="space-y-3">
            <li><a href="/lovable-to-production" class="text-sm text-gray-300 hover:text-white">Lovable to Production</a></li>
            <li><a href="/bolt-to-production" class="text-sm text-gray-300 hover:text-white">Bolt to Production</a></li>
            <li><a href="/guides/llm-seo-complete-guide-2026" class="text-sm text-gray-300 hover:text-white">LLM SEO Guide</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-light text-gray-400 uppercase tracking-wider mb-4">Company</h3>
          <ul class="space-y-3">
            <li><a href="/about" class="text-sm text-gray-300 hover:text-white">About</a></li>
            <li><a href="/case-studies" class="text-sm text-gray-300 hover:text-white">Case Studies</a></li>
            <li><a href="/contact" class="text-sm text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-light text-gray-400 uppercase tracking-wider mb-4">Contact</h3>
          <p class="text-sm text-gray-300 mb-2">hello@p0stman.com</p>
          <a href="/contact" class="inline-block mt-4 px-4 py-2 bg-white text-gray-900 text-sm rounded-lg hover:bg-gray-100">Get in Touch</a>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-gray-400">© ${new Date().getFullYear()} POSTMAN. All rights reserved.</p>
        <a href="/privacy" class="text-sm text-gray-400 hover:text-white mt-4 md:mt-0">Privacy Policy</a>
      </div>
    </div>
  </footer>
  <script>
    document.getElementById('mobile-menu-button')?.addEventListener('click', function() {
      document.getElementById('mobile-menu')?.classList.toggle('active');
    });
  </script>
</body>
</html>`;
}

// ============================================
// PAGE TYPE 1: Tool Limitations
// ============================================
function generateLimitationsPage(tool) {
  const slug = `${tool.slug}-limitations`;
  const title = `${tool.name} Limitations: What ${tool.name} Can't Do (2026 Guide)`;
  const description = `Discover the real limitations of ${tool.fullName}. Learn what ${tool.name} struggles with, common problems users face, and when to consider professional development help.`;
  const canonical = `https://p0stman.com/guides/${slug}/`;

  // Schema markup
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": { "@type": "Person", "name": "Paul Gosnell" },
        "publisher": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
        "datePublished": today,
        "dateModified": today
      },
      {
        "@type": "FAQPage",
        "mainEntity": tool.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
          { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://p0stman.com/guides/" },
          { "@type": "ListItem", "position": 3, "name": `${tool.name} Limitations`, "item": canonical }
        ]
      }
    ]
  };

  const limitationsHtml = tool.limitations.map(lim => `
        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-medium text-gray-900 mb-3">${lim.title}</h3>
          <p class="text-gray-600 leading-relaxed">${lim.description}</p>
        </div>`).join('');

  const faqsHtml = tool.faqs.map(faq => `
        <div class="border-b border-gray-200 pb-6">
          <h3 class="text-lg font-medium text-gray-900 mb-3">${faq.question}</h3>
          <p class="text-gray-600 leading-relaxed">${faq.answer}</p>
        </div>`).join('');

  const relatedToolsHtml = tool.relatedTools.map(t => {
    const related = aiBuilders.find(b => b.slug === t);
    if (!related) return '';
    return `<a href="/guides/${t}-limitations/" class="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <span class="font-medium text-gray-900">${related.name} Limitations</span>
      <span class="block text-sm text-gray-500 mt-1">Common problems with ${related.fullName}</span>
    </a>`;
  }).join('');

  const content = `
  ${generateNav()}

  <main class="pt-32 pb-20">
    <!-- Hero Section -->
    <section class="max-w-4xl mx-auto px-6 mb-16">
      <div class="mb-8">
        <a href="/guides/" class="text-sm text-blue-600 hover:text-blue-800">← All Guides</a>
      </div>

      <h1 class="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
        ${tool.name} Limitations: What It Can't Do
      </h1>

      <!-- Featured Snippet / Direct Answer -->
      <div class="answer-box rounded-xl p-6 mb-8">
        <p class="text-lg text-gray-800 leading-relaxed">
          <strong>${tool.fullName}</strong> is ${tool.description.toLowerCase()}. While it excels at ${tool.bestFor.toLowerCase()}, it has significant limitations for ${tool.notFor.toLowerCase()}. The main issues are: ${tool.limitations.slice(0, 3).map(l => l.title.toLowerCase()).join(', ')}.
        </p>
      </div>

      <!-- Key Takeaway -->
      <div class="key-point rounded-xl p-6 mb-8">
        <p class="text-gray-800">
          <strong>Key Takeaway:</strong> ${tool.name} gets you about 70% of the way to a working app. The last 30% typically requires professional development to achieve production quality.
        </p>
      </div>

      <!-- Meta info -->
      <div class="flex flex-wrap gap-4 text-sm text-gray-500">
        <span>Updated: ${today}</span>
        <span>•</span>
        <span>8 min read</span>
        <span>•</span>
        <span>By Paul Gosnell</span>
      </div>
    </section>

    <!-- Table of Contents -->
    <section class="max-w-4xl mx-auto px-6 mb-16">
      <div class="bg-gray-50 rounded-xl p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">In This Guide</h2>
        <ul class="space-y-2">
          <li><a href="#limitations" class="text-blue-600 hover:text-blue-800">Main Limitations of ${tool.name}</a></li>
          <li><a href="#when-to-use" class="text-blue-600 hover:text-blue-800">When ${tool.name} Works Well</a></li>
          <li><a href="#when-not-to-use" class="text-blue-600 hover:text-blue-800">When to Avoid ${tool.name}</a></li>
          <li><a href="#production-path" class="text-blue-600 hover:text-blue-800">Path to Production</a></li>
          <li><a href="#faqs" class="text-blue-600 hover:text-blue-800">Frequently Asked Questions</a></li>
        </ul>
      </div>
    </section>

    <!-- Main Limitations Section -->
    <section id="limitations" class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-8">Main Limitations of ${tool.name}</h2>
      <div class="grid gap-6">
        ${limitationsHtml}
      </div>
    </section>

    <!-- When to Use Section -->
    <section id="when-to-use" class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-6">When ${tool.name} Works Well</h2>
      <div class="bg-green-50 border border-green-200 rounded-xl p-6">
        <p class="text-gray-800 mb-4"><strong>${tool.name} is best for:</strong> ${tool.bestFor}</p>
        <ul class="space-y-2">
          ${tool.strengths.map(s => `<li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <span class="text-gray-700">${s}</span>
          </li>`).join('')}
        </ul>
      </div>
    </section>

    <!-- When NOT to Use Section -->
    <section id="when-not-to-use" class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-6">When to Avoid ${tool.name}</h2>
      <div class="bg-red-50 border border-red-200 rounded-xl p-6">
        <p class="text-gray-800 mb-4"><strong>${tool.name} is NOT suitable for:</strong> ${tool.notFor}</p>
        <ul class="space-y-2">
          ${tool.commonProblems.map(p => `<li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="text-gray-700">${p}</span>
          </li>`).join('')}
        </ul>
      </div>
    </section>

    <!-- Path to Production Section -->
    <section id="production-path" class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-6">Taking Your ${tool.name} Project to Production</h2>
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <p class="text-gray-800 mb-4">${tool.productionPath}</p>
        <div class="mt-6 pt-6 border-t border-blue-200">
          <p class="text-gray-800 mb-4"><strong>Need help taking your ${tool.name} project to production?</strong></p>
          <p class="text-gray-600 mb-4">We specialize in taking AI-built prototypes and turning them into production-ready applications. Our team has rescued dozens of ${tool.name} projects.</p>
          <a href="/prototype-to-production" class="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Learn About Our Prototype-to-Production Service →
          </a>
        </div>
      </div>
    </section>

    <!-- FAQs Section -->
    <section id="faqs" class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div class="space-y-6">
        ${faqsHtml}
      </div>
    </section>

    <!-- Related Guides -->
    <section class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="text-2xl font-light text-gray-900 mb-6">Related Guides</h2>
      <div class="grid md:grid-cols-2 gap-4">
        ${relatedToolsHtml}
        <a href="/${tool.slug}-to-production" class="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <span class="font-medium text-gray-900">${tool.name} to Production</span>
          <span class="block text-sm text-gray-500 mt-1">How to take your ${tool.name} project live</span>
        </a>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-4xl mx-auto px-6">
      <div class="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 class="text-2xl md:text-3xl font-light mb-4">Stuck With Your ${tool.name} Project?</h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          We've helped dozens of founders take their AI-built prototypes to production. Get a free assessment of your project and learn what it would take to make it production-ready.
        </p>
        <a href="/contact" class="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Get a Free Project Assessment
        </a>
      </div>
    </section>
  </main>`;

  return {
    slug,
    html: generateHeader({ title, description, canonical, schema }) + content + generateFooter(),
    path: `/guides/${slug}/`
  };
}

// ============================================
// PAGE TYPE 2: Tool Comparisons
// ============================================
function generateComparisonPage(toolA, toolB) {
  const slug = `${toolA.slug}-vs-${toolB.slug}`;
  const title = `${toolA.name} vs ${toolB.name}: Which AI Builder Should You Use? (2026)`;
  const description = `Compare ${toolA.name} vs ${toolB.name} for building apps with AI. See strengths, limitations, pricing, and which tool is right for your project.`;
  const canonical = `https://p0stman.com/compare/${slug}/`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": title,
        "description": description,
        "author": { "@type": "Person", "name": "Paul Gosnell" },
        "publisher": { "@type": "Organization", "name": "POSTMAN", "url": "https://p0stman.com" },
        "datePublished": today,
        "dateModified": today
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Is ${toolA.name} better than ${toolB.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `It depends on your needs. ${toolA.name} is best for ${toolA.bestFor}. ${toolB.name} is best for ${toolB.bestFor}. Neither is production-ready without additional development.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I build a production app with ${toolA.name} or ${toolB.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Both tools are designed for prototyping, not production. You'll need professional development help to take either to production quality.`
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://p0stman.com/" },
          { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://p0stman.com/compare/" },
          { "@type": "ListItem", "position": 3, "name": `${toolA.name} vs ${toolB.name}`, "item": canonical }
        ]
      }
    ]
  };

  const content = `
  ${generateNav()}

  <main class="pt-32 pb-20">
    <section class="max-w-4xl mx-auto px-6 mb-16">
      <div class="mb-8">
        <a href="/compare/" class="text-sm text-blue-600 hover:text-blue-800">← All Comparisons</a>
      </div>

      <h1 class="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
        ${toolA.name} vs ${toolB.name}: Complete Comparison
      </h1>

      <!-- Featured Snippet -->
      <div class="answer-box rounded-xl p-6 mb-8">
        <p class="text-lg text-gray-800 leading-relaxed">
          <strong>${toolA.name}</strong> is best for ${toolA.bestFor.toLowerCase()}, while <strong>${toolB.name}</strong> excels at ${toolB.bestFor.toLowerCase()}. ${toolA.name} uses ${toolA.techStack.slice(0, 2).join(' and ')}, while ${toolB.name} uses ${toolB.techStack.slice(0, 2).join(' and ')}. Neither produces truly production-ready code without professional help.
        </p>
      </div>

      <div class="flex flex-wrap gap-4 text-sm text-gray-500 mb-12">
        <span>Updated: ${today}</span>
        <span>•</span>
        <span>10 min read</span>
      </div>

      <!-- Quick Comparison Table -->
      <div class="overflow-x-auto mb-12">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-50">
              <th class="text-left p-4 border-b font-medium">Feature</th>
              <th class="text-left p-4 border-b font-medium">${toolA.name}</th>
              <th class="text-left p-4 border-b font-medium">${toolB.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 border-b text-gray-600">Category</td>
              <td class="p-4 border-b">${toolA.category}</td>
              <td class="p-4 border-b">${toolB.category}</td>
            </tr>
            <tr>
              <td class="p-4 border-b text-gray-600">Pricing</td>
              <td class="p-4 border-b">${toolA.pricing}</td>
              <td class="p-4 border-b">${toolB.pricing}</td>
            </tr>
            <tr>
              <td class="p-4 border-b text-gray-600">Tech Stack</td>
              <td class="p-4 border-b">${toolA.techStack.join(', ')}</td>
              <td class="p-4 border-b">${toolB.techStack.join(', ')}</td>
            </tr>
            <tr>
              <td class="p-4 border-b text-gray-600">Best For</td>
              <td class="p-4 border-b">${toolA.bestFor}</td>
              <td class="p-4 border-b">${toolB.bestFor}</td>
            </tr>
            <tr>
              <td class="p-4 border-b text-gray-600">Not Suitable For</td>
              <td class="p-4 border-b">${toolA.notFor}</td>
              <td class="p-4 border-b">${toolB.notFor}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Tool A Section -->
    <section class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-6">${toolA.name}: Strengths & Weaknesses</h2>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-green-50 rounded-xl p-6">
          <h3 class="font-medium text-gray-900 mb-4">Strengths</h3>
          <ul class="space-y-2">
            ${toolA.strengths.map(s => `<li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <span>${s}</span>
            </li>`).join('')}
          </ul>
        </div>
        <div class="bg-red-50 rounded-xl p-6">
          <h3 class="font-medium text-gray-900 mb-4">Limitations</h3>
          <ul class="space-y-2">
            ${toolA.limitations.slice(0, 4).map(l => `<li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span>${l.title}</span>
            </li>`).join('')}
          </ul>
        </div>
      </div>
      <p class="text-gray-600">
        <a href="/guides/${toolA.slug}-limitations/" class="text-blue-600 hover:text-blue-800">Read full ${toolA.name} limitations guide →</a>
      </p>
    </section>

    <!-- Tool B Section -->
    <section class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-6">${toolB.name}: Strengths & Weaknesses</h2>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-green-50 rounded-xl p-6">
          <h3 class="font-medium text-gray-900 mb-4">Strengths</h3>
          <ul class="space-y-2">
            ${toolB.strengths.map(s => `<li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              <span>${s}</span>
            </li>`).join('')}
          </ul>
        </div>
        <div class="bg-red-50 rounded-xl p-6">
          <h3 class="font-medium text-gray-900 mb-4">Limitations</h3>
          <ul class="space-y-2">
            ${toolB.limitations.slice(0, 4).map(l => `<li class="flex items-start gap-2">
              <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span>${l.title}</span>
            </li>`).join('')}
          </ul>
        </div>
      </div>
      <p class="text-gray-600">
        <a href="/guides/${toolB.slug}-limitations/" class="text-blue-600 hover:text-blue-800">Read full ${toolB.name} limitations guide →</a>
      </p>
    </section>

    <!-- Verdict Section -->
    <section class="max-w-4xl mx-auto px-6 mb-16">
      <h2 class="text-3xl font-light text-gray-900 mb-6">The Verdict: Which Should You Choose?</h2>

      <div class="bg-gray-50 rounded-xl p-6 mb-8">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-medium text-gray-900 mb-2">Choose ${toolA.name} if:</h3>
            <p class="text-gray-600">You need ${toolA.bestFor.toLowerCase()} and can work within its ${toolA.pricing.toLowerCase()} pricing model.</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-900 mb-2">Choose ${toolB.name} if:</h3>
            <p class="text-gray-600">You need ${toolB.bestFor.toLowerCase()} and can work within its ${toolB.pricing.toLowerCase()} pricing model.</p>
          </div>
        </div>
      </div>

      <div class="key-point rounded-xl p-6">
        <p class="text-gray-800">
          <strong>Important:</strong> Neither ${toolA.name} nor ${toolB.name} produces production-ready code. Both are prototyping tools. For production applications, plan to hire professional development help to refactor, secure, and scale your project.
        </p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-4xl mx-auto px-6">
      <div class="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 class="text-2xl md:text-3xl font-light mb-4">Built Something in ${toolA.name} or ${toolB.name}?</h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          We specialize in taking AI-built prototypes to production. Get a free assessment of your project.
        </p>
        <a href="/contact" class="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Get a Free Project Assessment
        </a>
      </div>
    </section>
  </main>`;

  return {
    slug,
    html: generateHeader({ title, description, canonical, schema }) + content + generateFooter(),
    path: `/compare/${slug}/`
  };
}

// ============================================
// GENERATE ALL PAGES
// ============================================
function generateAllPages() {
  const pages = [];
  const limitationsDir = path.join(__dirname, '../public/guides');
  const comparisonsDir = path.join(__dirname, '../public/compare');

  console.log('Generating AI Builder pages...\n');

  // 1. Generate limitations pages for each tool
  console.log('Generating limitations pages...');
  aiBuilders.forEach(tool => {
    const page = generateLimitationsPage(tool);
    const pageDir = path.join(limitationsDir, `${tool.slug}-limitations`);

    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    fs.writeFileSync(path.join(pageDir, 'index.html'), page.html);
    pages.push({ path: page.path, type: 'limitations' });
    console.log(`  ✓ ${tool.name} Limitations`);
  });

  // 2. Generate comparison pages (top combinations)
  console.log('\nGenerating comparison pages...');
  const comparisons = [
    // Original AI app builders
    ['lovable', 'bolt'],
    ['lovable', 'v0'],
    ['lovable', 'cursor'],
    ['lovable', 'replit'],
    ['bolt', 'v0'],
    ['bolt', 'cursor'],
    ['bolt', 'replit'],
    ['v0', 'cursor'],
    ['v0', 'claude-artifacts'],
    ['cursor', 'windsurf'],
    ['cursor', 'copilot'],
    ['replit', 'firebase-studio'],
    ['lovable', 'claude-artifacts'],
    ['bolt', 'claude-artifacts'],
    ['windsurf', 'copilot'],
    // No-code platforms
    ['lovable', 'bubble'],
    ['bolt', 'bubble'],
    ['bubble', 'webflow'],
    ['bubble', 'glide'],
    ['bubble', 'softr'],
    ['webflow', 'framer'],
    ['webflow', 'lovable'],
    ['framer', 'v0'],
    ['glide', 'softr'],
    ['softr', 'bubble'],
    ['retool', 'bubble'],
    // AI code generators
    ['gpt-engineer', 'lovable'],
    ['gpt-engineer', 'bolt'],
    ['gpt-engineer', 'cursor'],
    ['cursor', 'gpt-engineer'],
    // Cross-category comparisons
    ['lovable', 'webflow'],
    ['bolt', 'webflow'],
    ['v0', 'webflow'],
    ['replit', 'glide'],
    ['cursor', 'retool'],
    ['lovable', 'glide'],
    ['lovable', 'softr'],
    ['bolt', 'framer'],
    ['v0', 'framer'],
    ['create-xyz', 'bubble'],
    ['create-xyz', 'lovable']
  ];

  comparisons.forEach(([slugA, slugB]) => {
    const toolA = aiBuilders.find(t => t.slug === slugA);
    const toolB = aiBuilders.find(t => t.slug === slugB);

    if (toolA && toolB) {
      const page = generateComparisonPage(toolA, toolB);
      const pageDir = path.join(comparisonsDir, page.slug);

      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }

      fs.writeFileSync(path.join(pageDir, 'index.html'), page.html);
      pages.push({ path: page.path, type: 'comparison' });
      console.log(`  ✓ ${toolA.name} vs ${toolB.name}`);
    }
  });

  // 3. Generate sitemaps
  console.log('\nGenerating sitemaps...');

  const limitationsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter(p => p.type === 'limitations').map(p => `  <url>
    <loc>https://p0stman.com${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  const comparisonsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter(p => p.type === 'comparison').map(p => `  <url>
    <loc>https://p0stman.com${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/ai-builders-sitemap.xml'), limitationsSitemap);
  fs.writeFileSync(path.join(__dirname, '../public/ai-comparisons-sitemap.xml'), comparisonsSitemap);

  console.log('  ✓ ai-builders-sitemap.xml');
  console.log('  ✓ ai-comparisons-sitemap.xml');

  console.log(`\n✅ Generated ${pages.length} pages total`);
  console.log(`   - ${pages.filter(p => p.type === 'limitations').length} limitations pages`);
  console.log(`   - ${pages.filter(p => p.type === 'comparison').length} comparison pages`);
}

// Run
generateAllPages();
