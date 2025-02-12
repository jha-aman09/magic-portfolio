import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL || '',
      subject: 'New Callback Request',
      html: `
        <h2>New Callback Request</h2>
        <p>Someone has requested a callback from your portfolio website.</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ message: 'Callback request sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error sending callback request' });
  }
} 