// backend/models/Event.js
const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  media: [{ type: String }], // Array of media file URLs
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Event', eventSchema);
