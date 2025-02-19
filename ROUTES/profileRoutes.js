const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../CONTROLLERS/userController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * Profile Routes:
 * - Get Profile Details
 * - Update Profile Information
 */
router.get('/', authMiddleware, getProfile);
router.put('/', authMiddleware, updateProfile);

module.exports = router;
