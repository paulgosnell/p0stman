import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bot, Edit2, Trash2, Plus, Save, X, Loader2, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useCallback } from 'react';
import { supabase } from '../../lib/supabase';
import type { GuideSection } from '../../lib/types';

const insertMarkdown = (text: string, start: number, end: number, prefix: string, suffix = prefix) => {
  return text.substring(0, start) + prefix + text.substring(start, end) + suffix + text.substring(end);
};

export default function GuideAdmin() {
  const navigate = useNavigate();
  const [sections, setSections] = useState<GuideSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    content: '',
    order_position: 0,
    video_url: '',
    chapter_type: 'chapter' as 'chapter' | 'sub-chapter'
  });

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.ctrlKey && !e.metaKey) return;

    const textarea = e.currentTarget;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);

    let newContent = editForm.content;

    switch (e.key.toLowerCase()) {
      case 'b': // Bold
        e.preventDefault();
        newContent = insertMarkdown(textarea.value, start, end, '**');
        break;
      case 'i': // Italic
        e.preventDefault();
        newContent = insertMarkdown(textarea.value, start, end, '_');
        break;
      case 'k': // Code
        e.preventDefault();
        newContent = insertMarkdown(textarea.value, start, end, '`');
        break;
      case 'h': // Heading
        e.preventDefault();
        newContent = insertMarkdown(textarea.value, start, end, '### ');
        break;
      default:
        return;
    }

    setEditForm(prev => ({ ...prev, content: newContent }));
    
    // Set cursor position after update
    setTimeout(() => {
      textarea.focus();
      const newCursor = start + (newContent.length - textarea.value.length);
      textarea.setSelectionRange(newCursor, newCursor);
    }, 0);
  }, [editForm.content]);
  useEffect(() => {
    checkAuth();
    loadSections();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session || session.user.email !== 'hello@p0stman.com') {
      navigate('/admin/login');
    }
  };

  const loadSections = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('guide_sections')
        .select()
        .order('order_position', { ascending: true });

      if (error) throw error;
      setSections(data || []);
    } catch (err) {
      console.error('Error loading sections:', err);
      setError(err instanceof Error ? err.message : 'Failed to load sections');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (section: GuideSection) => {
    setEditingId(section.id);
    setEditForm({
      title: section.title,
      content: section.content,
      order_position: section.order_position,
      video_url: section.video_url || '',
      chapter_type: section.chapter_type || 'chapter'
    });
  };

  const handleSave = async () => {
    const saveError = document.getElementById('save-error');
    try {
      if (!editingId) return;
      
      saveError?.scrollIntoView({ behavior: 'smooth' });
      setError('Saving changes... Please wait.');
      
      // First update the row
      const { error: updateError, data: updatedData } = await supabase
        .from('guide_sections').upsert({
          id: editingId,
          title: editForm.title,
          content: editForm.content,
          order_position: editForm.order_position,
          video_url: editForm.video_url || null,
          chapter_type: editForm.chapter_type
        });

      if (updateError) {
        setError(`Save failed: ${updateError.message}`);
        saveError?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // Update local state with fresh data
      await loadSections();

      // Show success message
      setError('Changes saved successfully!');
      saveError?.scrollIntoView({ behavior: 'smooth' });
      
      setEditingId(null);

      // Clear success message after 2 seconds
      setTimeout(() => setError(null), 2000);
    } catch (err) {
      console.error('Error saving section:', err);
      setError(err instanceof Error ? err.message : 'Failed to save section');
      saveError?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this section?')) return;

    try {
      const { error } = await supabase
        .from('guide_sections')
        .delete()
        .eq('id', id);

      if (error) throw error;
      loadSections();
    } catch (err) {
      console.error('Error deleting section:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete section');
    }
  };

  const handleCreate = async () => {
    try {
      const { data, error } = await supabase
        .from('guide_sections')
        .insert([{
          title: 'New Section',
          content: 'Enter content here...',
          order_position: sections.length + 1,
          chapter_type: 'chapter'
        }]);

      if (error) throw error;
      loadSections();
    } catch (err) {
      console.error('Error creating section:', err);
      setError(err instanceof Error ? err.message : 'Failed to create section');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold">Guide Content Management</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Admin
            </button>
            <button
              onClick={handleCreate}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Section
            </button>
          </div>
        </div>

        {error && (
          <div id="save-error" className={`mb-8 p-4 rounded-lg border ${
            error.startsWith('Saving') ? 'bg-blue-50 border-blue-200 text-blue-600' :
            error.startsWith('Changes saved') ? 'bg-green-50 border-green-200 text-green-600' :
            'bg-red-50 border-red-200 text-red-600'
          } transition-all duration-300`}>
            {error}
          </div>
        )}

        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              {editingId === section.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Content
                    </label>
                    <div className="mb-2 text-sm text-gray-500">
                      Supports Markdown formatting
                    </div>
                    <textarea
                      value={editForm.content}
                      onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                      onKeyDown={handleKeyDown}
                      rows={10}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="mt-2 text-sm text-gray-500">
                      Keyboard shortcuts: 
                      <kbd className="px-1.5 py-0.5 mx-1 bg-gray-100 border border-gray-300 rounded">Ctrl/⌘ + B</kbd> for bold,
                      <kbd className="px-1.5 py-0.5 mx-1 bg-gray-100 border border-gray-300 rounded">Ctrl/⌘ + I</kbd> for italic,
                      <kbd className="px-1.5 py-0.5 mx-1 bg-gray-100 border border-gray-300 rounded">Ctrl/⌘ + K</kbd> for code,
                      <kbd className="px-1.5 py-0.5 mx-1 bg-gray-100 border border-gray-300 rounded">Ctrl/⌘ + H</kbd> for heading
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preview
                      </label>
                      <div className="p-4 bg-gray-50 rounded-lg prose max-w-none">
                        <ReactMarkdown>{editForm.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Chapter Type
                    </label>
                    <select
                      value={editForm.chapter_type}
                      onChange={(e) => setEditForm({ ...editForm, chapter_type: e.target.value as 'chapter' | 'sub-chapter' })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="chapter">Chapter</option>
                      <option value="sub-chapter">Sub-chapter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Order Position
                    </label>
                    <input
                      type="number"
                      value={editForm.order_position}
                      onChange={(e) => setEditForm({ ...editForm, order_position: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Video URL (optional)
                    </label>
                    <input
                      type="url"
                      value={editForm.video_url}
                      onChange={(e) => setEditForm({ ...editForm, video_url: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!editForm.title.trim() || !editForm.content.trim() || error?.startsWith('Saving')}
                    >
                      <Save className="w-5 h-5" />
                      {error?.startsWith('Saving') ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <X className="w-5 h-5" />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{section.title}</h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(section)}
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(section.id)}
                        className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="prose max-w-none line-clamp-3">
                    <ReactMarkdown>{section.content}</ReactMarkdown>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    Order: {section.order_position}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}