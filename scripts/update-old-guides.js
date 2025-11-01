#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Updating Old Guides with New Header and Conversion Sections\n');

// Paths
const TEMPLATES_DIR = path.join(__dirname, '../templates');
const DATA_DIR = path.join(__dirname, '../data');
const GUIDES_DIR = path.join(__dirname, '../public/guides');

// Load templates and data
console.log('Loading templates and data...');
const headerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'footer.html'), 'utf8');
const caseStudies = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'case-study-taxonomy.json'), 'utf8'));
let conversionTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'conversion-components.html'), 'utf8');
conversionTemplate = conversionTemplate.replace('{{CASE_STUDIES_JSON}}', JSON.stringify(caseStudies, null, 2));
console.log('Templates loaded\n');

// Guide to topic mapping for case study filtering
const guideTopicMapping = {
  'voice-ai-platforms-elevenlabs-livekit-custom-comparison-2025': 'elevenlabs',
  'customer-support-automation-ai-voice-agents-2025': 'ai-agents,saas',
  'ai-lead-generation-bot-build-vs-buy-guide-2025': 'saas,crm',
  'ai-lead-qualification-b2b-sales-guide-2025': 'saas,crm',
  'ai-agents-real-estate-lead-generation-guide-2025': 'property-management,crm',
  'ecommerce-ai-customer-service-roi-guide-2025': 'ecommerce,retail',
  'ai-saas-onboarding-reduce-churn-guide-2025': 'saas',
  'ai-agency-vs-freelancer-vs-inhouse-cost-comparison-2025': null,
  'ai-agent-development-cost-timeline-guide-2025': 'ai-agents,saas',
  'ai-agent-security-data-privacy-guide-2025': null,
  'ai-agent-vs-chatbot-comparison-guide-2025': 'ai-agents,saas',
  'ai-development-red-flags-avoid-bad-agencies-2025': null,
  'ai-model-selection-guide-claude-gpt4-gemini-2025': null,
  'ai-prompt-engineering-guide-2025': null,
  'ai-vibe-coding-guide-2025': null,
  'building-saas-roadmap-2025': 'saas',
  'can-i-build-ai-agent-myself-diy-guide-2025': 'ai-agents,saas',
  'chatgpt-vs-custom-ai-agent-guide-2025': 'ai-agents,saas',
  'how-ai-agents-work-explained-for-non-technical-founders-2025': 'ai-agents,saas',
  'how-to-hire-ai-development-agency-2025': null,
  'multi-model-ai-systems-guide-2025': 'ai-agents,saas',
  'mvp-to-production-ai-agent-roadmap-2025': 'saas',
  'why-ai-consultants-dont-ship-what-to-do-instead-2025': null
};

// Helper function to generate conversion sections for guides
function generateConversionSections(guideSlug, guideTopic) {
  const industries = guideTopicMapping[guideSlug] || 'ai-agents,saas';
  const isTechGuide = guideSlug.includes('elevenlabs') || guideSlug.includes('livekit');
  const tech = isTechGuide ? 'elevenlabs' : null;

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
    '<section class="case-study-grid py-16 md:py-24 px-6 bg-gray-50" data-industries="' + industries + '">\n' +
    '  <div class="max-w-6xl mx-auto">\n' +
    '    <div class="text-center mb-12">\n' +
    '      <h2 class="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Related Projects</h2>\n' +
    '      <p class="text-xl text-gray-600 font-light">See what we\'ve built for companies like yours</p>\n' +
    '    </div>\n' +
    '    <div id="case-studies-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>\n' +
    '  </div>\n' +
    '</section>\n\n';

  const ctaSection = '<section class="industry-cta py-16 md:py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" data-industry="Your Business" data-solution="AI solutions">\n' +
    '  <div class="max-w-4xl mx-auto text-center">\n' +
    '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-6">\n' +
    '      Ready to Build Your AI Solution?\n' +
    '    </h2>\n' +
    '    <p class="text-xl md:text-2xl mb-8 text-gray-300 font-light">\n' +
    '      We\'ve built AI voice agents and platforms for companies across industries. Let us build yours.\n' +
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

// Get all HTML files in guides directory (excluding index.html)
const guideFiles = fs.readdirSync(GUIDES_DIR)
  .filter(file => file.endsWith('.html') && file !== 'index.html');

console.log('Found ' + guideFiles.length + ' guides to update\n');

let updated = 0;
let errors = 0;

guideFiles.forEach((filename, index) => {
  try {
    const filepath = path.join(GUIDES_DIR, filename);
    const guideSlug = filename.replace('.html', '');

    console.log('  [' + (index + 1) + '/' + guideFiles.length + '] Processing: ' + filename);

    let content = fs.readFileSync(filepath, 'utf8');

    // Extract the title and meta description from existing file
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descMatch = content.match(/<meta name="description" content="([^"]+)"/);
    const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);

    const title = titleMatch ? titleMatch[1] : 'Guide | P0STMAN';
    const description = descMatch ? descMatch[1] : '';
    const canonical = canonicalMatch ? canonicalMatch[1] : 'https://p0stman.com/guides/' + filename;

    // Extract the article content (everything between <main> and </main>)
    const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    if (!mainMatch) {
      console.log('    [SKIP] Could not find <main> tag');
      return;
    }
    const articleContent = mainMatch[1];

    // Build new page
    let newHTML = headerTemplate
      .replace(/{{META_TITLE}}/g, title)
      .replace(/{{META_DESCRIPTION}}/g, description)
      .replace(/{{CANONICAL_URL}}/g, canonical)
      .replace(/{{SCHEMA_MARKUP}}/g, '');

    // Add the article content wrapped in main
    newHTML += '<main class="container-premium-wide py-16">\n' + articleContent + '\n</main>\n\n';

    // Add conversion sections
    const conversionSections = generateConversionSections(guideSlug);
    newHTML += conversionSections;

    // Add conversion template
    newHTML += conversionTemplate;

    // Add footer
    newHTML += footerTemplate;

    // Write updated file
    fs.writeFileSync(filepath, newHTML);
    console.log('    [OK] Updated with new header and conversion sections');
    updated++;

  } catch (error) {
    console.log('    [ERROR] ' + error.message);
    errors++;
  }
});

console.log('\n═══════════════════════════════════════════════════════');
console.log('GUIDE UPDATE COMPLETE!\n');
console.log('Updated: ' + updated + ' guides');
console.log('Errors: ' + errors);
console.log('Total: ' + guideFiles.length + ' guides');
console.log('═══════════════════════════════════════════════════════\n');
