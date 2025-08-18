// Script to parse all markdown files and generate content data
// Run with: node src/scripts/generateContent.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, '../../docs');
const outputFile = path.join(__dirname, '../data/generatedContent.ts');

// Mapping of file names to section IDs and metadata
const sectionMapping = {
  'ai_me_2025_executive_summary.md': {
    id: 'executive-summary',
    title: 'Executive Summary',
    icon: 'DocumentTextIcon'
  },
  'ai_me_2025_government_smart_cities.md': {
    id: 'government',
    title: 'Government & Smart Cities',
    icon: 'BuildingOffice2Icon'
  },
  'ai_me_2025_government_smartcities.md': {
    id: 'government-alt',
    title: 'Government & Smart Cities',
    icon: 'BuildingOffice2Icon'
  },
  'ai_me_2025_healthcare.md': {
    id: 'healthcare',
    title: 'Healthcare',
    icon: 'HeartIcon'
  },
  'ai_me_2025_financial_services.md': {
    id: 'financial-services',
    title: 'Financial Services',
    icon: 'BanknotesIcon'
  },
  'ai_me_2025_energy_utilities.md': {
    id: 'energy',
    title: 'Energy & Utilities',
    icon: 'BoltIcon'
  },
  'ai_me_2025_transportation_mobility.md': {
    id: 'transport',
    title: 'Transport & Mobility',
    icon: 'TruckIcon'
  },
  'ai_me_2025_education_workforce.md': {
    id: 'education',
    title: 'Education & Workforce',
    icon: 'AcademicCapIcon'
  },
  'ai_me_2025_retail_consumer.md': {
    id: 'retail',
    title: 'Retail & Consumer',
    icon: 'ShoppingBagIcon'
  },
  'ai_me_2025_defence_security.md': {
    id: 'defence',
    title: 'Defence & Security',
    icon: 'ShieldCheckIcon'
  },
  'ai_me_2025_challenges_risks.md': {
    id: 'challenges',
    title: 'Challenges & Risks',
    icon: 'ExclamationTriangleIcon'
  },
  'ai_me_2025_future_outlook.md': {
    id: 'future-outlook',
    title: 'Future Outlook',
    icon: 'EyeIcon'
  },
  'ai_me_2025_action_playbook.md': {
    id: 'action-playbook',
    title: 'Action Playbook',
    icon: 'ClipboardDocumentCheckIcon'
  }
};

// Extract key statistics from content
function extractKeyStats(content) {
  const stats = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    // Look for bold text with numbers/percentages
    const boldMatches = line.match(/\*\*(.*?)\*\*/g);
    if (boldMatches) {
      boldMatches.forEach(match => {
        const text = match.replace(/\*\*/g, '');
        if (/\d+%|\$\d+|\d+\s*(billion|million|thousand)/i.test(text)) {
          stats.push(text);
        }
      });
    }
  }
  
  return stats.slice(0, 4); // Return top 4 stats
}

// Extract a key statistic for the section cover
function extractMainStat(content) {
  const stats = extractKeyStats(content);
  if (stats.length > 0) {
    return stats[0];
  }
  
  // Look for percentage or dollar amounts in the content
  const percentMatch = content.match(/\d+%/);
  const dollarMatch = content.match(/\$\d+\s*(billion|million|thousand)?/i);
  
  if (percentMatch) return percentMatch[0];
  if (dollarMatch) return dollarMatch[0];
  
  return 'Key insights and data';
}

// Extract a quote from the content
function extractQuote(content) {
  // Look for quoted text
  const quoteMatch = content.match(/"([^"]+)"/);
  if (quoteMatch) {
    return quoteMatch[1];
  }
  
  // Look for key takeaway
  const takeawayMatch = content.match(/\*\*Key takeaway:\*\*\s*(.+)/);
  if (takeawayMatch) {
    return takeawayMatch[1];
  }
  
  // Extract first sentence of conclusion or summary
  const conclusionMatch = content.match(/(?:In conclusion|Key takeaway|The result):\s*([^.]+\.)/i);
  if (conclusionMatch) {
    return conclusionMatch[1];
  }
  
  return 'Leading transformation across the Middle East';
}

// Generate the content file
function generateContentFile() {
  const sections = {};
  
  // Read all markdown files
  const files = fs.readdirSync(docsDir).filter(file => file.endsWith('.md'));
  
  files.forEach(file => {
    const mapping = sectionMapping[file];
    if (!mapping) return;
    
    const filePath = path.join(docsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract title from first heading
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : mapping.title;
    
    const keyStats = extractKeyStats(content);
    const mainStat = extractMainStat(content);
    const quote = extractQuote(content);
    
    sections[mapping.id] = {
      id: mapping.id,
      title: title,
      stat: mainStat,
      quote: quote,
      author: 'AI Middle East 2025 Report',
      role: 'Research Analysis',
      icon: mapping.icon,
      content: {
        title: title,
        content: content,
        keyStats: keyStats.length > 0 ? keyStats : undefined
      }
    };
  });
  
  // Generate TypeScript file
  const tsContent = `// Auto-generated content from markdown files
// Generated on: ${new Date().toISOString()}

import { ReportSection } from '../utils/contentParser';

export const generatedSections: Record<string, ReportSection> = ${JSON.stringify(sections, null, 2)};

export const getSectionOrder = (): string[] => {
  return [
    'executive-summary',
    'government',
    'healthcare',
    'financial-services',
    'energy',
    'transport',
    'education',
    'retail',
    'defence',
    'challenges',
    'future-outlook',
    'action-playbook'
  ];
};

export const getSection = (id: string): ReportSection | undefined => {
  return generatedSections[id];
};
`;
  
  fs.writeFileSync(outputFile, tsContent);
  console.log(`Generated content file: ${outputFile}`);
  console.log(`Processed ${Object.keys(sections).length} sections`);
}

// Run the generator
generateContentFile();