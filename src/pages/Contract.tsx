import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Save, FileImage, FileDown } from 'lucide-react';
import Logo from '../components/Logo';
import SignatureSection from '../components/contract/SignatureSection';
import { getContract, updateContract } from '../lib/supabase/contracts';
import { downloadAsImage, downloadAsPDF } from '../lib/downloadUtils';
import type { Contract as ContractType } from '../lib/supabase/contracts';

export default function Contract() {
  const { id } = useParams();
  const [contract, setContract] = useState<ContractType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [clientSignature, setClientSignature] = useState<string | null>(null);
  const [providerSignature, setProviderSignature] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    loadContract(id);
  }, [id]);

  const loadContract = async (contractId: string) => {
    try {
      setLoading(true);
      setError(null);
      setError(null);
      const data = await getContract(contractId);
      
      if (!data) {
        throw new Error('Contract not found');
      }
      
      setContract(data);
      setClientSignature(data.client_signature);
      setProviderSignature(data.provider_signature);
    } catch (err) {
      console.error('Error loading contract:', err);
      setError(err instanceof Error ? err.message : 'Contract not found');
      setContract(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Contract Not Found</h1>
          <p className="text-gray-600">{error || 'The requested contract could not be found.'}</p>
        </div>
      </div>
    );
  }
  const templateValue = (contract.template || '').toString().trim().toUpperCase();
  const isUK = templateValue.includes('UK') || templateValue === 'GB' || templateValue === 'GBP';
  // Prefer explicit contract currency if set, otherwise fall back to template-derived currency
  const currencyCode = (contract.currency as string) || (isUK ? 'GBP' : 'USD');
  const locale = currencyCode === 'GBP' ? 'en-GB' : currencyCode === 'AED' ? 'en-AE' : 'en-US';
  const formattedTotal = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode }).format(Number(contract.total_amount || 0));
  const governingLaw = isUK ? 'England and Wales' : 'the United Arab Emirates';
  const disputeJurisdiction = isUK ? 'the courts of England and Wales' : 'the courts of the United Arab Emirates';

  const handleDownload = () => {
    downloadAsImage('contract-content', `p0stman-contract-${id}`);
  };
  
  const handleDownloadPDF = () => {
    setIsSaving(true);
    downloadAsPDF('contract-content', `p0stman-contract-${id}`);
    setTimeout(() => setIsSaving(false), 100); // Reset after brief delay to allow PDF generation
  };

  const persistSignature = async (role: 'client' | 'provider', signature: string | null) => {
    if (!contract) return;
    try {
      const payload: any = {};
      if (role === 'client') {
        payload.client_signature = signature;
        payload.client_signed_at = signature ? new Date().toISOString() : null;
      } else {
        payload.provider_signature = signature;
        payload.provider_signed_at = signature ? new Date().toISOString() : null;
      }
      await updateContract(contract.contract_number, payload);
    } catch (err) {
      console.error('Error persisting signature:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <Logo className="text-2xl" useGradient />
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={handleDownload}
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
          id="contract-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-12"
        >
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">Contract Agreement</h1>
              <p className="text-gray-600">
                This Agreement is made and entered into as of {contract.issue_date || contract.created_at || ''}.
              </p>
            </div>

            {/* Parties */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-semibold mb-4">Client</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Company:</span> {contract.client?.company_name || ''}</p>
                  <p><span className="font-medium">Name:</span> {contract.client?.name || ''}</p>
                  <p><span className="font-medium">Address:</span> {contract.client?.address || ''}</p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">Service Provider</h2>
                  <div className="space-y-2">
                    <p><span className="font-medium">Company:</span> {contract.provider_company || (isUK ? 'P0STMAN' : 'P0STMAN (AI-Powered Product Studio)')}</p>
                    <p><span className="font-medium">Legal Entity:</span> {contract.provider_legal_entity || (isUK ? 'P0STMAN' : 'Chilled Ventures L.L.C')}</p>
                    <p><span className="font-medium">Address:</span> {contract.provider_address || (isUK ? 'Tyby Farm, Wood Dalling, Norfolk' : 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates')}</p>
                    <p><span className="font-medium">Contact:</span> {contract.provider_contact || 'Paul Gosnell'}</p>
                  </div>
              </div>
            </div>

            {/* Scope */}
            <div>
              <h2 className="text-xl font-semibold mb-4">1. Scope of Work</h2>
              <p className="text-gray-600 mb-4">{contract.project_scope}</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium mb-2">Out of Scope:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {contract.project_out_of_scope.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-xl font-semibold mb-4">2. Timeline</h2>
              <p className="text-gray-600">
                <span className="font-medium">Start Date:</span> Upon receipt of the deposit payment<br />
                <span className="font-medium">Duration:</span> {contract.project_timeline_duration}
              </p>
            </div>

            {/* Milestones */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4">3. Milestones and Payments</h2>
              <p className="mb-4">The total project cost is {formattedTotal}. Payments are tied to project milestones as outlined below:</p>
              <div className="overflow-x-auto -mx-6 md:mx-0">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 md:px-4 py-2 text-left text-sm">Milestone</th>
                      <th className="px-3 md:px-4 py-2 text-left text-sm">Deliverable</th>
                      <th className="px-3 md:px-4 py-2 text-left text-sm">Payment</th>
                      <th className="px-3 md:px-4 py-2 text-left text-sm">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {contract.project_milestones.map((milestone, index) => (
                      <tr key={index}>
                        <td className="px-3 md:px-4 py-2 text-sm">{milestone.name}</td>
                        <td className="px-3 md:px-4 py-2 text-sm">{milestone.deliverable}</td>
                        <td className="px-3 md:px-4 py-2 text-sm">{milestone.percentage}</td>
                        <td className="px-3 md:px-4 py-2 text-sm">{(() => {
                          const amt = Number(String(milestone.amount || '').replace(/[^0-9.-]+/g, ''));
                          if (!isNaN(amt)) {
                            try {
                              return new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode }).format(amt);
                            } catch (e) {
                              return milestone.amount || '';
                            }
                          }
                          return milestone.amount || '';
                        })()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-600">
                All payments are due within 5 days of the milestone completion and the corresponding invoice issuance.
              </p>
            </div>

            {/* Standard Sections */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">4. Responsibilities</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Client Responsibilities:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Provide timely feedback and approvals to avoid delays</li>
                      <li>Provide access to any existing assets, content, or systems required for the rebuild</li>
                      <li>Cover any third-party fees (e.g., hosting, licensing)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Service Provider Responsibilities:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Deliver all milestones within the agreed-upon timeline</li>
                      <li>Ensure the final product aligns with the project scope and agreed-upon requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">5. Confidentiality</h2>
                <p className="text-gray-600">
                  Both parties agree to maintain confidentiality of any proprietary or sensitive information shared during the project.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">6. Termination</h2>
                <p className="text-gray-600">
                  Either party may terminate this agreement by providing written notice. Any work completed up to the termination date will be invoiced and payable.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">7. Intellectual Property</h2>
                <p className="text-gray-600">
                  Upon receipt of full and final payment, all intellectual property rights will be transferred to the Client. The Client will become the sole owner of all deliverables and associated intellectual property.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
                <p className="text-gray-600">
                  This Agreement shall be governed by the laws of {governingLaw}, unless otherwise agreed in writing by both parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">9. Entire Agreement</h2>
                <p className="text-gray-600">
                  This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements, understandings, or communications, whether written or oral, regarding the subject matter.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">10. Revisions and Change Requests</h2>
                <p className="text-gray-600">
                  Minor revisions to deliverables are included as part of the agreed milestones.
                  Significant changes or additional features requested by the Client that fall outside the original Scope of Work will be handled as a change request and may incur additional fees.
                  All change requests must be documented and approved by both parties before implementation.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">11. Limitations of Liability</h2>
                <p className="text-gray-600">
                  The Service Provider will not be liable for any indirect, incidental, or consequential damages arising from the project, including but not limited to loss of revenue, data, or profits.
                  The total liability of the Service Provider for any claims arising out of this Agreement is limited to the total fees paid by the Client under this Agreement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">12. Force Majeure</h2>
                <p className="text-gray-600">
                  Neither party will be held liable for delays or failure to perform caused by circumstances beyond their reasonable control, including acts of God, natural disasters, war, strikes, or government regulations.
                  In the event of such circumstances, the affected party must notify the other party in writing as soon as possible.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">13. Communication and Meetings</h2>
                <p className="text-gray-600">
                  Regular progress updates will be shared via [insert preferred method, e.g., email, project management tool].
                  Weekly/biweekly progress meetings will be scheduled to review milestones, address feedback, and align on project goals.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">14. Dispute Resolution</h2>
                <p className="text-gray-600">
                  Any disputes arising under this Agreement will first be resolved through good faith negotiation between the parties.
                  If the dispute cannot be resolved, it will be submitted to mediation under the rules of [Insert Mediation Organization or Jurisdiction].
                  If mediation fails, the dispute will be resolved in {disputeJurisdiction}.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">15. Warranty</h2>
                <p className="text-gray-600">
                  The Service Provider warrants that the deliverables will perform substantially as described in the agreed Scope of Work for a period of [insert warranty period, e.g., 30 days] following project completion.
                  Any issues identified within this period will be addressed by the Service Provider at no additional cost.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">16. Data Security</h2>
                <p className="text-gray-600">
                  The Service Provider agrees to implement reasonable safeguards to ensure the security of the Client's data during the project.
                  The Client remains responsible for securing data outside the scope of the project deliverables.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">17. Independent Contractor</h2>
                <p className="text-gray-600">
                  The Service Provider is acting as an independent contractor and not as an employee, agent, or partner of the Client.
                  Nothing in this Agreement creates a joint venture, partnership, or employment relationship between the parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">18. Entire Agreement</h2>
                <p className="text-gray-600">
                  This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements, understandings, or communications, whether written or oral, regarding the subject matter.
                  Any amendments to this Agreement must be in writing and signed by both parties.
                </p>
              </div>
            </div>

            {/* Signatures */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Signatures</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SignatureSection
                  role="client"
                  name={contract.client?.name || ''}
                  company={contract.client?.company_name || ''}
                  date={contract.issue_date || contract.created_at || ''}
                  onSign={(sig) => { setClientSignature(sig); persistSignature('client', sig); }}
                />
                <SignatureSection
                  role="provider"
                  name={contract.provider_contact || 'Paul Gosnell'}
                  company={contract.provider_company || 'P0STMAN (AI-Powered Product Studio)'}
                  title="Founder, P0STMAN"
                  date={contract.issue_date || contract.created_at || ''}
                  onSign={(sig) => { setProviderSignature(sig); persistSignature('provider', sig); }}
                />
              </div>
              {(clientSignature || providerSignature) && !isSaving && (
                <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-blue-600">
                      {clientSignature && providerSignature
                        ? 'Both parties have signed'
                        : clientSignature
                        ? 'Waiting for service provider signature'
                        : 'Waiting for client signature'}
                    </div>
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Save as PDF
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Notes */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Notes:<br />
                This project is a P0STMAN delivery, leveraging AI-powered tools for rapid, high-quality product development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}