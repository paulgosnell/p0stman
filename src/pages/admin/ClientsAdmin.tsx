import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Plus, Loader2, ArrowLeft, Edit, Trash2, Users } from 'lucide-react';
import { getClients, getInvoices, type Client, type Invoice } from '../../lib/supabase/invoicing';
import { createClient, updateClient, deleteClient } from '../../lib/supabase/clients';
import ClientForm from '../../components/ClientForm';

export default function ClientsAdmin() {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [clientInvoices, setClientInvoices] = useState<Record<string, Invoice[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    address: '',
    email: '',
    status: 'prospecting' as 'prospecting' | 'pitching' | 'won' | 'live' | 'old' | 'lost',
    value: undefined as number | undefined,
    linkedin_url: undefined as string | undefined,
    twitter_handle: undefined as string | undefined,
    phone: undefined as string | undefined,
    notes: undefined as string | undefined,
    last_contact: undefined as string | undefined,
    next_followup: undefined as string | undefined
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      setLoading(true);
      const data = await getClients();
      setClients(data);
      // Load invoices for each client
      const invoices = await getInvoices();
      const mapping: Record<string, Invoice[]> = {};
      data.forEach(client => {
        mapping[client.id] = invoices.filter(inv => inv.client_id === client.id);
      });
      setClientInvoices(mapping);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load clients');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setFormData({
      name: '',
      company_name: '',
      address: '',
      email: '',
      status: 'prospecting',
      value: undefined,
      linkedin_url: undefined,
      twitter_handle: undefined,
      phone: undefined,
      notes: undefined,
      last_contact: undefined,
      next_followup: undefined
    });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (client: Client) => {
    setFormData({
      name: client.name,
      company_name: client.company_name,
      address: client.address,
      email: client.email,
      status: client.status,
      value: client.value,
      linkedin_url: client.linkedin_url,
      twitter_handle: client.twitter_handle,
      phone: client.phone,
      notes: client.notes,
      last_contact: client.last_contact,
      next_followup: client.next_followup
    });
    setEditingId(client.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this client?')) return;
    setLoading(true);
    setError(null);
    try {
      await deleteClient(id);
      await loadClients();
    } catch (err) {
      if (err instanceof Error && err.message.includes('foreign key')) {
        setError('Cannot delete client: There are invoices or contracts linked to this client.');
      } else {
        setError(err instanceof Error ? err.message : 'Failed to delete client');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        await updateClient(editingId, formData);
      } else {
        await createClient(formData);
      }
      setShowForm(false);
      await loadClients();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save client');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold">Clients</h1>
          </div>
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Admin
          </button>
        </div>

        <>
          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Client List</h2>
                <button
                  onClick={handleAdd}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Client
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Next Follow-up</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {clients.map(client => (
                    <tr key={client.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{client.company_name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{client.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{client.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          client.status === 'won' ? 'bg-green-100 text-green-800' :
                          client.status === 'live' ? 'bg-blue-100 text-blue-800' :
                          client.status === 'pitching' ? 'bg-yellow-100 text-yellow-800' :
                          client.status === 'prospecting' ? 'bg-gray-100 text-gray-800' :
                          client.status === 'old' ? 'bg-purple-100 text-purple-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {client.value ? `$${client.value.toLocaleString()}` : '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          {client.phone && <span className="text-xs text-gray-600">📞 {client.phone}</span>}
                          {client.linkedin_url && (
                            <a href={client.linkedin_url} target="_blank" rel="noopener noreferrer" 
                               className="text-xs text-blue-600 hover:underline">
                              LinkedIn
                            </a>
                          )}
                          {client.twitter_handle && (
                            <a href={`https://twitter.com/${client.twitter_handle}`} target="_blank" rel="noopener noreferrer"
                               className="text-xs text-blue-600 hover:underline">
                              @{client.twitter_handle}
                            </a>
                          )}
                          {!client.phone && !client.linkedin_url && !client.twitter_handle && (
                            <span className="text-xs text-gray-400">-</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {client.next_followup ? (
                          <div className="text-sm text-gray-900">
                            {new Date(client.next_followup).toLocaleDateString()}
                            {new Date(client.next_followup) <= new Date() && (
                              <span className="ml-2 inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                                Overdue
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(client)}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            title="Edit Client"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(client.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete Client"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {clients.length === 0 && (
              <div className="px-6 py-12 text-center">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No clients found.</p>
              </div>
            )}
          </div>

          </>
          {/* Modal for Add/Edit Client */}
          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-40">
              <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-full max-w-4xl max-h-[90vh] overflow-hidden">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {editingId ? 'Edit Client' : 'Add New Client'}
                  </h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <ClientForm formData={formData} onChange={setFormData} />
                  </form>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    {editingId ? 'Update Client' : 'Add Client'}
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
