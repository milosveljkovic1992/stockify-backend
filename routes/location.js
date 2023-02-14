const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/city/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { country } = req.query;
    try {
      if (country && country.length === 2) {
        const fetchCountryByCode = require('../axios/fetchCountryByCode');
        const { results } = await fetchCountryByCode(country);
        const { objectId } = results[0];

        const fetchCityByNameAndCountry = require('../axios/fetchCityByNameAndCountry');
        const response = await fetchCityByNameAndCountry(name, objectId);
        res.status(200).json(response.results);
      } else {
        const fetchCityByName = require('../axios/fetchCityByName');
        const { data } = await fetchCityByName(name);
        res.status(200).json(data.results);
      }
    } catch (error) {
      res.status(500).json({
        errors: [{ msg: 'Something went wrong' }]
      });
    }
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Something went wrong' }]
    });
  }
});

module.exports = router;