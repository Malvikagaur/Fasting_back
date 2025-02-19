const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../CONTROLLERS/userController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * User Routes:
 * - Get User Profile
 * - Update User Profile
 */
router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);

module.exports = router;
