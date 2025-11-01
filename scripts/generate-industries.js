#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'https://p0stman.com';
const TEMPLATES_DIR = path.join(__dirname, '../templates');
const DATA_DIR = path.join(__dirname, '../data');
const OUTPUT_DIR = path.join(__dirname, '../public/industries');

console.log('Starting P0STMAN Industry Pages Generator\n');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log('✅ Created output directory:', OUTPUT_DIR);
}

// Read templates
console.log('Reading templates...');
const headerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'footer.html'), 'utf8');
const bodyTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'industry-body.html'), 'utf8');
const hubTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'hub-page.html'), 'utf8');
let conversionTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'conversion-components.html'), 'utf8');
console.log('Templates loaded\n');

// Read industries data
console.log('Reading industries data...');
const industries = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'industries.json'), 'utf8'));
console.log(`Loaded ${industries.length} industries\n`);

// Read case studies data
console.log('Reading case studies data...');
const caseStudies = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'case-study-taxonomy.json'), 'utf8'));
conversionTemplate = conversionTemplate.replace('{{CASE_STUDIES_JSON}}', JSON.stringify(caseStudies, null, 2));
console.log(`Loaded ${caseStudies.length} case studies\n`);

// Helper function to generate schema markup
function generateSchemaMarkup(industry) {
  const faqQuestions = [
    {
      question: `How much does an AI voice agent cost for ${industry.name}?`,
      answer: `Custom AI voice agents for ${industry.name} start at $5,000 for a 6-day MVP. This includes discovery, design, development, integration with your existing systems, and deployment. Monthly costs range from $100-500 depending on call volume (ElevenLabs API fees). We provide transparent pricing upfront - no hidden fees.`
    },
    {
      question: 'How long does it take to build an AI voice agent?',
      answer: `We deliver working MVPs in 6 days. Day 1-2: Discovery and design. Day 3-5: Development and integration. Day 6: Testing and deployment. More complex ${industry.name} integrations (multiple systems, advanced workflows) may take 2-3 weeks.`
    },
    {
      question: 'What AI platforms do you use?',
      answer: `We primarily use ElevenLabs for voice AI (best quality, lowest latency), OpenAI GPT-4 for intelligence, and custom integrations with your ${industry.name} software. We choose technologies based on your specific needs - not vendor lock-in.`
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes. We offer monthly retainer support ($2K/month) for updates, improvements, and monitoring. Or pay-as-you-go for specific enhancements. All projects include 30 days of bug fixes and adjustments after launch.'
    },
    {
      question: `Can AI voice agents integrate with existing ${industry.name} systems?`,
      answer: `Absolutely. We integrate with practice management software, CRMs, scheduling systems, payment processors, and industry-specific tools used in ${industry.name}. If it has an API or webhook, we can connect it. We'll assess your tech stack during the discovery call.`
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `AI Voice Agents for ${industry.name}`,
    'description': industry.metaDescription,
    'provider': {
      '@type': 'Organization',
      'name': 'P0STMAN',
      'url': BASE_URL
    },
    'areaServed': 'United States',
    'serviceType': 'AI Voice Agent Development',
    'offers': {
      '@type': 'Offer',
      'price': '5000',
      'priceCurrency': 'USD',
      'description': '6-day MVP development'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqQuestions.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return `<script type="application/ld+json">
${JSON.stringify(serviceSchema, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
</script>`;
}

// Helper function to generate pain point HTML
function generatePainPointsHTML(painPoints) {
  return painPoints.map(point => `
        <div class="bg-white p-8 rounded-lg border border-gray-100">
          <h3 class="text-xl font-light mb-3 text-gray-900">${point.title}</h3>
          <p class="text-gray-600 font-light">${point.description}</p>
        </div>
  `).join('\n');
}

// Helper function to generate use case HTML
function generateUseCasesHTML(useCases) {
  return useCases.map(useCase => `
        <div class="bg-white p-8 rounded-lg border border-gray-100">
          <h3 class="text-xl font-light mb-3 text-gray-900">${useCase.title}</h3>
          <p class="text-gray-600 font-light">${useCase.description}</p>
        </div>
  `).join('\n');
}

// Industry to case study mapping
const industryMapping = {
  'healthcare': 'healthcare,dental',
  'dental': 'healthcare,dental',
  'legal': 'consulting,saas',
  'accounting': 'fintech,saas',
  'real-estate': 'property-management,saas',
  'ecommerce': 'ecommerce,retail',
  'saas': 'saas,crm',
  'fintech': 'fintech,banking',
  'home-services': 'home-services,beauty',
  'insurance': 'fintech,saas',
  'manufacturing': 'saas,logistics',
  'retail': 'retail,ecommerce',
  'hospitality': 'hospitality,travel',
  'education': 'education,saas',
  'consulting': 'saas,consulting',
  'marketing-agencies': 'saas,media',
  'construction': 'saas,property-management',
  'logistics': 'saas,logistics',
  'automotive': 'retail,saas',
  'fitness': 'fitness,health-tech',
  'beauty': 'beauty,home-services',
  'veterinary': 'healthcare,saas',
  'recruiting': 'hr-tech,saas',
  'non-profits': 'saas,education',
  'event-planning': 'saas,hospitality',
  'property-management': 'property-management,saas',
  'travel': 'travel,hospitality',
  'food-delivery': 'ecommerce,logistics',
  'cleaning-services': 'home-services,saas',
  'photography': 'saas,media'
};

// Helper function to generate conversion sections
function generateConversionSections(industry) {
  const industries = industryMapping[industry.slug] || 'saas';
  const industryName = industry.name;

  const caseStudySection = '\n<!-- Case Studies -->\n' +
    '<section class="case-study-grid py-16 md:py-24 px-6 bg-gray-50" data-industries="' + industries + '">\n' +
    '  <div class="max-w-6xl mx-auto">\n' +
    '    <div class="text-center mb-12">\n' +
    '      <h2 class="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Built for ' + industryName + '</h2>\n' +
    '      <p class="text-xl text-gray-600 font-light">Real projects. Real results. See what we\'ve built.</p>\n' +
    '    </div>\n' +
    '    <div id="case-studies-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>\n' +
    '  </div>\n' +
    '</section>\n\n';

  const ctaSection = '<section class="industry-cta py-16 md:py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" data-industry="' + industryName + '" data-solution="AI voice agents">\n' +
    '  <div class="max-w-4xl mx-auto text-center">\n' +
    '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-6">\n' +
    '      Ready to Transform <span class="industry-name"></span>?\n' +
    '    </h2>\n' +
    '    <p class="text-xl md:text-2xl mb-8 text-gray-300 font-light">\n' +
    '      We\'ve built <span class="solution-name"></span> for <span class="industry-name-lower"></span>. Let us build yours.\n' +
    '    </p>\n' +
    '    <div class="flex flex-col sm:flex-row gap-4 justify-center">\n' +
    '      <a href="/contact" class="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg font-light text-lg hover:bg-gray-100 transition">\n' +
    '        Schedule Free Consultation\n' +
    '      </a>\n' +
    '      <a href="/case-studies" class="inline-block bg-white/10 text-white border border-white/20 px-10 py-4 rounded-lg font-light text-lg hover:bg-white/20 transition">\n' +
    '        View All Projects\n' +
    '      </a>\n' +
    '    </div>\n' +
    '    <p class="mt-6 text-gray-300 font-light">From $5K. 6-day implementation. Proven ROI.</p>\n' +
    '  </div>\n' +
    '</section>\n\n';

  return caseStudySection + ctaSection;
}

// Generate individual industry pages
console.log('Generating industry pages...\n');
industries.forEach((industry, index) => {
  const schemaMarkup = generateSchemaMarkup(industry);
  const painPointsHTML = generatePainPointsHTML(industry.painPoints);
  const useCasesHTML = generateUseCasesHTML(industry.useCases);
  const conversionSections = generateConversionSections(industry);

  // Replace all placeholders
  let html = headerTemplate
    .replace(/{{META_TITLE}}/g, industry.metaTitle)
    .replace(/{{META_DESCRIPTION}}/g, industry.metaDescription)
    .replace(/{{CANONICAL_URL}}/g, `${BASE_URL}/industries/${industry.slug}`)
    .replace(/{{SCHEMA_MARKUP}}/g, schemaMarkup);

  html += bodyTemplate
    .replace(/{{HERO_H1}}/g, industry.heroH1)
    .replace(/{{HERO_SUBTEXT}}/g, industry.heroSubtext)
    .replace(/{{INDUSTRY_NAME}}/g, industry.name)
    .replace(/{{PAIN_POINTS}}/g, painPointsHTML)
    .replace(/{{USE_CASES}}/g, useCasesHTML)
    .replace(/{{STATS}}/g, industry.stats);

  // Add conversion sections
  html += conversionSections;

  // Add conversion template with JavaScript
  html += conversionTemplate;

  html += footerTemplate;

  // Write file - create subdirectory for each industry
  const industryDir = path.join(OUTPUT_DIR, industry.slug);
  if (!fs.existsSync(industryDir)) {
    fs.mkdirSync(industryDir, { recursive: true });
  }
  const filepath = path.join(industryDir, 'index.html');
  fs.writeFileSync(filepath, html);

  console.log(`  ${index + 1}/${industries.length} [OK] ${industry.name} -> ${industry.slug}/index.html`);
});

console.log('\nAll industry pages generated!\n');

// Generate hub page
console.log('Generating hub page...\n');

// Group industries by category
const categorizedIndustries = industries.reduce((acc, industry) => {
  if (!acc[industry.category]) {
    acc[industry.category] = [];
  }
  acc[industry.category].push(industry);
  return acc;
}, {});

// Generate industry cards HTML grouped by category
const categoriesHTML = Object.keys(categorizedIndustries).map(category => {
  const categoryIndustries = categorizedIndustries[category];

  const cardsHTML = categoryIndustries.map(industry => `
          <a href="/industries/${industry.slug}/" class="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition block group">
            <h3 class="text-xl font-light mb-2 text-gray-900 group-hover:text-blue-600 transition">${industry.name}</h3>
            <p class="text-gray-600 text-sm font-light">${industry.heroSubtext.substring(0, 100)}...</p>
          </a>
  `).join('\n');

  return `
      <!-- ${category} -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">${category}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
${cardsHTML}
        </div>
      </div>
  `;
}).join('\n');

const hubSchemaMarkup = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "AI Voice Agents by Industry",
  "description": "Industry-specific AI voice solutions built in 6 days. From $5K.",
  "url": "${BASE_URL}/industries",
  "provider": {
    "@type": "Organization",
    "name": "P0STMAN",
    "url": "${BASE_URL}"
  }
}
</script>`;

let hubHTML = headerTemplate
  .replace(/{{META_TITLE}}/g, 'AI Voice Agents by Industry | P0STMAN')
  .replace(/{{META_DESCRIPTION}}/g, 'Industry-specific AI voice solutions for Healthcare, Legal, Real Estate, SaaS, and 26 more industries. Built in 6 days. From $5K.')
  .replace(/{{CANONICAL_URL}}/g, `${BASE_URL}/industries`)
  .replace(/{{SCHEMA_MARKUP}}/g, hubSchemaMarkup);

hubHTML += hubTemplate.replace(/{{INDUSTRY_CATEGORIES}}/g, categoriesHTML);
hubHTML += footerTemplate;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), hubHTML);
console.log('✅ Hub page generated → index.html\n');

// Generate sitemap
console.log('🗺️  Generating sitemap...\n');

const today = new Date().toISOString().split('T')[0];

let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Industry Hub Page -->
  <url>
    <loc>${BASE_URL}/industries/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Industry Pages -->
`;

industries.forEach(industry => {
  sitemapXML += `  <url>
    <loc>${BASE_URL}/industries/${industry.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemapXML += `</urlset>
`;

const sitemapPath = path.join(__dirname, '../public/industries-sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXML);
console.log('✅ Sitemap generated → industries-sitemap.xml\n');

// Summary
console.log('═══════════════════════════════════════════════════════\n');
console.log('✨ GENERATION COMPLETE!\n');
console.log(`📊 Generated: ${industries.length} industry pages`);
console.log(`🏠 Generated: 1 hub page`);
console.log(`🗺️  Generated: 1 sitemap`);
console.log(`📁 Output directory: ${OUTPUT_DIR}\n`);
console.log('Next steps:');
console.log('  1. Review generated files in public/industries/');
console.log('  2. Test pages locally');
console.log('  3. Merge industries-sitemap.xml into main sitemap.xml');
console.log('  4. Deploy to production\n');
console.log('═══════════════════════════════════════════════════════\n');
