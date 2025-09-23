import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ArrowLeft, Save, Loader2 } from 'lucide-react';
import ClientSelect from '../../components/ClientSelect';
import { createContract } from '../../lib/supabase/contracts';
import type { Client } from '../../lib/supabase/clients';

export default function NewContract() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'GBP' | 'AED'>('USD');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!selectedClient) {
        throw new Error('Please select a client');
      }

      // Create contract using standard template
      const template = {
        client_id: selectedClient.id,
        issue_date: new Date().toISOString(),
        status: 'draft' as const,
        total_amount: 0,
        // Currency fields
        currency: currency,
        currency_symbol: currency === 'GBP' ? '£' : currency === 'AED' ? 'د.إ' : '$',
        project_name: 'Standard Services Agreement',
        project_scope: 'We will deliver a high-quality product according to the agreed milestones and acceptance criteria. This covers the core product features and excludes additional integrations and ongoing support unless agreed otherwise.',
        project_out_of_scope: [
          'Third-party licensing costs',
          'Ongoing hosting and infrastructure',
          'Major scope changes beyond agreed milestones'
        ],
        project_timeline_duration: '8 weeks',
        project_milestones: [
          { name: 'Discovery', deliverable: 'Project brief and plan', percentage: '10%', amount: '0' },
          { name: 'Design', deliverable: 'UI/UX designs and prototypes', percentage: '30%', amount: '0' },
          { name: 'Development', deliverable: 'MVP implementation', percentage: '40%', amount: '0' },
          { name: 'Handover', deliverable: 'Deployment and documentation', percentage: '20%', amount: '0' }
        ]
      };

      // Provide defaults for provider info which can be overridden per contract
      Object.assign(template, {
        provider_name: 'P0STMAN',
        provider_company: 'P0STMAN (AI-Powered Product Studio)',
        provider_legal_entity: 'Chilled Ventures L.L.C',
        provider_address: 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates',
        provider_contact: 'Paul Gosnell'
      });

      const created = await createContract(template as any);
      // Navigate back to contracts admin; include created contract number for UX if needed
      navigate(`/admin/contracts${created?.contract_number ? `?created=${created.contract_number}` : ''}`);
    } catch (err) {
      console.error('Error creating contract:', err);
      setError(err instanceof Error ? err.message : 'Failed to create contract');
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
              <h1 className="text-2xl font-bold">New Contract</h1>
            </div>
            <button
              onClick={() => navigate('/admin/contracts')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Contracts
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
              <ClientSelect
                onSelect={setSelectedClient}
              />
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center">
                    <input type="radio" name="currency" value="USD" checked={currency === 'USD'} onChange={() => setCurrency('USD')} className="form-radio" />
                    <span className="ml-2">USD ($)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="currency" value="GBP" checked={currency === 'GBP'} onChange={() => setCurrency('GBP')} className="form-radio" />
                    <span className="ml-2">GBP (£)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="currency" value="AED" checked={currency === 'AED'} onChange={() => setCurrency('AED')} className="form-radio" />
                    <span className="ml-2">AED (د.إ)</span>
                  </label>
                </div>
              </div>
              {selectedClient && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Selected Client</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Name:</span> {selectedClient.name}</p>
                    <p><span className="font-medium">Company:</span> {selectedClient.company_name}</p>
                    <p><span className="font-medium">Email:</span> {selectedClient.email}</p>
                    <p><span className="font-medium">Address:</span> {selectedClient.address}</p>
                  </div>
                </div>
              )}
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
                    Creating Contract...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Create Contract
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