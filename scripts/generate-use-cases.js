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
const OUTPUT_DIR = path.join(__dirname, '../public/use-cases');

console.log('Starting P0STMAN Use Case Pages Generator\n');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log('[OK] Created output directory:', OUTPUT_DIR);
}

// Read templates
console.log('Reading templates...');
const headerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'footer.html'), 'utf8');
const bodyTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'use-case-body.html'), 'utf8');
console.log('Templates loaded\n');

// Read use cases data
console.log('Reading use cases data...');
const useCases = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'use-cases.json'), 'utf8'));
console.log('Loaded ' + useCases.length + ' use cases\n');

// Read case studies data
console.log('Reading case studies data...');
const caseStudies = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'case-study-taxonomy.json'), 'utf8'));
let conversionTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'conversion-components.html'), 'utf8');
conversionTemplate = conversionTemplate.replace('{{CASE_STUDIES_JSON}}', JSON.stringify(caseStudies, null, 2));
console.log('Loaded ' + caseStudies.length + ' case studies\n');

// Helper function to generate schema markup
function generateSchemaMarkup(useCase) {
  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': useCase.heroH1,
    'description': useCase.metaDescription,
    'author': {
      '@type': 'Organization',
      'name': 'POSTMAN'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'POSTMAN',
      'url': BASE_URL
    }
  };

  // HowTo schema
  const howToSteps = useCase.implementationSteps.map((step, index) => {
    return {
      '@type': 'HowToStep',
      'position': index + 1,
      'name': 'Step ' + (index + 1),
      'text': step
    };
  });

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': useCase.heroH1,
    'description': useCase.technicalApproach,
    'totalTime': useCase.typicalTimeline,
    'estimatedCost': {
      '@type': 'MonetaryAmount',
      'currency': 'USD',
      'value': useCase.typicalCost
    },
    'step': howToSteps
  };

  // FAQ schema
  const faqQuestions = useCase.faqs.map(faq => {
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

  const allSchemas = [articleSchema, howToSchema, faqSchema];
  const schemaJSON = JSON.stringify(allSchemas, null, 2);
  return '<script type="application/ld+json">\n' + schemaJSON + '\n</script>';
}

// Helper function to generate Architecture Components HTML
function generateArchitectureComponentsHTML(components) {
  const items = components.map(comp => {
    return '\n        <div class="bg-white p-6 rounded-lg border border-gray-200">' +
      '\n          <div class="flex items-start gap-3 mb-3">' +
      '\n            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">' +
      '\n              <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">' +
      '\n                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>' +
      '\n              </svg>' +
      '\n            </div>' +
      '\n            <div class="flex-1">' +
      '\n              <h3 class="text-lg font-light text-gray-900 mb-1">' + comp.name + '</h3>' +
      '\n              <p class="text-sm text-blue-600 font-light mb-2">' + comp.tech + '</p>' +
      '\n            </div>' +
      '\n          </div>' +
      '\n          <p class="text-gray-600 text-sm font-light">' + comp.purpose + '</p>' +
      '\n        </div>';
  });
  return items.join('\n');
}

// Helper function to generate Key Features HTML
function generateKeyFeaturesHTML(features) {
  const items = features.map(feature => {
    return '\n        <div class="bg-white p-8 rounded-lg border border-gray-200">' +
      '\n          <h3 class="text-2xl font-light text-gray-900 mb-4">' + feature.title + '</h3>' +
      '\n          <p class="text-gray-600 font-light">' + feature.description + '</p>' +
      '\n        </div>';
  });
  return items.join('\n');
}

// Helper function to generate Implementation Steps HTML
function generateImplementationStepsHTML(steps) {
  const stepItems = steps.map((step, index) => {
    return '\n        <div class="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-4">' +
      '\n          <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">' +
      '\n            <span class="text-xl font-light text-blue-600">' + (index + 1) + '</span>' +
      '\n          </div>' +
      '\n          <p class="text-gray-700 font-light flex-1">' + step + '</p>' +
      '\n        </div>';
  });
  return stepItems.join('\n');
}

// Helper function to generate Real-World Metrics HTML
function generateRealWorldMetricsHTML(metrics) {
  const metricCards = [];

  if (metrics.timeSaved) {
    metricCards.push(
      '\n        <div class="bg-white p-8 rounded-lg border border-gray-200">' +
      '\n          <div class="text-4xl font-light text-blue-600 mb-2">' + metrics.timeSaved + '</div>' +
      '\n          <p class="text-gray-600 font-light">Time Saved</p>' +
      '\n        </div>'
    );
  }

  if (metrics.noShowReduction && metrics.noShowReduction !== 'N/A') {
    metricCards.push(
      '\n        <div class="bg-white p-8 rounded-lg border border-gray-200">' +
      '\n          <div class="text-4xl font-light text-green-600 mb-2">' + metrics.noShowReduction + '</div>' +
      '\n          <p class="text-gray-600 font-light">No-Show Reduction</p>' +
      '\n        </div>'
    );
  }

  if (metrics.afterHoursCaptured) {
    metricCards.push(
      '\n        <div class="bg-white p-8 rounded-lg border border-gray-200">' +
      '\n          <div class="text-4xl font-light text-purple-600 mb-2">' + metrics.afterHoursCaptured + '</div>' +
      '\n          <p class="text-gray-600 font-light">After-Hours Captured</p>' +
      '\n        </div>'
    );
  }

  if (metrics.paybackPeriod) {
    metricCards.push(
      '\n        <div class="bg-white p-8 rounded-lg border border-gray-200">' +
      '\n          <div class="text-4xl font-light text-orange-600 mb-2">' + metrics.paybackPeriod + '</div>' +
      '\n          <p class="text-gray-600 font-light">Payback Period</p>' +
      '\n        </div>'
    );
  }

  return metricCards.join('\n');
}

// Helper function to generate Common Pitfalls HTML
function generateCommonPitfallsHTML(pitfalls) {
  const items = pitfalls.map(pitfall => {
    return '\n        <div class="bg-red-50 p-6 rounded-lg border border-red-100 flex items-start gap-3">' +
      '\n          <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">' +
      '\n            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>' +
      '\n          </svg>' +
      '\n          <p class="text-gray-700 font-light flex-1">' + pitfall + '</p>' +
      '\n        </div>';
  });
  return items.join('\n');
}

// Helper function to generate FAQ HTML
function generateFAQHTML(faqs) {
  const items = faqs.map(faq => {
    return '\n        <details class="bg-white p-6 rounded-lg border border-gray-200">' +
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

// Helper function to generate related use cases section
function generateRelatedUseCasesSection(useCase, allUseCases) {
  if (!useCase.relatedUseCases || useCase.relatedUseCases.length === 0) {
    return '';
  }

  const relatedCases = allUseCases.filter(uc =>
    useCase.relatedUseCases.includes(uc.slug) && uc.slug !== useCase.slug
  );

  if (relatedCases.length === 0) {
    return '';
  }

  const cards = relatedCases.map(related => {
    return '\n        <a href="/use-cases/' + related.slug + '/" class="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition group">' +
      '\n          <div class="flex items-start justify-between mb-3">' +
      '\n            <h3 class="text-xl font-light text-gray-900 group-hover:text-blue-600 transition">' + related.name + '</h3>' +
      '\n            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded font-light">' + related.complexity + '</span>' +
      '\n          </div>' +
      '\n          <p class="text-gray-600 text-sm font-light mb-4">' + related.heroSubtext.substring(0, 100) + '...</p>' +
      '\n          <div class="flex items-center justify-between text-sm">' +
      '\n            <span class="text-gray-500 font-light">⏱️ ' + related.typicalTimeline + '</span>' +
      '\n            <span class="text-blue-600 font-light group-hover:underline">Learn more →</span>' +
      '\n          </div>' +
      '\n        </a>';
  });

  return '\n<!-- Related Use Cases -->\n' +
    '<section class="py-16 md:py-24 px-6 bg-white">\n' +
    '  <div class="max-w-6xl mx-auto">\n' +
    '    <div class="text-center mb-12">\n' +
    '      <h2 class="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Related Use Cases</h2>\n' +
    '      <p class="text-xl text-gray-600 font-light">Explore similar automation solutions</p>\n' +
    '    </div>\n' +
    '    <div class="grid grid-cols-1 md:grid-cols-' + Math.min(relatedCases.length, 3) + ' gap-6">\n' +
    cards.join('\n') + '\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n\n';
}

// Helper function to generate conversion sections
function generateConversionSections(useCase, allUseCases) {
  const industries = useCase.relatedIndustries.join(',');
  const useCaseName = useCase.name;

  const relatedUseCasesSection = generateRelatedUseCasesSection(useCase, allUseCases);

  const caseStudySection = '\n<!-- Case Studies -->\n' +
    '<section class="case-study-grid py-16 md:py-24 px-6 bg-gray-50" data-industries="' + industries + '">\n' +
    '  <div class="max-w-6xl mx-auto">\n' +
    '    <div class="text-center mb-12">\n' +
    '      <h2 class="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Related Case Studies</h2>\n' +
    '      <p class="text-xl text-gray-600 font-light">Real projects in ' + industries.split(',').join(', ') + '</p>\n' +
    '    </div>\n' +
    '    <div id="case-studies-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>\n' +
    '  </div>\n' +
    '</section>\n\n';

  const ctaSection = '<section class="industry-cta py-16 md:py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" data-industry="' + useCaseName + '" data-solution="' + useCaseName + '">\n' +
    '  <div class="max-w-4xl mx-auto text-center">\n' +
    '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-6">\n' +
    '      Ready to Implement <span class="industry-name"></span>?\n' +
    '    </h2>\n' +
    '    <p class="text-xl md:text-2xl mb-8 text-gray-300 font-light">\n' +
    '      We\'ve built <span class="solution-name"></span> solutions that deliver ROI. Let us build yours.\n' +
    '    </p>\n' +
    '    <div class="flex flex-col sm:flex-row gap-4 justify-center">\n' +
    '      <a href="/contact" class="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg font-light text-lg hover:bg-gray-100 transition">\n' +
    '        Schedule Free Consultation\n' +
    '      </a>\n' +
    '      <a href="/case-studies" class="inline-block bg-white/10 text-white border border-white/20 px-10 py-4 rounded-lg font-light text-lg hover:bg-white/20 transition">\n' +
    '        View All Projects\n' +
    '      </a>\n' +
    '    </div>\n' +
    '    <p class="mt-6 text-gray-300 font-light">' + useCase.typicalTimeline + ' implementation. ' + useCase.typicalCost + '. Proven ROI.</p>\n' +
    '  </div>\n' +
    '</section>\n\n';

  return relatedUseCasesSection + caseStudySection + ctaSection;
}

// Generate individual use case pages
console.log('Generating use case pages...\n');
useCases.forEach((useCase, index) => {
  const schemaMarkup = generateSchemaMarkup(useCase);
  const architectureComponentsHTML = generateArchitectureComponentsHTML(useCase.architectureComponents);
  const keyFeaturesHTML = generateKeyFeaturesHTML(useCase.keyFeatures);
  const implementationHTML = generateImplementationStepsHTML(useCase.implementationSteps);
  const realWorldMetricsHTML = generateRealWorldMetricsHTML(useCase.realWorldMetrics);
  const commonPitfallsHTML = generateCommonPitfallsHTML(useCase.commonPitfalls);
  const faqHTML = generateFAQHTML(useCase.faqs);
  const conversionSections = generateConversionSections(useCase, useCases);

  // Replace all placeholders
  let html = headerTemplate
    .replace(/{{META_TITLE}}/g, useCase.metaTitle)
    .replace(/{{META_DESCRIPTION}}/g, useCase.metaDescription)
    .replace(/{{CANONICAL_URL}}/g, BASE_URL + '/use-cases/' + useCase.slug + '/')
    .replace(/{{SCHEMA_MARKUP}}/g, schemaMarkup);

  html += bodyTemplate
    .replace(/{{HERO_H1}}/g, useCase.heroH1)
    .replace(/{{HERO_SUBTEXT}}/g, useCase.heroSubtext)
    .replace(/{{COMPLEXITY}}/g, useCase.complexity)
    .replace(/{{TYPICAL_TIMELINE}}/g, useCase.typicalTimeline)
    .replace(/{{TYPICAL_COST}}/g, useCase.typicalCost)
    .replace(/{{PROBLEM_STATEMENT}}/g, useCase.problemStatement)
    .replace(/{{TECHNICAL_APPROACH}}/g, useCase.technicalApproach)
    .replace(/{{ARCHITECTURE_COMPONENTS}}/g, architectureComponentsHTML)
    .replace(/{{KEY_FEATURES}}/g, keyFeaturesHTML)
    .replace(/{{IMPLEMENTATION_STEPS}}/g, implementationHTML)
    .replace(/{{REAL_WORLD_METRICS}}/g, realWorldMetricsHTML)
    .replace(/{{COMMON_PITFALLS}}/g, commonPitfallsHTML)
    .replace(/{{FAQ_ITEMS}}/g, faqHTML);

  // Add conversion sections
  html += conversionSections;

  // Add conversion template with JavaScript
  html += conversionTemplate;

  html += footerTemplate;

  // Write file - create subdirectory for each use case
  const useCaseDir = path.join(OUTPUT_DIR, useCase.slug);
  if (!fs.existsSync(useCaseDir)) {
    fs.mkdirSync(useCaseDir, { recursive: true });
  }
  const filepath = path.join(useCaseDir, 'index.html');
  fs.writeFileSync(filepath, html);

  console.log('  ' + (index + 1) + '/' + useCases.length + ' [OK] ' + useCase.name + ' -> ' + useCase.slug + '/index.html');
});

console.log('\nAll use case pages generated!\n');

// Generate hub page
console.log('Generating hub page...\n');

// Generate use case cards HTML
const useCaseCards = useCases.map(useCase => {
  return '\n          <a href="/use-cases/' + useCase.slug + '/" class="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 hover:shadow-lg transition block group">' +
    '\n            <div class="flex items-start justify-between mb-4">' +
    '\n              <h3 class="text-xl font-light text-gray-900 group-hover:text-blue-600 transition">' + useCase.name + '</h3>' +
    '\n              <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded font-light">' + useCase.complexity + '</span>' +
    '\n            </div>' +
    '\n            <p class="text-gray-600 text-sm font-light mb-4">' + useCase.heroSubtext.substring(0, 120) + '...</p>' +
    '\n            <div class="flex items-center gap-4 text-sm text-gray-500 font-light">' +
    '\n              <span>⏱️ ' + useCase.typicalTimeline + '</span>' +
    '\n              <span>💰 ' + useCase.typicalCost + '</span>' +
    '\n            </div>' +
    '\n          </a>';
});
const cardsHTML = useCaseCards.join('\n');

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "AI Use Cases: Implementation Guides",
  "description": "Technical guides for automating business processes with AI. Complete architecture, costs, and real metrics.",
  "url": BASE_URL + '/use-cases/',
  "provider": {
    "@type": "Organization",
    "name": "POSTMAN",
    "url": BASE_URL
  }
};

const hubSchemaMarkup = '<script type="application/ld+json">\n' + JSON.stringify(hubSchema, null, 2) + '\n</script>';

let hubHTML = headerTemplate
  .replace(/{{META_TITLE}}/g, 'AI Use Cases: Implementation Guides | P0STMAN')
  .replace(/{{META_DESCRIPTION}}/g, 'Technical guides for automating business processes with AI. Complete architecture, costs, timelines, and real metrics from 20+ implementations.')
  .replace(/{{CANONICAL_URL}}/g, BASE_URL + '/use-cases/')
  .replace(/{{SCHEMA_MARKUP}}/g, hubSchemaMarkup);

hubHTML += '\n  <!-- Hero Section -->\n' +
  '  <section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-32 px-6">\n' +
  '    <div class="max-w-6xl mx-auto text-center">\n' +
  '      <h1 class="text-4xl md:text-6xl font-light tracking-tight mb-6">AI Use Cases: Implementation Guides</h1>\n' +
  '      <p class="text-xl md:text-2xl mb-8 text-gray-300 font-light max-w-3xl mx-auto">\n' +
  '        Technical guides for automating business processes with AI. Complete architecture, costs, timelines, and real metrics.\n' +
  '      </p>\n' +
  '    </div>\n' +
  '  </section>\n\n' +
  '  <!-- Use Cases Grid -->\n' +
  '  <section class="py-16 md:py-24 px-6 bg-gray-50">\n' +
  '    <div class="max-w-6xl mx-auto">\n' +
  '      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n' +
  cardsHTML + '\n' +
  '      </div>\n' +
  '    </div>\n' +
  '  </section>\n\n' +
  '  <!-- CTA Section -->\n' +
  '  <section class="py-16 md:py-24 px-6 bg-white">\n' +
  '    <div class="max-w-4xl mx-auto text-center">\n' +
  '      <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-6">Need a Custom Solution?</h2>\n' +
  '      <p class="text-xl text-gray-600 font-light mb-8">\n' +
  '        We build custom AI automation for businesses. From discovery to deployment in 2-6 weeks.\n' +
  '      </p>\n' +
  '      <a href="/contact" class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-lg font-light text-xl hover:from-blue-700 hover:to-purple-700 transition shadow-lg">\n' +
  '        Schedule Free Consultation\n' +
  '      </a>\n' +
  '    </div>\n' +
  '  </section>\n';

hubHTML += footerTemplate;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), hubHTML);
console.log('[OK] Hub page generated -> index.html\n');

// Generate sitemap
console.log('Generating sitemap...\n');

const today = new Date().toISOString().split('T')[0];

let sitemapXML = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  '  <!-- Use Cases Hub Page -->\n' +
  '  <url>\n' +
  '    <loc>' + BASE_URL + '/use-cases/</loc>\n' +
  '    <lastmod>' + today + '</lastmod>\n' +
  '    <changefreq>weekly</changefreq>\n' +
  '    <priority>0.9</priority>\n' +
  '  </url>\n\n' +
  '  <!-- Use Case Pages -->\n';

useCases.forEach(useCase => {
  sitemapXML += '  <url>\n' +
    '    <loc>' + BASE_URL + '/use-cases/' + useCase.slug + '/</loc>\n' +
    '    <lastmod>' + today + '</lastmod>\n' +
    '    <changefreq>monthly</changefreq>\n' +
    '    <priority>0.8</priority>\n' +
    '  </url>\n';
});

sitemapXML += '</urlset>\n';

const sitemapPath = path.join(__dirname, '../public/use-cases-sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXML);
console.log('[OK] Sitemap generated -> use-cases-sitemap.xml\n');

// Summary
console.log('═══════════════════════════════════════════════════════\n');
console.log('GENERATION COMPLETE!\n');
console.log('Generated: ' + useCases.length + ' use case pages');
console.log('Generated: 1 hub page');
console.log('Generated: 1 sitemap');
console.log('Output directory: ' + OUTPUT_DIR + '\n');
console.log('Next steps:');
console.log('  1. Review generated files in public/use-cases/');
console.log('  2. Test pages locally');
console.log('  3. Merge use-cases-sitemap.xml into main sitemap.xml');
console.log('  4. Deploy to production\n');
console.log('═══════════════════════════════════════════════════════\n');
