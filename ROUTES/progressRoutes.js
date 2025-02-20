const express = require('express');
const router = express.Router();
const { addProgress, getProgress } = require('../CONTROLLERS/progressController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * Progress Routes:
 * - Log Progress
 * - Get Progress History
 */
router.post('/log', authMiddleware, addProgress);
router.get('/history', authMiddleware, getProgress);

module.exports = router;
