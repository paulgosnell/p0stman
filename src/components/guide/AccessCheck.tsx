import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bot, Lock } from 'lucide-react';
import { verifyGuideAccess } from '../../lib/supabase/guides';

export default function AccessCheck({ children }: { children: React.ReactNode }) {
  const [isVerifying, setIsVerifying] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [token, setToken] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedToken = localStorage.getItem('guideAccessToken');
    if (storedToken) {
      verifyToken(storedToken);
    } else {
      setIsVerifying(false);
    }
  }, []);

  const verifyToken = async (accessToken: string) => {
    setIsVerifying(true);
    setError(null);

    try {
      const isValid = await verifyGuideAccess(accessToken);
      
      if (isValid) {
        localStorage.setItem('guideAccessToken', accessToken);
        setHasAccess(true);
      } else {
        localStorage.removeItem('guideAccessToken');
        setError('Invalid or expired access token');
      }
    } catch (err) {
      setError('Failed to verify access token');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      verifyToken(token.trim());
    }
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto" />
          <p className="mt-4 text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-8">
              <Lock className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Guide Access</h1>
            </div>

            <p className="text-gray-600 mb-8">
              Please enter your access token to view the guide content. You should have received this token after purchase.
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Access Token
                </label>
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your access token"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Access Guide
              </button>
            </form>

            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/guide')}
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Back to Guide Overview
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}