const mongoose = require('mongoose');
const { getFutureDate } = require('../utils/getFutureDate');
const trucksURL = process.env.MONGO_TRUCKS_URL;
const conn = mongoose.createConnection(trucksURL);

const truckSchema = mongoose.Schema({
  uid: { type: String },
  parameters: {
    origin: { type: String },
    destination: { type: String },
    weight: { type: Number },
    length: { type: Number },
  },
  expireAt: {
    type: Date,
    default: getFutureDate(5)
  }
}, {
  timestamps: true
});

module.exports = conn.model('dispatch', truckSchema);