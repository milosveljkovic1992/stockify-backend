const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.API_PORT;
const warehouseURL = process.env.MONGO_WAREHOUSE_URL;
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/auth'));

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