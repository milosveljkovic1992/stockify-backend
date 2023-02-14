const axios = require('axios');
require('dotenv').config();
const xParseApplicationId = process.env.X_PARSE_APPLICATION_ID;
const xParseApiKey = process.env.X_PARSE_REST_API_KEY;

const fetchCityByName = async (name) => {
  const where = encodeURIComponent(
    JSON.stringify({
      name: {
        $regex: `${name}`,
      },
    }),
  );

  try {
    const data = await axios(
      `https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=3&include=country&keys=name,country,country.name,country.code,cityId,adminCode&where=${where}`,
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

module.exports = fetchCityByName;