const express = require('express');
const router = express.Router();
require('dotenv').config();

const Country = require('../models/country.model');
const locationsCache = require('../cache/countries');

router.get('/city/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { country } = req.query;

    if (country && country.length === 2) {
      let objectId;

      // check for country in local cache
      const cachedCountry = locationsCache.get(country.toUpperCase());
      if (cachedCountry) objectId = cachedCountry.objectId;

      // if not in local cache, check in mongoDB
      if (!cachedCountry) {
        const dbCountry = await Country.findOne({ code: country.toUpperCase() });

        if (dbCountry) {
          locationsCache.set(country.toUpperCase(), dbCountry);
          objectId = dbCountry.objectId;
        }

        // if not in mongoDB, fetch it from 3rd party
        if (!dbCountry) {
          const fetchCountryByCode = require('../axios/fetchCountryByCode');

          const { results } = await fetchCountryByCode(country);
          if (results.length) {
            const [fetchedCountry] = results;
            await Country.create(fetchedCountry);
            locationsCache.set(country.toUpperCase(), fetchedCountry);
            objectId = fetchedCountry.objectId;
          }
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