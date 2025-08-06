import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bot, BookOpen, Key, MessageSquare, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';

const adminSections = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Guide Content",
    description: "Manage guide sections and content",
    link: "/admin/guide",
    color: "hover:bg-blue-50 hover:border-blue-200"
  },
  {
    icon: <Key className="w-6 h-6 text-green-600" />,
    title: "Access Tokens",
    description: "Manage guide access tokens",
    link: "/admin/guide/tokens",
    color: "hover:bg-green-50 hover:border-green-200"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
    title: "Messages",
    description: "View and respond to contact messages",
    link: "/admin/messages",
    color: "hover:bg-purple-50 hover:border-purple-200"
  },
  {
    icon: <FileText className="w-6 h-6 text-green-600" />,
    title: "Invoicing",
    description: "Manage clients and invoices",
    link: "/admin/invoicing",
    color: "hover:bg-indigo-50 hover:border-indigo-200"
  },
  {
    icon: <FileText className="w-6 h-6 text-green-600" />,
    title: "Contracts",
    description: "Manage client contracts",
    link: "/admin/contracts",
    color: "hover:bg-green-50 hover:border-green-200"
  }
];

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session || session.user.email !== 'hello@p0stman.com') {
      navigate('/admin/login');
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Bot className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              Sign Out
            </button>
          </div>

          <div className="grid gap-6">
            {adminSections.map((section, index) => (
              <Link
                key={index}
                to={section.link}
                className={`block bg-white rounded-xl border border-gray-200 p-6 transition-all ${section.color}`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">
                      {section.title}
                    </h2>
                    <p className="text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}