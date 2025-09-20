// server/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
