import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, CheckCircle, Loader2 } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    social_links: {
      twitter: '',
      linkedin: '',
      instagram: ''
    },
    payment_method: '',
    payment_details: {
      paypal_email: '',
      bank_details: {
        name: '',
        account: '',
        routing: ''
      }
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        form_type: 'affiliate_signup',
        website: formData.website,
        social_links: JSON.stringify(formData.social_links),
        payment_method: formData.payment_method,
        payment_details: JSON.stringify(formData.payment_details)
      });
      
      setSuccess(true);
      
      // Close modal after showing success message
      setTimeout(() => {
        onClose();
        setStep(1);
        setSuccess(false);
        setFormData({
          name: '',
          email: '',
          website: '',
          social_links: {
            twitter: '',
            linkedin: '',
            instagram: ''
          },
          payment_method: '',
          payment_details: {
            paypal_email: '',
            bank_details: {
              name: '',
              account: '',
              routing: ''
            }
          }
        });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-pink-600" />
              <h2 className="text-2xl font-bold text-gray-900">Join Partner Program</h2>
            </div>

            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                <p className="text-gray-600">
                  We'll review your application and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                {step === 1 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="website">
                        Website (Optional)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </span>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Add Payment Details
                      </button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="payment_method">
                        Payment Method (Optional)
                      </label>
                      <select
                        id="payment_method"
                        name="payment_method"
                        value={formData.payment_method}
                        onChange={(e) => setFormData({ ...formData, payment_method: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="">Select payment method</option>
                        <option value="wise">Wise</option>
                        <option value="bank">Bank Transfer</option>
                      </select>
                    </div>

                    {formData.payment_method === 'paypal' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="paypal_email">
                          Wise Email
                        </label>
                        <input
                          type="email"
                          id="paypal_email"
                          name="paypal_email"
                          value={formData.payment_details.paypal_email}
                          onChange={(e) => setFormData({
                            ...formData,
                            payment_details: {
                              ...formData.payment_details,
                              paypal_email: e.target.value
                            }
                          })}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                      </div>
                    )}

                    {formData.payment_method === 'bank' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bank_name">
                            Account Holder Name
                          </label>
                          <input
                            type="text"
                            id="bank_name"
                            name="bank_name"
                            value={formData.payment_details.bank_details.name}
                            onChange={(e) => setFormData({
                              ...formData,
                              payment_details: {
                                ...formData.payment_details,
                                bank_details: {
                                  ...formData.payment_details.bank_details,
                                  name: e.target.value
                                }
                              }
                            })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bank_account">
                            Account Number
                          </label>
                          <input
                            type="text"
                            id="bank_account"
                            name="bank_account"
                            value={formData.payment_details.bank_details.account}
                            onChange={(e) => setFormData({
                              ...formData,
                              payment_details: {
                                ...formData.payment_details,
                                bank_details: {
                                  ...formData.payment_details.bank_details,
                                  account: e.target.value
                                }
                              }
                            })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bank_routing">
                            Routing Number
                          </label>
                          <input
                            type="text"
                            id="bank_routing"
                            name="bank_routing"
                            value={formData.payment_details.bank_details.routing}
                            onChange={(e) => setFormData({
                              ...formData,
                              payment_details: {
                                ...formData.payment_details,
                                bank_details: {
                                  ...formData.payment_details.bank_details,
                                  routing: e.target.value
                                }
                              }
                            })}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                      </>
                    )}

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </span>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </div>
                  </>
                )}
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}