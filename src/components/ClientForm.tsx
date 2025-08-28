import React, { useState, useEffect } from 'react';
import { Loader2, Search, User } from 'lucide-react';
import { searchClientByEmail, getClients, searchClients } from '../lib/supabase/clients';
import type { Client } from '../lib/supabase/clients';

interface ClientFormProps {
  formData: {
    name: string;
    company_name: string;
    address: string;
    email: string;
    status: 'prospecting' | 'pitching' | 'won' | 'live' | 'old' | 'lost';
    value?: number;
    linkedin_url?: string;
    twitter_handle?: string;
    phone?: string;
    notes?: string;
    last_contact?: string;
    next_followup?: string;
  };
  onChange: (data: any) => void;
  disabled?: boolean;
  showSearch?: boolean;
}

export default function ClientForm({ formData, onChange, disabled = false, showSearch = true }: ClientFormProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoadingClients, setIsLoadingClients] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Client[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    loadClients();
  }, []);

  useEffect(() => {
    if (searchQuery.length >= 2) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const loadClients = async () => {
    try {
      setIsLoadingClients(true);
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error('Error loading clients:', error);
    } finally {
      setIsLoadingClients(false);
    }
  };

  const handleEmailBlur = async () => {
    if (!formData.email || disabled) return;
    
    setIsSearching(true);
    try {
      const client = await searchClientByEmail(formData.email);
      if (client) {
        onChange({
          name: client.name,
          company_name: client.company_name,
          address: client.address,
          email: client.email,
          status: client.status || 'prospecting',
          value: client.value || undefined,
          linkedin_url: client.linkedin_url || undefined,
          twitter_handle: client.twitter_handle || undefined,
          phone: client.phone || undefined,
          notes: client.notes || undefined,
          last_contact: client.last_contact || undefined,
          next_followup: client.next_followup || undefined
        });
      }
    } catch (error) {
      console.error('Error searching client:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = async () => {
    try {
      const results = await searchClients(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } catch (error) {
      console.error('Error searching clients:', error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Client Selection */}
      <div className="md:col-span-2">
        {showSearch && (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Existing Clients
            </label>
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowResults(true)}
                  placeholder="Search by name, company, or email..."
                  className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={disabled}
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>

              {showResults && searchResults.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
                  {searchResults.map((client) => (
                    <button
                      key={client.id}
                      type="button"
                      onClick={() => {
                        onChange({
                          name: client.name,
                          company_name: client.company_name,
                          address: client.address,
                          email: client.email,
                          status: client.status || 'prospecting',
                          value: client.value || undefined,
                          linkedin_url: client.linkedin_url || undefined,
                          twitter_handle: client.twitter_handle || undefined,
                          phone: client.phone || undefined,
                          notes: client.notes || undefined,
                          last_contact: client.last_contact || undefined,
                          next_followup: client.next_followup || undefined
                        });
                        setSearchQuery('');
                        setShowResults(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                    >
                      <User className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="font-medium">{client.company_name}</div>
                        <div className="text-sm text-gray-500">{client.name} • {client.email}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Or fill out the form below to add a new client
            </div>
          </>
        )}
      </div>

      <div className="md:col-span-2 border-t border-gray-200 pt-6 mt-2"></div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Contact Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => onChange({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          required
          disabled={disabled}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          value={formData.company_name}
          onChange={(e) => onChange({ ...formData, company_name: e.target.value })}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          required
          disabled={disabled}
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <textarea
          value={formData.address}
          onChange={(e) => onChange({ ...formData, address: e.target.value })}
          rows={3}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          } resize-none`}
          required
          disabled={disabled}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={formData.status}
          onChange={(e) => onChange({ ...formData, status: e.target.value as any })}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          disabled={disabled}
        >
          <option value="prospecting">Prospecting</option>
          <option value="pitching">Pitching</option>
          <option value="won">Won</option>
          <option value="live">Live</option>
          <option value="old">Old</option>
          <option value="lost">Lost</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Value ($)
        </label>
        <input
          type="number"
          value={formData.value || ''}
          onChange={(e) => onChange({ ...formData, value: e.target.value ? parseFloat(e.target.value) : undefined })}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          placeholder="Estimated value"
          disabled={disabled}
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          value={formData.phone || ''}
          onChange={(e) => onChange({ ...formData, phone: e.target.value })}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          placeholder="Phone number"
          disabled={disabled}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          LinkedIn URL
        </label>
        <input
          type="url"
          value={formData.linkedin_url || ''}
          onChange={(e) => onChange({ ...formData, linkedin_url: e.target.value })}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          placeholder="https://linkedin.com/in/username"
          disabled={disabled}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Twitter Handle
        </label>
        <input
          type="text"
          value={formData.twitter_handle || ''}
          onChange={(e) => onChange({ ...formData, twitter_handle: e.target.value })}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          placeholder="@username"
          disabled={disabled}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Contact
        </label>
        <input
          type="datetime-local"
          value={formData.last_contact ? new Date(formData.last_contact).toISOString().slice(0, 16) : ''}
          onChange={(e) => onChange({ ...formData, last_contact: e.target.value })}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          disabled={disabled}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Next Follow-up
        </label>
        <input
          type="datetime-local"
          value={formData.next_followup ? new Date(formData.next_followup).toISOString().slice(0, 16) : ''}
          onChange={(e) => onChange({ ...formData, next_followup: e.target.value })}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          disabled={disabled}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange({ ...formData, email: e.target.value })}
          onBlur={handleEmailBlur}
          className={`w-full px-4 py-2 border border-gray-200 rounded-lg ${
            disabled ? 'bg-gray-50' : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          required
          disabled={disabled}
        />
        {isSearching && (
          <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
            <Loader2 className="w-4 h-4 animate-spin" />
            Searching for existing client...
          </div>
        )}
      </div>
    </div>
  );
}