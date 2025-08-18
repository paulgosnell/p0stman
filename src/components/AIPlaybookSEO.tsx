import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AIPlaybookSEOProps {
  page?: 'landing' | 'presentation';
}

const AIPlaybookSEO: React.FC<AIPlaybookSEOProps> = ({ page = 'landing' }) => {
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}/ai-playbook`;
  
  const seoData = {
    landing: {
      title: "AI in the Middle East 2025: The Playbook for People & Business | Free Download",
      description: "Download the definitive AI in the Middle East 2025 Playbook. Featuring exclusive insights from H.E. Omar Sultan Al Olama, $320B economic impact analysis, infrastructure roadmaps, and strategic action plans for businesses. Free PDF with email signup.",
      keywords: "AI Middle East 2025, artificial intelligence UAE, Saudi Arabia AI strategy, Omar Sultan Al Olama, AI economic impact, HUMAIN initiative, AI infrastructure, Middle East technology, AI policy framework, business AI strategy"
    },
    presentation: {
      title: "AI in the Middle East 2025: Executive Presentation | $320B Economic Impact",
      description: "Explore the comprehensive AI in the Middle East 2025 presentation featuring $320B economic impact projections, infrastructure build-out plans, ministerial insights, and 12-month action plans for AI adoption in the region.",
      keywords: "AI Middle East presentation, UAE AI minister, Saudi AI investment, HUMAIN GPUs, AI compute infrastructure, Middle East AI policy, business AI transformation"
    }
  };

  const currentSEO = seoData[page];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{currentSEO.title}</title>
      <meta name="title" content={currentSEO.title} />
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <meta name="author" content="P0STMAN" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:image" content={`${baseUrl}/ai-middle-east-2025-og.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="AI in the Middle East 2025 - The Playbook for People & Business" />
      <meta property="og:site_name" content="P0STMAN" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={currentSEO.title} />
      <meta property="twitter:description" content={currentSEO.description} />
      <meta property="twitter:image" content={`${baseUrl}/ai-middle-east-2025-og.jpg`} />
      <meta property="twitter:image:alt" content="AI in the Middle East 2025 - The Playbook for People & Business" />
      <meta name="twitter:creator" content="@p0stman" />
      <meta name="twitter:site" content="@p0stman" />

      {/* LinkedIn */}
      <meta property="linkedin:owner" content="P0STMAN" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="AI Middle East 2025 Playbook" />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Report",
          "name": "AI in the Middle East 2025: The Playbook for People & Business",
          "description": currentSEO.description,
          "url": currentUrl,
          "image": `${baseUrl}/ai-middle-east-2025-og.jpg`,
          "author": {
            "@type": "Organization",
            "name": "P0STMAN"
          },
          "publisher": {
            "@type": "Organization",
            "name": "P0STMAN",
            "url": baseUrl
          },
          "datePublished": "2025-01-18",
          "dateModified": "2025-01-18",
          "inLanguage": "en-US",
          "about": [
            {
              "@type": "Thing",
              "name": "Artificial Intelligence"
            },
            {
              "@type": "Place",
              "name": "Middle East"
            },
            {
              "@type": "Thing",
              "name": "Business Strategy"
            }
          ],
          "keywords": currentSEO.keywords,
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>

      {/* Preload critical resources */}
      <link rel="preload" href="/ai-middle-east-2025-og.jpg" as="image" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default AIPlaybookSEO;