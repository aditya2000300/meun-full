// server/models/Worker.js
const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5, default: 0 },
  available: { type: Boolean, default: true },
  img: { type: String }, // URL to image
  reviews: [
    {
      user: String,
      comment: String,
      rating: { type: Number, min: 0, max: 5 },
    },
  ],
});

module.exports = mongoose.model('Worker', workerSchema);