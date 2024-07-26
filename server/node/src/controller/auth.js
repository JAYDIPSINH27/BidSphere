// Author: Christin Saji

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.signup = async (req, res) => {
  try {
    const { name, email, phone, address, password, role } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: 'User already registered.' });

    if (
      password.length < 8 ||
      !/[A-Za-z]/.test(password) ||
      !/\d/.test(password) ||
      !/[@$!%*#?&]/.test(password)
    ) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long and contain at least one letter, one number, and one special character.' });
    }

    user = new User({
      name,
      email,
      phone,
      address,
      password: await bcrypt.hash(password, 10),
      role,
    });

    await user.save();

    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const verificationUrl = `${process.env.BASE_URL}/auth/verify-email/${token}`;

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Verify Your Email',
      text: `Click the link to verify your email: ${verificationUrl}`,
    };

    transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'User registered. Please verify your email.' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const token = req.params.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user = await User.findById(decoded._id);
    if (!user) return res.status(400).json({ error: 'Invalid token.' });

    user.isVerified = true;
    await user.save();

    res.redirect(`${process.env.FRONTEND_URL}/verification-success`);
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password.' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid email or password.' });

    const token = jwt.sign({ _id: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found.' });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${token}`;

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Reset Your Password',
      text: `Click the link to reset your password: ${resetUrl}`,
    };

    transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Password reset link sent to your email.' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const token = req.params.token;
    const { password } = req.body;

    if (
      password.length < 8 ||
      !/[A-Za-z]/.test(password) ||
      !/\d/.test(password) ||
      !/[@$!%*#?&]/.test(password)
    ) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long and contain at least one letter, one number, and one special character.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.findByIdAndUpdate(decoded._id, { password: hashedPassword }, { new: true });

    if (!user) return res.status(400).json({ error: 'Invalid token.' });

    res.status(200).json({ message: 'Password reset successfully.' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};
