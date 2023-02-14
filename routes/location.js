const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/city/:name', async (req, res) => {
  try {
    const { name } = req.params;
    try {
      const fetchCityByName = require('../axios/fetchCityByName');
      const { data } = await fetchCityByName(name);
      res.status(200).json(data.results);
    } catch (error) {
      res.status(500).json({
        errors: [{ msg: 'Something went wrong ' }]
      });
    }
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Something went wrong ' }]
    });
  }
});

module.exports = router;