const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');


router.post('/signup', [
  check('username', 'Username must be at least 3 characters long').isLength(4),
  check('email', 'Invalid email address').isEmail(),
  check('password', 'Password must be at least 6 characters long').isLength(6)
], (req, res) => {
  const { username, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  res.status(200).send(req.body)
});

module.exports = router;