const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const xParseApplicationId = process.env.X_PARSE_APPLICATION_ID;
const xParseApiKey = process.env.X_PARSE_REST_API_KEY;

router.get('/city/:name', async (req, res) => {
  try {
    const { name } = req.params;
    try {
      const fetchCityByName = require('../axios/fetchCityByName');
      const { data } = await fetchCityByName(name);
      const cities = data.results;

      if (cities.length > 0) {
        const results = await Promise.all(cities.map(async (city) => {
          const countryId = city.country.objectId;
          const usaCountryId = 'BXkZTl2omc';

          if (countryId !== usaCountryId) {
            // if not USA, replace admin code with country code
            try {
              const fetchCountryById = require('../axios/fetchCountryById');
              const { data } = await fetchCountryById(countryId);
              city.adminCode = data.code;
            } catch (error) {
              return city;
            }
          };
          return city;
        }));

        res.status(200).json(results);
      } else {
        res.status(200).json([]);
      }
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