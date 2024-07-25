// Author: Christin Saji

const express = require('express');
const { check, validationResult } = require('express-validator');
const authController = require('../controller/auth');
const router = express.Router();

router.post(
  '/signup',
  [
    check('name').isString().notEmpty().matches(/^[A-Za-z\s]+$/),
    check('email').isEmail(),
    check('phone').isLength({ min: 10, max: 10 }).matches(/^\d{10}$/),
    check('address').notEmpty(),
    check('password')
      .isLength({ min: 8 })
      .matches(/[A-Za-z]/)
      .matches(/\d/)
      .matches(/[@$!%*#?&]/)
      .withMessage('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.'),
    check('role').notEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  authController.signup
);

router.post(
  '/signin',
  [
    check('email').isEmail(),
    check('password').notEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  authController.signin
);

router.get('/verify-email/:token', authController.verifyEmail);

module.exports = router;
