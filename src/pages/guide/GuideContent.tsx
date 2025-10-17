import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Bot } from 'lucide-react';
import { getGuideSections } from '../../lib/supabase/guides';
import AccessCheck from '../../components/guide/AccessCheck';
import type { GuideSection } from '../../lib/types';
import ChapterList from '../../components/guide/ChapterList';
import Breadcrumbs from '../../components/guide/Breadcrumbs';
import GuideIntro from '../../components/guide/GuideIntro';
import DarkModeToggle from '../../components/guide/DarkModeToggle';
import { useDarkMode } from '../../hooks/useDarkMode';
import HeaderV3Global from '../../components/v3/HeaderV3Global';
import FooterV3 from '../../components/v3/FooterV3';

export default function GuideContent() {
  const [sections, setSections] = useState<GuideSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDark, setIsDark] = useDarkMode();

  useEffect(() => {
    async function loadSections() {
      try {
        setLoading(true);
        const data = await getGuideSections();
        setSections(data);
      } catch (err) {
        console.error('Error loading sections:', err);
        setError(err instanceof Error ? err.message : 'Failed to load guide content');
      } finally {
        setLoading(false);
      }
    }

    loadSections();
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
          <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Loading guide content...</p>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Guide', href: '/guide' },
    { label: 'Contents' }
  ];

  if (error) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
        <div className="text-center">
          <Bot className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Error Loading Content</h2>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{error}</p>
          <Link 
            to="/guide" 
            className="text-blue-500 hover:text-blue-400"
          >
            Back to Guide Overview
          </Link>
        </div>
      </div>
    );
  }

  return (
    <AccessCheck>
      <HeaderV3Global />
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors`}>

      <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} isDark={isDark} />
          </div>
          <GuideIntro isDark={isDark} />
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <BookOpen className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold mb-2 md:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Guide Contents
              </h1>
              <p className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Follow these chapters to master AI-powered development and bring your ideas to life.
              </p>
            </div>
          </div>

          {sections.length === 0 ? (
            <div className={`text-center py-12 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <Bot className={`w-12 h-12 ${isDark ? 'text-blue-400' : 'text-blue-600'} mx-auto mb-4`} />
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                No Content Available
              </h2>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                The guide content is currently being updated. Please check back soon!
              </p>
              <Link 
                to="/guide"
                className="inline-block mt-4 text-blue-500 hover:text-blue-400"
              >
                Back to Guide Overview
              </Link>
            </div>
          ) : (
            <ChapterList sections={sections} isDark={isDark} />
          )}
          
          <div className={`mt-12 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <span className="font-medium">Version 1.0</span>
              <span className="mx-2">•</span>
              <span>Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterV3 />
    </AccessCheck>
  );
}