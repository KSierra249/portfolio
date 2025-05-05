import express from 'express';
import * as path from 'path';
import { MailerSend, EmailParams } from 'mailersend';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const mailer = new MailerSend({
  apiKey: process.env.MAILERSEND_API_TOKEN!
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.post('/api/email', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).send({ error: 'All fields are required' });
  }
  try {
    const emailParams = new EmailParams()
    .setFrom({
      email: process.env.MAILERSEND_FROM_EMAIL!,
      name:  process.env.MAILERSEND_FROM_NAME,
    })
    .setTo([
      { email: process.env.MAILERSEND_TO_EMAIL!, name: 'Karla' }
    ])
      .setSubject('New message from portfolio contact form')
      .setText(`Name: ${name}\nEmail: ${email}`)
      .setHtml(`<p>${name}</p><p>${email}</p><p>${message}</p>`);
    const response = await mailer.email.send(emailParams);
    console.log('Email sent:', response);
    return res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).send({ error: 'Failed to send email' });
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
