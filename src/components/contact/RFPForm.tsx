import React, { useState } from 'react';
import { X, FileText, Loader2, CheckCircle, Calendar } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';

interface RFPFormProps {
  onClose: () => void;
}

interface RFPFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industryType: string;
  projectType: string;
  budget: string;
  timeline: string;
  projectGoals: string;
  projectRequirements: string;
  additionalInfo: string;
}

export default function RFPForm({ onClose }: RFPFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState<RFPFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industryType: '',
    projectType: '',
    budget: '',
    timeline: '',
    projectGoals: '',
    projectRequirements: '',
    additionalInfo: ''
  });

  const inputClasses = "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-500 transition-colors";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare data for EmailJS - make sure all field names match what EmailJS expects
      await sendEmail({
        name: formData.contactName,
        email: formData.email,
        form_type: 'rfp_submission',
        company_name: formData.companyName,
        phone: formData.phone,
        industry_type: formData.industryType,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        project_goals: formData.projectGoals,
        project_requirements: formData.projectRequirements,
        additional_info: formData.additionalInfo
      });

      setSuccess(true);
      
      // Reset form after timeout
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Error submitting RFP:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit RFP');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSummary = () => {
    return (
      <div className="space-y-4 p-4 bg-gray-800/70 rounded-lg border border-gray-700/50">
        <h3 className="text-lg font-medium text-white">RFP Summary</h3>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Company:</span>
            <p className="text-white">{formData.companyName}</p>
          </div>
          <div>
            <span className="text-gray-400">Contact:</span>
            <p className="text-white">{formData.contactName}</p>
          </div>
          <div>
            <span className="text-gray-400">Project:</span>
            <p className="text-white">{formData.projectType}</p>
          </div>
          <div>
            <span className="text-gray-400">Industry:</span>
            <p className="text-white">{formData.industryType}</p>
          </div>
          <div>
            <span className="text-gray-400">Budget:</span>
            <p className="text-white">{formData.budget}</p>
          </div>
          <div>
            <span className="text-gray-400">Timeline:</span>
            <p className="text-white">{formData.timeline}</p>
          </div>
        </div>
        
        <div>
          <span className="text-gray-400">Project Goals:</span>
          <p className="text-white text-sm">{formData.projectGoals}</p>
        </div>
        
        <div>
          <span className="text-gray-400">Requirements:</span>
          <p className="text-white text-sm">{formData.projectRequirements}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl font-bold text-white">Submit RFP (Request for Proposal)</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {success ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">RFP Submitted Successfully!</h3>
          <p className="text-gray-400">
            Thank you for your detailed project request. I'll review it carefully and get back to you with a custom proposal.
          </p>
        </div>
      ) : (
        <form onSubmit={step === 3 ? handleSubmit : undefined} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200 mb-6">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-600' : 'bg-gray-700'}`}>
                1
              </div>
              <div className={`h-0.5 w-6 ${step > 1 ? 'bg-blue-600' : 'bg-gray-700'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-600' : 'bg-gray-700'}`}>
                2
              </div>
              <div className={`h-0.5 w-6 ${step > 2 ? 'bg-blue-600' : 'bg-gray-700'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 3 ? 'bg-blue-600' : 'bg-gray-700'}`}>
                3
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              {step === 1 ? 'Contact Information' : step === 2 ? 'Project Details' : 'Review & Submit'}
            </div>
          </div>

          {step === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses} htmlFor="rfp_company_name">Company Name</label>
                  <input
                    type="text"
                    id="rfp_company_name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className={inputClasses}
                    placeholder="Acme Inc."
                    required
                  />
                </div>

                <div>
                  <label className={labelClasses} htmlFor="rfp_contact_name">Contact Name</label>
                  <input
                    type="text"
                    id="rfp_contact_name"
                    name="contactName"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className={inputClasses}
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses} htmlFor="rfp_email">Email</label>
                  <input
                    type="email"
                    id="rfp_email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                    placeholder="john@acme.com"
                    required
                  />
                </div>

                <div>
                  <label className={labelClasses} htmlFor="rfp_phone">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="rfp_phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClasses}
                    placeholder="+1 (234) 567-8901"
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses} htmlFor="rfp_industry_type">Industry Type</label>
                <select
                  id="rfp_industry_type"
                  name="industryType"
                  value={formData.industryType}
                  onChange={(e) => setFormData({ ...formData, industryType: e.target.value })}
                  className={inputClasses}
                  required
                >
                  <option value="">Select industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Education">Education</option>
                  <option value="Finance">Finance</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next: Project Details
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses} htmlFor="rfp_project_type">Project Type</label>
                  <select
                    id="rfp_project_type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="AI Agents">AI Agents</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Custom Website">Custom Website</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Integration">Integration</option>
                    <option value="Automation">Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className={labelClasses} htmlFor="rfp_budget">Budget Range</label>
                  <select
                    id="rfp_budget"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClasses} htmlFor="rfp_timeline">Timeline</label>
                <select
                  id="rfp_timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className={inputClasses}
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-2 Months">1-2 Months</option>
                  <option value="3-4 Months">3-4 Months</option>
                  <option value="6+ Months">6+ Months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className={labelClasses} htmlFor="rfp_project_goals">Project Goals</label>
                <textarea
                  id="rfp_project_goals"
                  name="projectGoals"
                  value={formData.projectGoals}
                  onChange={(e) => setFormData({ ...formData, projectGoals: e.target.value })}
                  className={inputClasses}
                  placeholder="What are your main goals for this project?"
                  rows={3}
                  required
                ></textarea>
              </div>

              <div>
                <label className={labelClasses} htmlFor="rfp_project_requirements">Project Requirements</label>
                <textarea
                  id="rfp_project_requirements"
                  name="projectRequirements"
                  value={formData.projectRequirements}
                  onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                  className={inputClasses}
                  placeholder="Specific features, integrations, or requirements..."
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Review RFP
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="mb-6">
                <h4 className="text-lg font-medium text-white mb-4">Review Your RFP</h4>
                {renderSummary()}
              </div>

              <div>
                <label className={labelClasses} htmlFor="rfp_additional_info">Additional Information (Optional)</label>
                <textarea
                  id="rfp_additional_info"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className={inputClasses}
                  placeholder="Anything else you'd like to share about your project..."
                  rows={3}
                ></textarea>
              </div>

              <div className="p-4 bg-blue-900/30 border border-blue-700/50 rounded-lg flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  After submitting your RFP, I'll review it and reach out within 24-48 hours to schedule a consultation.
                </p>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    'Submit RFP'
                  )}
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </>
  );
}