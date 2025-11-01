#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Adding Conversion Elements to Pages\n');

// Load case study taxonomy
const caseStudies = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/case-study-taxonomy.json'), 'utf8')
);

// Load conversion components template
let conversionTemplate = fs.readFileSync(
  path.join(__dirname, '../templates/conversion-components.html'),
  'utf8'
);

// Inject case studies JSON into template
conversionTemplate = conversionTemplate.replace(
  '{{CASE_STUDIES_JSON}}',
  JSON.stringify(caseStudies, null, 2)
);

// Industry to case study mapping
const industryMapping = {
  'healthcare': ['healthcare', 'dental'],
  'dental': ['healthcare', 'dental'],
  'legal': ['legal', 'consulting'],
  'accounting': ['fintech', 'saas'],
  'real-estate': ['property-management', 'crm'],
  'ecommerce': ['ecommerce', 'retail'],
  'saas': ['saas', 'crm'],
  'fintech': ['fintech', 'banking'],
  'home-services': ['home-services', 'beauty'],
  'insurance': ['fintech', 'saas'],
  'manufacturing': ['saas', 'logistics'],
  'retail': ['retail', 'ecommerce'],
  'hospitality': ['hospitality', 'travel'],
  'education': ['education', 'saas'],
  'consulting': ['saas', 'consulting'],
  'marketing-agencies': ['saas', 'media'],
  'construction': ['saas', 'property-management'],
  'logistics': ['saas', 'logistics'],
  'automotive': ['retail', 'saas'],
  'fitness': ['fitness', 'health-tech'],
  'beauty': ['beauty', 'home-services'],
  'veterinary': ['healthcare', 'saas'],
  'recruiting': ['hr-tech', 'saas'],
  'non-profits': ['saas', 'education'],
  'event-planning': ['saas', 'hospitality'],
  'property-management': ['property-management', 'saas'],
  'travel': ['travel', 'hospitality'],
  'food-delivery': ['ecommerce', 'logistics'],
  'cleaning-services': ['home-services', 'saas'],
  'photography': ['saas', 'media']
};

// Update industry pages
console.log('Updating industry pages...\n');
const industriesDir = path.join(__dirname, '../public/industries');
const industryFiles = fs.readdirSync(industriesDir);

let updated = 0;
industryFiles.forEach(file => {
  if (file === 'index.html') return;

  const filePath = path.join(industriesDir, file, 'index.html');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Extract industry slug from path
  const industrySlug = file;
  const industries = industryMapping[industrySlug] || ['saas'];
  const industryName = industrySlug.replace(/-/g, ' ');

  // Check if already has conversion elements
  if (content.includes('case-study-grid')) {
    console.log('  [SKIP] ' + file + ' (already has conversion elements)');
    return;
  }

  // Create conversion section with filters
  const caseStudySection = '\n<!-- Case Studies -->\n' +
    '<section class="case-study-grid py-16 md:py-24 px-6 bg-gray-50" data-industries="' + industries.join(',') + '">\n' +
    '  <div class="max-w-6xl mx-auto">\n' +
    '    <div class="text-center mb-12">\n' +
    '      <h2 class="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Built for ' + industryName.charAt(0).toUpperCase() + industryName.slice(1) + '</h2>\n' +
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

  // Insert before footer
  const footerMarker = '  </header>\n\n  <!-- Spacer for fixed header -->';
  const insertPoint = content.lastIndexOf(footerMarker);

  if (insertPoint === -1) {
    console.log('  [SKIP] ' + file + ' (no footer marker found)');
    return;
  }

  // Insert sections before the footer scripts
  const scriptMarker = '<script>';
  const scriptInsertPoint = content.lastIndexOf(scriptMarker);

  const beforeScript = content.substring(0, scriptInsertPoint);
  const afterScript = content.substring(scriptInsertPoint);

  const updatedContent = beforeScript + '\n' +
    caseStudySection +
    ctaSection +
    '\n' + conversionTemplate + '\n' +
    afterScript;

  fs.writeFileSync(filePath, updatedContent);
  console.log('  [OK] ' + file);
  updated++;
});

console.log('\nUpdated ' + updated + ' industry pages\n');

// Update comparison pages with tech social proof
console.log('Updating comparison pages...\n');
const compareDir = path.join(__dirname, '../public/compare');
const compareFiles = fs.readdirSync(compareDir);

const comparisonTechMapping = {
  'vapi-alternative': 'custom',
  'voiceflow-alternative': 'custom',
  'elevenlabs-vs-livekit': 'elevenlabs', // This is the big one!
  'ai-agents-vs-chatbots': null,
  'build-vs-buy-ai-agents': null,
  'agency-vs-freelancer-ai': null,
  'chatgpt-integration-vs-custom': null,
  'in-house-vs-outsource-ai': null,
  'ai-voice-agents-vs-call-centers': 'elevenlabs'
};

let updatedCompare = 0;
compareFiles.forEach(file => {
  if (file === 'index.html') return;

  const filePath = path.join(compareDir, file, 'index.html');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already has conversion elements
  if (content.includes('case-study-grid')) {
    console.log('  [SKIP] ' + file + ' (already has conversion elements)');
    return;
  }

  const tech = comparisonTechMapping[file];
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

  // Generic case study section for AI/tech projects
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

  // Insert before script marker
  const scriptMarker = '<script>';
  const scriptInsertPoint = content.lastIndexOf(scriptMarker);

  if (scriptInsertPoint === -1) {
    console.log('  [SKIP] ' + file + ' (no script marker found)');
    return;
  }

  const beforeScript = content.substring(0, scriptInsertPoint);
  const afterScript = content.substring(scriptInsertPoint);

  const updatedContent = beforeScript + '\n' +
    techProofSection +
    caseStudySection +
    '\n' + conversionTemplate + '\n' +
    afterScript;

  fs.writeFileSync(filePath, updatedContent);
  console.log('  [OK] ' + file + (tech ? ' (with ' + tech + ' proof)' : ''));
  updatedCompare++;
});

console.log('\nUpdated ' + updatedCompare + ' comparison pages\n');

console.log('═══════════════════════════════════════════════════════');
console.log('CONVERSION ELEMENTS ADDED!\n');
console.log('Added to: ' + (updated + updatedCompare) + ' pages');
console.log('- ' + updated + ' industry pages with case study filtering');
console.log('- ' + updatedCompare + ' comparison pages with tech social proof\n');
console.log('Next: Regenerate all pages to apply changes');
console.log('═══════════════════════════════════════════════════════\n');
