const express = require('express');
const router = express.Router();
const { calculateBMI, getBMIRecords } = require('../CONTROLLERS/bmiController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * BMI Routes:
 * - Calculate BMI
 * - Get BMI History
 */
router.post('/calculate', authMiddleware, calculateBMI);
router.get('/history', authMiddleware, getBMIRecords);

module.exports = router;
