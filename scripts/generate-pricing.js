#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://p0stman.com';
const TEMPLATES_DIR = path.join(__dirname, '../templates');
const DATA_DIR = path.join(__dirname, '../data');
const OUTPUT_DIR = path.join(__dirname, '../public/pricing');

console.log('Starting P0STMAN Pricing Pages Generator\n');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const headerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'header.html'), 'utf8');
const footerTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'footer.html'), 'utf8');
const bodyTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'pricing-body.html'), 'utf8');
const pricingPages = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'pricing-pages.json'), 'utf8'));

console.log('Loaded ' + pricingPages.length + ' pricing pages\n');

function generateMainContent(page) {
  let content = '';

  // Generate pricing tiers section if available
  if (page.pricingTiers) {
    content += '<section class="py-16 md:py-24 px-6 bg-gray-50">\n';
    content += '  <div class="max-w-6xl mx-auto">\n';
    content += '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-4 text-center">Pricing Tiers</h2>\n';
    content += '    <p class="text-xl text-gray-600 font-light mb-12 text-center max-w-3xl mx-auto">Real pricing from 50+ projects. Choose based on complexity, not arbitrary packages.</p>\n';
    content += '    <div class="grid md:grid-cols-3 gap-8 mb-16">\n';

    page.pricingTiers.forEach(tier => {
      content += '      <div class="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">\n';
      content += '        <h3 class="text-2xl font-light text-gray-900 mb-2">' + tier.name + '</h3>\n';
      content += '        <div class="text-4xl font-light text-blue-600 mb-2">' + tier.range + '</div>\n';
      content += '        <div class="text-sm text-gray-600 font-light mb-4">Timeline: ' + tier.timeline + '</div>\n';
      content += '        <p class="text-gray-700 font-light mb-6">' + tier.description + '</p>\n';
      content += '        <div class="mb-6">\n';
      content += '          <h4 class="text-sm font-medium text-gray-900 mb-3">Includes:</h4>\n';
      content += '          <ul class="space-y-2">\n';
      tier.includes.forEach(item => {
        content += '            <li class="flex items-start gap-2 text-sm text-gray-700 font-light">\n';
        content += '              <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">\n';
        content += '                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>\n';
        content += '              </svg>\n';
        content += '              <span>' + item + '</span>\n';
        content += '            </li>\n';
      });
      content += '          </ul>\n';
      content += '        </div>\n';
      content += '        <div class="border-t border-gray-200 pt-4 mb-4">\n';
      content += '          <div class="text-sm text-gray-600 font-light mb-1">Best For:</div>\n';
      content += '          <div class="text-sm text-gray-900 font-light">' + tier.bestFor + '</div>\n';
      content += '        </div>\n';
      content += '        <div class="bg-blue-50 rounded-lg p-4 mb-6">\n';
      content += '          <div class="text-sm text-gray-600 font-light mb-1">Monthly Running Cost</div>\n';
      content += '          <div class="text-2xl font-light text-blue-600">' + tier.monthlyRunning + '</div>\n';
      content += '        </div>\n';

      if (tier.realExample) {
        content += '        <div class="border-t border-gray-200 pt-4">\n';
        content += '          <div class="text-sm font-medium text-gray-900 mb-2">Real Example:</div>\n';
        content += '          <div class="text-sm text-gray-700 font-light mb-1"><strong>' + tier.realExample.client + '</strong></div>\n';
        content += '          <div class="text-sm text-gray-600 font-light mb-2">' + tier.realExample.scope + '</div>\n';
        content += '          <div class="text-sm text-blue-600 font-light mb-1">' + tier.realExample.cost + '</div>\n';
        content += '          <div class="text-sm text-gray-600 font-light">' + tier.realExample.result + '</div>\n';
        content += '        </div>\n';
      }

      content += '      </div>\n';
    });

    content += '    </div>\n';
    content += '  </div>\n';
    content += '</section>\n';
  }

  // Generate cost breakdown section
  if (page.costBreakdown) {
    content += '<section class="py-16 md:py-24 px-6 bg-white">\n';
    content += '  <div class="max-w-6xl mx-auto">\n';
    content += '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-12 text-center">Detailed Cost Breakdown</h2>\n';
    content += '    <div class="grid md:grid-cols-2 gap-12">\n';

    // One-time costs
    content += '      <div>\n';
    content += '        <h3 class="text-2xl font-light text-gray-900 mb-6">One-Time Build Costs</h3>\n';
    content += '        <div class="space-y-4">\n';
    page.costBreakdown.oneTime.forEach(item => {
      content += '          <div class="bg-gray-50 rounded-lg p-6">\n';
      content += '            <div class="flex items-start justify-between mb-2">\n';
      content += '              <h4 class="text-lg font-light text-gray-900">' + item.item + '</h4>\n';
      content += '              <span class="text-lg font-light text-blue-600 ml-4">' + item.cost + '</span>\n';
      content += '            </div>\n';
      content += '            <p class="text-sm text-gray-600 font-light">' + item.description + '</p>\n';
      content += '          </div>\n';
    });
    content += '        </div>\n';
    content += '      </div>\n';

    // Monthly costs
    content += '      <div>\n';
    content += '        <h3 class="text-2xl font-light text-gray-900 mb-6">Monthly Running Costs</h3>\n';
    content += '        <div class="space-y-4">\n';
    page.costBreakdown.monthly.forEach(item => {
      content += '          <div class="bg-gray-50 rounded-lg p-6">\n';
      content += '            <div class="flex items-start justify-between mb-2">\n';
      content += '              <h4 class="text-lg font-light text-gray-900">' + item.item + '</h4>\n';
      content += '              <span class="text-lg font-light text-blue-600 ml-4">' + item.cost + '</span>\n';
      content += '            </div>\n';
      content += '            <p class="text-sm text-gray-600 font-light">' + item.description + '</p>\n';
      content += '          </div>\n';
    });
    content += '        </div>\n';
    content += '      </div>\n';

    content += '    </div>\n';
    content += '  </div>\n';
    content += '</section>\n';
  }

  // Generate hidden costs section
  if (page.hiddenCosts) {
    content += '<section class="py-16 md:py-24 px-6 bg-red-50">\n';
    content += '  <div class="max-w-4xl mx-auto">\n';
    content += '    <div class="text-center mb-12">\n';
    content += '      <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-4 text-red-900">Hidden Costs to Watch For</h2>\n';
    content += '      <p class="text-xl text-red-800 font-light">Most agencies won\'t tell you about these. We do.</p>\n';
    content += '    </div>\n';
    content += '    <div class="space-y-4">\n';
    page.hiddenCosts.forEach(cost => {
      content += '      <div class="bg-white rounded-lg p-6 border-l-4 border-red-500">\n';
      content += '        <div class="flex items-start justify-between mb-2">\n';
      content += '          <h3 class="text-xl font-light text-gray-900">' + cost.title + '</h3>\n';
      content += '          <span class="text-lg font-light text-red-600 ml-4">' + cost.cost + '</span>\n';
      content += '        </div>\n';
      content += '        <p class="text-gray-700 font-light">' + cost.description + '</p>\n';
      content += '      </div>\n';
    });
    content += '    </div>\n';
    content += '  </div>\n';
    content += '</section>\n';
  }

  // Generate cost comparison section
  if (page.costComparison) {
    const comp = page.costComparison;
    content += '<section class="py-16 md:py-24 px-6 bg-gradient-to-br from-blue-900 to-gray-900 text-white">\n';
    content += '  <div class="max-w-6xl mx-auto">\n';
    content += '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-4 text-center">Traditional vs AI Automation</h2>\n';
    content += '    <p class="text-xl text-gray-300 font-light mb-12 text-center">Real cost comparison over 12 months</p>\n';
    content += '    <div class="grid md:grid-cols-2 gap-8 mb-12">\n';

    // Traditional approach
    content += '      <div class="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">\n';
    content += '        <h3 class="text-2xl font-light mb-6">' + comp.traditional.title + '</h3>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm text-gray-300 font-light mb-2">Setup Cost</div>\n';
    content += '          <div class="text-3xl font-light text-white mb-3">' + comp.traditional.setup + '</div>\n';
    content += '          <ul class="space-y-1">\n';
    comp.traditional.setupItems.forEach(item => {
      content += '            <li class="text-sm text-gray-300 font-light">• ' + item + '</li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm text-gray-300 font-light mb-2">Monthly Cost</div>\n';
    content += '          <div class="text-3xl font-light text-white mb-3">' + comp.traditional.monthly + '</div>\n';
    content += '          <ul class="space-y-1">\n';
    comp.traditional.monthlyItems.forEach(item => {
      content += '            <li class="text-sm text-gray-300 font-light">• ' + item + '</li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="border-t border-white/20 pt-4">\n';
    content += '          <div class="text-sm text-gray-300 font-light mb-1">Annual Total (Year 1)</div>\n';
    content += '          <div class="text-4xl font-light text-red-400">' + comp.traditional.annual + '</div>\n';
    content += '          <div class="text-sm text-gray-400 font-light mt-2">' + comp.traditional.notes + '</div>\n';
    content += '        </div>\n';
    content += '      </div>\n';

    // AI automation
    content += '      <div class="bg-white/10 backdrop-blur rounded-lg p-8 border-2 border-blue-500">\n';
    content += '        <div class="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-light rounded-full mb-4">RECOMMENDED</div>\n';
    content += '        <h3 class="text-2xl font-light mb-6">' + comp.aiAutomation.title + '</h3>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm text-gray-300 font-light mb-2">Setup Cost</div>\n';
    content += '          <div class="text-3xl font-light text-white mb-3">' + comp.aiAutomation.setup + '</div>\n';
    content += '          <ul class="space-y-1">\n';
    comp.aiAutomation.setupItems.forEach(item => {
      content += '            <li class="text-sm text-gray-300 font-light">• ' + item + '</li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm text-gray-300 font-light mb-2">Monthly Cost</div>\n';
    content += '          <div class="text-3xl font-light text-white mb-3">' + comp.aiAutomation.monthly + '</div>\n';
    content += '          <ul class="space-y-1">\n';
    comp.aiAutomation.monthlyItems.forEach(item => {
      content += '            <li class="text-sm text-gray-300 font-light">• ' + item + '</li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="border-t border-white/20 pt-4">\n';
    content += '          <div class="text-sm text-gray-300 font-light mb-1">Annual Total (Year 1)</div>\n';
    content += '          <div class="text-4xl font-light text-green-400">' + comp.aiAutomation.annual + '</div>\n';
    content += '          <div class="text-sm text-gray-400 font-light mt-2">' + comp.aiAutomation.notes + '</div>\n';
    content += '        </div>\n';
    content += '      </div>\n';

    content += '    </div>\n';

    // Savings highlight
    content += '    <div class="bg-green-500/20 border border-green-500/30 rounded-lg p-8 text-center">\n';
    content += '      <div class="text-sm text-green-300 font-light mb-2">Potential Savings (Year 1)</div>\n';
    content += '      <div class="text-5xl font-light text-green-400 mb-2">' + comp.savings + '</div>\n';
    content += '      <div class="text-lg text-gray-300 font-light">Typical payback period: ' + comp.payback + '</div>\n';
    content += '    </div>\n';

    content += '  </div>\n';
    content += '</section>\n';
  }

  // Generate comparison matrix for build vs buy
  if (page.comparisonMatrix) {
    const matrix = page.comparisonMatrix;
    content += '<section class="py-16 md:py-24 px-6 bg-gray-50">\n';
    content += '  <div class="max-w-7xl mx-auto">\n';
    content += '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-4 text-center">Side-by-Side Comparison</h2>\n';
    content += '    <p class="text-xl text-gray-600 font-light mb-12 text-center">All costs factored in. You decide.</p>\n';
    content += '    <div class="grid md:grid-cols-3 gap-8 mb-16">\n';

    // Build in-house
    content += '      <div class="bg-white rounded-lg p-8 border border-gray-200">\n';
    content += '        <h3 class="text-2xl font-light text-gray-900 mb-6">' + matrix.buildInHouse.name + '</h3>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm text-gray-600 font-light mb-2">Year 1 Cost</div>\n';
    content += '          <div class="text-3xl font-light text-blue-600 mb-4">' + matrix.buildInHouse.setup.total + '</div>\n';
    matrix.buildInHouse.setup.breakdown.forEach(item => {
      content += '          <div class="text-sm text-gray-700 font-light mb-2">\n';
      content += '            <span class="font-medium">' + item.item + ':</span> ' + item.cost + '\n';
      content += '          </div>\n';
    });
    content += '        </div>\n';
    content += '        <div class="mb-6 pb-6 border-b border-gray-200">\n';
    content += '          <div class="text-sm text-gray-600 font-light mb-2">Timeline</div>\n';
    content += '          <div class="text-lg font-light text-gray-900">' + matrix.buildInHouse.timeline + '</div>\n';
    content += '        </div>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm font-medium text-green-700 mb-3">Pros:</div>\n';
    content += '          <ul class="space-y-2">\n';
    matrix.buildInHouse.pros.forEach(pro => {
      content += '            <li class="flex items-start gap-2 text-sm text-gray-700 font-light">\n';
      content += '              <svg class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">\n';
      content += '                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>\n';
      content += '              </svg>\n';
      content += '              <span>' + pro + '</span>\n';
      content += '            </li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm font-medium text-red-700 mb-3">Cons:</div>\n';
    content += '          <ul class="space-y-2">\n';
    matrix.buildInHouse.cons.forEach(con => {
      content += '            <li class="flex items-start gap-2 text-sm text-gray-700 font-light">\n';
      content += '              <svg class="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">\n';
      content += '                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>\n';
      content += '              </svg>\n';
      content += '              <span>' + con + '</span>\n';
      content += '            </li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="bg-blue-50 rounded p-4">\n';
    content += '          <div class="text-xs text-gray-600 font-light mb-1">Best For:</div>\n';
    content += '          <div class="text-sm text-gray-900 font-light">' + matrix.buildInHouse.bestFor + '</div>\n';
    content += '        </div>\n';
    content += '      </div>\n';

    // Hire agency
    content += '      <div class="bg-white rounded-lg p-8 border-2 border-blue-500 relative">\n';
    content += '        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-light rounded-full">RECOMMENDED</div>\n';
    content += '        <h3 class="text-2xl font-light text-gray-900 mb-6">' + matrix.hireAgency.name + '</h3>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm text-gray-600 font-light mb-2">Year 1 Cost</div>\n';
    content += '          <div class="text-3xl font-light text-blue-600 mb-4">' + matrix.hireAgency.setup.total + '</div>\n';
    matrix.hireAgency.setup.breakdown.forEach(item => {
      content += '          <div class="text-sm text-gray-700 font-light mb-2">\n';
      content += '            <span class="font-medium">' + item.item + ':</span> ' + item.cost + '\n';
      content += '          </div>\n';
    });
    content += '        </div>\n';
    content += '        <div class="mb-6 pb-6 border-b border-gray-200">\n';
    content += '          <div class="text-sm text-gray-600 font-light mb-2">Timeline</div>\n';
    content += '          <div class="text-lg font-light text-gray-900">' + matrix.hireAgency.timeline + '</div>\n';
    content += '        </div>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm font-medium text-green-700 mb-3">Pros:</div>\n';
    content += '          <ul class="space-y-2">\n';
    matrix.hireAgency.pros.forEach(pro => {
      content += '            <li class="flex items-start gap-2 text-sm text-gray-700 font-light">\n';
      content += '              <svg class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">\n';
      content += '                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>\n';
      content += '              </svg>\n';
      content += '              <span>' + pro + '</span>\n';
      content += '            </li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm font-medium text-red-700 mb-3">Cons:</div>\n';
    content += '          <ul class="space-y-2">\n';
    matrix.hireAgency.cons.forEach(con => {
      content += '            <li class="flex items-start gap-2 text-sm text-gray-700 font-light">\n';
      content += '              <svg class="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">\n';
      content += '                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>\n';
      content += '              </svg>\n';
      content += '              <span>' + con + '</span>\n';
      content += '            </li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="bg-blue-50 rounded p-4">\n';
    content += '          <div class="text-xs text-gray-600 font-light mb-1">Best For:</div>\n';
    content += '          <div class="text-sm text-gray-900 font-light">' + matrix.hireAgency.bestFor + '</div>\n';
    content += '        </div>\n';
    content += '      </div>\n';

    // SaaS platform
    content += '      <div class="bg-white rounded-lg p-8 border border-gray-200">\n';
    content += '        <h3 class="text-2xl font-light text-gray-900 mb-6">' + matrix.saasplatform.name + '</h3>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm text-gray-600 font-light mb-2">Year 1 Cost</div>\n';
    content += '          <div class="text-3xl font-light text-blue-600 mb-4">' + matrix.saasplatform.setup.total + '</div>\n';
    matrix.saasplatform.setup.breakdown.forEach(item => {
      content += '          <div class="text-sm text-gray-700 font-light mb-2">\n';
      content += '            <span class="font-medium">' + item.item + ':</span> ' + item.cost + '\n';
      content += '          </div>\n';
    });
    content += '          <div class="text-sm text-gray-700 font-light mb-2 mt-4">\n';
    content += '            <span class="font-medium">Ongoing:</span> ' + matrix.saasplatform.ongoing + '\n';
    content += '          </div>\n';
    content += '        </div>\n';
    content += '        <div class="mb-6 pb-6 border-b border-gray-200">\n';
    content += '          <div class="text-sm text-gray-600 font-light mb-2">Timeline</div>\n';
    content += '          <div class="text-lg font-light text-gray-900">' + matrix.saasplatform.timeline + '</div>\n';
    content += '        </div>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm font-medium text-green-700 mb-3">Pros:</div>\n';
    content += '          <ul class="space-y-2">\n';
    matrix.saasplatform.pros.forEach(pro => {
      content += '            <li class="flex items-start gap-2 text-sm text-gray-700 font-light">\n';
      content += '              <svg class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">\n';
      content += '                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>\n';
      content += '              </svg>\n';
      content += '              <span>' + pro + '</span>\n';
      content += '            </li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="mb-6">\n';
    content += '          <div class="text-sm font-medium text-red-700 mb-3">Cons:</div>\n';
    content += '          <ul class="space-y-2">\n';
    matrix.saasplatform.cons.forEach(con => {
      content += '            <li class="flex items-start gap-2 text-sm text-gray-700 font-light">\n';
      content += '              <svg class="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">\n';
      content += '                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>\n';
      content += '              </svg>\n';
      content += '              <span>' + con + '</span>\n';
      content += '            </li>\n';
    });
    content += '          </ul>\n';
    content += '        </div>\n';
    content += '        <div class="bg-blue-50 rounded p-4">\n';
    content += '          <div class="text-xs text-gray-600 font-light mb-1">Best For:</div>\n';
    content += '          <div class="text-sm text-gray-900 font-light">' + matrix.saasplatform.bestFor + '</div>\n';
    content += '        </div>\n';
    content += '      </div>\n';

    content += '    </div>\n';
    content += '  </div>\n';
    content += '</section>\n';
  }

  // Generate decision framework
  if (page.decisionFramework) {
    content += '<section class="py-16 md:py-24 px-6 bg-white">\n';
    content += '  <div class="max-w-4xl mx-auto">\n';
    content += '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-12 text-center">Decision Framework</h2>\n';
    content += '    <div class="space-y-6">\n';
    page.decisionFramework.forEach(item => {
      content += '      <div class="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">\n';
      content += '        <div class="text-lg font-light text-gray-900 mb-2">' + item.scenario + '</div>\n';
      content += '        <div class="flex items-center gap-3 mb-2">\n';
      content += '          <span class="text-sm text-gray-600 font-light">Recommendation:</span>\n';
      content += '          <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">' + item.recommendation + '</span>\n';
      content += '        </div>\n';
      content += '        <p class="text-gray-700 font-light">' + item.reason + '</p>\n';
      content += '      </div>\n';
    });
    content += '    </div>\n';
    content += '  </div>\n';
    content += '</section>\n';
  }

  // Generate real world example
  if (page.realWorldExample) {
    const example = page.realWorldExample;
    content += '<section class="py-16 md:py-24 px-6 bg-gradient-to-br from-blue-50 to-gray-50">\n';
    content += '  <div class="max-w-4xl mx-auto">\n';
    content += '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-12 text-center">Real World Example</h2>\n';
    content += '    <div class="bg-white rounded-lg p-8 shadow-lg">\n';
    content += '      <div class="mb-6">\n';
    content += '        <div class="text-sm text-gray-600 font-light mb-2">Company</div>\n';
    content += '        <div class="text-2xl font-light text-gray-900">' + example.company + '</div>\n';
    content += '      </div>\n';
    content += '      <div class="mb-8">\n';
    content += '        <div class="text-sm text-gray-600 font-light mb-2">Situation</div>\n';
    content += '        <p class="text-lg text-gray-700 font-light">' + example.situation + '</p>\n';
    content += '      </div>\n';
    content += '      <div class="grid md:grid-cols-2 gap-6 mb-8">\n';
    content += '        <div class="bg-gray-50 rounded-lg p-6">\n';
    content += '          <h4 class="text-lg font-light text-gray-900 mb-4">Option 1: ' + example.option1.approach + '</h4>\n';
    content += '          <div class="space-y-3">\n';
    content += '            <div>\n';
    content += '              <span class="text-sm text-gray-600 font-light">Cost: </span>\n';
    content += '              <span class="text-base font-light text-gray-900">' + example.option1.cost + '</span>\n';
    content += '            </div>\n';
    content += '            <div>\n';
    content += '              <span class="text-sm text-gray-600 font-light">Timeline: </span>\n';
    content += '              <span class="text-base font-light text-gray-900">' + example.option1.timeline + '</span>\n';
    content += '            </div>\n';
    content += '            <div>\n';
    content += '              <span class="text-sm text-gray-600 font-light">Result: </span>\n';
    content += '              <span class="text-base font-light text-gray-900">' + example.option1.result + '</span>\n';
    content += '            </div>\n';
    content += '          </div>\n';
    content += '        </div>\n';
    content += '        <div class="bg-blue-50 rounded-lg p-6 border-2 border-blue-500">\n';
    content += '          <h4 class="text-lg font-light text-gray-900 mb-4">Option 2: ' + example.option2.approach + '</h4>\n';
    content += '          <div class="space-y-3">\n';
    content += '            <div>\n';
    content += '              <span class="text-sm text-gray-600 font-light">Cost: </span>\n';
    content += '              <span class="text-base font-light text-gray-900">' + example.option2.cost + '</span>\n';
    content += '            </div>\n';
    content += '            <div>\n';
    content += '              <span class="text-sm text-gray-600 font-light">Timeline: </span>\n';
    content += '              <span class="text-base font-light text-gray-900">' + example.option2.timeline + '</span>\n';
    content += '            </div>\n';
    content += '            <div>\n';
    content += '              <span class="text-sm text-gray-600 font-light">Result: </span>\n';
    content += '              <span class="text-base font-light text-gray-900">' + example.option2.result + '</span>\n';
    content += '            </div>\n';
    content += '          </div>\n';
    content += '        </div>\n';
    content += '      </div>\n';
    content += '      <div class="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">\n';
    content += '        <div class="text-sm text-gray-600 font-light mb-2">Final Decision</div>\n';
    content += '        <p class="text-lg text-gray-900 font-light">' + example.decision + '</p>\n';
    content += '      </div>\n';
    content += '    </div>\n';
    content += '  </div>\n';
    content += '</section>\n';
  }

  // Generate calculator interface (for calculator page)
  if (page.calculatorQuestions) {
    content += '<section class="py-16 md:py-24 px-6 bg-white">\n';
    content += '  <div class="max-w-4xl mx-auto">\n';
    content += '    <div class="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">\n';
    content += '      <p class="text-center text-gray-700 font-light text-lg">Interactive calculator coming soon. For now, <a href="/contact" class="text-blue-600 hover:text-blue-700 underline">schedule a consultation</a> and we\'ll calculate your exact costs in 30 minutes.</p>\n';
    content += '    </div>\n';
    content += '    <h2 class="text-3xl md:text-5xl font-light tracking-tight mb-12 text-center">How It Works</h2>\n';
    content += '    <div class="space-y-8">\n';
    page.calculatorQuestions.forEach((question, index) => {
      content += '      <div class="bg-gray-50 rounded-lg p-6">\n';
      content += '        <div class="flex items-start gap-4">\n';
      content += '          <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-light">' + (index + 1) + '</div>\n';
      content += '          <div class="flex-1">\n';
      content += '            <h3 class="text-xl font-light text-gray-900 mb-4">' + question.question + '</h3>\n';
      if (question.options) {
        content += '            <div class="space-y-2">\n';
        question.options.forEach(option => {
          content += '              <div class="text-sm text-gray-700 font-light">• ' + option.label + '</div>\n';
        });
        content += '            </div>\n';
      }
      content += '          </div>\n';
      content += '        </div>\n';
      content += '      </div>\n';
    });
    content += '    </div>\n';
    content += '  </div>\n';
    content += '</section>\n';
  }

  return content;
}

function generateFAQHTML(faqs) {
  return faqs.map(faq =>
    '\n        <details class="bg-white p-6 rounded-lg border border-gray-200">' +
    '\n          <summary class="text-xl font-light cursor-pointer hover:text-blue-600">' + faq.question + '</summary>' +
    '\n          <p class="mt-4 text-gray-600 font-light">' + faq.answer + '</p>' +
    '\n        </details>'
  ).join('\n');
}

pricingPages.forEach((page, index) => {
  const mainContent = generateMainContent(page);
  const faqHTML = generateFAQHTML(page.faqs);

  let html = headerTemplate
    .replace(/{{META_TITLE}}/g, page.metaTitle)
    .replace(/{{META_DESCRIPTION}}/g, page.metaDescription)
    .replace(/{{CANONICAL_URL}}/g, BASE_URL + '/pricing/' + page.slug + '/')
    .replace(/{{SCHEMA_MARKUP}}/g, '');

  html += bodyTemplate
    .replace(/{{HERO_H1}}/g, page.heroH1)
    .replace(/{{HERO_SUBTEXT}}/g, page.heroSubtext)
    .replace(/{{CATEGORY}}/g, page.category)
    .replace(/{{LAST_UPDATED}}/g, page.lastUpdated)
    .replace(/{{READ_TIME}}/g, page.readTime)
    .replace(/{{PROBLEM_STATEMENT}}/g, page.problemStatement)
    .replace(/{{MAIN_CONTENT}}/g, mainContent)
    .replace(/{{FAQ_ITEMS}}/g, faqHTML);

  html += footerTemplate;

  const pageDir = path.join(OUTPUT_DIR, page.slug);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  fs.writeFileSync(path.join(pageDir, 'index.html'), html);

  console.log('  ' + (index + 1) + '/' + pricingPages.length + ' [OK] ' + page.name);
});

console.log('\nAll pricing pages generated!');
