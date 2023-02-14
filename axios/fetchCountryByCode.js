const axios = require('axios');
require('dotenv').config();
const xParseApplicationId = process.env.X_PARSE_APPLICATION_ID;
const xParseApiKey = process.env.X_PARSE_REST_API_KEY;

const fetchCountryByCode = async (countryCode) => {
  const where = encodeURIComponent(JSON.stringify({
    "code": `${countryCode.toUpperCase()}`
  }));

  try {
    const { data } = await axios(
      `https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=2&keys=name,code&where=${where}`,
      {
        headers: {
          'X-Parse-Application-Id': xParseApplicationId,
          'X-Parse-REST-API-Key': xParseApiKey,
        }
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = fetchCountryByCode;