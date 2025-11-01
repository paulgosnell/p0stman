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
const OUTPUT_DIR = path.join(__dirname, '../public/solutions');

console.log('Starting P0STMAN Solution Pages Generator\n');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log('[OK] Created output directory:', OUTPUT_DIR);
}

// Read templates
console.log('Reading templates...');
const headerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'footer.html'), 'utf8');
const bodyTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'solution-body.html'), 'utf8');
const hubTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'solution-hub.html'), 'utf8');
console.log('Templates loaded\n');

// Read solutions data
console.log('Reading solutions data...');
const solutions = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'solutions.json'), 'utf8'));
console.log('Loaded ' + solutions.length + ' solutions\n');

// Read case studies data
console.log('Reading case studies data...');
const caseStudies = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'case-study-taxonomy.json'), 'utf8'));
let conversionTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'conversion-components.html'), 'utf8');
conversionTemplate = conversionTemplate.replace('{{CASE_STUDIES_JSON}}', JSON.stringify(caseStudies, null, 2));
console.log('Loaded ' + caseStudies.length + ' case studies\n');

// Helper function to generate schema markup
function generateSchemaMarkup(solution) {
  const faqQuestions = solution.faqs.map(faq => {
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

// Helper function to generate Before/After HTML
function generateBeforeAfterHTML(beforeAfter) {
  // Get the array property from before (could be costs, limitations, problems, etc)
  const beforeArrayKey = Object.keys(beforeAfter.before).find(key => key !== 'title');
  const beforeArray = beforeAfter.before[beforeArrayKey];

  // Get the array property from after (could be costs, benefits, etc)
  const afterArrayKey = Object.keys(beforeAfter.after).find(key => key !== 'title');
  const afterArray = beforeAfter.after[afterArrayKey];

  const beforeItems = beforeArray.map(item => {
    return '\n            <li class="flex items-start gap-3">' +
      '\n              <svg class="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">' +
      '\n                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>' +
      '\n              </svg>' +
      '\n              <span class="text-gray-700 font-light">' + item + '</span>' +
      '\n            </li>';
  });

  const afterItems = afterArray.map(item => {
    return '\n            <li class="flex items-start gap-3">' +
      '\n              <svg class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">' +
      '\n                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>' +
      '\n              </svg>' +
      '\n              <span class="text-gray-700 font-light">' + item + '</span>' +
      '\n            </li>';
  });

  return '\n      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">' +
    '\n        <div class="bg-white p-8 rounded-lg border border-red-100">' +
    '\n          <h3 class="text-2xl font-light mb-6 text-gray-900">' + beforeAfter.before.title + '</h3>' +
    '\n          <ul class="space-y-4">' +
    beforeItems.join('\n') +
    '\n          </ul>' +
    '\n        </div>' +
    '\n        <div class="bg-white p-8 rounded-lg border border-green-100">' +
    '\n          <h3 class="text-2xl font-light mb-6 text-gray-900">' + beforeAfter.after.title + '</h3>' +
    '\n          <ul class="space-y-4">' +
    afterItems.join('\n') +
    '\n          </ul>' +
    '\n        </div>' +
    '\n      </div>';
}

// Helper function to generate ROI Calculator HTML
function generateROICalculatorHTML(calculator, beforeAfter) {
  // Use the savings from beforeAfter if available
  const savings = beforeAfter.savings || '';

  return '\n      <div class="bg-gray-50 p-8 rounded-lg border border-gray-200">' +
    '\n        <p class="text-xl text-gray-700 font-light text-center mb-4">See Before/After section above for detailed cost breakdown</p>' +
    '\n        <div class="border-t border-gray-300 pt-6">' +
    '\n          <div class="flex justify-between items-center">' +
    '\n            <span class="text-2xl font-light text-gray-900">Annual Savings</span>' +
    '\n            <span class="text-3xl font-light text-green-600">' + savings + '</span>' +
    '\n          </div>' +
    '\n        </div>' +
    '\n      </div>';
}

// Helper function to generate Implementation Steps HTML
function generateImplementationStepsHTML(steps) {
  const stepItems = steps.map((stepData, index) => {
    return '\n        <div class="bg-white p-8 rounded-lg border border-gray-200">' +
      '\n          <h3 class="text-xl font-light text-gray-900 mb-4">' + stepData.step + '</h3>' +
      '\n          <p class="text-gray-600 font-light">' + stepData.description + '</p>' +
      '\n        </div>';
  });
  return stepItems.join('\n');
}

// Helper function to generate Real-World Example HTML
function generateRealWorldExampleHTML(example) {
  return '\n      <div class="bg-gray-50 p-8 rounded-lg border border-gray-200">' +
    '\n        <div class="mb-6">' +
    '\n          <h3 class="text-2xl font-light mb-4 text-gray-900">' + example.company + '</h3>' +
    '\n        </div>' +
    '\n        <div class="space-y-4">' +
    '\n          <div>' +
    '\n            <h4 class="text-lg font-light mb-2 text-gray-900">Before</h4>' +
    '\n            <p class="text-gray-700 font-light">' + example.before + '</p>' +
    '\n          </div>' +
    '\n          <div>' +
    '\n            <h4 class="text-lg font-light mb-2 text-gray-900">After</h4>' +
    '\n            <p class="text-gray-700 font-light">' + example.after + '</p>' +
    '\n          </div>' +
    '\n          <div class="bg-green-50 p-4 rounded-lg border border-green-200">' +
    '\n            <h4 class="text-lg font-light mb-2 text-gray-900">Result</h4>' +
    '\n            <p class="text-gray-700 font-light">' + example.result + '</p>' +
    '\n          </div>' +
    '\n        </div>' +
    '\n      </div>';
}

// Helper function to generate Common Objections HTML
function generateObjectionsHTML(objections) {
  const objectionItems = objections.map(objection => {
    return '\n        <div class="bg-white p-6 rounded-lg border border-gray-200">' +
      '\n          <h3 class="text-xl font-light mb-3 text-gray-900">' + objection.objection + '</h3>' +
      '\n          <p class="text-gray-600 font-light">' + objection.response + '</p>' +
      '\n        </div>';
  });
  return objectionItems.join('\n');
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

// Solution to industry mapping for case studies
const solutionMapping = {
  'appointment-booking': 'healthcare,beauty,saas',
  'customer-support-automation': 'saas,ecommerce,ai-agents',
  'lead-qualification': 'saas,crm,consulting',
  'outbound-sales-calls': 'saas,sales',
  'payment-collection': 'fintech,saas',
  'survey-research': 'saas,research',
  'scheduling-coordination': 'healthcare,saas',
  'order-status-tracking': 'ecommerce,logistics'
};

// Helper function to generate conversion sections
function generateConversionSections(solution) {
  const industries = solutionMapping[solution.slug] || 'saas,ai-agents';
  const solutionName = solution.name;

  const caseStudySection = '\n<!-- Case Studies -->\n' +
    '<section class="case-study-grid py-16 md:py-24 px-6 bg-gray-50" data-industries="' + industries + '">\n' +
    '  <div class="max-w-6xl mx-auto">\n' +
    '    <div class="text-center mb-12">\n' +
    '      <h2 class="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Built for ' + solutionName + '</h2>\n' +
    '      <p class="text-xl text-gray-600 font-light">Real projects. Real results. See what we\'ve built.</p>\n' +
    '    </div>\n' +
    '    <div id="case-studies-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>\n' +
    '  </div>\n' +
    '</section>\n\n';

  const ctaSection = '<section class="industry-cta py-16 md:py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" data-industry="' + solutionName + '" data-solution="' + solutionName + '">\n' +
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
    '    <p class="mt-6 text-gray-300 font-light">From $5K. 6-day implementation. Proven ROI.</p>\n' +
    '  </div>\n' +
    '</section>\n\n';

  return caseStudySection + ctaSection;
}

// Generate individual solution pages
console.log('Generating solution pages...\n');
solutions.forEach((solution, index) => {
  const schemaMarkup = generateSchemaMarkup(solution);
  const beforeAfterHTML = generateBeforeAfterHTML(solution.beforeAfter);
  const roiCalculatorHTML = generateROICalculatorHTML(solution.roiCalculator, solution.beforeAfter);
  const implementationHTML = generateImplementationStepsHTML(solution.implementation);
  const realWorldExampleHTML = generateRealWorldExampleHTML(solution.realWorldExample);
  const objectionsHTML = generateObjectionsHTML(solution.commonObjections);
  const faqHTML = generateFAQHTML(solution.faqs);
  const conversionSections = generateConversionSections(solution);

  // Replace all placeholders
  let html = headerTemplate
    .replace(/{{META_TITLE}}/g, solution.metaTitle)
    .replace(/{{META_DESCRIPTION}}/g, solution.metaDescription)
    .replace(/{{CANONICAL_URL}}/g, BASE_URL + '/solutions/' + solution.slug + '/')
    .replace(/{{SCHEMA_MARKUP}}/g, schemaMarkup);

  html += bodyTemplate
    .replace(/{{HERO_H1}}/g, solution.heroH1)
    .replace(/{{HERO_SUBTEXT}}/g, solution.heroSubtext)
    .replace(/{{PROBLEM_STATEMENT}}/g, solution.problemStatement)
    .replace(/{{BEFORE_AFTER}}/g, beforeAfterHTML)
    .replace(/{{ROI_CALCULATOR}}/g, roiCalculatorHTML)
    .replace(/{{IMPLEMENTATION_STEPS}}/g, implementationHTML)
    .replace(/{{REAL_WORLD_EXAMPLE}}/g, realWorldExampleHTML)
    .replace(/{{COMMON_OBJECTIONS}}/g, objectionsHTML)
    .replace(/{{FAQ_ITEMS}}/g, faqHTML);

  // Add conversion sections
  html += conversionSections;

  // Add conversion template with JavaScript
  html += conversionTemplate;

  html += footerTemplate;

  // Write file - create subdirectory for each solution
  const solutionDir = path.join(OUTPUT_DIR, solution.slug);
  if (!fs.existsSync(solutionDir)) {
    fs.mkdirSync(solutionDir, { recursive: true });
  }
  const filepath = path.join(solutionDir, 'index.html');
  fs.writeFileSync(filepath, html);

  console.log('  ' + (index + 1) + '/' + solutions.length + ' [OK] ' + solution.name + ' -> ' + solution.slug + '/index.html');
});

console.log('\nAll solution pages generated!\n');

// Generate hub page
console.log('Generating hub page...\n');

// Group solutions by category
const categorizedSolutions = solutions.reduce((acc, solution) => {
  if (!acc[solution.category]) {
    acc[solution.category] = [];
  }
  acc[solution.category].push(solution);
  return acc;
}, {});

// Generate solution cards HTML grouped by category
const categoriesHTML = Object.keys(categorizedSolutions).map(category => {
  const categorySolutions = categorizedSolutions[category];

  const cards = categorySolutions.map(solution => {
    const preview = solution.heroSubtext.substring(0, 120);
    return '\n          <a href="/solutions/' + solution.slug + '/" class="bg-white p-6 rounded-lg border border-gray-100 hover:border-gray-300 transition block group">' +
      '\n            <h3 class="text-xl font-light mb-2 text-gray-900 group-hover:text-blue-600 transition">' + solution.name + '</h3>' +
      '\n            <p class="text-gray-600 text-sm font-light">' + preview + '...</p>' +
      '\n          </a>';
  });
  const cardsHTML = cards.join('\n');

  return '\n      <div class="mb-12">' +
    '\n        <h2 class="text-2xl font-bold mb-6 text-gray-900">' + category + '</h2>' +
    '\n        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">' +
    cardsHTML +
    '\n        </div>' +
    '\n      </div>';
}).join('\n');

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "AI Voice Agent Solutions",
  "description": "Solve specific business problems with AI voice automation. ROI-focused solutions with proven results.",
  "url": BASE_URL + '/solutions/',
  "provider": {
    "@type": "Organization",
    "name": "P0STMAN",
    "url": BASE_URL
  }
};

const hubSchemaMarkup = '<script type="application/ld+json">\n' + JSON.stringify(hubSchema, null, 2) + '\n</script>';

let hubHTML = headerTemplate
  .replace(/{{META_TITLE}}/g, 'AI Voice Agent Solutions | P0STMAN')
  .replace(/{{META_DESCRIPTION}}/g, 'Solve specific business problems with AI voice automation. ROI-focused solutions with proven results. Reduce costs, scale support, automate scheduling.')
  .replace(/{{CANONICAL_URL}}/g, BASE_URL + '/solutions/')
  .replace(/{{SCHEMA_MARKUP}}/g, hubSchemaMarkup);

hubHTML += hubTemplate.replace(/{{SOLUTION_CATEGORIES}}/g, categoriesHTML);
hubHTML += footerTemplate;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), hubHTML);
console.log('[OK] Hub page generated -> index.html\n');

// Generate sitemap
console.log('Generating sitemap...\n');

const today = new Date().toISOString().split('T')[0];

let sitemapXML = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  '  <!-- Solution Hub Page -->\n' +
  '  <url>\n' +
  '    <loc>' + BASE_URL + '/solutions/</loc>\n' +
  '    <lastmod>' + today + '</lastmod>\n' +
  '    <changefreq>weekly</changefreq>\n' +
  '    <priority>0.9</priority>\n' +
  '  </url>\n\n' +
  '  <!-- Solution Pages -->\n';

solutions.forEach(solution => {
  sitemapXML += '  <url>\n' +
    '    <loc>' + BASE_URL + '/solutions/' + solution.slug + '/</loc>\n' +
    '    <lastmod>' + today + '</lastmod>\n' +
    '    <changefreq>monthly</changefreq>\n' +
    '    <priority>0.8</priority>\n' +
    '  </url>\n';
});

sitemapXML += '</urlset>\n';

const sitemapPath = path.join(__dirname, '../public/solutions-sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXML);
console.log('[OK] Sitemap generated -> solutions-sitemap.xml\n');

// Summary
console.log('═══════════════════════════════════════════════════════\n');
console.log('GENERATION COMPLETE!\n');
console.log('Generated: ' + solutions.length + ' solution pages');
console.log('Generated: 1 hub page');
console.log('Generated: 1 sitemap');
console.log('Output directory: ' + OUTPUT_DIR + '\n');
console.log('Next steps:');
console.log('  1. Review generated files in public/solutions/');
console.log('  2. Test pages locally');
console.log('  3. Merge solutions-sitemap.xml into main sitemap.xml');
console.log('  4. Deploy to production\n');
console.log('═══════════════════════════════════════════════════════\n');
