import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ArrowLeft } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { getInvoices, type Invoice } from '../../lib/supabase/invoicing';
import { BarChart, Bar, Legend } from 'recharts';

export default function ReportsAdmin() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [revenueByMonth, setRevenueByMonth] = useState<{ month: string; revenue: number }[]>([]);
  const [topClients, setTopClients] = useState<{ client: string; revenue: number }[]>([]);

  useEffect(() => {
    loadInvoices();
  }, []);

  useEffect(() => {
    if (invoices.length > 0) {
      // Revenue by month
      const map: Record<string, number> = {};
      const clientMap: Record<string, number> = {};
      invoices.forEach(inv => {
        const date = new Date(inv.issue_date);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        map[key] = (map[key] || 0) + Number(inv.total_amount);
        const clientName = inv.client?.company_name || 'Unknown';
        clientMap[clientName] = (clientMap[clientName] || 0) + Number(inv.total_amount);
      });
      const revenueArr = Object.entries(map).map(([month, revenue]) => ({ month, revenue }));
      revenueArr.sort((a, b) => a.month.localeCompare(b.month));
      setRevenueByMonth(revenueArr);
      // Top clients by revenue
      const topArr = Object.entries(clientMap)
        .map(([client, revenue]) => ({ client, revenue }))
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 5);
      setTopClients(topArr);
    } else {
      setRevenueByMonth([]);
      setTopClients([]);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold">Reports & Analytics</h1>
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

        <>
          {/* Revenue Chart */}
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Revenue Over Months</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueByMonth} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={value => `$${Number(value).toLocaleString()}`} />
                <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top Clients by Revenue */}
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Top Clients by Revenue</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topClients} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="client" />
                <YAxis />
                <Tooltip formatter={value => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Outstanding Invoices */}
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Outstanding Invoices</h2>
            <ul className="divide-y divide-gray-200">
              {invoices.filter(inv => inv.status !== 'paid').map(inv => (
                <li key={inv.id} className="py-2 flex justify-between">
                  <span>#{inv.invoice_number} - {inv.client?.company_name}</span>
                  <span className="text-red-600 font-medium">${Number(inv.total_amount).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paid Invoices */}
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Paid Invoices</h2>
            <ul className="divide-y divide-gray-200">
              {invoices.filter(inv => inv.status === 'paid').map(inv => (
                <li key={inv.id} className="py-2 flex justify-between">
                  <span>#{inv.invoice_number} - {inv.client?.company_name}</span>
                  <span className="text-green-600 font-medium">${Number(inv.total_amount).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      </div>
    </div>
  );
}
