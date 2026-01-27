/**
 * Generate ICP 1 (Ops Transformation) programmatic SEO pages
 * - Industry operations pages
 * - Tool integration pages
 * - Process automation pages
 */

const fs = require('fs');
const path = require('path');

const data = require('../data/ops-automation.json');

const currentDate = new Date().toISOString().split('T')[0];

// Ensure directories exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Generate Industry Operations Pages
function generateIndustryPage(industry) {
  const title = `${industry.name} Operations Automation: Consolidate Your Tech Stack (2026 Guide)`;
  const description = `Learn how to automate ${industry.name.toLowerCase()} operations and eliminate tool sprawl. Discover which processes to automate first and how to build a unified operations platform.`;
  const url = `https://p0stman.com/industries/${industry.slug}-operations-automation/`;

  const faqSchema = industry.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${url}">

  <!-- Open Graph -->
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="POSTMAN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">

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
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "${title}",
      "description": "${description}",
      "author": {
        "@type": "Person",
        "name": "Paul Gosnell"
      },
      "publisher": {
        "@type": "Organization",
        "name": "POSTMAN",
        "url": "https://p0stman.com"
      },
      "datePublished": "${currentDate}",
      "dateModified": "${currentDate}"
    },
    {
      "@type": "FAQPage",
      "mainEntity": ${JSON.stringify(faqSchema, null, 2).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')}
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://p0stman.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://p0stman.com/industries/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${industry.name} Operations Automation",
          "item": "${url}"
        }
      ]
    }
  ]
}
  </script>
</head>
<body class="bg-white text-gray-900">
  <!-- Header -->
  <header class="border-b border-gray-200">
    <nav class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="text-xl font-bold">POSTMAN</a>
      <div class="flex gap-6 text-sm">
        <a href="/case-studies" class="text-gray-600 hover:text-gray-900">Case Studies</a>
        <a href="/services" class="text-gray-600 hover:text-gray-900">Services</a>
        <a href="/contact" class="text-gray-600 hover:text-gray-900">Contact</a>
      </div>
    </nav>
  </header>

  <main class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-8">
      <a href="/" class="hover:text-gray-900">Home</a>
      <span class="mx-2">/</span>
      <a href="/industries/" class="hover:text-gray-900">Industries</a>
      <span class="mx-2">/</span>
      <span class="text-gray-900">${industry.name} Operations</span>
    </nav>

    <!-- Answer Box (Featured Snippet Target) -->
    <div class="bg-blue-50 border-l-4 border-p0stman-blue p-6 mb-8 rounded-r-lg">
      <h1 class="text-2xl md:text-3xl font-bold mb-4">${industry.name} Operations Automation</h1>
      <p class="text-lg text-gray-700 mb-4">
        ${industry.name} businesses typically use <strong>${industry.metrics.avgApps} different software tools</strong>,
        wasting <strong>${industry.metrics.monthlyWaste} per month</strong> on disconnected systems and
        <strong>${industry.metrics.hoursLostWeekly} hours per week</strong> on manual data entry.
      </p>
      <p class="text-gray-700">
        Operations automation connects these tools into a unified platform, eliminating double-entry,
        reducing errors, and giving you real-time visibility across your entire business.
      </p>
    </div>

    <!-- Key Takeaway -->
    <div class="bg-gray-100 p-6 rounded-lg mb-8">
      <h2 class="font-semibold mb-2">Key Takeaway</h2>
      <p class="text-gray-700">
        Most ${industry.name.toLowerCase()} businesses can consolidate their tech stack by 60-70% and save
        ${industry.metrics.hoursLostWeekly} hours per week through custom operations automation.
        The typical ROI is 6-12 months.
      </p>
    </div>

    <!-- Table of Contents -->
    <nav class="bg-gray-50 p-6 rounded-lg mb-12">
      <h2 class="font-semibold mb-4">Table of Contents</h2>
      <ul class="space-y-2 text-p0stman-blue">
        <li><a href="#pain-points" class="hover:underline">Common Pain Points</a></li>
        <li><a href="#processes" class="hover:underline">Key Processes to Automate</a></li>
        <li><a href="#current-tools" class="hover:underline">Tools You're Probably Using</a></li>
        <li><a href="#solution" class="hover:underline">The Unified Platform Approach</a></li>
        <li><a href="#faq" class="hover:underline">Frequently Asked Questions</a></li>
      </ul>
    </nav>

    <!-- Pain Points -->
    <section id="pain-points" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Common Pain Points in ${industry.name}</h2>
      <p class="text-gray-700 mb-6">
        If you're running a ${industry.name.toLowerCase()} business, you've probably experienced these frustrations:
      </p>
      <div class="grid gap-4">
        ${industry.painPoints.map(point => `
        <div class="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
          <svg class="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span class="text-gray-700">${point}</span>
        </div>`).join('')}
      </div>
    </section>

    <!-- Processes -->
    <section id="processes" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Key Processes to Automate</h2>
      <p class="text-gray-700 mb-6">
        These are the highest-impact processes to automate in ${industry.name.toLowerCase()}:
      </p>
      <div class="grid md:grid-cols-2 gap-4">
        ${industry.processes.map(process => `
        <div class="p-4 border border-gray-200 rounded-lg">
          <h3 class="font-semibold capitalize">${process}</h3>
        </div>`).join('')}
      </div>
    </section>

    <!-- Current Tools -->
    <section id="current-tools" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Tools You're Probably Using</h2>
      <p class="text-gray-700 mb-6">
        ${industry.name} businesses typically use some combination of these tools:
      </p>
      <div class="flex flex-wrap gap-2">
        ${industry.tools.map(tool => `
        <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">${tool}</span>`).join('')}
      </div>
      <p class="text-gray-600 mt-4 text-sm">
        The problem isn't any individual tool - it's that they don't talk to each other.
      </p>
    </section>

    <!-- Solution -->
    <section id="solution" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">The Unified Platform Approach</h2>
      <p class="text-gray-700 mb-6">
        Instead of switching tools (which never works), the solution is to build a custom operations
        layer that connects your existing tools and fills the gaps between them.
      </p>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-green-50 rounded-lg">
          <div class="text-3xl font-bold text-green-600 mb-2">60-70%</div>
          <div class="text-sm text-gray-600">Tool Consolidation</div>
        </div>
        <div class="text-center p-6 bg-green-50 rounded-lg">
          <div class="text-3xl font-bold text-green-600 mb-2">${industry.metrics.hoursLostWeekly}+</div>
          <div class="text-sm text-gray-600">Hours Saved Weekly</div>
        </div>
        <div class="text-center p-6 bg-green-50 rounded-lg">
          <div class="text-3xl font-bold text-green-600 mb-2">6-12 mo</div>
          <div class="text-sm text-gray-600">Typical ROI</div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div class="space-y-6">
        ${industry.faqs.map(faq => `
        <div class="border-b border-gray-200 pb-6">
          <h3 class="font-semibold text-lg mb-2">${faq.question}</h3>
          <p class="text-gray-700">${faq.answer}</p>
        </div>`).join('')}
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gray-900 text-white p-8 rounded-2xl text-center">
      <h2 class="text-2xl font-bold mb-4">Ready to Consolidate Your ${industry.name} Tech Stack?</h2>
      <p class="text-gray-300 mb-6 max-w-xl mx-auto">
        We build custom operations platforms for ${industry.name.toLowerCase()} businesses.
        Let's discuss how to eliminate your tool sprawl.
      </p>
      <a href="/contact" class="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Book a Discovery Call
      </a>
    </section>

    <!-- Related -->
    <section class="mt-12">
      <h2 class="text-xl font-bold mb-6">Related Guides</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <a href="/automate/invoice-processing/" class="block p-4 border border-gray-200 rounded-lg hover:border-p0stman-blue transition-colors">
          <h3 class="font-semibold">Invoice Processing Automation</h3>
          <p class="text-sm text-gray-600">Automate AP with AI extraction and approval routing</p>
        </a>
        <a href="/automate/employee-onboarding/" class="block p-4 border border-gray-200 rounded-lg hover:border-p0stman-blue transition-colors">
          <h3 class="font-semibold">Employee Onboarding Automation</h3>
          <p class="text-sm text-gray-600">Provision accounts across all systems automatically</p>
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="border-t border-gray-200 mt-16">
    <div class="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
      <p>&copy; ${new Date().getFullYear()} POSTMAN. AI-native product studio.</p>
    </div>
  </footer>
</body>
</html>`;

  return html;
}

// Generate Integration Pages
function generateIntegrationPage(integration) {
  const title = `Connect ${integration.toolA.name} to ${integration.toolB.name}: Integration Guide (2026)`;
  const description = `Learn how to integrate ${integration.toolA.name} with ${integration.toolB.name}. ${integration.useCase}`;
  const slug = `${integration.toolA.slug}-${integration.toolB.slug}`;
  const url = `https://p0stman.com/connect/${slug}/`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${url}">

  <!-- Open Graph -->
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="POSTMAN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'p0stman-blue': '#2563eb',
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
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "${title}",
      "description": "${description}",
      "author": {
        "@type": "Person",
        "name": "Paul Gosnell"
      },
      "publisher": {
        "@type": "Organization",
        "name": "POSTMAN",
        "url": "https://p0stman.com"
      },
      "datePublished": "${currentDate}",
      "dateModified": "${currentDate}"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://p0stman.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Integrations",
          "item": "https://p0stman.com/connect/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${integration.toolA.name} + ${integration.toolB.name}",
          "item": "${url}"
        }
      ]
    }
  ]
}
  </script>
</head>
<body class="bg-white text-gray-900">
  <!-- Header -->
  <header class="border-b border-gray-200">
    <nav class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="text-xl font-bold">POSTMAN</a>
      <div class="flex gap-6 text-sm">
        <a href="/case-studies" class="text-gray-600 hover:text-gray-900">Case Studies</a>
        <a href="/services" class="text-gray-600 hover:text-gray-900">Services</a>
        <a href="/contact" class="text-gray-600 hover:text-gray-900">Contact</a>
      </div>
    </nav>
  </header>

  <main class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-8">
      <a href="/" class="hover:text-gray-900">Home</a>
      <span class="mx-2">/</span>
      <a href="/connect/" class="hover:text-gray-900">Integrations</a>
      <span class="mx-2">/</span>
      <span class="text-gray-900">${integration.toolA.name} + ${integration.toolB.name}</span>
    </nav>

    <!-- Answer Box -->
    <div class="bg-blue-50 border-l-4 border-p0stman-blue p-6 mb-8 rounded-r-lg">
      <h1 class="text-2xl md:text-3xl font-bold mb-4">
        Connect ${integration.toolA.name} to ${integration.toolB.name}
      </h1>
      <p class="text-lg text-gray-700 mb-4">
        ${integration.useCase}
      </p>
      <div class="flex items-center gap-4 text-sm text-gray-600">
        <span class="px-2 py-1 bg-white rounded">${integration.toolA.category}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <span class="px-2 py-1 bg-white rounded">${integration.toolB.category}</span>
      </div>
    </div>

    <!-- Integration Visual -->
    <div class="bg-gray-50 p-8 rounded-lg mb-12">
      <div class="flex items-center justify-center gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-white rounded-lg shadow flex items-center justify-center mb-2">
            <span class="text-2xl font-bold text-gray-400">${integration.toolA.name[0]}</span>
          </div>
          <div class="font-semibold">${integration.toolA.name}</div>
          <div class="text-sm text-gray-500">${integration.toolA.category}</div>
        </div>
        <div class="flex-1 max-w-32">
          <div class="border-t-2 border-dashed border-p0stman-blue relative">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
              <svg class="w-6 h-6 text-p0stman-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-white rounded-lg shadow flex items-center justify-center mb-2">
            <span class="text-2xl font-bold text-gray-400">${integration.toolB.name[0]}</span>
          </div>
          <div class="font-semibold">${integration.toolB.name}</div>
          <div class="text-sm text-gray-500">${integration.toolB.category}</div>
        </div>
      </div>
    </div>

    <!-- Benefits -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Why Integrate ${integration.toolA.name} with ${integration.toolB.name}?</h2>
      <div class="grid md:grid-cols-2 gap-4">
        ${integration.benefits.map(benefit => `
        <div class="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
          <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-700">${benefit}</span>
        </div>`).join('')}
      </div>
    </section>

    <!-- How It Works -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">How the Integration Works</h2>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">Triggers (When something happens in ${integration.toolA.name})</h3>
        <div class="space-y-2">
          ${integration.triggers.map(trigger => `
          <div class="flex items-center gap-2 p-3 bg-gray-50 rounded">
            <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>${trigger}</span>
          </div>`).join('')}
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-4">Actions (What happens in ${integration.toolB.name})</h3>
        <div class="space-y-2">
          ${integration.actions.map(action => `
          <div class="flex items-center gap-2 p-3 bg-gray-50 rounded">
            <svg class="w-4 h-4 text-p0stman-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>${action}</span>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Options -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Integration Options</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="p-6 border border-gray-200 rounded-lg">
          <h3 class="font-semibold mb-2">Native Integration</h3>
          <p class="text-sm text-gray-600 mb-4">If ${integration.toolA.name} or ${integration.toolB.name} offers a built-in connection</p>
          <div class="text-green-600 font-semibold">Free - Limited</div>
        </div>
        <div class="p-6 border border-gray-200 rounded-lg">
          <h3 class="font-semibold mb-2">Zapier / Make</h3>
          <p class="text-sm text-gray-600 mb-4">No-code automation with basic triggers and actions</p>
          <div class="text-orange-600 font-semibold">$20-100/mo</div>
        </div>
        <div class="p-6 border border-p0stman-blue rounded-lg bg-blue-50">
          <h3 class="font-semibold mb-2">Custom Integration</h3>
          <p class="text-sm text-gray-600 mb-4">Full API access with custom logic and error handling</p>
          <div class="text-p0stman-blue font-semibold">One-time build</div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gray-900 text-white p-8 rounded-2xl text-center">
      <h2 class="text-2xl font-bold mb-4">Need a Custom ${integration.toolA.name} + ${integration.toolB.name} Integration?</h2>
      <p class="text-gray-300 mb-6 max-w-xl mx-auto">
        We build robust integrations that go beyond what Zapier can do.
        Real-time sync, error handling, and custom business logic.
      </p>
      <a href="/contact" class="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Discuss Your Integration
      </a>
    </section>

    <!-- Related -->
    <section class="mt-12">
      <h2 class="text-xl font-bold mb-6">Related Integrations</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <a href="/connect/stripe-quickbooks/" class="block p-4 border border-gray-200 rounded-lg hover:border-p0stman-blue transition-colors">
          <h3 class="font-semibold">Stripe + QuickBooks</h3>
          <p class="text-sm text-gray-600">Sync payments and fees to accounting</p>
        </a>
        <a href="/connect/salesforce-slack/" class="block p-4 border border-gray-200 rounded-lg hover:border-p0stman-blue transition-colors">
          <h3 class="font-semibold">Salesforce + Slack</h3>
          <p class="text-sm text-gray-600">Real-time deal alerts and collaboration</p>
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="border-t border-gray-200 mt-16">
    <div class="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
      <p>&copy; ${new Date().getFullYear()} POSTMAN. AI-native product studio.</p>
    </div>
  </footer>
</body>
</html>`;

  return html;
}

// Generate Process Automation Pages
function generateProcessPage(process) {
  const title = `Automate ${process.name}: Complete Guide to ${process.name} Automation (2026)`;
  const description = `Learn how to automate ${process.name.toLowerCase()}. ${process.description} Save ${process.metrics.timeSaved} of processing time.`;
  const url = `https://p0stman.com/automate/${process.slug}/`;

  const faqSchema = process.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${url}">

  <!-- Open Graph -->
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="POSTMAN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'p0stman-blue': '#2563eb',
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
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "${title}",
      "description": "${description}",
      "author": {
        "@type": "Person",
        "name": "Paul Gosnell"
      },
      "publisher": {
        "@type": "Organization",
        "name": "POSTMAN",
        "url": "https://p0stman.com"
      },
      "datePublished": "${currentDate}",
      "dateModified": "${currentDate}"
    },
    {
      "@type": "FAQPage",
      "mainEntity": ${JSON.stringify(faqSchema, null, 2).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')}
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://p0stman.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Automation",
          "item": "https://p0stman.com/automate/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${process.name}",
          "item": "${url}"
        }
      ]
    }
  ]
}
  </script>
</head>
<body class="bg-white text-gray-900">
  <!-- Header -->
  <header class="border-b border-gray-200">
    <nav class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="text-xl font-bold">POSTMAN</a>
      <div class="flex gap-6 text-sm">
        <a href="/case-studies" class="text-gray-600 hover:text-gray-900">Case Studies</a>
        <a href="/services" class="text-gray-600 hover:text-gray-900">Services</a>
        <a href="/contact" class="text-gray-600 hover:text-gray-900">Contact</a>
      </div>
    </nav>
  </header>

  <main class="max-w-4xl mx-auto px-4 py-12">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-8">
      <a href="/" class="hover:text-gray-900">Home</a>
      <span class="mx-2">/</span>
      <a href="/automate/" class="hover:text-gray-900">Automation</a>
      <span class="mx-2">/</span>
      <span class="text-gray-900">${process.name}</span>
    </nav>

    <!-- Answer Box -->
    <div class="bg-blue-50 border-l-4 border-p0stman-blue p-6 mb-8 rounded-r-lg">
      <h1 class="text-2xl md:text-3xl font-bold mb-4">Automate ${process.name}</h1>
      <p class="text-lg text-gray-700 mb-4">
        ${process.description}
      </p>
      <p class="text-gray-700">
        ${process.solution}
      </p>
    </div>

    <!-- Metrics -->
    <div class="grid md:grid-cols-3 gap-6 mb-12">
      <div class="text-center p-6 bg-green-50 rounded-lg">
        <div class="text-3xl font-bold text-green-600 mb-2">${process.metrics.timeSaved}</div>
        <div class="text-sm text-gray-600">Time Saved</div>
      </div>
      <div class="text-center p-6 bg-green-50 rounded-lg">
        <div class="text-3xl font-bold text-green-600 mb-2">${process.metrics.errorReduction}</div>
        <div class="text-sm text-gray-600">Error Reduction</div>
      </div>
      <div class="text-center p-6 bg-green-50 rounded-lg">
        <div class="text-3xl font-bold text-green-600 mb-2">${process.metrics.costSavings || process.metrics.processingDays || process.metrics.autoResolve || process.metrics.conversionIncrease || process.metrics.daysSaved || process.metrics.turnaroundDays}</div>
        <div class="text-sm text-gray-600">${process.metrics.costSavings ? 'Cost Savings' : process.metrics.processingDays ? 'Processing Time' : process.metrics.autoResolve ? 'Auto-Resolved' : process.metrics.conversionIncrease ? 'Conversion Increase' : process.metrics.daysSaved ? 'Days Saved' : 'Turnaround Time'}</div>
      </div>
    </div>

    <!-- Pain Points -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">The Problem with Manual ${process.name}</h2>
      <div class="grid gap-4">
        ${process.painPoints.map(point => `
        <div class="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
          <svg class="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span class="text-gray-700">${point}</span>
        </div>`).join('')}
      </div>
    </section>

    <!-- Solution -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">The Automated Solution</h2>
      <div class="p-6 bg-gray-50 rounded-lg">
        <p class="text-gray-700 text-lg">
          ${process.solution}
        </p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div class="space-y-6">
        ${process.faqs.map(faq => `
        <div class="border-b border-gray-200 pb-6">
          <h3 class="font-semibold text-lg mb-2">${faq.question}</h3>
          <p class="text-gray-700">${faq.answer}</p>
        </div>`).join('')}
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gray-900 text-white p-8 rounded-2xl text-center">
      <h2 class="text-2xl font-bold mb-4">Ready to Automate ${process.name}?</h2>
      <p class="text-gray-300 mb-6 max-w-xl mx-auto">
        We build custom automation solutions that fit your existing tools and workflows.
        Let's discuss how to save ${process.metrics.timeSaved} of your team's time.
      </p>
      <a href="/contact" class="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Book a Discovery Call
      </a>
    </section>

    <!-- Related -->
    <section class="mt-12">
      <h2 class="text-xl font-bold mb-6">Related Automation Guides</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <a href="/automate/invoice-processing/" class="block p-4 border border-gray-200 rounded-lg hover:border-p0stman-blue transition-colors">
          <h3 class="font-semibold">Invoice Processing</h3>
          <p class="text-sm text-gray-600">AI-powered AP automation</p>
        </a>
        <a href="/automate/lead-qualification/" class="block p-4 border border-gray-200 rounded-lg hover:border-p0stman-blue transition-colors">
          <h3 class="font-semibold">Lead Qualification</h3>
          <p class="text-sm text-gray-600">AI scoring and routing</p>
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="border-t border-gray-200 mt-16">
    <div class="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
      <p>&copy; ${new Date().getFullYear()} POSTMAN. AI-native product studio.</p>
    </div>
  </footer>
</body>
</html>`;

  return html;
}

// Generate sitemaps
function generateSitemaps() {
  const baseUrl = 'https://p0stman.com';

  // Industries sitemap
  const industriesUrls = data.industries.map(industry =>
    `  <url>\n    <loc>${baseUrl}/industries/${industry.slug}-operations-automation/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  ).join('\n');

  const industriesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${industriesUrls}
</urlset>`;

  // Integrations sitemap
  const integrationsUrls = data.integrations.map(int =>
    `  <url>\n    <loc>${baseUrl}/connect/${int.toolA.slug}-${int.toolB.slug}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
  ).join('\n');

  const integrationsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${integrationsUrls}
</urlset>`;

  // Processes sitemap
  const processesUrls = data.processes.map(process =>
    `  <url>\n    <loc>${baseUrl}/automate/${process.slug}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  ).join('\n');

  const processesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${processesUrls}
</urlset>`;

  return { industriesSitemap, integrationsSitemap, processesSitemap };
}

// Main execution
function main() {
  console.log('Generating ICP 1 (Ops Transformation) pages...\n');

  const publicDir = path.join(__dirname, '..', 'public');
  let industriesCount = 0;
  let integrationsCount = 0;
  let processesCount = 0;

  // Generate industry pages
  console.log('Generating industry operations pages...');
  data.industries.forEach(industry => {
    const dir = path.join(publicDir, 'industries', `${industry.slug}-operations-automation`);
    ensureDir(dir);
    const html = generateIndustryPage(industry);
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`  - ${industry.name} operations`);
    industriesCount++;
  });

  // Generate integration pages
  console.log('\nGenerating tool integration pages...');
  data.integrations.forEach(integration => {
    const slug = `${integration.toolA.slug}-${integration.toolB.slug}`;
    const dir = path.join(publicDir, 'connect', slug);
    ensureDir(dir);
    const html = generateIntegrationPage(integration);
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`  - ${integration.toolA.name} + ${integration.toolB.name}`);
    integrationsCount++;
  });

  // Generate process pages
  console.log('\nGenerating process automation pages...');
  data.processes.forEach(process => {
    const dir = path.join(publicDir, 'automate', process.slug);
    ensureDir(dir);
    const html = generateProcessPage(process);
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`  - ${process.name}`);
    processesCount++;
  });

  // Generate sitemaps
  console.log('\nGenerating sitemaps...');
  const { industriesSitemap, integrationsSitemap, processesSitemap } = generateSitemaps();

  fs.writeFileSync(path.join(publicDir, 'ops-industries-sitemap.xml'), industriesSitemap);
  fs.writeFileSync(path.join(publicDir, 'ops-integrations-sitemap.xml'), integrationsSitemap);
  fs.writeFileSync(path.join(publicDir, 'ops-processes-sitemap.xml'), processesSitemap);

  console.log('\n========================================');
  console.log(`Generated ${industriesCount + integrationsCount + processesCount} pages total`);
  console.log(`   - ${industriesCount} industry operations pages`);
  console.log(`   - ${integrationsCount} tool integration pages`);
  console.log(`   - ${processesCount} process automation pages`);
  console.log('\nSitemaps created:');
  console.log('   - ops-industries-sitemap.xml');
  console.log('   - ops-integrations-sitemap.xml');
  console.log('   - ops-processes-sitemap.xml');
  console.log('========================================');
}

main();
