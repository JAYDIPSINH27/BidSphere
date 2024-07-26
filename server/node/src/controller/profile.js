// Author: Christin Saji

const User = require('../model/user');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found.' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true }).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found.' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    if (!user) return res.status(404).json({ error: 'User not found.' });

    res.status(200).json({ message: 'User account deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};
