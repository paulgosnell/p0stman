import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Loader2, Twitter, Linkedin } from 'lucide-react';
import { sendEmail } from '../../lib/emailjs';
import FormInput from '../ui/FormInput';
import FormGroup from '../ui/FormGroup';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: ''
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
        form_type: 'contact_page',
        project_type: formData.projectType,
        description: formData.description,
        message: formData.description // EmailJS template may expect 'message' field
      });
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        description: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-light text-gray-900 mb-6">Send a Message</h2>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-light">
          {error}
        </div>
      )}

      {success ? (
        <div className="text-center py-12">
          <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-light mb-2">Message Sent!</h3>
          <p className="text-gray-600 font-light">
            Thanks for reaching out. I'll get back to you soon.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700 font-light">
                <p className="font-medium mb-1">Want a faster response?</p>
                <p>DM me directly on <a href="https://twitter.com/paulgosnell" className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a> or message me on <a href="https://linkedin.com/in/pgosnell" className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
              </div>
            </div>
          </div>

          <FormGroup
            onSubmit={handleSubmit}
            submitText="Send Message"
            submitting={isSubmitting}
          >
            <FormInput
              id="contact_page_name"
              name="name"
              type="text"
              label="Name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              required
            />

            <FormInput
              id="contact_page_email"
              name="email"
              type="email"
              label="Email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="contact_page_project_type">
                Project Type
              </label>
              <select
                id="contact_page_project_type"
                name="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 font-light transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                required
              >
                <option value="">Select project type</option>
                <option value="Builder's Guide">Builder's Guide ($50)</option>
                <option value="Expert Support">Expert Support ($100)</option>
                <option value="Expert Training">Expert Training ($500)</option>
                <option value="Retainer Service">Retainer Service ($5,000/mo)</option>
                <option value="Custom Website">Custom Website ($10,000)</option>
                <option value="Mobile App">Mobile App ($20,000)</option>
                <option value="AI Agents">AI Agents ($5,000)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <FormInput
              id="contact_page_description"
              name="description"
              type="textarea"
              label="Message"
              placeholder="Tell me about your project..."
              value={formData.description}
              onChange={(value) => setFormData({ ...formData, description: value })}
              rows={5}
              required
            />
          </FormGroup>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 font-light mb-4">Also connect with me on:</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://twitter.com/paulgosnell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors font-light"
              >
                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                <span>Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/pgosnell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors font-light"
              >
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}