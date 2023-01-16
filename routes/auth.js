const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

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

    res.status(201).send(user);
  } catch (error) {
    return res.status(500).json({
      errors: [{ msg: 'Error occured. Please try again' }]
    });
  }
});

module.exports = router;