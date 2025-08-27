import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Bot, ArrowLeft, Plus, Trash2, Save, Loader2 } from 'lucide-react';
import { getInvoice, updateInvoice, type Invoice, type InvoiceItem } from '../../lib/supabase/invoicing';
import ClientForm from '../../components/ClientForm';

interface InvoiceFormData {
  issue_date: string;
  due_date: string;
  client: {
    name: string;
    company_name: string;
    address: string;
    email: string;
  };
  description: string;
  items: InvoiceItem[];
  status: Invoice['status'];
}

export default function EditInvoice() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<InvoiceFormData>({
    issue_date: new Date().toISOString().split('T')[0],
    due_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    client: {
      name: '',
      company_name: '',
      address: '',
      email: ''
    },
    description: '',
    items: [],
    status: 'draft'
  });

  useEffect(() => {
    if (!id) return;
    loadInvoice(id);
  }, [id]);

  const loadInvoice = async (invoiceId: string) => {
    try {
      setIsLoading(true);
      const invoice = await getInvoice(invoiceId);
      const dueDate = new Date(invoice.due_date).toISOString().split('T')[0];
      const issueDate = new Date(invoice.issue_date).toISOString().split('T')[0];
      setFormData({
        issue_date: issueDate,
        due_date: dueDate,
        client: {
          name: invoice.client?.name || '',
          company_name: invoice.client?.company_name || '',
          address: invoice.client?.address || '',
          email: invoice.client?.email || ''
        },
        description: invoice.description || '',
        items: invoice.items,
        status: invoice.status
      });
    } catch (err) {
      console.error('Error loading invoice:', err);
      setError(err instanceof Error ? err.message : 'Failed to load invoice');
    } finally {
      setIsLoading(false);
    }
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: '',
          invoice_id: id || '',
          description: '',
          amount: 0,
          order_position: prev.items.length,
          status: 'pending',
          created_at: '',
          updated_at: ''
        }
      ]
    }));
  };

  const removeItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map((item, i) => {
        if (i === index) {
          if (field === 'amount') {
            // Ensure amount is a valid number
            const numValue = typeof value === 'string' ? parseFloat(value) : value;
            return { ...item, amount: isNaN(numValue) ? 0 : numValue };
          } else if (field === 'status') {
            // Handle status updates
            return { ...item, status: value as 'pending' | 'paid' | 'due' };
          }
          return { ...item, [field]: value };
        }
        return item;
      })
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Update invoice dates and status
      await updateInvoice(id, {
        issue_date: formData.issue_date,
        due_date: formData.due_date,
        status: formData.status,
        description: formData.description,
        items: formData.items
      });
      navigate('/admin/invoicing');
    } catch (err) {
      console.error('Error updating invoice:', err);
      setError(err instanceof Error ? err.message : 'Failed to update invoice');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Bot className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold">Edit Invoice #{id}</h1>
              <button
                onClick={() => window.location.href = `mailto:${formData.client.email}?subject=Invoice ${id}&body=Please find attached your invoice.&attach=/invoice/${id}`}
                className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Invoice
              </button>
            </div>
            <button
              onClick={() => navigate('/admin/invoicing')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Invoices
            </button>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Client Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Client Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    value={formData.issue_date}
                    onChange={(e) => setFormData({ ...formData, issue_date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={formData.due_date}
                    onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    value={formData.client.name}
                    disabled
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.client.company_name}
                    disabled
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <textarea
                    value={formData.client.address}
                    disabled
                    rows={3}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.client.email}
                    disabled
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as Invoice['status'] }))}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="sent">Sent</option>
                    <option value="paid">Paid</option>
                    <option value="overdue">Overdue</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Invoice Description */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Description of Work</h2>
              <textarea
                value={formData.description}
                onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                placeholder="Describe the work, project, or deliverables for this invoice..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 resize-vertical"
              />
            </div>

            {/* Invoice Items */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Invoice Items</h2>
                <button
                  type="button"
                  onClick={addItem}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Item
                </button>
              </div>

              <div className="space-y-4">
                {formData.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateItem(index, 'description', e.target.value)}
                        placeholder="Item description"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="w-48">
                      <input
                        type="number"
                        value={item.amount || 0}
                        onChange={(e) => updateItem(index, 'amount', parseFloat(e.target.value))}
                        placeholder="Amount"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                        min="0"
                        step="0.01"
                      />
                    </div>
                    <div className="w-32">
                      <select
                        value={item.status || 'pending'}
                        onChange={(e) => updateItem(index, 'status', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="pending">Pending</option>
                        <option value="due">Due</option>
                        <option value="paid">Paid</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium text-gray-900">Total Amount</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${formData.items.reduce((sum, item) => sum + Number(item.amount), 0).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Updating Invoice...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Update Invoice
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}