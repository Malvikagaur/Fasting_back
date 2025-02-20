const express = require('express');
const { getUserProfile, updateUserProfile, updateUser } = require('../controllers/userController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');
//const adminMiddleware = require('../middleware/adminMiddleware'); // Ensure admin check

const router = express.Router();

router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);
router.put('/:id', authMiddleware, updateUser); // Admin-only route

module.exports = router;

