const express = require('express');
const router = express.Router();
const { startFasting, endFasting, getFastingHistory } = require('../CONTROLLERS/fastingController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * Fasting Routes:
 * - Start Fasting
 * - End Fasting
 * - Get Fasting History
 */
router.post('/start', authMiddleware, startFasting);
router.post('/end', authMiddleware, endFasting);
router.get('/history', authMiddleware, getFastingHistory);

module.exports = router;
