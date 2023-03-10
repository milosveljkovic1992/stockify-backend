const jwt = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config();
const jwtAccessKey = process.env.JWT_ACCESS_KEY;

const authenticateToken = async (req, res, next) => {
  // If there is no refresh token, abort
  const refreshToken = req.cookies['jwtRefresh'];
  if (!refreshToken) {
    res.status(401).json({
      errors: [{ msg: 'Token not found' }]
    });
    return
  }

  const createAccessToken = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/auth/token', {
        headers: { 'Authorization': `Bearer ${refreshToken}` },
      });
      const { accessToken } = data;
      return accessToken;
    } catch (error) {
      res.send(error.response.data);
      return
    }
  }

  // If there is no access token, generate token
  let token = req.cookies['jwtAccess'];
  if (!token) {
    token = await createAccessToken();
  }

  // Verify access token before proceeding
  try {
    const user = jwt.verify(token, jwtAccessKey);
    res.cookie('jwtAccess', token, {
      maxAge: 1000 * 10
    });
    req.username = user.username;
    next();
  } catch (error) {
    // if token has expired in meantime, try issuing another or throw an error
    try {
      token = await createAccessToken();
      const user = jwt.verify(token, jwtAccessKey);
      res.cookie('jwtAccess', token, {
        maxAge: 1000 * 10
      });
      req.username = user.username;
      next();
    } catch (error) {
      res.status(403).json({
        errors: [{ msg: 'Invalid token' }]
      });
    }
  }
};

module.exports = authenticateToken;