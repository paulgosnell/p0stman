import React, { useState, useEffect } from 'react';
import { Search, User } from 'lucide-react';
import { searchClients } from '../lib/supabase/clients';
import type { Client } from '../lib/supabase/clients';

interface ClientSelectProps {
  onSelect: (client: Client) => void;
  disabled?: boolean;
}

export default function ClientSelect({ onSelect, disabled = false }: ClientSelectProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Client[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.length >= 2) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const results = await searchClients(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } catch (error) {
      console.error('Error searching clients:', error);
      setSearchResults([]);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Select Client
      </label>
      <div className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            placeholder="Search by name, company, or email..."
            className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={disabled}
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          {isLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600" />
            </div>
          )}
        </div>

        {showResults && searchResults.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
            {searchResults.map((client) => (
              <button
                key={client.id}
                type="button"
                onClick={() => {
                  onSelect(client);
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
        {showResults && searchQuery.length >= 2 && searchResults.length === 0 && !isLoading && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4 text-center text-gray-500">
            No clients found
          </div>
        )}
      </div>
    </div>
  );
}