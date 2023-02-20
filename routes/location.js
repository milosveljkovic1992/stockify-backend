const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/city/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { country } = req.query;

    if (country && country.length === 2) {
      const countries = require('../countries');
      const countryFound = countries.find(item => item.code === country.toUpperCase());

      // if country exists
      if (countryFound.objectId) {
        const fetchCityByNameAndCountry = require('../axios/fetchCityByNameAndCountry');
        const { results } = await fetchCityByNameAndCountry(name, countryFound.objectId);

        // check for duplicates and keep only newer input
        const filteredResults = results.reduce((acc, curr) => {
          const duplicateValue = acc.find(city => {
            const latitudeDiff = Math.abs(curr.location.latitude - city.location.latitude);
            const longitudeDiff = Math.abs(curr.location.longitude - city.location.longitude);

            if (latitudeDiff < 0.75 && longitudeDiff < 0.75) return city;
          });

          if (!duplicateValue) return [...acc, curr];

          const isDuplicateNewer = duplicateValue.updatedAt > curr.updatedAt;
          if (isDuplicateNewer) {
            return acc;
          } else {
            const index = acc.indexOf(duplicateValue.objectId);
            return [...acc].splice(index, 1, curr);
          }
        }, []);

        res.status(200).json(filteredResults);
      } else {
        // if country doesn't exist
        res.status(200).json([]);
      }
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
});

module.exports = router;