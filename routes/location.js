const express = require('express');
const router = express.Router();
require('dotenv').config();
const locationsCache = require('../cache/countries');

router.get('/city/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { country } = req.query;

    if (country && country.length === 2) {
      let objectId;
      const cachedCountry = locationsCache.get(country.toUpperCase());

      if (cachedCountry) objectId = cachedCountry.objectId;
      if (!cachedCountry) {
        const fetchCountryByCode = require('../axios/fetchCountryByCode');

        const { results } = await fetchCountryByCode(country);
        if (results.length) {
          const [fetchedCountry] = results;
          locationsCache.set(country.toUpperCase(), fetchedCountry);
          objectId = fetchedCountry.objectId;
        }
      }

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
});

module.exports = router;