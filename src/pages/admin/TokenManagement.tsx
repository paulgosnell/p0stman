import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Plus, Loader2, CheckCircle, XCircle, Trash2, ArrowLeft } from 'lucide-react';
import { getAccessTokens, createAccessToken, revokeAccessToken } from '../../lib/supabase/guides';
import type { GuideAccessToken } from '../../lib/types';

export default function TokenManagement() {
  const [tokens, setTokens] = useState<GuideAccessToken[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [expiresIn, setExpiresIn] = useState('365');
  const [showNewToken, setShowNewToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadTokens();
  }, []);

  const loadTokens = async () => {
    try {
      setLoading(true);
      const data = await getAccessTokens();
      setTokens(data);
    } catch (err) {
      setError('Failed to load access tokens');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateToken = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim()) return;

    try {
      setIsCreating(true);
      setError(null);
      const token = await createAccessToken(newEmail, parseInt(expiresIn));
      setTokens([token, ...tokens]);
      setShowNewToken(token.token);
      setNewEmail('');
    } catch (err) {
      setError('Failed to create access token');
    } finally {
      setIsCreating(false);
    }
  };

  const handleRevokeToken = async (id: number) => {
    if (!confirm('Are you sure you want to revoke this token?')) return;

    try {
      await revokeAccessToken(id);
      setTokens(tokens.map(token => 
        token.id === id ? { ...token, is_valid: false } : token
      ));
    } catch (err) {
      setError('Failed to revoke token');
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
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Access Token Management</h2>
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
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleCreateToken} className="space-y-4 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="user@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expires In (Days)
              </label>
              <select
                value={expiresIn}
                onChange={(e) => setExpiresIn(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="30">30 days</option>
                <option value="90">90 days</option>
                <option value="180">180 days</option>
                <option value="365">1 year</option>
                <option value="730">2 years</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={isCreating || !newEmail.trim()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreating ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Creating...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Create Token
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>

        {showNewToken && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Token Created Successfully</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Make sure to copy this token now. You won't be able to see it again!
            </p>
            <div className="flex items-center gap-2">
              <code className="flex-1 px-4 py-2 bg-white rounded-lg border border-green-200 font-mono text-sm">
                {showNewToken}
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(showNewToken);
                  alert('Token copied to clipboard!');
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Copy
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expires</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Used</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tokens.map((token) => (
                <tr key={token.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm text-gray-900">{token.email}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {new Date(token.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {new Date(token.expires_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {token.last_used_at ? new Date(token.last_used_at).toLocaleDateString() : 'Never'}
                  </td>
                  <td className="px-4 py-4">
                    {token.is_valid ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3" />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                        <XCircle className="w-3 h-3" />
                        Revoked
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {token.is_valid && (
                      <button
                        onClick={() => handleRevokeToken(token.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}