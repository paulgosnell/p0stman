import { sendEmail } from './emailjs';
import type { DataCollection } from '../types/elevenlabs';

/**
 * Email template helpers for ElevenLabs conversation follow-ups
 */

export interface FollowUpEmailData {
  email: string;
  name?: string;
  company?: string;
  interestLevel?: string;
  specificInterest?: string;
  conversationId: string;
  budgetRange?: string;
  timeline?: string;
}

/**
 * Send a follow-up email after a voice conversation
 */
export async function sendVoiceAgentFollowUp(data: FollowUpEmailData): Promise<void> {
  const messageContent = buildFollowUpMessage(data);

  await sendEmail({
    name: data.name || 'there',
    email: data.email,
    form_type: 'voice_agent_follow_up',
    message: messageContent,
    company: data.company || '',
    interest_level: data.interestLevel || 'medium',
    specific_interest: data.specificInterest || 'AI solutions',
    conversation_id: data.conversationId,
    budget_range: data.budgetRange || '',
    timeline: data.timeline || '',
  });
}

/**
 * Build personalized follow-up message based on interest level and collected data
 */
function buildFollowUpMessage(data: FollowUpEmailData): string {
  const name = data.name ? data.name.split(' ')[0] : 'there';
  const interest = data.specificInterest || 'our AI solutions';

  let message = `Hi ${name},\n\nThank you for your interest in ${interest}. `;

  // Customize based on interest level
  switch (data.interestLevel) {
    case 'high':
      message += `We're excited to help you get started! Based on our conversation, it sounds like you're ready to move forward.\n\n`;
      message += `Next Steps:\n`;
      message += `1. Review the detailed information we're sending you\n`;
      message += `2. Schedule a demo call with our team: https://calendly.com/p0stman/demo\n`;
      message += `3. We'll prepare a custom proposal based on your needs\n\n`;

      if (data.budgetRange) {
        message += `We noted your budget range and will tailor our proposal accordingly.\n`;
      }

      if (data.timeline) {
        message += `We understand your timeline and will prioritize getting back to you quickly.\n`;
      }

      message += `\nExpect to hear from us within 24 hours!`;
      break;

    case 'medium':
      message += `We'd love to tell you more about how we can help.\n\n`;
      message += `Resources for you:\n`;
      message += `- Case studies: https://p0stman.com/case-studies\n`;
      message += `- Pricing guide: https://p0stman.com/pricing\n`;
      message += `- Schedule a quick chat: https://calendly.com/p0stman/consultation\n\n`;
      message += `Feel free to reach out if you have any questions!`;
      break;

    case 'low':
      message += `We're here when you're ready to explore further.\n\n`;
      message += `In the meantime, here are some resources:\n`;
      message += `- Our blog: https://p0stman.com/blog\n`;
      message += `- Documentation: https://p0stman.com/docs\n`;
      message += `- FAQs: https://p0stman.com/faq\n\n`;
      message += `No pressure - reach out whenever you'd like to chat!`;
      break;

    default:
      message += `We appreciate you taking the time to learn about what we do.\n\n`;
      message += `If you have any questions or want to learn more, don't hesitate to reach out.\n\n`;
      message += `Visit our website: https://p0stman.com`;
  }

  message += `\n\nBest regards,\nThe P0STMAN Team\n\nhello@p0stman.com`;

  return message;
}

/**
 * Send high-interest lead notification to team (via EmailJS)
 */
export async function notifyTeamOfHighInterestLead(data: FollowUpEmailData): Promise<void> {
  // Use a different template for internal team notifications
  await sendEmail({
    name: 'P0STMAN Team',
    email: 'hello@p0stman.com', // Team email
    form_type: 'internal_hot_lead_notification',
    message: `New hot lead from voice agent!\n\nName: ${data.name || 'Not provided'}\nEmail: ${data.email}\nCompany: ${data.company || 'Not provided'}\nInterest: ${data.specificInterest || 'Not specified'}\nBudget: ${data.budgetRange || 'Not discussed'}\nTimeline: ${data.timeline || 'Not discussed'}\n\nConversation ID: ${data.conversationId}`,
    lead_name: data.name || 'Unknown',
    lead_email: data.email,
    lead_company: data.company || 'Not provided',
    interest_level: data.interestLevel || 'medium',
    specific_interest: data.specificInterest || 'Not specified',
    conversation_id: data.conversationId,
  });
}

/**
 * Send a thank you email for providing contact info
 */
export async function sendThankYouEmail(email: string, name?: string): Promise<void> {
  await sendEmail({
    name: name || 'there',
    email: email,
    form_type: 'voice_agent_thank_you',
    message: `Thank you for chatting with our AI assistant! We'll be in touch soon.`,
  });
}

/**
 * Parse collected data into email-ready format
 */
export function parseCollectedDataForEmail(collectedData: DataCollection, conversationId: string): FollowUpEmailData {
  return {
    email: collectedData.user_email || '',
    name: collectedData.user_name,
    company: collectedData.company_name,
    interestLevel: collectedData.interest_level,
    specificInterest: collectedData.specific_interest,
    conversationId: conversationId,
    budgetRange: collectedData.budget_range,
    timeline: collectedData.timeline,
  };
}
