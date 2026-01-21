#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const guidesDir = path.join(__dirname, '../public/guides');

// Get all HTML files in guides directory
const guideFiles = fs.readdirSync(guidesDir).filter(file => file.endsWith('.html'));

console.log(`Found ${guideFiles.length} guide files to process`);

guideFiles.forEach(file => {
  const filePath = path.join(guidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has schema
  if (content.includes('application/ld+json')) {
    console.log(`✓ ${file} - Already has schema, skipping`);
    return;
  }

  // Extract metadata from the file
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const descMatch = content.match(/<meta name="description" content="(.*?)">/);
  const canonicalMatch = content.match(/<link rel="canonical" href="(.*?)">/);
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/);

  if (!titleMatch || !descMatch || !canonicalMatch) {
    console.log(`⚠ ${file} - Missing required metadata, skipping`);
    return;
  }

  const title = titleMatch[1].replace(' | P0STMAN', '').trim();
  const description = descMatch[1];
  const url = canonicalMatch[1];
  const headline = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : title;

  // Get current date (for dateModified) - use file modification time
  const stats = fs.statSync(filePath);
  const dateModified = stats.mtime.toISOString().split('T')[0];
  const datePublished = dateModified; // Use same date for now

  // Create Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": "Paul Gosnell",
      "url": "https://p0stman.com/paulgosnell"
    },
    "publisher": {
      "@type": "Organization",
      "name": "POSTMAN",
      "url": "https://p0stman.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://p0stman.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  // Create Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://p0stman.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://p0stman.com/guides/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": headline,
        "item": url
      }
    ]
  };

  // Build schema markup HTML
  const schemaMarkup = `
  <!-- Schema Markup -->
  <script type="application/ld+json">
${JSON.stringify(articleSchema, null, 2)}
</script>
  <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
</script>
`;

  // Find insertion point (after Twitter Card meta tags, before Tailwind script)
  const insertPoint = content.indexOf('<!-- Tailwind CSS CDN -->');

  if (insertPoint === -1) {
    console.log(`⚠ ${file} - Could not find insertion point, skipping`);
    return;
  }

  // Insert schema markup
  const newContent = content.slice(0, insertPoint) + schemaMarkup + '\n  ' + content.slice(insertPoint);

  // Write back to file
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✅ ${file} - Added Article + Breadcrumb schema`);
});

console.log(`\n✅ Schema markup added to ${guideFiles.length} guides`);
