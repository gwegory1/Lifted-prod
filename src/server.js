const express = require('express');
const axios = require('axios');
const app = express();

// Replace with your MailerSend API token and reCAPTCHA secret key
const MAILER_SEND_API_TOKEN = 'YOUR_MAILERSEND_API_TOKEN';
const RECAPTCHA_SECRET_KEY = 'YOUR_RECAPTCHA_SECRET_KEY';

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { to, from, subject, text, recaptchaToken } = req.body;

  // Step 1: Verify reCAPTCHA
  try {
    const recaptchaResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        },
      }
    );

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ message: 'CAPTCHA ellenőrzés sikertelen' });
    }

    // Step 2: Send email via MailerSend API
    const mailerSendResponse = await axios.post(
      'https://api.mailersend.com/v1/email',
      {
        from: { email: from }, // Must match your verified domain
        to: [{ email: to }],
        subject: subject,
        text: text,
      },
      {
        headers: {
          'Authorization': `Bearer ${MAILER_SEND_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (mailerSendResponse.status !== 202) {
      throw new Error('Email sending failed');
    }

    res.status(200).json({ message: 'Üzenet elküldve' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hiba történt az üzenet küldésekor' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});