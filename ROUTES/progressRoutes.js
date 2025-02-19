const express = require('express');
const router = express.Router();
const { logProgress, getProgress } = require('../CONTROLLERS/progressController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * Progress Routes:
 * - Log Progress
 * - Get Progress History
 */
router.post('/log', authMiddleware, logProgress);
router.get('/history', authMiddleware, getProgress);

module.exports = router;
