const mongoose = require('mongoose');
const locationURL = process.env.MONGO_LOCATION_URL;
const conn = mongoose.createConnection(locationURL);

const countrySchema = mongoose.Schema({
  objectId: { type: String, unique: true },
  code: { type: String, unique: true },
  name: { type: String, unique: true }
});

module.exports = conn.model('country', countrySchema);