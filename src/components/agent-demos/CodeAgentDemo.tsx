import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const codeSnippets = [
  {
    lines: [
      'async function analyzeUserData(userId) {',
      '  const data = await fetchUser(userId);',
      '  const insights = processWithAI(data);',
      '  return insights;',
      '}',
    ],
  },
  {
    lines: [
      'const optimizedQuery = db.users',
      '  .select(\'id\', \'name\', \'email\')',
      '  .where(\'active\', true)',
      '  .orderBy(\'created_at\', \'desc\');',
    ],
  },
];

export default function CodeAgentDemo() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const snippet = codeSnippets[currentSnippet];

  useEffect(() => {
    if (lineIndex >= snippet.lines.length) {
      // Wait then switch to next snippet
      const timer = setTimeout(() => {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        setDisplayedCode('');
        setLineIndex(0);
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(timer);
    }

    const currentLine = snippet.lines[lineIndex];

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    } else {
      // Move to next line
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => prev + '\n');
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [charIndex, lineIndex, snippet, currentSnippet]);

  return (
    <div className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-white/40 text-[10px]">agent-output.js</span>
      </div>

      <pre className="text-green-400/90 leading-relaxed whitespace-pre-wrap">
        {displayedCode}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1.5 h-3.5 bg-green-400 ml-0.5"
        />
      </pre>
    </div>
  );
}
