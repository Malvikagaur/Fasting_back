const express = require('express');
const router = express.Router();
const { startFasting, getFastingHistory } = require('../CONTROLLERS/fastingController'); // Corrected import
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * Fasting Routes:
 * - Start Fasting
 * - Get Fasting History
 */
router.post('/start', authMiddleware, startFasting);
router.get('/history', authMiddleware, getFastingHistory);

module.exports = router;

