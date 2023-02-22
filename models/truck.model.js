const mongoose = require('mongoose');
const { getFutureDate } = require('../utils/getFutureDate');
const trucksURL = process.env.MONGO_TRUCKS_URL;
const conn = mongoose.createConnection(trucksURL);

const truckSchema = mongoose.Schema({
  uid: { type: String },
  origin: {
    adminCode: { type: String },
    cityId: { type: Number },
    country: {
      code: { type: String },
      name: { type: String },
      objectId: { type: String }
    },
    name: { type: String },
    objectId: { type: String }
  },
  destination: {
    adminCode: { type: String },
    cityId: { type: Number },
    country: {
      code: { type: String },
      name: { type: String },
      objectId: { type: String }
    },
    name: { type: String },
    objectId: { type: String }
  },
  weight: { type: Number },
  length: { type: Number },
  truck: { type: String },
  expireAt: {
    type: Date,
    default: getFutureDate(5)
  }
}, {
  timestamps: true
});

module.exports = conn.model('dispatch', truckSchema);