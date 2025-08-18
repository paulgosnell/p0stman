// Content parser for markdown files
export interface SectionContent {
  title: string;
  content: string;
  keyStats?: string[];
  challenges?: string[];
  opportunities?: string[];
  nextSteps?: string[];
}

export interface ReportSection {
  id: string;
  title: string;
  stat?: string;
  quote?: string;
  author?: string;
  role?: string;
  content: SectionContent;
}

// Parse markdown content and extract structured data
export const parseMarkdownContent = (markdown: string): SectionContent => {
  const lines = markdown.split('\n');
  let title = '';
  let content = '';
  const keyStats: string[] = [];
  const challenges: string[] = [];
  const opportunities: string[] = [];
  const nextSteps: string[] = [];
  
  let currentSection = '';
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Extract title (first # heading)
    if (trimmedLine.startsWith('# ') && !title) {
      title = trimmedLine.replace('# ', '');
      continue;
    }
    
    // Identify sections
    if (trimmedLine.toLowerCase().includes('what\'s next') || 
        trimmedLine.toLowerCase().includes('next steps')) {
      currentSection = 'nextSteps';
      continue;
    }
    
    if (trimmedLine.toLowerCase().includes('challenge') || 
        trimmedLine.toLowerCase().includes('constraint')) {
      currentSection = 'challenges';
      continue;
    }
    
    if (trimmedLine.toLowerCase().includes('opportunity') || 
        trimmedLine.toLowerCase().includes('where we\'re heading')) {
      currentSection = 'opportunities';
      continue;
    }
    
    // Extract bullet points based on current section
    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
      const bulletContent = trimmedLine.replace(/^[-*] /, '');
      
      switch (currentSection) {
        case 'challenges':
          challenges.push(bulletContent);
          break;
        case 'opportunities':
          opportunities.push(bulletContent);
          break;
        case 'nextSteps':
          nextSteps.push(bulletContent);
          break;
        default:
          // Look for stats (contains numbers or percentages)
          if (/\d+%|\$\d+|\d+\s*(billion|million|thousand)/i.test(bulletContent)) {
            keyStats.push(bulletContent);
          }
      }
    }
    
    // Build main content
    content += line + '\n';
  }
  
  return {
    title,
    content: content.trim(),
    keyStats: keyStats.length > 0 ? keyStats : undefined,
    challenges: challenges.length > 0 ? challenges : undefined,
    opportunities: opportunities.length > 0 ? opportunities : undefined,
    nextSteps: nextSteps.length > 0 ? nextSteps : undefined
  };
};

// Extract key statistics from content
export const extractKeyStats = (content: string): string[] => {
  const stats: string[] = [];
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
    
    // Look for standalone statistics
    const statMatches = line.match(/\d+%|\$\d+\s*(billion|million|thousand)|\d+\s*(billion|million|thousand)/gi);
    if (statMatches) {
      statMatches.forEach(stat => {
        if (!stats.includes(stat)) {
          stats.push(stat);
        }
      });
    }
  }
  
  return stats.slice(0, 4); // Return top 4 stats
};

// Extract quotes from content
export const extractQuotes = (content: string): Array<{quote: string, context?: string}> => {
  const quotes: Array<{quote: string, context?: string}> = [];
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Look for quoted text
    if (line.startsWith('"') && line.endsWith('"')) {
      quotes.push({
        quote: line.replace(/^"|"$/g, ''),
        context: lines[i + 1]?.trim() || undefined
      });
    }
    
    // Look for blockquotes
    if (line.startsWith('> ')) {
      quotes.push({
        quote: line.replace('> ', ''),
        context: lines[i + 1]?.trim() || undefined
      });
    }
  }
  
  return quotes;
};