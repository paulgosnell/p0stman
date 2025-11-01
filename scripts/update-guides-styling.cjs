const fs = require('fs');
const path = require('path');

const guidesDir = path.join(__dirname, '../public/guides');

// Read all HTML files in the guides directory
const guideFiles = fs.readdirSync(guidesDir).filter(file => file.endsWith('.html'));

console.log(`Found ${guideFiles.length} guide files to update...`);

guideFiles.forEach(file => {
  const filePath = path.join(guidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  console.log(`\nUpdating ${file}...`);

  // 1. Update body background from dark to light
  content = content.replace(
    /class="bg-black text-gray-900 font-light"/g,
    'class="bg-white text-gray-900 font-light"'
  );
  content = content.replace(
    /class="bg-black text-gray-100 font-light"/g,
    'class="bg-white text-gray-900 font-light"'
  );

  // 2. Update container styles
  content = content.replace(
    /class="container-premium-wide py-16"/g,
    'class="max-w-6xl mx-auto px-6 py-16"'
  );

  // 3. Update h1 - remove gradient, use clean style
  content = content.replace(
    /class="text-premium-5xl font-bold text-gradient-purple mb-6"/g,
    'class="text-5xl md:text-6xl font-thin text-gray-900 leading-tight mb-6"'
  );

  // 4. Update lead paragraph
  content = content.replace(
    /class="text-premium-2xl text-gray-300 mb-4"/g,
    'class="text-xl text-gray-600 font-light mb-4"'
  );

  // 5. Update published date
  content = content.replace(
    /class="text-gray-400"/g,
    'class="text-gray-500 text-sm"'
  );

  // 6. Update prose styles - remove dark mode
  content = content.replace(
    /class="prose prose-lg prose-invert max-w-none"/g,
    'class="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:font-light prose-li:text-gray-600 prose-li:font-light prose-strong:text-gray-900 prose-strong:font-medium"'
  );

  // 7. Update table styles from dark to light
  content = content.replace(
    /<table class="w-full border-collapse my-8">/g,
    '<table class="w-full border-collapse my-8 bg-white">'
  );
  content = content.replace(
    /class="bg-gray-800"/g,
    'class="bg-gray-50"'
  );
  content = content.replace(
    /class="border border-gray-700/g,
    'class="border border-gray-200'
  );

  // 8. Update section backgrounds
  content = content.replace(
    /bg-gray-900/g,
    'bg-gray-50'
  );
  content = content.replace(
    /bg-gray-800/g,
    'bg-white'
  );

  // 9. Update text colors
  content = content.replace(
    /text-gray-300/g,
    'text-gray-600'
  );
  content = content.replace(
    /text-gray-400/g,
    'text-gray-500'
  );

  // 10. Update border colors
  content = content.replace(
    /border-gray-700/g,
    'border-gray-200'
  );
  content = content.replace(
    /border-gray-800/g,
    'border-gray-200'
  );

  // 11. Add eyebrow styling to article header (add after opening <header> tag)
  content = content.replace(
    /(<header class="mb-12">)\s*(<h1)/,
    '$1\n        <p class="text-sm text-gray-400 uppercase tracking-wider mb-6">Guide</p>\n        $2'
  );

  // 12. Update any remaining dark text to light theme
  content = content.replace(
    /text-gray-100/g,
    'text-gray-900'
  );
  content = content.replace(
    /text-gray-200/g,
    'text-gray-700'
  );

  // Write updated content back to file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated ${file}`);
});

console.log(`\n✨ Successfully updated ${guideFiles.length} guide files!`);
