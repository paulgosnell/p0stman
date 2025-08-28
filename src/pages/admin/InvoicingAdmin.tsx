import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Plus, Loader2, ArrowLeft, FileText, Mail, DollarSign, Edit } from 'lucide-react';
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { getInvoices, deleteInvoice, type Invoice } from '../../lib/supabase/invoicing';
import { Trash2 } from 'lucide-react';

export default function InvoicingAdmin() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const [revenueByMonth, setRevenueByMonth] = useState<{ month: string; revenue: number }[]>([]);

  useEffect(() => {
    loadInvoices();
  }, []);

  useEffect(() => {
    // Aggregate revenue by month after invoices are loaded
    if (invoices.length > 0) {
      const map: Record<string, number> = {};
      invoices.forEach(inv => {
        const date = new Date(inv.issue_date);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        map[key] = (map[key] || 0) + Number(inv.total_amount);
      });
      const revenueArr = Object.entries(map).map(([month, revenue]) => ({ month, revenue }));
      revenueArr.sort((a, b) => a.month.localeCompare(b.month));
      // setRevenueByMonth(revenueArr);
    } else {
      // setRevenueByMonth([]);
    }
  }, [invoices]);

  const loadInvoices = async () => {
    try {
      setLoading(true);
      const data = await getInvoices();
      setInvoices(data);
    } catch (err) {
      console.error('Error loading invoices:', err);
      setError(err instanceof Error ? err.message : 'Failed to load invoices');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (invoiceNumber: string) => {
    if (!window.confirm('Are you sure you want to delete this invoice? This action cannot be undone.')) return;
    try {
      setLoading(true);
      await deleteInvoice(invoiceNumber);
      await loadInvoices();
    } catch (err) {
      console.error('Error deleting invoice:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete invoice');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: Invoice['status']) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-600';
      case 'sent':
        return 'bg-blue-100 text-blue-600';
      case 'paid':
        return 'bg-green-100 text-green-600';
      case 'overdue':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
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
      <div className="px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold">Invoicing</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Admin
            </button>
            <button
              onClick={() => navigate('/admin/invoicing/new')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              New Invoice
            </button>
          </div>
        </div>

        <>
          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Total Invoices</div>
                  <div className="text-2xl font-bold text-gray-900">{invoices.length}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Total Amount</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${invoices.reduce((sum, inv) => sum + Number(inv.total_amount), 0).toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Paid</div>
                  <div className="text-2xl font-bold text-green-600">
                    ${invoices.reduce((sum, invoice) => {
                      const items = invoice.items || [];
                      return sum + items
                        .filter(item => item.status === 'paid')
                        .reduce((itemSum, item) => itemSum + Number(item.amount), 0);
                    }, 0).toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Outstanding</div>
                  <div className="text-2xl font-bold text-red-600">
                    ${invoices.reduce((sum, invoice) => {
                      const items = invoice.items || [];
                      return sum + items
                        .filter(item => item.status !== 'paid')
                        .reduce((itemSum, item) => itemSum + Number(item.amount), 0);
                    }, 0).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          #{invoice.invoice_number}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{invoice.client?.company_name}</div>
                        <div className="text-sm text-gray-500">{invoice.client?.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          ${Number(invoice.total_amount).toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {new Date(invoice.issue_date).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          Due: {new Date(invoice.due_date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => navigate(`/invoice/${invoice.invoice_number}`)}
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <FileText className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => navigate(`/admin/invoicing/edit/${invoice.invoice_number}`)}
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <a
                            href={`mailto:${invoice.client?.email}?subject=Invoice%20${invoice.invoice_number}`}
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                          <button
                            onClick={() => navigate(`/invoice/${invoice.invoice_number}`)}
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <DollarSign className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(invoice.invoice_number)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete Invoice"
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
          </div>
        </>
      </div>
    </div>
  );
}