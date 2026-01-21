import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Shield, Cookie } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

const content = {
  terms: {
    icon: FileText,
    title: 'Terms of Service',
    content: `Last Updated: March 27, 2024

1. Acceptance of Terms
By accessing and using POSTMAN's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

2. Services Description
POSTMAN provides AI-powered development services, including but not limited to:
- Custom website development
- Training and educational services
- Digital product development
- Consulting services

3. User Obligations
You agree to:
- Provide accurate and complete information
- Maintain the confidentiality of your account
- Use the services in compliance with applicable laws
- Not engage in any activity that interferes with or disrupts the services

4. Intellectual Property Rights
- All content, features, and functionality are owned by POSTMAN
- You retain ownership of your content and data
- You grant POSTMAN a license to use your content for service provision

5. Payment Terms
- Payments are due as specified in service agreements
- All fees are non-refundable unless otherwise stated
- Prices are subject to change with notice

6. Limitation of Liability
POSTMAN shall not be liable for:
- Indirect, incidental, or consequential damages
- Loss of profits or data
- Service interruptions or delays

7. Term and Termination
- Either party may terminate with written notice
- POSTMAN may suspend services for violations
- Upon termination, you must cease using all services

8. Changes to Terms
We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.`
  },
  privacy: {
    icon: Shield,
    title: 'Privacy Policy',
    content: `Last Updated: March 27, 2024

1. Information We Collect
We collect information that you provide directly:
- Contact information (name, email, phone)
- Account credentials
- Project requirements and preferences
- Payment information

2. How We Use Your Information
We use your information to:
- Provide and improve our services
- Communicate with you about services
- Process payments and transactions
- Analyze and enhance user experience
- Comply with legal obligations

3. Information Sharing
We do not sell your personal information. We share information with:
- Service providers and partners
- Legal authorities when required
- Third parties with your consent

4. Data Security
We implement appropriate security measures:
- Encryption of sensitive data
- Regular security assessments
- Access controls and monitoring
- Secure data storage practices

5. Your Rights
You have the right to:
- Access your personal information
- Correct inaccurate data
- Request deletion of your data
- Opt-out of marketing communications
- Export your data

6. Data Retention
We retain your information for:
- The duration of our business relationship
- As required by law
- As needed for legitimate business purposes

7. International Transfers
Data may be processed in different countries with appropriate safeguards.

8. Changes to Privacy Policy
We will notify you of material changes to this policy.`
  }
};

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const { icon: Icon, title, content: modalContent } = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>

            <div className="prose prose-blue max-w-none">
              <div className="whitespace-pre-line">{modalContent}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}