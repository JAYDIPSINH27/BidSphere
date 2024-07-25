// Author: Christin Saji

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    match: /^[A-Za-z\s]+$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return (
          value.length >= 8 &&
          /[A-Za-z]/.test(value) &&
          /\d/.test(value) &&
          /[@$!%*#?&]/.test(value)
        );
      },
      message: 'Password must be at least 8 characters long and contain at least one letter, one number, and one special character.',
    },
  },
  role: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;
