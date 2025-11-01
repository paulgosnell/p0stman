const fs = require('fs');
const path = require('path');

const guidesDir = path.join(__dirname, '../public/guides');
const guideFiles = fs.readdirSync(guidesDir).filter(file => file.endsWith('.html'));

console.log(`Fixing typography plugin for ${guideFiles.length} guide files...`);

guideFiles.forEach(file => {
  const filePath = path.join(guidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  console.log(`\nUpdating ${file}...`);

  // Add Typography plugin and custom prose styles
  const customStyles = `
  <style>
    body {
      font-weight: 300;
    }

    .mobile-menu {
      display: none;
    }

    .mobile-menu.active {
      display: block;
    }

    @media (max-width: 768px) {
      .mobile-menu {
        display: none;
      }
      .mobile-menu.active {
        display: block;
      }
    }

    /* Custom Prose Styles */
    .prose {
      color: #4b5563;
      max-width: 65ch;
    }

    .prose h2 {
      color: #111827;
      font-weight: 300;
      font-size: 2.25rem;
      margin-top: 2em;
      margin-bottom: 1em;
      line-height: 1.3;
    }

    .prose h3 {
      color: #111827;
      font-weight: 400;
      font-size: 1.875rem;
      margin-top: 1.6em;
      margin-bottom: 0.6em;
      line-height: 1.4;
    }

    .prose h4 {
      color: #111827;
      font-weight: 500;
      font-size: 1.5rem;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }

    .prose p {
      margin-top: 1.25em;
      margin-bottom: 1.25em;
      line-height: 1.75;
    }

    .prose strong {
      color: #111827;
      font-weight: 500;
    }

    .prose ul, .prose ol {
      margin-top: 1.25em;
      margin-bottom: 1.25em;
      padding-left: 1.625em;
    }

    .prose ul {
      list-style-type: disc;
    }

    .prose ol {
      list-style-type: decimal;
    }

    .prose li {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      line-height: 1.75;
    }

    .prose li::marker {
      color: #6b7280;
    }

    .prose table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 2em;
      margin-bottom: 2em;
    }

    .prose thead {
      border-bottom: 1px solid #e5e7eb;
    }

    .prose thead th {
      color: #111827;
      font-weight: 500;
      text-align: left;
      padding: 0.75rem;
      background-color: #f9fafb;
    }

    .prose tbody tr {
      border-bottom: 1px solid #e5e7eb;
    }

    .prose tbody td {
      padding: 0.75rem;
    }

    .prose blockquote {
      font-weight: 400;
      font-style: italic;
      color: #111827;
      border-left-width: 0.25rem;
      border-left-color: #e5e7eb;
      quotes: "\\201C""\\201D""\\2018""\\2019";
      margin-top: 1.6em;
      margin-bottom: 1.6em;
      padding-left: 1em;
    }

    .prose code {
      color: #111827;
      font-weight: 500;
      font-size: 0.875em;
      background-color: #f3f4f6;
      padding: 0.2em 0.4em;
      border-radius: 0.25rem;
    }

    .prose pre {
      background-color: #1f2937;
      color: #e5e7eb;
      overflow-x: auto;
      font-size: 0.875em;
      line-height: 1.7142857;
      margin-top: 1.7142857em;
      margin-bottom: 1.7142857em;
      border-radius: 0.375rem;
      padding: 0.8571429em 1.1428571em;
    }

    .prose pre code {
      background-color: transparent;
      border-width: 0;
      border-radius: 0;
      padding: 0;
      font-weight: inherit;
      color: inherit;
      font-size: inherit;
      font-family: inherit;
      line-height: inherit;
    }

    .prose a {
      color: #2563eb;
      text-decoration: underline;
      font-weight: 400;
    }

    .prose a:hover {
      color: #1d4ed8;
    }

    .prose-lg {
      font-size: 1.125rem;
      line-height: 1.7777778;
    }

    .prose-lg h2 {
      font-size: 2.5rem;
      margin-top: 1.5555556em;
      margin-bottom: 0.8888889em;
      line-height: 1.1111111;
    }

    .prose-lg h3 {
      font-size: 2rem;
      margin-top: 1.6666667em;
      margin-bottom: 0.6666667em;
      line-height: 1.3333333;
    }

    .prose-lg p {
      margin-top: 1.3333333em;
      margin-bottom: 1.3333333em;
    }

    .prose-lg ul, .prose-lg ol {
      margin-top: 1.3333333em;
      margin-bottom: 1.3333333em;
    }

    .prose-lg li {
      margin-top: 0.6666667em;
      margin-bottom: 0.6666667em;
    }
  </style>`;

  // Replace the existing style section
  content = content.replace(
    /<style>[\s\S]*?<\/style>/,
    customStyles
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Fixed ${file}`);
});

console.log(`\n✨ Successfully fixed typography for ${guideFiles.length} guide files!`);
