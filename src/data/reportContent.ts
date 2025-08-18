import { ReportSection } from '../utils/contentParser';

// Import all markdown content as strings
// Note: In a real implementation, you'd use a bundler plugin or dynamic imports
// For now, we'll create the structure and you can paste the content

export const reportSections: Record<string, ReportSection> = {
  'executive-summary': {
    id: 'executive-summary',
    title: 'Executive Summary',
    stat: '$320B economic impact by 2030',
    quote: 'The Middle East has a once-in-a-generation chance to lead the AI era',
    author: 'Paul Gosnell',
    role: 'Founder, P0STMAN.com',
    content: {
      title: 'Executive Summary: AI in the Middle East 2025',
      content: `Artificial Intelligence (AI) has moved from vision statements to real-world deployment across the Middle East. Governments, sovereign wealth funds, corporates, and startups are all converging on a shared understanding: AI is not a "future technology" — it is already reshaping economies, cities, and societies today.

## Where We Are Now

The Middle East is one of the **fastest-growing AI regions in the world**, with GCC nations leading the charge. Landmark strategies like **UAE's National AI Strategy 2031** and **Saudi Arabia's Vision 2030** have positioned AI as a pillar of diversification.

Investment is flowing: **>$20 billion pledged** across the GCC for AI by 2030. Adoption is accelerating across **healthcare, finance, energy, transport, and government services**. Public sentiment is cautiously optimistic: citizens see opportunity but fear job displacement.

## Where We're Heading

By **2030, AI could contribute $320 billion to the region's GDP** (PwC). Sovereign AI models and Arabic-language foundation models will emerge as key differentiators. Smart cities like **NEOM** will become global AI testbeds.

AI will underpin **energy transition, healthcare transformation, and defence modernisation**. Workforce disruption is inevitable: up to **45% of jobs will be AI-augmented**, demanding urgent reskilling.`,
      keyStats: [
        '$320 billion potential GDP contribution by 2030',
        '>$20 billion pledged across GCC for AI',
        '45% of jobs will be AI-augmented',
        'Fastest-growing AI region globally'
      ]
    }
  },
  
  'government': {
    id: 'government',
    title: 'Government & Smart Cities',
    stat: '75% reduction in vehicle inspection times',
    quote: 'Governments in the Middle East are not waiting for the private sector to lead. They are setting the pace.',
    author: 'Report Analysis',
    role: 'AI Middle East 2025',
    content: {
      title: 'Government & Smart Cities: Leading the Charge',
      content: `Governments in the Middle East have emerged as the most aggressive adopters of AI in the region. Unlike in some Western markets, where adoption is often slowed by fragmented regulation and legacy structures, Gulf governments are structured to act quickly.

## Dubai: From Smart City Vision to AI Reality

Dubai's Roads and Transport Authority (RTA) has implemented AI-powered robotic inspection systems that reduced vehicle inspection times by **75%**. This single deployment saved more than **1,700 staff hours** annually and cut periodic maintenance costs by a quarter.

The Dubai Electricity and Water Authority (DEWA) pioneered "Rammas," an AI-powered virtual employee. In 2024 alone, Rammas handled **2 million citizen inquiries** across billing, services, and complaints. Since its launch, it has answered over **11.4 million questions**.

## Saudi Arabia: Building AI into Vision 2030

The launch of **HUMAIN**, a Public Investment Fund (PIF) company, reflects Saudi's sovereign AI ambition. With an initial purchase of **18,000 NVIDIA Blackwell GPUs**, HUMAIN will provide the Kingdom with the compute backbone for large-scale AI training and deployment.`,
      keyStats: [
        '75% reduction in vehicle inspection times',
        '2 million citizen inquiries handled by AI in 2024',
        '18,000 NVIDIA Blackwell GPUs in HUMAIN',
        '1,700 staff hours saved annually'
      ]
    }
  },
  
  'healthcare': {
    id: 'healthcare',
    title: 'Healthcare',
    stat: '20% accuracy improvement in AI diagnostics',
    quote: 'AI is becoming an essential enabler of precision, access, and efficiency in Middle Eastern healthcare systems.',
    author: 'Healthcare Analysis',
    role: 'AI Middle East 2025',
    content: {
      title: 'Healthcare: AI for Precision and Access',
      content: `Healthcare is one of the most promising areas for AI transformation in the Middle East. With rapidly growing populations, rising lifestyle-related diseases, and pressure to modernise healthcare delivery, AI is being deployed to improve diagnostics, patient experience, and system efficiency.

## UAE: AI-Powered Care Delivery

Dubai Health Authority (DHA) has launched AI-driven radiology platforms that assist doctors in diagnosing conditions such as cancer, fractures, and strokes. Early pilots have shown accuracy improvements of up to **20%** compared to traditional workflows.

Cleveland Clinic Abu Dhabi and Sheikh Shakhbout Medical City are experimenting with AI-enabled predictive analytics to identify patients at risk of complications, enabling earlier interventions.

## Saudi Arabia: Scaling Smart Hospitals

King Faisal Specialist Hospital has rolled out AI models that predict ICU patient deterioration hours in advance, allowing life-saving interventions. With **40%+** of adults overweight and high rates of diabetes, AI-enabled prevention and management tools are seen as vital for population health.`,
      keyStats: [
        '20% accuracy improvement in diagnostics',
        '40%+ of adults overweight',
        'ICU patient deterioration predicted hours in advance',
        'AI triage assistants prioritising cases'
      ]
    }
  }
};

// Helper function to get section by ID
export const getSection = (id: string): ReportSection | undefined => {
  return reportSections[id];
};

// Get all section IDs in order
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