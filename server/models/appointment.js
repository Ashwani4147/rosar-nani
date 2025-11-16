const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
 // preferredTiming: String,   // Morning / Afternoon / Evening
  service: String,           // Selected service
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('appointment', appointmentSchema);
