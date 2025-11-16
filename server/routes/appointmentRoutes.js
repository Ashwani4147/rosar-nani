const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // your Gmail/SMTP email
    pass: process.env.EMAIL_PASS   // app password
  }
});

// POST /api/appointment
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, preferredTiming, service } = req.body;

    // Save in MongoDB
    const newAppointment = new Appointment({
      name,
      email,
      phone,
      preferredTiming,
      service
    });

    await newAppointment.save();

    // 1️⃣ Email to ADMIN (your inbox)
    const adminMailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Appointment Booking from ${name}`,
      text: `
You have received a new appointment booking:

Name: ${name}
Email: ${email}
Phone: ${phone}
Preferred Timing: ${preferredTiming}
Service: ${service}

Booked At: ${new Date().toLocaleString()}
      `
    };

    await transporter.sendMail(adminMailOptions);

    // 2️⃣ Confirmation email to USER
    const userMailOptions = {
      from: `"Rosar-nani" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your Appointment Request is Received`,
      text: `
Hi ${name},

Thank you for booking an appointment with us!

Here are your details:
Name: ${name}
Phone: ${phone}
Preferred Timing: ${preferredTiming}
Service: ${service}

Our team will reach out shortly to confirm the appointment time.

Regards,
Rosar-nani Team
      `
    };

    await transporter.sendMail(userMailOptions);

    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (err) {
    console.error('Error saving appointment or sending email:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
