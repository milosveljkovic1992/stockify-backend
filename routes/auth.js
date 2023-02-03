const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/user.model');
const Token = require('../models/token.model');

const jwtAccessKey = process.env.JWT_ACCESS_KEY;
const jwtRefreshKey = process.env.JWT_REFRESH_KEY;

const oneDayInMiliseconds = 1000 * 60 * 60 * 24;

const roles = Object.freeze({
  ADMIN: "ADMIN",
  USER: "USER"
});

/******************
 *    REGISTER    *
 ******************/
router.post('/register', [
  check('username', 'Username must be at least 3 characters long').isLength(4),
  check('email', 'Invalid email address').isEmail(),
  check('password', 'Password must be at least 6 characters long').isLength(6)
], async (req, res) => {
  try {
    const oldRefreshToken = req.cookies['jwtRefresh'];
    if (oldRefreshToken) {
      await Token.deleteOne({ token: oldRefreshToken });
      res.clearCookie('jwtAccess');
      res.clearCookie('jwtRefresh');
    }

    const { username, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array()
      });
      return;
    }

    // Check for duplicate users
    const usernameExists = await User.exists({ username });
    const emailExists = await User.exists({ email: email.toLowerCase() });

    if (usernameExists) {
      res.status(409).json({
        errors: [{ msg: 'Username already registered' }]
      });
      return;
    }

    if (emailExists) {
      res.status(409).json({
        errors: [{ msg: 'Email already registered' }]
      });
      return;
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
      role: roles.USER
    });

    // Create tokens
    const accessToken = await jwt.sign(
      { username, uid: user._id, admin: false },
      jwtAccessKey,
      { algorithm: 'HS256', expiresIn: '10s' }
    );

    const refreshToken = await jwt.sign(
      { username, uid: user._id, admin: false },
      jwtRefreshKey,
      { algorithm: 'HS256', expiresIn: '24h' }
    );

    // Save refresh token in database
    await Token.create({ token: refreshToken, uid: user._id });

    // Save tokens to cookies
    res.cookie('jwtAccess', accessToken, {
      maxAge: 1000 * 10
    });

    res.cookie("jwtRefresh", refreshToken, {
      httpOnly: true,
      maxAge: oneDayInMiliseconds
    });

    res.status(201).send({
      username: user.username,
      email: user.email,
      role: user.role,
      _id: user._id
    });
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Error occured. Please try again' }]
    });
    return;
  }
});

/*******************
 *      LOGIN      *
 *******************/
router.post('/login', [
  check('username', 'Username must be at least 4 characters long').isLength(4),
  check('password', 'Password must be at least 6 characters long').isLength(6)
], async (req, res) => {
  try {
    const { username, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array()
      });
      return;
    }

    // Check if username exists in database
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).json({
        errors: [{ msg: 'Incorrect username or password' }]
      });
      return;
    }

    // Check is password correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({
        errors: [{ msg: 'Incorrect username or password' }]
      });
      return;
    }

    // Remove existing refresh token to prevent database bloating
    const oldRefreshToken = req.cookies['jwtRefresh'];
    if (oldRefreshToken) {
      await Token.deleteOne({ token: oldRefreshToken });
    }

    const isAdmin = user.role === roles.ADMIN;

    // Create tokens
    const accessToken = await jwt.sign(
      { username, uid: user._id, admin: isAdmin },
      jwtAccessKey,
      { algorithm: 'HS256', expiresIn: '10s' }
    );

    const refreshToken = await jwt.sign(
      { username, uid: user._id, admin: isAdmin },
      jwtRefreshKey,
      { algorithm: 'HS256', expiresIn: '24h' }
    );

    // Save refresh token in database
    await Token.create({ token: refreshToken, uid: user._id });

    // Save tokens to cookies
    res.cookie('jwtAccess', accessToken, {
      maxAge: 1000 * 10
    });

    res.cookie("jwtRefresh", refreshToken, {
      httpOnly: true,
      maxAge: oneDayInMiliseconds
    });

    res.status(200).send({
      username: user.username,
      email: user.email,
      role: user.role,
      _id: user._id
    });
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Error occured. Please try again' }]
    });
    return;
  }
});

/********************************************************
 *    REAUTHORIZE by USER ID saved in client cookies    *
 ********************************************************/
router.post('/reauth', async (req, res) => {
  try {
    const { _id } = req.body;
    // Check if user exists in database
    const user = await User.findOne({ _id });

    if (!user) {
      res.status(304).json({
        errors: [{ msg: 'Could not sign you in' }]
      });
      return;
    }

    // Check if refresh token exists in cookies
    const oldRefreshToken = req.cookies['jwtRefresh'];
    if (!oldRefreshToken) {
      res.status(304).json({
        errors: [{ msg: 'Could not sign you in' }]
      });
      return;
    }

    try {
      await Token.findOne({ uid: _id });
    } catch (error) {
      res.status(498).json({
        errors: [{ msg: 'Invalid token. Please log in again.' }]
      });
      return;
    }

    // Check if refresh token is still valid
    try {
      await jwt.verify(oldRefreshToken, jwtRefreshKey);
    } catch (error) {
      res.status(498).json({
        errors: [{ msg: 'Invalid token. Please log in again.' }]
      });
    }

    const isAdmin = user.role === roles.ADMIN;
    const { username } = user;
    // Create tokens
    const accessToken = await jwt.sign(
      { username, uid: user._id, admin: isAdmin },
      jwtAccessKey,
      { algorithm: 'HS256', expiresIn: '10s' }
    );

    const refreshToken = await jwt.sign(
      { username, uid: user._id, admin: isAdmin },
      jwtRefreshKey,
      { algorithm: 'HS256', expiresIn: '24h' }
    );

    // REMOVE OLD and SAVE NEW token to database
    try {
      await Token.deleteOne({ token: oldRefreshToken });
      await Token.create({ token: refreshToken, uid: user._id });
    } catch (error) {
      res.status(400).json({
        errors: [{ msg: 'Could not sign you in. Please log in again.' }]
      });
      return;
    }

    // Save tokens to cookies
    res.cookie('jwtAccess', accessToken, {
      maxAge: 1000 * 10
    });

    res.cookie("jwtRefresh", refreshToken, {
      httpOnly: true,
      maxAge: oneDayInMiliseconds
    });

    res.status(200).send({
      username: user.username,
      email: user.email,
      role: user.role,
      _id: user._id
    });
  } catch (error) {
    res.status(500).json({
      errors: [{ msg: 'Error occured. Please try again' }]
    });
    return;
  }
});

/*****************************
 *    CREATE ACCESS TOKEN    *
 *****************************/
router.get('/token', async (req, res) => {
  const refreshToken = req.headers.authorization.replace('Bearer ', '');

  if (!refreshToken) {
    res.status(401).json({
      errors: [{ msg: 'Token not found' }]
    });
    return;
  }

  const { token } = await Token.findOne({ token: refreshToken });
  if (!token) {
    res.status(403).json({
      errors: [{ msg: 'Invalid token' }]
    });
    return;
  }

  try {
    const user = jwt.verify(token, jwtRefreshKey);
    const { username } = user;
    const isAdmin = user.role === roles.ADMIN;

    // Create access token
    const accessToken = await jwt.sign(
      { username, uid: user._id, admin: isAdmin },
      jwtAccessKey,
      { expiresIn: '10s' }
    );

    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(403).json({
      errors: [{ msg: 'Invalid token' }]
    });
  }
});

/*****************
 *     LOGOUT    *
 *****************/
router.get('/logout', async (req, res) => {
  const oldRefreshToken = req.cookies['jwtRefresh'];
  await Token.deleteOne({ token: oldRefreshToken });

  res.clearCookie('jwtAccess');
  res.clearCookie('jwtRefresh');
  res.status(200).send('You have successfully logged out!');
});

module.exports = router;