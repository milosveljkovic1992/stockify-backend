const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const authenticateToken = require('./middleware/authenticateToken');
require('dotenv').config();

const PORT = process.env.API_PORT;
const warehouseURL = process.env.MONGO_WAREHOUSE_URL;
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
// app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use('/auth', require('./routes/auth'));
app.use('/private', authenticateToken, require('./routes/private'));

mongoose.set("strictQuery", false);

mongoose
  .connect(warehouseURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Database connection failed. Server not started.');
    console.error(err);
  });