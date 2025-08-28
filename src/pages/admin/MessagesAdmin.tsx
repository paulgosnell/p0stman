import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Mail, Loader2, ArrowLeft, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { supabase, markContactAsReplied, hideContact, deleteContact } from '../../lib/supabase';
import type { Contact } from '../../lib/types';

export default function MessagesAdmin() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Contact | null>(null);
  const [replyText, setReplyText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState<Contact | null>(null);
  const [showHiddenMessages, setShowHiddenMessages] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
    loadMessages();
  }, []);

  const filteredMessages = messages.filter(msg => 
    showHiddenMessages ? true : !msg.hidden
  );

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session || session.user.email !== 'hello@p0stman.com') {
      navigate('/admin/login');
    }
  };

  const loadMessages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (err) {
      console.error('Error loading messages:', err);
      setError(err instanceof Error ? err.message : 'Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = (message: Contact) => {
    const subject = `Re: ${message.project_type} Project Discussion`;
    const body = replyText || `Hello ${message.name},\n\nThank you for your message about the ${message.project_type} project. I appreciate you taking the time to share the details with me.\n\nBest regards,\nPaul`;
    const mailtoUrl = `mailto:${message.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setEmailSent(message);
  };

  const markAsReplied = async (message: Contact, replyContent: string) => {
    try {
      const updatedContact = await markContactAsReplied(message.id, replyContent);
      setSelectedMessage(updatedContact);
      setMessages(messages.map(msg => 
        msg.id === message.id 
          ? updatedContact
          : msg
      ));
      setEmailSent(null);
      setReplyText('');
      setError(null);
    } catch (err) {
      console.error('Error marking message as replied:', err);
      setError('Failed to update message status');
    }
  };

  const handleHideMessage = async (id: number) => {
    try {
      await hideContact(id);
      const updatedMessages = messages.map(msg =>
        msg.id === id
          ? { ...msg, hidden: true }
          : msg
      );
      setMessages(updatedMessages);
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    } catch (err) {
      console.error('Error hiding message:', err);
      setError('Failed to hide message');
    }
  };

  const handleDeleteMessage = async (id: number) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    
    setError(null);
    try {
      const deleted = await deleteContact(id);
      if (!deleted) {
        throw new Error('Message not found or already deleted');
      }
      
      const updatedMessages = messages.filter(msg => msg.id !== id);
      setMessages(updatedMessages);
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    } catch (err) {
      console.error('Error deleting message:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete message');
      // Refresh messages list to ensure UI is in sync with DB
      loadMessages();
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
            <h1 className="text-2xl font-bold">Messages</h1>
          </div>
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Admin
          </button>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Message List */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Inbox</h2>
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setShowHiddenMessages(!showHiddenMessages)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                {showHiddenMessages ? 'Hide Archived' : 'Show Archived'}
              </button>
            </div>
            {messages.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No messages yet</p>
              </div>
            ) : (
              filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedMessage?.id === message.id
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-white border-gray-200 hover:border-blue-200'
                  }`}
                >
                  <div 
                    className="flex items-start justify-between gap-4 cursor-pointer"
                    onClick={() => setSelectedMessage(message)}
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">{message.name}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-500">{message.email}</p>
                        {message.hidden && (
                          <span className="text-xs text-gray-400">(Archived)</span>
                        )}
                      </div>
                      {message.replied && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs mt-2">
                          <CheckCircle className="w-3 h-3" />
                          Replied
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(message.created_at).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHideMessage(message.id);
                        }}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Archive
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMessage(message.id);
                        }}
                        className="text-sm text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div 
                    className="mt-2 cursor-pointer" 
                    onClick={() => setSelectedMessage(message)}
                  >
                    <div className="text-sm font-medium text-gray-700">
                      {message.project_type}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {message.description}
                    </p>
                  </div>
                </div>
              ))
            )}

            {/* Reply Confirmation Modal */}
            {emailSent && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-40">
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-full max-w-md">
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Confirm Message Sent</h3>
                    <button
                      onClick={() => setEmailSent(null)}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Close"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="p-6">
                    <p className="text-gray-600">Did you send the email reply?</p>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
                    <button
                      onClick={() => setEmailSent(null)}
                      className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      No
                    </button>
                    <button
                      onClick={() => markAsReplied(emailSent, replyText)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Yes, Mark as Replied
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Message Detail */}
          {selectedMessage ? (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {selectedMessage.name}
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500">Email</div>
                    <div className="text-gray-900">{selectedMessage.email}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Project Type</div>
                    <div className="text-gray-900">{selectedMessage.project_type}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Message</div>
                    <div className="text-gray-900 whitespace-pre-wrap">
                      {selectedMessage.description}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">Received</div>
                    <div className="text-gray-900">
                      {new Date(selectedMessage.created_at).toLocaleString()}
                      {selectedMessage.replied && (
                        <div className="mt-2">
                          <div className="text-sm font-medium text-gray-500">Replied</div>
                          <div className="text-gray-900">
                            {new Date(selectedMessage.replied_at!).toLocaleString()}
                          </div>
                          <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                            <div className="text-sm font-medium text-gray-500 mb-2">Previous Reply</div>
                            <div className="text-gray-900 whitespace-pre-wrap text-sm">
                              {selectedMessage.reply_content}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                {!selectedMessage.replied ? (
                  <>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Reply</h3>
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Type your reply..."
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-4"
                    />
                    <button
                      onClick={() => handleSendEmail(selectedMessage)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      Send Reply
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-center">
              <div className="text-center">
                <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Select a message to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}