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
const OUTPUT_DIR = path.join(__dirname, '../public/locations');

console.log('Starting P0STMAN Location Pages Generator\n');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log('[OK] Created output directory:', OUTPUT_DIR);
}

// Read templates
console.log('Reading templates...');
const headerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'footer.html'), 'utf8');
const bodyTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'location-body.html'), 'utf8');
const hubTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'location-hub.html'), 'utf8');
console.log('Templates loaded\n');

// Read locations data
console.log('Reading locations data...');
const locations = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'locations.json'), 'utf8'));
console.log(`Loaded ${locations.length} locations\n`);

// Helper function to generate schema markup
function generateSchemaMarkup(location) {
  const faqQuestions = [
    {
      question: `How much does an AI voice agent cost in ${location.name}?`,
      answer: `Custom AI voice agents for ${location.name} start at $5,000 for a 6-day MVP. This includes discovery, design, development, integration with your existing systems, local compliance configuration, and deployment. Monthly costs range from $100-500 depending on call volume (ElevenLabs API fees). We provide transparent pricing upfront - no hidden fees.`
    },
    {
      question: `Do you understand ${location.name} regulations and compliance?`,
      answer: `Yes. We build AI solutions with local compliance baked in from day one. This includes data sovereignty requirements, privacy laws, industry regulations, and business hour norms specific to ${location.name}. We'll assess your compliance needs during the discovery call and ensure your AI agent meets all local requirements.`
    },
    {
      question: 'Can the AI handle local language and dialect requirements?',
      answer: `Absolutely. We configure AI voice agents with local language support, dialect variations, and cultural context specific to ${location.name}. This includes accent recognition, local terminology, and culturally appropriate responses. We use ElevenLabs' advanced multilingual capabilities for natural-sounding local voices.`
    },
    {
      question: 'How long does it take to build an AI voice agent?',
      answer: `We deliver working MVPs in 6 days. Day 1-2: Discovery and design with local market configuration. Day 3-5: Development and integration. Day 6: Testing and deployment. More complex integrations with local systems may take 2-3 weeks.`
    },
    {
      question: 'Can you integrate with local payment systems and business tools?',
      answer: `Yes. We integrate with local payment gateways, CRMs, scheduling systems, and business tools commonly used in ${location.name}. This includes region-specific platforms, government systems, and local digital infrastructure. If it has an API or webhook, we can connect it.`
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `AI Voice Agents in ${location.name}`,
    'description': location.metaDescription,
    'provider': {
      '@type': 'Organization',
      'name': 'P0STMAN',
      'url': BASE_URL
    },
    'areaServed': location.name,
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

// Helper function to generate benefits HTML
function generateBenefitsHTML(benefits) {
  return benefits.map(benefit => `
        <div class="bg-white p-8 rounded-lg border border-gray-100">
          <h3 class="text-xl font-light mb-3 text-gray-900">${benefit.title}</h3>
          <p class="text-gray-600 font-light">${benefit.description}</p>
        </div>
  `).join('\n');
}

// Generate individual location pages
console.log('Generating location pages...\n');
locations.forEach((location, index) => {
  const schemaMarkup = generateSchemaMarkup(location);
  const painPointsHTML = generatePainPointsHTML(location.painPoints);
  const benefitsHTML = generateBenefitsHTML(location.benefits);

  // Replace all placeholders
  let html = headerTemplate
    .replace(/{{META_TITLE}}/g, location.metaTitle)
    .replace(/{{META_DESCRIPTION}}/g, location.metaDescription)
    .replace(/{{CANONICAL_URL}}/g, `${BASE_URL}/locations/${location.slug}/`)
    .replace(/{{SCHEMA_MARKUP}}/g, schemaMarkup);

  html += bodyTemplate
    .replace(/{{HERO_H1}}/g, location.heroH1)
    .replace(/{{HERO_SUBTEXT}}/g, location.heroSubtext)
    .replace(/{{LOCATION_NAME}}/g, location.name)
    .replace(/{{PAIN_POINTS}}/g, painPointsHTML)
    .replace(/{{BENEFITS}}/g, benefitsHTML)
    .replace(/{{STATS}}/g, location.stats)
    .replace(/{{LOCAL_PRESENCE}}/g, location.localPresence)
    .replace(/{{CTA_TEXT}}/g, location.cta);

  html += footerTemplate;

  // Write file - create subdirectory for each location
  const locationDir = path.join(OUTPUT_DIR, location.slug);
  if (!fs.existsSync(locationDir)) {
    fs.mkdirSync(locationDir, { recursive: true });
  }
  const filepath = path.join(locationDir, 'index.html');
  fs.writeFileSync(filepath, html);

  console.log(`  ${index + 1}/${locations.length} [OK] ${location.name} -> ${location.slug}/index.html`);
});

console.log('\nAll location pages generated!\n');

// Generate hub page
console.log('Generating hub page...\n');

// Group locations by region
const regionalLocations = locations.reduce((acc, location) => {
  if (!acc[location.region]) {
    acc[location.region] = [];
  }
  acc[location.region].push(location);
  return acc;
}, {});

// Generate location cards HTML grouped by region
const regionsHTML = Object.keys(regionalLocations).map(region => {
  const regionLocations = regionalLocations[region];

  const cardsHTML = regionLocations.map(location => `
          <a href="/locations/${location.slug}/" class="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition block group">
            <h3 class="text-xl font-light mb-2 text-gray-900 group-hover:text-blue-600 transition">${location.name}</h3>
            <p class="text-gray-600 text-sm font-light">${location.heroSubtext.substring(0, 100)}...</p>
          </a>
  `).join('\n');

  return `
      <!-- ${region} -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">${region}</h2>
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
  "name": "AI Voice Agents by Location",
  "description": "Location-specific AI voice solutions with local compliance and language support.",
  "url": "${BASE_URL}/locations/",
  "provider": {
    "@type": "Organization",
    "name": "P0STMAN",
    "url": "${BASE_URL}"
  }
}
</script>`;

let hubHTML = headerTemplate
  .replace(/{{META_TITLE}}/g, 'AI Voice Agents by Location | P0STMAN')
  .replace(/{{META_DESCRIPTION}}/g, 'Location-specific AI voice solutions for UAE, UK, USA, Saudi Arabia, and beyond. Local compliance, language support, and cultural intelligence. Built in 6 days.')
  .replace(/{{CANONICAL_URL}}/g, `${BASE_URL}/locations/`)
  .replace(/{{SCHEMA_MARKUP}}/g, hubSchemaMarkup);

hubHTML += hubTemplate.replace(/{{LOCATION_REGIONS}}/g, regionsHTML);
hubHTML += footerTemplate;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), hubHTML);
console.log('[OK] Hub page generated -> index.html\n');

// Generate sitemap
console.log('Generating sitemap...\n');

const today = new Date().toISOString().split('T')[0];

let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Location Hub Page -->
  <url>
    <loc>${BASE_URL}/locations/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Location Pages -->
`;

locations.forEach(location => {
  sitemapXML += `  <url>
    <loc>${BASE_URL}/locations/${location.slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemapXML += `</urlset>
`;

const sitemapPath = path.join(__dirname, '../public/locations-sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXML);
console.log('[OK] Sitemap generated -> locations-sitemap.xml\n');

// Summary
console.log('═══════════════════════════════════════════════════════\n');
console.log('GENERATION COMPLETE!\n');
console.log(`Generated: ${locations.length} location pages`);
console.log(`Generated: 1 hub page`);
console.log(`Generated: 1 sitemap`);
console.log(`Output directory: ${OUTPUT_DIR}\n`);
console.log('Next steps:');
console.log('  1. Review generated files in public/locations/');
console.log('  2. Test pages locally');
console.log('  3. Merge locations-sitemap.xml into main sitemap.xml');
console.log('  4. Deploy to production\n');
console.log('═══════════════════════════════════════════════════════\n');
