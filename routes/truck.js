const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Truck = require('../models/truck.model');

router.post('/dispatched', async (req, res) => {
  try {
    const refreshToken = req.cookies['jwtRefresh'];
    const { uid } = jwt.decode(refreshToken);
    const { origin, destination, weight, length } = req.body;

    const { id: _id, parameters } = await Truck.create({ uid, parameters: { origin, destination, weight, length } });

    res.status(201).send({ _id, ...parameters });
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Error occured. Please try again' }]
    });
  }
});

router.delete('/remove', async (req, res) => {
  try {
    const { id } = req.body;
    const truck = await Truck.findByIdAndDelete(id);
    if (!truck) {
      res.status(404).json({
        errors: [{ msg: 'Truck not found' }]
      });
      return;
    }

    res.status(200).send('Truck removed')
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Something went wrong' }]
    });
  }
});

module.exports = router;