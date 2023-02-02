const mongoose = require('mongoose');
const authURL = process.env.MONGO_AUTH_URL;
const conn = mongoose.createConnection(authURL);

const userSchema = mongoose.Schema({
  username: { type: String, unique: false },
  email: { type: String, unique: true },
  password: String,
  role: String
});

module.exports = conn.model('user', userSchema);