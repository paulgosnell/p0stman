import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileDown, FileImage } from 'lucide-react';
import Logo from '../components/Logo';
import { downloadAsImage, downloadAsPDF } from '../lib/downloadUtils';
import { getInvoice } from '../lib/supabase/invoicing';

interface InvoiceData {
  client: {
    name: string;
    company: string;
    address: string;
  };
  invoice: {
    number: string;
    date: string;
    dueDate: string;
    description?: string;
    items: {
      description: string;
      amount: string;
      status?: 'paid' | 'due' | 'pending';
    }[];
    bankDetails: {
      accountName: string;
      iban: string;
      swiftCode: string;
      address: string;
    };
  };
}

export default function Invoice() {
  const { id } = useParams();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    loadInvoice(id);
  }, [id]);

  const loadInvoice = async (invoiceId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const invoice = await getInvoice(invoiceId);
      
      if (!invoice) {
        throw new Error('Invoice not found');
      }

      setInvoiceData({
        client: {
          name: invoice.client?.name || '',
          company: invoice.client?.company_name || 'N/A',
          address: invoice.client?.address || 'N/A'
        },
        invoice: {
          number: invoice.invoice_number,
          date: new Date(invoice.issue_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          dueDate: new Date(invoice.due_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          description: invoice.description || '',
          items: (invoice.items || []).map(item => ({
            description: item.description,
            amount: `$${Number(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
            status: item.status
          })),
          bankDetails: {
            accountName: 'Chilled Ventures L.L.C-FZ',
            iban: 'AE630860000009190382373',
            swiftCode: 'WIOBAEADXXX',
            address: 'Etihad Airways Centre 5th Floor, Abu Dhabi, UAE'
          }
        }
      });
    } catch (err) {
      console.error('Error loading invoice:', err);
      setError(err instanceof Error ? err.message : 'Failed to load invoice');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle missing ID or loading states
  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Invoice Not Found</h1>
          <p className="text-gray-600">No invoice ID was provided.</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error || !invoiceData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Invoice</h1>
          <p className="text-gray-600">{error || 'Invoice not found'}</p>
        </div>
      </div>
    );
  }

  const handleDownloadImage = () => {
    downloadAsImage('invoice-content', `p0stman-invoice-${id}`);
  };

  const handleDownloadPDF = () => {
    setIsSaving(true);
    downloadAsPDF('invoice-content', `p0stman-invoice-${id}`);
    setTimeout(() => setIsSaving(false), 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <Logo className="text-2xl" useGradient />
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={handleDownloadImage}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base"
            >
              <FileImage className="w-5 h-5" />
              Download Image
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <FileDown className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>

        <motion.div
          id="invoice-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-12"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">INVOICE</h1>
              <p className="text-gray-600">#{invoiceData.invoice.number}</p>
            </div>
            <div className="text-right">
              <p className="mb-1"><span className="font-medium">Issue Date:</span> {invoiceData.invoice.date}</p>
              <p><span className="font-medium">Due Date:</span> On receipt</p>
            </div>
          </div>

          {/* Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-lg font-semibold mb-4">Bill To:</h2>
              <div className="space-y-2">
                <p className="font-medium">{invoiceData.client.company}</p>
                <p>{invoiceData.client.name}</p>
                <p>{invoiceData.client.address}</p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">From:</h2>
              <div className="space-y-2">
                <p className="font-medium">P0STMAN (AI-Powered Product Studio)</p>
                <p>Chilled Ventures L.L.C</p>
                <p>Meydan Grandstand, 6th floor</p>
                <p>Meydan Road, Nad Al Sheba</p>
                <p>Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>

          {/* Invoice Description (above items) */}
          {invoiceData.invoice.description && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">Description of Work</h2>
              <p className="text-gray-700 whitespace-pre-line">{invoiceData.invoice.description}</p>
            </div>
          )}

          {/* Items */}
          <div className="mb-12">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {invoiceData.invoice.items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-between">
                        <span>{item.description}</span>
                        {item.status && (
                          <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.status === 'paid' 
                              ? 'bg-green-100 text-green-800'
                              : item.status === 'due'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className={item.status === 'paid' ? 'text-green-600' : ''}>{item.amount}</span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-medium">
                  <td className="px-4 py-4">Total Due</td>
                  <td className="px-4 py-4 text-right">
                    {`$${(invoiceData.invoice.items || [])
                      .filter(item => item.status !== 'paid')
                      .reduce((total, item) => total + parseFloat(item.amount.replace('$', '').replace(',', '')), 0)
                      .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                  </td>
                </tr>
                <tr className="bg-gray-50 font-medium text-green-600">
                  <td className="px-4 py-4">Total Paid</td>
                  <td className="px-4 py-4 text-right">
                    {`$${(invoiceData.invoice.items || [])
                      .filter(item => item.status === 'paid')
                      .reduce((total, item) => total + parseFloat(item.amount.replace('$', '').replace(',', '')), 0)
                      .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p><span className="font-medium">Account Name:</span> {invoiceData.invoice.bankDetails.accountName}</p>
                <p><span className="font-medium">IBAN:</span> {invoiceData.invoice.bankDetails.iban}</p>
                <p><span className="font-medium">BIC/Swift Code:</span> {invoiceData.invoice.bankDetails.swiftCode}</p>
                <p><span className="font-medium">Business Address:</span> {invoiceData.invoice.bankDetails.address}</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Payment Terms:<br />
              Please include the invoice number in your payment reference.<br />
              {invoiceData.invoice.items[0] && (
                <>First milestone payment (deposit) of {invoiceData.invoice.items[0].amount} is due on receipt of invoice date.<br /></>
              )}
              {invoiceData.invoice.items[1] && (
                <>Subsequent milestone payments of {invoiceData.invoice.items[1].amount} should be paid upon milestone completion.</>
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}