const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Truck = require('../models/truck.model');
const { getFutureDate } = require('../utils/getFutureDate');

router.post('/dispatch', async (req, res) => {
  try {
    const truck = await Truck.create({ ...req.body });

    res.status(201).send(truck);
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Error occured. Please try again' }]
    });
  }
});

router.put('/update/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const { truck } = req.body;

    try {
      const updatedTruck = await Truck.findOneAndUpdate(
        { _id },
        { ...truck, expireAt: getFutureDate(5) },
        { new: true }
      );
      res.status(200).send(updatedTruck);
    } catch (error) {
      res.status(404).json({
        errors: [{ msg: 'Truck not found. Please try again.' }]
      });
      return;
    }

  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Something went wrong ' }]
    });
  }
});

router.get('/find/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const trucks = await Truck.find({ uid });

    res.status(200).json(trucks);
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Something went wrong' }]
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

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