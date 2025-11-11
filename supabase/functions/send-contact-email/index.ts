import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { Resend } from 'npm:resend@2.0.0';

const resend = new Resend('re_UsAvvtBk_LVYW71pnX48nw42ZghxCABRu');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  form_type?: string;
}

function createEmailTemplate(data: ContactFormData): string {
  const { name, projectType, budget, timeline } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: -0.5px;
    }
    .header p {
      color: rgba(255, 255, 255, 0.9);
      margin: 10px 0 0 0;
      font-size: 16px;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 20px;
      color: #1a1a1a;
      margin-bottom: 20px;
      font-weight: 600;
    }
    .message-text {
      font-size: 16px;
      color: #4a5568;
      margin-bottom: 30px;
      line-height: 1.7;
    }
    .info-box {
      background: linear-gradient(135deg, #f6f8fb 0%, #e9ecf4 100%);
      border-left: 4px solid #667eea;
      padding: 20px;
      margin: 25px 0;
      border-radius: 8px;
    }
    .info-box h3 {
      margin: 0 0 15px 0;
      color: #2d3748;
      font-size: 18px;
      font-weight: 600;
    }
    .info-item {
      display: flex;
      padding: 8px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    .info-item:last-child {
      border-bottom: none;
    }
    .info-label {
      font-weight: 600;
      color: #4a5568;
      min-width: 120px;
      font-size: 14px;
    }
    .info-value {
      color: #667eea;
      font-weight: 500;
      font-size: 14px;
    }
    .next-steps {
      background: linear-gradient(135deg, #fef5e7 0%, #fdebd0 100%);
      border-left: 4px solid #f39c12;
      padding: 20px;
      margin: 25px 0;
      border-radius: 8px;
    }
    .next-steps h3 {
      margin: 0 0 15px 0;
      color: #2d3748;
      font-size: 18px;
      font-weight: 600;
    }
    .next-steps ol {
      margin: 0;
      padding-left: 20px;
      color: #4a5568;
    }
    .next-steps li {
      margin-bottom: 10px;
      font-size: 15px;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 8px;
      font-weight: 600;
      margin: 20px 0;
      font-size: 16px;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }
    .footer {
      background-color: #f7fafc;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #e2e8f0;
    }
    .footer p {
      margin: 5px 0;
      color: #718096;
      font-size: 14px;
    }
    .footer a {
      color: #667eea;
      text-decoration: none;
    }
    .signature {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e2e8f0;
    }
    .signature-name {
      font-weight: 600;
      color: #2d3748;
      font-size: 16px;
      margin-bottom: 5px;
    }
    .signature-title {
      color: #718096;
      font-size: 14px;
    }
    .highlight {
      background: linear-gradient(120deg, #fef5e7 0%, #fdebd0 100%);
      padding: 2px 6px;
      border-radius: 3px;
      font-weight: 600;
      color: #d68910;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>🎉 Thank You for Reaching Out!</h1>
      <p>We've received your inquiry and are excited to work with you</p>
    </div>

    <!-- Content -->
    <div class="content">
      <div class="greeting">Hi ${name}! 👋</div>

      <div class="message-text">
        Thank you for contacting <strong>P0stman</strong>. We're thrilled to learn about your project and how we can help bring your vision to life.
      </div>

      <div class="message-text">
        Your inquiry has been received and our team is already reviewing the details. We pride ourselves on <span class="highlight">rapid execution</span> and will get back to you within <span class="highlight">24 hours</span> with next steps.
      </div>

      ${projectType || budget || timeline ? `
      <div class="info-box">
        <h3>📋 Your Project Details</h3>
        ${projectType ? `
        <div class="info-item">
          <span class="info-label">Project Type:</span>
          <span class="info-value">${projectType}</span>
        </div>
        ` : ''}
        ${budget ? `
        <div class="info-item">
          <span class="info-label">Budget Range:</span>
          <span class="info-value">${budget}</span>
        </div>
        ` : ''}
        ${timeline ? `
        <div class="info-item">
          <span class="info-label">Timeline:</span>
          <span class="info-value">${timeline}</span>
        </div>
        ` : ''}
      </div>
      ` : ''}

      <div class="next-steps">
        <h3>🚀 What Happens Next?</h3>
        <ol>
          <li><strong>Review & Analysis</strong> - Our team reviews your requirements and prepares questions</li>
          <li><strong>Discovery Call</strong> - We schedule a call to dive deeper into your vision (usually 30-45 mins)</li>
          <li><strong>Strategy & Proposal</strong> - We present our approach, timeline, and investment</li>
          <li><strong>Rapid Execution</strong> - Once approved, we get to work immediately</li>
        </ol>
      </div>

      <div class="message-text">
        In the meantime, feel free to explore our recent work and see how we've helped other businesses achieve their goals:
      </div>

      <center>
        <a href="https://p0stman.com/case-studies" class="cta-button">
          View Our Case Studies
        </a>
      </center>

      <div class="signature">
        <div class="signature-name">Paul Gosnell</div>
        <div class="signature-title">Founder & Chief Product Officer</div>
        <div class="signature-title">P0stman - AI Platform Development</div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p><strong>P0stman</strong></p>
      <p>AI Platform Development | Strategy to Scale</p>
      <p>
        <a href="https://p0stman.com">Website</a> •
        <a href="https://p0stman.com/about">About</a> •
        <a href="https://p0stman.com/health">Health Portfolio</a>
      </p>
      <p style="margin-top: 15px; color: #a0aec0; font-size: 12px;">
        This is an automated response. A team member will follow up personally within 24 hours.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    const { name, email, company, projectType, budget, timeline, message } = formData;

    if (!email || !name) {
      throw new Error('Name and email are required');
    }

    // Send email to user
    const userEmailResponse = await resend.emails.send({
      from: 'P0stman <hello@p0stman.com>',
      to: [email],
      subject: '🎉 Thanks for reaching out! We\'ll be in touch soon.',
      html: createEmailTemplate(formData),
    });

    // Send notification to team
    const teamEmailResponse = await resend.emails.send({
      from: 'P0stman Contact Form <hello@p0stman.com>',
      to: ['hello@p0stman.com'],
      subject: `🔔 New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
        ${message ? `<p><strong>Message:</strong><br>${message}</p>` : ''}
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        userEmailId: userEmailResponse.data?.id,
        teamEmailId: teamEmailResponse.data?.id,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
