
//  Latest with emaill notification as well 
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // your Gmail/SMTP email   
    pass: process.env.EMAIL_PASS   // app password (NOT your real password)
  }
});

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save in MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 1️⃣ Send email to YOU (admin/inbox)
    const adminMailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,  // shows user's name
      to: process.env.EMAIL_USER,                     // your inbox
      replyTo: email,                                 // reply goes to user
      subject: `New message from ${name}`,
      text: `
You have received a new contact form submission:

Name: ${name}
Email: ${email}
Message:
${message}
      `
    };

    await transporter.sendMail(adminMailOptions);

    // 2️⃣ Send confirmation email to USER
    const userMailOptions = {
      from: `"Rosar-nani" <${process.env.EMAIL_USER}>`, // from you/your brand
      to: email,                                          // user's email
      subject: `We received your message, ${name}!`,
      text: `
Hi ${name},

Thank you for reaching out to us. We have received your message:

"${message}"

Our team will get back to you soon.

Best regards,
Your Website Team
      `
    };

    await transporter.sendMail(userMailOptions);

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Error saving contact or sending mail:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
 