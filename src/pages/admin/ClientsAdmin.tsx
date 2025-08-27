import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Plus, Loader2, ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { getClients, createClient, getInvoices, type Client, type Invoice } from '../../lib/supabase/invoicing';
// TODO: Implement and import deleteClient and updateClient from supabase logic
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
    email: ''
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
    setFormData({ name: '', company_name: '', address: '', email: '' });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (client: Client) => {
    setFormData({
      name: client.name,
      company_name: client.company_name,
      address: client.address,
      email: client.email
    });
    setEditingId(client.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this client?')) return;
    setLoading(true);
    setError(null);
    try {
      // TODO: Implement deleteClient in supabase logic
      // await deleteClient(id);
      throw new Error('Cannot delete client: This client may have invoices or contracts.'); // Simulate error for now
      // await loadClients();
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
        // TODO: Implement updateClient in supabase logic
        // await updateClient(editingId, formData);
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
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

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Client List</h2>
              <button
                onClick={handleAdd}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Client
              </button>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Company</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Address</th>
                  <th className="px-4 py-2 text-left">Invoices</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.map(client => (
                  <tr key={client.id}>
                    <td className="px-4 py-2">{client.company_name}</td>
                    <td className="px-4 py-2">{client.name}</td>
                    <td className="px-4 py-2">{client.email}</td>
                    <td className="px-4 py-2">{client.address}</td>
                    <td className="px-4 py-2">
                      {clientInvoices[client.id] && clientInvoices[client.id].length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {clientInvoices[client.id].map(inv => (
                            <a
                              key={inv.id}
                              href={`/invoice/${inv.invoice_number}`}
                              className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-blue-700 hover:bg-blue-50 hover:underline"
                              title={`View Invoice #${inv.invoice_number}`}
                            >
                              #{inv.invoice_number}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">None</span>
                      )}
                    </td>
                    <td className="px-4 py-2">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal for Add/Edit Client */}
          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 w-full max-w-md mx-auto">
                <h2 className="text-lg font-semibold mb-4 text-center">{editingId ? 'Edit Client' : 'Add Client'}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <ClientForm formData={formData} onChange={setFormData} />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {editingId ? 'Update' : 'Add'} Client
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
