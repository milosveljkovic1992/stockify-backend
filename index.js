const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authenticateToken = require('./middleware/authenticateToken');
require('dotenv').config();

const PORT = process.env.API_PORT;
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use('/auth', require('./routes/auth'));
app.use('/truck', authenticateToken, require('./routes/truck'));
app.use('/private', authenticateToken, require('./routes/private'));

mongoose.set("strictQuery", false);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});