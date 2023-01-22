const mongoose = require('mongoose');
const { getTomorrowDate } = require('../utils/getTomorrowDate');

const tokenSchema = mongoose.Schema({
  token: { type: String, unique: true },
  expireAt: {
    type: Date,
    default: getTomorrowDate(),
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('tokens', tokenSchema);