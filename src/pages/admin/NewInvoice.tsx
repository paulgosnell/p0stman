import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ArrowLeft, Plus, Trash2, Save, Loader2 } from 'lucide-react';
import { createInvoice } from '../../lib/supabase/invoicing';
import { createClient } from '../../lib/supabase/clients';
import ClientForm from '../../components/ClientForm';
import type { Client } from '../../lib/supabase/clients';

interface InvoiceItem {
  description: string;
  amount: number;
  order_position: number;
  status?: 'pending' | 'paid' | 'due';
}

export default function NewInvoice() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Client form state
  const [clientForm, setClientForm] = useState({
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

  // Invoice description field
  const [description, setDescription] = useState('');

  // Invoice items state
  const [items, setItems] = useState<InvoiceItem[]>([
    { description: '', amount: 0, order_position: 0, status: 'due' }
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { description: '', amount: 0, order_position: items.length, status: 'due' }
    ]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create client first
      const client = await createClient(clientForm);

      // Calculate total amount
      const totalAmount = items.reduce((sum, item) => sum + Number(item.amount), 0);

      // Create invoice with items
      await createInvoice(
        {
          client_id: client.id,
          issue_date: new Date().toISOString(),
          due_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
          status: 'draft',
          total_amount: totalAmount,
          description // Pass description to backend
        },
        items
      );

      navigate('/admin/invoicing');
    } catch (err) {
      console.error('Error creating invoice:', err);
      setError(err instanceof Error ? err.message : 'Failed to create invoice');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Bot className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold">New Invoice</h1>
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
              <ClientForm
                formData={clientForm}
                onChange={setClientForm}
              />
            </div>

            {/* Invoice Description */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Invoice Description</h2>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Describe the work or services provided..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[80px]"
                required
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
                {items.map((item, index) => (
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
                        value={item.amount}
                        onChange={(e) => updateItem(index, 'amount', parseFloat(e.target.value))}
                        placeholder="Amount"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                        min="0"
                        step="0.01"
                      />
                    </div>
                    {items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium text-gray-900">Total Amount</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${items.reduce((sum, item) => sum + Number(item.amount), 0).toLocaleString()}
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
                    Creating Invoice...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Create Invoice
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