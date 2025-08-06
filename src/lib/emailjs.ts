import emailjs from '@emailjs/browser';

// EmailJS configuration
const serviceId = 'service_4kl2tlf';
const templateId = 'template_e1jmkqa';
const publicKey = '83jOrcigOwx0BxhWm';

// Initialize EmailJS
emailjs.init(publicKey);

interface EmailParams {
  name: string;
  email: string;
  form_type: string; // Type of form being submitted
  project_type?: string;
  description?: string;
  [key: string]: any; // Allow additional fields
}

export const sendEmail = async (params: EmailParams): Promise<void> => {
  try {
    // Log what we're sending for debugging
    console.log('Sending email with params:', params);
    
    const response = await emailjs.send(serviceId, templateId, params);
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};