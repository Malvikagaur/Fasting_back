const User = require('../MODELS/userModel');
const bcrypt = require('bcryptjs');

/**
 * Get user profile details.
 * @route GET /api/user/profile
 * @access Private (Requires Authentication)
 */
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password for security

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};

/**
 * Update authenticated user profile.
 * @route PUT /api/user/profile
 * @access Private (Requires Authentication)
 */
exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Extract user ID from request (set by auth middleware)
    const { name, email, password } = req.body;

    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Save the updated user
    await user.save();

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

/**
 * Update a user's details (Admin Only).
 * @route PUT /api/user/:id
 * @access Private (Admin Only)
 */
exports.updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Save updated user
    await user.save();

    res.json({
      message: 'User updated successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};
