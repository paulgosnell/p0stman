import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Bot, ArrowLeft, ArrowRight, MessageSquare, Plus, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getGuideSection } from '../../lib/supabase/guides';
import AccessCheck from '../../components/guide/AccessCheck';
import type { GuideSection, Note } from '../../lib/types';
import Breadcrumbs from '../../components/guide/Breadcrumbs';
import DarkModeToggle from '../../components/guide/DarkModeToggle';
import ReadingProgress from '../../components/guide/ReadingProgress';
import KeyboardNav from '../../components/guide/KeyboardNav';
import { useDarkMode } from '../../hooks/useDarkMode';

function useNotes(chapterId: string | undefined) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showNotes, setShowNotes] = useState(false);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    if (!chapterId) return;
    const savedNotes = localStorage.getItem(`chapter-${chapterId}-notes`);
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, [chapterId]);

  const saveNotes = useCallback((updatedNotes: Note[]) => {
    if (!chapterId) return;
    localStorage.setItem(`chapter-${chapterId}-notes`, JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  }, [chapterId]);

  const addNote = useCallback((text: string, highlight?: { start: number; end: number; content: string }) => {
    if (!chapterId) return;
    const newNotes = [...notes, {
      id: Date.now().toString(),
      chapterId: Number(chapterId),
      text,
      highlight,
      createdAt: new Date().toISOString()
    }];
    saveNotes(newNotes);
  }, [chapterId, notes, saveNotes]);

  const deleteNote = useCallback((noteId: string) => {
    const newNotes = notes.filter(note => note.id !== noteId);
    saveNotes(newNotes);
  }, [notes, saveNotes]);

  return { notes, showNotes, setShowNotes, newNote, setNewNote, addNote, deleteNote };
}

export default function ChapterContent() {
  const { id } = useParams();
  const [section, setSection] = useState<GuideSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDark, setIsDark] = useDarkMode();
  const { notes, showNotes, setShowNotes, newNote, setNewNote, addNote, deleteNote } = useNotes(id);

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    const content = range.toString().trim();
    if (!content) return;

    const start = range.startOffset;
    const end = range.endOffset;

    setNewNote(`Note about: "${content}"`);
    setShowNotes(true);
    addNote(newNote, { start, end, content });
  }, [addNote, newNote, setNewNote, setShowNotes]);

  useEffect(() => {
    async function loadSection() {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await getGuideSection(id);
        setSection(data);
      } catch (err) {
        console.error('Error loading section:', err);
        setError(err instanceof Error ? err.message : 'Failed to load chapter content');
      } finally {
        setLoading(false);
      }
    }

    loadSection();
    window.scrollTo(0, 0);
  }, [id]);

  const breadcrumbs = [
    { label: 'Contents', href: '/guide/content' },
    { label: section?.title || 'Loading...' }
  ];

  if (loading) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
          <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Loading chapter content...</p>
        </div>
      </div>
    );
  }

  if (error || !section) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
        <div className="text-center">
          <Bot className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Error Loading Chapter</h2>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{error || 'Chapter not found'}</p>
          <Link to="/guide/content" className="text-blue-400 hover:text-blue-300">
            Back to Guide Contents
          </Link>
        </div>
      </div>
    );
  }

  return (
    <AccessCheck>
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors`}>
      <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <KeyboardNav 
        nextSectionId={section.nextSection?.id} 
        prevSectionId={section.prevSection?.id}
      />
      <ReadingProgress isDark={isDark} />
      
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} isDark={isDark} />
          </div>
          <div className={`${isDark ? 'bg-gray-800/50' : 'bg-white'} rounded-xl shadow-sm p-4 md:p-12 backdrop-blur-sm`}>
            <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
              <BookOpen className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <h1 className={`text-xl md:text-3xl font-bold flex-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {section.title}
              </h1>
              <button
                onClick={() => setShowNotes(!showNotes)}
                className={`p-2 rounded-lg transition-colors ml-auto md:ml-0 ${
                  isDark 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>

            <div 
              className={`prose prose-sm md:prose-lg max-w-none ${isDark ? 'prose-invert' : ''} prose-headings:scroll-mt-20`}
              onMouseUp={handleTextSelection}
            >
              <ReactMarkdown>{section.content}</ReactMarkdown>
            </div>
            {section.video_url && (
              <div className="mt-8 md:mt-12">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-800">
                  <iframe
                    src={section.video_url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className={`mt-12 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
                {section.prevSection ? (
                  <Link
                    to={`/guide/content/${section.prevSection.id}`}
                    className={`group p-3 md:p-4 rounded-lg border ${isDark ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'} transition-colors`}
                  >
                    <div className="flex items-center gap-3">
                      <ArrowLeft className={`w-5 h-5 ${isDark ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-500 group-hover:text-blue-600'} transition-colors`} />
                      <div>
                        <div className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Previous</div>
                        <div className={`text-sm md:text-base font-medium mt-1 ${isDark ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors line-clamp-2`}>
                          {section.prevSection.title}
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {section.nextSection && (
                  <Link
                    to={`/guide/content/${section.nextSection.id}`}
                    className={`group p-3 md:p-4 rounded-lg border ${isDark ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'} transition-colors`}
                  >
                    <div className="flex items-center justify-end gap-3">
                      <div className="text-right">
                        <div className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Next</div>
                        <div className={`text-sm md:text-base font-medium mt-1 ${isDark ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} transition-colors line-clamp-2`}>
                          {section.nextSection.title}
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 ${isDark ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-500 group-hover:text-blue-600'} transition-colors`} />
                    </div>
                  </Link>
                )}
              </div>
              <div className={`mt-8 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Last updated: {new Date(section.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Reading Progress Bar */}
          <ReadingProgress isDark={isDark} />

          {/* Notes Panel */}
          <div className={`fixed top-0 right-0 h-full w-full md:w-80 transform transition-transform duration-300 ${
            showNotes ? 'translate-x-0' : 'translate-x-full'
          } ${isDark ? 'bg-gray-800' : 'bg-white'} border-l ${
            isDark ? 'border-gray-700' : 'border-gray-200'
          } shadow-xl z-50 overflow-y-auto`}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Notes</h3>
                <button
                  onClick={() => setShowNotes(false)}
                  className={`p-1 rounded hover:bg-gray-100 ${
                    isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add a note..."
                    className={`flex-1 px-3 py-2 rounded-lg border ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <button
                    onClick={() => {
                      if (newNote.trim()) {
                        addNote(newNote);
                        setNewNote('');
                      }
                    }}
                    className={`p-2 rounded-lg ${
                      isDark 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className={`p-3 rounded-lg ${
                        isDark 
                          ? 'bg-gray-700 text-gray-100' 
                          : 'bg-gray-50 text-gray-900'
                      }`}
                    >
                      {note.highlight && (
                        <div className={`mb-2 text-sm ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          "{note.highlight.content}"
                        </div>
                      )}
                      <p className="text-sm">{note.text}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className={`text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {new Date(note.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => deleteNote(note.id)}
                          className={`p-1 rounded hover:bg-gray-600/50 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AccessCheck>
  );
}