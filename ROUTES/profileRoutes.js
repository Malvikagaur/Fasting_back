const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * Profile Routes:
 * - Get Profile Details
 * - Update Profile Information
 */
router.get('/', authMiddleware, getUserProfile);
router.put('/', authMiddleware, updateUserProfile);

module.exports = router;
