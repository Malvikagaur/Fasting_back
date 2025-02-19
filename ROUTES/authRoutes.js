const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../CONTROLLERS/authController');

/**
 * Authentication Routes:
 * - User Registration
 * - User Login
 */
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
