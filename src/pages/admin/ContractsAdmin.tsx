import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Loader2, ArrowLeft, FileText, Mail, Edit } from 'lucide-react';
import { getContracts, getContract, updateContract, type Contract } from '../../lib/supabase/contracts';

export default function ContractsAdmin() {
  const navigate = useNavigate();
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const [editingContract, setEditingContract] = useState<Contract | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadContracts();
  }, []);

  const openEditModal = async (contractNumber: string) => {
    try {
      setError(null);
      const data = await getContract(contractNumber);
      setEditingContract(data);
      setEditing(true);
    } catch (err) {
      console.error('Error loading contract for edit:', err);
      setError(err instanceof Error ? err.message : 'Failed to load contract');
    }
  };

  const closeEditModal = () => {
    setEditing(false);
    setEditingContract(null);
  };

  const handleSave = async () => {
    if (!editingContract) return;
    try {
      setIsSaving(true);
      await updateContract(editingContract.contract_number, {
        status: editingContract.status,
        total_amount: editingContract.total_amount,
        currency: editingContract.currency,
        currency_symbol: editingContract.currency_symbol,
        provider_name: editingContract.provider_name,
        provider_company: editingContract.provider_company,
        provider_legal_entity: editingContract.provider_legal_entity,
        provider_address: editingContract.provider_address,
        provider_contact: editingContract.provider_contact,
        template: editingContract.template,
        project_scope: editingContract.project_scope,
        project_out_of_scope: editingContract.project_out_of_scope,
        project_timeline_duration: editingContract.project_timeline_duration,
        project_milestones: editingContract.project_milestones,
      });
      await loadContracts();
      closeEditModal();
    } catch (err) {
      console.error('Error saving contract:', err);
      setError(err instanceof Error ? err.message : 'Failed to save contract');
    } finally {
      setIsSaving(false);
    }
  };

  // Helpers for editing arrays in the modal
  const updateOutOfScopeItem = (index: number, value: string) => {
    if (!editingContract) return;
    const arr = [...(editingContract.project_out_of_scope || [])];
    arr[index] = value;
    setEditingContract({ ...editingContract, project_out_of_scope: arr });
  };

  const addOutOfScopeItem = () => {
    if (!editingContract) return;
    const arr = [...(editingContract.project_out_of_scope || []), ''];
    setEditingContract({ ...editingContract, project_out_of_scope: arr });
  };

  const removeOutOfScopeItem = (index: number) => {
    if (!editingContract) return;
    const arr = [...(editingContract.project_out_of_scope || [])];
    arr.splice(index, 1);
    setEditingContract({ ...editingContract, project_out_of_scope: arr });
  };

  const updateMilestoneField = (index: number, field: string, value: string) => {
    if (!editingContract) return;
    const ms = [...(editingContract.project_milestones || [])];
    ms[index] = { ...ms[index], [field]: value };
    setEditingContract({ ...editingContract, project_milestones: ms });
  };

  const addMilestone = () => {
    if (!editingContract) return;
    const ms = [...(editingContract.project_milestones || []), { name: '', deliverable: '', percentage: '', amount: '' }];
    setEditingContract({ ...editingContract, project_milestones: ms });
  };

  const removeMilestone = (index: number) => {
    if (!editingContract) return;
    const ms = [...(editingContract.project_milestones || [])];
    ms.splice(index, 1);
    setEditingContract({ ...editingContract, project_milestones: ms });
  };

  const loadContracts = async () => {
    try {
      setLoading(true);
      const data = await getContracts();
      setContracts(data);
    } catch (err) {
      console.error('Error loading contracts:', err);
      setError(err instanceof Error ? err.message : 'Failed to load contracts');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: Contract['status']) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-600';
      case 'sent':
        return 'bg-blue-100 text-blue-600';
      case 'signed':
        return 'bg-green-100 text-green-600';
      case 'expired':
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
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold">Contracts</h1>
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
              onClick={() => navigate('/admin/contracts/new')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              New Contract
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
            {error}
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contract</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">#{contract.contract_number}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{contract.client?.company_name}</div>
                      <div className="text-sm text-gray-500">{contract.client?.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {(() => {
                          try {
                            const code = (contract.currency as string) || 'USD';
                            return new Intl.NumberFormat(undefined, { style: 'currency', currency: code }).format(Number(contract.total_amount || 0));
                          } catch (e) {
                            return `$${Number(contract.total_amount || 0).toLocaleString()}`;
                          }
                        })()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                        {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{new Date(contract.issue_date).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigate(`/contracts/${contract.contract_number}`)}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <FileText className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => openEditModal(contract.contract_number)}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <a
                          href={`mailto:${contract.client?.email}?subject=Contract%20${contract.contract_number}`}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editing && editingContract && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden">
            {/* Header (fixed) */}
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold">Edit Contract #{editingContract.contract_number}</h2>
              <div className="flex items-center gap-2">
                <button onClick={closeEditModal} className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Close</button>
              </div>
            </div>

            {/* Body (scrollable) */}
            <div className="px-6 py-4 overflow-y-auto space-y-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={editingContract.status}
                    onChange={(e) => setEditingContract({ ...editingContract, status: e.target.value as Contract['status'] })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  >
                    <option value="draft">Draft</option>
                    <option value="sent">Sent</option>
                    <option value="signed">Signed</option>
                    <option value="expired">Expired</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Total Amount</label>
                  <input
                    type="number"
                    value={editingContract.total_amount}
                    onChange={(e) => setEditingContract({ ...editingContract, total_amount: Number(e.target.value) })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Currency</label>
                  <div className="mt-1 flex items-center gap-3">
                    <select
                      value={editingContract.currency || 'USD'}
                      onChange={(e) => setEditingContract({ ...editingContract, currency: e.target.value, currency_symbol: e.target.value === 'GBP' ? '£' : e.target.value === 'AED' ? 'د.إ' : '$' })}
                      className="block w-40 rounded-md border-gray-300 shadow-sm"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="AED">AED (د.إ)</option>
                    </select>
                    <div className="text-sm text-gray-700">{editingContract.currency_symbol || (editingContract.currency === 'GBP' ? '£' : editingContract.currency === 'AED' ? 'د.إ' : '$')}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Provider Company</label>
                  <input
                    type="text"
                    value={editingContract.provider_company || ''}
                    onChange={(e) => setEditingContract({ ...editingContract, provider_company: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Provider Legal Entity</label>
                  <input
                    type="text"
                    value={editingContract.provider_legal_entity || ''}
                    onChange={(e) => setEditingContract({ ...editingContract, provider_legal_entity: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Provider Address</label>
                <input
                  type="text"
                  value={editingContract.provider_address || ''}
                  onChange={(e) => setEditingContract({ ...editingContract, provider_address: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Provider Contact</label>
                <input
                  type="text"
                  value={editingContract.provider_contact || ''}
                  onChange={(e) => setEditingContract({ ...editingContract, provider_contact: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Template</label>
                <select
                  value={editingContract.template || 'UK'}
                  onChange={(e) => {
                    const template = e.target.value as 'UK' | 'UAE';
                    const defaults = template === 'UAE'
                      ? {
                          provider_company: 'P0STMAN (AI-Powered Product Studio)',
                          provider_legal_entity: 'Chilled Ventures L.L.C',
                          provider_address: 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, United Arab Emirates',
                          provider_contact: editingContract.provider_contact || 'Paul Gosnell',
                        }
                      : {
                          provider_company: 'P0STMAN',
                          provider_legal_entity: 'P0STMAN',
                          provider_address: 'Tyby Farm, Wood Dalling, Norfolk',
                          provider_contact: editingContract.provider_contact || 'Paul Gosnell',
                        };

                    setEditingContract({ ...editingContract, template, ...defaults });
                  }}
                  className="mt-1 block w-40 rounded-md border-gray-300 shadow-sm"
                >
                  <option value="UK">UK</option>
                  <option value="UAE">UAE</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Project Scope</label>
                <textarea
                  value={editingContract.project_scope || ''}
                  onChange={(e) => setEditingContract({ ...editingContract, project_scope: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Project Timeline (duration)</label>
                  <input
                    type="text"
                    value={editingContract.project_timeline_duration || ''}
                    onChange={(e) => setEditingContract({ ...editingContract, project_timeline_duration: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Out Of Scope Items</label>
                  <div className="space-y-2 mt-2">
                    {(editingContract.project_out_of_scope || []).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => updateOutOfScopeItem(idx, e.target.value)}
                          className="flex-1 rounded-md border-gray-300 shadow-sm"
                        />
                        <button onClick={() => removeOutOfScopeItem(idx)} className="px-2 py-1 bg-red-100 text-red-600 rounded">Remove</button>
                      </div>
                    ))}
                    <button onClick={addOutOfScopeItem} className="mt-2 px-3 py-2 bg-gray-100 rounded">Add Item</button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Milestones</label>
                <div className="space-y-4 mt-2">
                  {(editingContract.project_milestones || []).map((ms, idx) => (
                    <div key={idx} className="space-y-2 p-2 border rounded">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Name"
                          value={ms.name}
                          onChange={(e) => updateMilestoneField(idx, 'name', e.target.value)}
                          className="flex-1 rounded-md border-gray-300 shadow-sm"
                        />
                        <button onClick={() => removeMilestone(idx)} className="px-2 py-1 bg-red-100 text-red-600 rounded">Remove</button>
                      </div>
                      <input
                        type="text"
                        placeholder="Deliverable"
                        value={ms.deliverable}
                        onChange={(e) => updateMilestoneField(idx, 'deliverable', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Percentage"
                          value={ms.percentage}
                          onChange={(e) => updateMilestoneField(idx, 'percentage', e.target.value)}
                          className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm"
                        />
                        <input
                          type="text"
                          placeholder="Amount"
                          value={ms.amount}
                          onChange={(e) => updateMilestoneField(idx, 'amount', e.target.value)}
                          className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm"
                        />
                      </div>
                    </div>
                  ))}
                  <button onClick={addMilestone} className="mt-2 px-3 py-2 bg-gray-100 rounded">Add Milestone</button>
                </div>
              </div>
            </div>

            {/* Footer (fixed) */}
            <div className="px-6 py-4 border-t flex justify-end gap-3">
              <button
                onClick={closeEditModal}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}