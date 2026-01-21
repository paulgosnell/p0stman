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
const OUTPUT_DIR = path.join(__dirname, '../public/compare');

console.log('Starting P0STMAN Comparison Pages Generator\n');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log('[OK] Created output directory:', OUTPUT_DIR);
}

// Read templates
console.log('Reading templates...');
const headerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'footer.html'), 'utf8');
const bodyTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'comparison-body.html'), 'utf8');
const hubTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'comparison-hub.html'), 'utf8');
console.log('Templates loaded\n');

// Read comparisons data
console.log('Reading comparisons data...');
const comparisons = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'comparisons.json'), 'utf8'));
console.log('Loaded ' + comparisons.length + ' comparisons\n');

// Read case studies data
console.log('Reading case studies data...');
const caseStudies = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'case-study-taxonomy.json'), 'utf8'));
let conversionTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'conversion-components.html'), 'utf8');
conversionTemplate = conversionTemplate.replace('{{CASE_STUDIES_JSON}}', JSON.stringify(caseStudies, null, 2));
console.log('Loaded ' + caseStudies.length + ' case studies\n');

// Helper function to generate schema markup
function generateSchemaMarkup(comparison) {
  const faqQuestions = comparison.faqs.map(faq => {
    return {
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    };
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqQuestions
  };

  const schemaJSON = JSON.stringify(faqSchema, null, 2);
  return '<script type="application/ld+json">\n' + schemaJSON + '\n</script>';
}

// Helper function to generate comparison table rows
function generateComparisonRows(comparisonTable) {
  const rows = comparisonTable.rows.map(row => {
    const competitorClass = row.winner === 'competitor' ? 'bg-green-50 font-semibold' : '';
    const usClass = row.winner === 'us' ? 'bg-green-50 font-semibold' : '';

    return '\n            <tr class="border-b border-gray-100">' +
      '\n              <td class="p-4 font-light text-gray-900">' + row.feature + '</td>' +
      '\n              <td class="p-4 text-center ' + competitorClass + '">' + row.competitor + '</td>' +
      '\n              <td class="p-4 text-center ' + usClass + '">' + row.us + '</td>' +
      '\n            </tr>';
  });
  return rows.join('\n');
}

// Helper function to generate key differentiators HTML
function generateDifferentiatorsHTML(differentiators) {
  const items = differentiators.map(diff => {
    return '\n        <div class="bg-gray-50 p-8 rounded-lg">' +
      '\n          <h3 class="text-xl font-light mb-3 text-gray-900">' + diff.title + '</h3>' +
      '\n          <p class="text-gray-600 font-light">' + diff.description + '</p>' +
      '\n        </div>';
  });
  return items.join('\n');
}

// Helper function to generate FAQ HTML
function generateFAQHTML(faqs) {
  const items = faqs.map(faq => {
    return '\n        <details class="bg-gray-50 p-6 rounded-lg border border-gray-100">' +
      '\n          <summary class="text-xl font-light cursor-pointer hover:text-blue-600">' +
      '\n            ' + faq.question +
      '\n          </summary>' +
      '\n          <p class="mt-4 text-gray-600 font-light">' +
      '\n            ' + faq.answer +
      '\n          </p>' +
      '\n        </details>';
  });
  return items.join('\n');
}

// Comparison to tech mapping
const comparisonTechMapping = {
  'vapi-alternative': 'custom',
  'voiceflow-alternative': 'custom',
  'elevenlabs-vs-livekit': 'elevenlabs',
  'ai-agents-vs-chatbots': null,
  'build-vs-buy-ai-agents': null,
  'agency-vs-freelancer-ai': null,
  'chatgpt-integration-vs-custom': null,
  'in-house-vs-outsource-ai': null,
  'ai-voice-agents-vs-call-centers': 'elevenlabs'
};

// Helper function to generate conversion sections
function generateConversionSections(comparison) {
  const tech = comparisonTechMapping[comparison.slug];
  let techProofSection = '';

  if (tech) {
    techProofSection = '\n<!-- Tech Social Proof -->\n' +
      '<section class="tech-proof py-12 px-6 bg-blue-50" data-tech="' + tech + '">\n' +
      '  <div class="max-w-4xl mx-auto">\n' +
      '    <div class="flex items-start gap-6">\n' +
      '      <div class="flex-shrink-0">\n' +
      '        <svg class="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">\n' +
      '          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>\n' +
      '          <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>\n' +
      '        </svg>\n' +
      '      </div>\n' +
      '      <div>\n' +
      '        <h3 class="text-xl font-light mb-2 text-gray-900">We\'ve Built With <span class="tech-name"></span></h3>\n' +
      '        <p class="text-gray-700 font-light mb-3">\n' +
      '          P0STMAN has hands-on experience building production AI voice agents with <span class="tech-name-lower"></span>.\n' +
      '          <span class="tech-details"></span>\n' +
      '        </p>\n' +
      '        <a href="/case-studies" class="text-blue-600 font-light hover:text-blue-700">\n' +
      '          View our AI projects →\n' +
      '        </a>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</section>\n\n';
  }

  const caseStudySection = '\n<!-- Case Studies -->\n' +
    '<section class="case-study-grid py-16 md:py-24 px-6 bg-gray-50" data-industries="ai-agents,saas">\n' +
    '  <div class="max-w-6xl mx-auto">\n' +
    '    <div class="text-center mb-12">\n' +
    '      <h2 class="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">AI Projects We\'ve Built</h2>\n' +
    '      <p class="text-xl text-gray-600 font-light">See how we\'ve helped companies implement AI solutions</p>\n' +
    '    </div>\n' +
    '    <div id="case-studies-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>\n' +
    '  </div>\n' +
    '</section>\n\n';

  const ctaSection = '<section class="industry-cta py-16 md:py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" data-industry="Your Business" data-solution="AI voice agents">\n' +
    '  <div class="max-w-4xl mx-auto text-center">\n' +
    '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-6">\n' +
    '      Need Help Choosing?\n' +
    '    </h2>\n' +
    '    <p class="text-xl md:text-2xl mb-8 text-gray-300 font-light">\n' +
    '      We\'ve built AI voice agents across multiple platforms. Let us help you make the right choice.\n' +
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

  return techProofSection + caseStudySection + ctaSection;
}

// Generate individual comparison pages
console.log('Generating comparison pages...\n');
comparisons.forEach((comparison, index) => {
  const schemaMarkup = generateSchemaMarkup(comparison);
  const comparisonRows = generateComparisonRows(comparison.comparisonTable);
  const differentiatorsHTML = generateDifferentiatorsHTML(comparison.keyDifferentiators);
  const faqHTML = generateFAQHTML(comparison.faqs);
  const conversionSections = generateConversionSections(comparison);

  // Replace all placeholders
  let html = headerTemplate
    .replace(/{{META_TITLE}}/g, comparison.metaTitle)
    .replace(/{{META_DESCRIPTION}}/g, comparison.metaDescription)
    .replace(/{{CANONICAL_URL}}/g, BASE_URL + '/compare/' + comparison.slug + '/')
    .replace(/{{SCHEMA_MARKUP}}/g, schemaMarkup);

  html += bodyTemplate
    .replace(/{{HERO_H1}}/g, comparison.heroH1)
    .replace(/{{HERO_SUBTEXT}}/g, comparison.heroSubtext)
    .replace(/{{COMPETITOR_NAME}}/g, comparison.comparisonTable.competitor)
    .replace(/{{OUR_NAME}}/g, comparison.comparisonTable.us)
    .replace(/{{COMPARISON_ROWS}}/g, comparisonRows)
    .replace(/{{WHEN_TO_USE_COMPETITOR}}/g, comparison.whenToUseCompetitor)
    .replace(/{{WHEN_TO_USE_US}}/g, comparison.whenToUseUs)
    .replace(/{{KEY_DIFFERENTIATORS}}/g, differentiatorsHTML)
    .replace(/{{FAQ_ITEMS}}/g, faqHTML);

  // Add conversion sections
  html += conversionSections;

  // Add conversion template with JavaScript
  html += conversionTemplate;

  html += footerTemplate;

  // Write file - create subdirectory for each comparison
  const comparisonDir = path.join(OUTPUT_DIR, comparison.slug);
  if (!fs.existsSync(comparisonDir)) {
    fs.mkdirSync(comparisonDir, { recursive: true });
  }
  const filepath = path.join(comparisonDir, 'index.html');
  fs.writeFileSync(filepath, html);

  console.log('  ' + (index + 1) + '/' + comparisons.length + ' [OK] ' + comparison.name + ' -> ' + comparison.slug + '/index.html');
});

console.log('\nAll comparison pages generated!\n');

// Generate hub page
console.log('Generating hub page...\n');

// Group comparisons by category
const categorizedComparisons = comparisons.reduce((acc, comparison) => {
  if (!acc[comparison.category]) {
    acc[comparison.category] = [];
  }
  acc[comparison.category].push(comparison);
  return acc;
}, {});

// Generate comparison cards HTML grouped by category
const categoriesHTML = Object.keys(categorizedComparisons).map(category => {
  const categoryComparisons = categorizedComparisons[category];

  const cards = categoryComparisons.map(comparison => {
    const preview = comparison.heroSubtext.substring(0, 100);
    return '\n          <a href="/compare/' + comparison.slug + '/" class="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition block group">' +
      '\n            <h3 class="text-xl font-light mb-2 text-gray-900 group-hover:text-blue-600 transition">' + comparison.name + '</h3>' +
      '\n            <p class="text-gray-600 text-sm font-light">' + preview + '...</p>' +
      '\n          </a>';
  });
  const cardsHTML = cards.join('\n');

  return '\n      <!-- ' + category + ' -->' +
    '\n      <div class="mb-12">' +
    '\n        <h2 class="text-2xl font-bold mb-6 text-gray-900">' + category + '</h2>' +
    '\n        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">' +
    cardsHTML +
    '\n        </div>' +
    '\n      </div>';
}).join('\n');

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "AI Voice Agent Comparisons",
  "description": "Honest comparisons of AI voice platforms, build vs buy decisions, and alternatives.",
  "url": BASE_URL + '/compare/',
  "provider": {
    "@type": "Organization",
    "name": "POSTMAN",
    "url": BASE_URL
  }
};

const hubSchemaMarkup = '<script type="application/ld+json">\n' + JSON.stringify(hubSchema, null, 2) + '\n</script>';

let hubHTML = headerTemplate
  .replace(/{{META_TITLE}}/g, 'AI Voice Agent Comparisons | P0STMAN')
  .replace(/{{META_DESCRIPTION}}/g, 'Honest AI voice agent comparisons. Platform alternatives (Vapi, Voiceflow), build vs buy decisions, and agency comparisons. Make the right choice.')
  .replace(/{{CANONICAL_URL}}/g, BASE_URL + '/compare/')
  .replace(/{{SCHEMA_MARKUP}}/g, hubSchemaMarkup);

hubHTML += hubTemplate.replace(/{{COMPARISON_CATEGORIES}}/g, categoriesHTML);
hubHTML += footerTemplate;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), hubHTML);
console.log('[OK] Hub page generated -> index.html\n');

// Generate sitemap
console.log('Generating sitemap...\n');

const today = new Date().toISOString().split('T')[0];

let sitemapXML = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  '  <!-- Comparison Hub Page -->\n' +
  '  <url>\n' +
  '    <loc>' + BASE_URL + '/compare/</loc>\n' +
  '    <lastmod>' + today + '</lastmod>\n' +
  '    <changefreq>weekly</changefreq>\n' +
  '    <priority>0.9</priority>\n' +
  '  </url>\n\n' +
  '  <!-- Comparison Pages -->\n';

comparisons.forEach(comparison => {
  sitemapXML += '  <url>\n' +
    '    <loc>' + BASE_URL + '/compare/' + comparison.slug + '/</loc>\n' +
    '    <lastmod>' + today + '</lastmod>\n' +
    '    <changefreq>monthly</changefreq>\n' +
    '    <priority>0.8</priority>\n' +
    '  </url>\n';
});

sitemapXML += '</urlset>\n';

const sitemapPath = path.join(__dirname, '../public/comparisons-sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXML);
console.log('[OK] Sitemap generated -> comparisons-sitemap.xml\n');

// Summary
console.log('═══════════════════════════════════════════════════════\n');
console.log('GENERATION COMPLETE!\n');
console.log('Generated: ' + comparisons.length + ' comparison pages');
console.log('Generated: 1 hub page');
console.log('Generated: 1 sitemap');
console.log('Output directory: ' + OUTPUT_DIR + '\n');
console.log('Next steps:');
console.log('  1. Review generated files in public/compare/');
console.log('  2. Test pages locally');
console.log('  3. Merge comparisons-sitemap.xml into main sitemap.xml');
console.log('  4. Deploy to production\n');
console.log('═══════════════════════════════════════════════════════\n');
