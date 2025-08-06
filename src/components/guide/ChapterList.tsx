import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { GuideSection } from '../../lib/types';

interface ChapterListProps {
  sections: GuideSection[];
  isDark?: boolean;
}

export default function ChapterList({ sections, isDark }: ChapterListProps) {
  const [expandedChapters, setExpandedChapters] = React.useState<Record<string, boolean>>({});

  const toggleChapter = (chapterNum: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterNum]: !prev[chapterNum]
    }));
  };

  // Group sections by chapter number
  const chapters = sections.reduce((acc, section) => {
    if (section.chapter_type === 'chapter') {
      // Extract chapter number from title (e.g., "Chapter 1: Title" -> "1")
      const match = section.title.match(/^Chapter (\d+):/);
      if (!match) return acc;

      const chapterNum = match[1];
      if (!acc[chapterNum]) {
        acc[chapterNum] = {
          main: section,
          subChapters: []
        };
      } else {
        acc[chapterNum].main = section;
      }
    } else {
      // Extract chapter number from sub-chapter title (e.g., "1.1" -> "1")
      const match = section.title.match(/^(\d+)\.\d+/);
      if (!match) return acc;
      
      const chapterNum = match[1];
      if (!acc[chapterNum]) {
        acc[chapterNum] = {
          main: undefined,
          subChapters: [section]
        };
      } else {
        acc[chapterNum].subChapters.push(section);
      }
    }

    return acc;
  }, {} as Record<string, { main?: GuideSection; subChapters: GuideSection[] }>);

  return (
    <div className="space-y-8">
      {Object.entries(chapters)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([chapterNum, { main, subChapters }]) => (
          <div key={chapterNum} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm hover:shadow-md transition-shadow p-4 md:p-6`}>
            {main && (
              <div
                className="flex items-start justify-between gap-4 cursor-pointer group"
                onClick={() => toggleChapter(chapterNum)}
              >
                <div className="flex-1">
                  <Link
                    to={`/guide/content/${main.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="block group"
                  >
                    <h2 className={`text-lg md:text-xl font-semibold ${isDark ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors flex items-center gap-2`}>
                      {main.title}
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-normal text-gray-500">
                        (~{Math.max(1, Math.ceil(main.content.split(/\s+/).length / 200))} min)
                      </span>
                    </h2>
                  </Link>
                  {expandedChapters[chapterNum] && (
                    <div className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'} line-clamp-2 prose ${isDark ? 'prose-invert' : ''} max-w-none`}>
                      <ReactMarkdown>{main.content.split('\n')[0]}</ReactMarkdown>
                    </div>
                  )}
                </div>
                <button
                  className={`p-1 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors mt-1`}
                >
                  {expandedChapters[chapterNum] ? (
                    <ChevronUp className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                  )}
                </button>
              </div>
            )}
            
            {subChapters.length > 0 && expandedChapters[chapterNum] && (
              <div className={`mt-4 pl-3 md:pl-4 border-l-2 ${isDark ? 'border-gray-700' : 'border-gray-100'} space-y-2 md:space-y-3`}>
                {subChapters
                  .sort((a, b) => a.order_position - b.order_position)
                  .map((subChapter) => (
                    <Link
                      key={subChapter.id}
                      to={`/guide/content/${subChapter.id}`}
                      className="block group"
                    >
                      <h3 className={`${isDark ? 'text-gray-300 group-hover:text-blue-400' : 'text-gray-700 group-hover:text-blue-600'} transition-colors flex items-center gap-2 text-sm`}>
                        {subChapter.title}
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-gray-500">
                          (~{Math.max(1, Math.ceil(subChapter.content.split(/\s+/).length / 200))} min)
                        </span>
                      </h3>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}