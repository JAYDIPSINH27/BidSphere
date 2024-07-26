// Author: Christin Saji

const express = require('express');
const { check, validationResult } = require('express-validator');
const profileController = require('../controller/profile');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/me', authMiddleware, profileController.getProfile);

router.put(
  '/me',
  authMiddleware,
  [
    check('name').optional().isString().matches(/^[A-Za-z\s]+$/).withMessage('Name should contain only letters'),
    check('email').optional().isEmail().withMessage('Invalid email format'),
    check('phone').optional().matches(/^\d{10}$/).withMessage('Phone number should contain exactly 10 digits'),
    check('address').optional().notEmpty().withMessage('Address is required')
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  profileController.updateProfile
);

router.delete('/me', authMiddleware, profileController.deleteProfile);

module.exports = router;
