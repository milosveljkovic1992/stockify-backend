const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/user.model');

const jwtAccessKey = process.env.JWT_ACCESS_KEY
const jwtRefreshKey = process.env.JWT_REFRESH_KEY

const oneDayInMiliseconds = 1000 * 60 * 60 * 24;

// SIGN UP
router.post('/signup', [
  check('username', 'Username must be at least 3 characters long').isLength(4),
  check('email', 'Invalid email address').isEmail(),
  check('password', 'Password must be at least 6 characters long').isLength(6)
], async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    // Check for duplicate users
    const usernameExists = await User.exists({ username });
    const emailExists = await User.exists({ email: email.toLowerCase() });

    if (usernameExists) return res.status(409).json({
      errors: [{ msg: 'Username already registered' }]
    });

    if (emailExists) return res.status(409).json({
      errors: [{ msg: 'Email already registered' }]
    });

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword
    });

    // Create tokens
    const accessToken = await jwt.sign(
      { username, id: user._id, admin: false },
      jwtAccessKey,
      { algorithm: 'HS256', expiresIn: '10s' }
    );

    const refreshToken = await jwt.sign(
      { username, id: user._id, admin: false },
      jwtRefreshKey,
      { algorithm: 'HS256', expiresIn: '24h' }
    );

    // Save tokens to cookies
    res.cookie('jwtAccess', accessToken, {
      maxAge: 1000 * 10
    });

    res.cookie("jwtRefresh", refreshToken, {
      httpOnly: true,
      maxAge: oneDayInMiliseconds
    });

    res.status(201).send(user);
  } catch (error) {
    return res.status(500).json({
      errors: [{ msg: 'Error occured. Please try again' }]
    });
  }
});

router.post('/login', [
  check('username', 'Username must be at least 4 characters long').isLength(4),
  check('password', 'Password must be at least 6 characters long').isLength(6)
], async (req, res) => {
  try {
    const { username, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    // Check if username exists in database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        errors: [{ msg: 'Incorrect username or password' }]
      });
    }

    // Check is password correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        errors: [{ msg: 'Incorrect username or password' }]
      })
    }

    // Create tokens
    const accessToken = await jwt.sign(
      { username, id: user._id, admin: false },
      jwtAccessKey,
      { algorithm: 'HS256', expiresIn: '10s' }
    );

    const refreshToken = await jwt.sign(
      { username, id: user._id, admin: false },
      jwtRefreshKey,
      { algorithm: 'HS256', expiresIn: '24h' }
    );

    // Save tokens to cookies
    res.cookie('jwtAccess', accessToken, {
      maxAge: 1000 * 10
    });

    res.cookie("jwtRefresh", refreshToken, {
      httpOnly: true,
      maxAge: oneDayInMiliseconds
    });

    res.status(200).send(user)
  } catch (error) {
    return res.status(500).json({
      errors: [{ msg: 'Error occured. Please try again' }]
    });
  }
});

// Clear tokens from cookies
router.get('/logout', (req, res) => {
  res.clearCookie('jwtAccess');
  res.clearCookie('jwtRefresh');
  res.clearCookie('_uid');
  res.status(200).send('You have successfully logged out!');
});

module.exports = router;