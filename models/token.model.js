const mongoose = require('mongoose');
const { getFutureDate } = require('../utils/getFutureDate');
const authURL = process.env.MONGO_AUTH_URL;
const conn = mongoose.createConnection(authURL);

const tokenSchema = mongoose.Schema({
  token: { type: String, unique: true },
  uid: { type: String },
  expireAt: {
    type: Date,
    default: getFutureDate(1),
  }
}, {
  timestamps: true
});

module.exports = conn.model('tokens', tokenSchema);