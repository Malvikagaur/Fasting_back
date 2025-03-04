const express = require('express');
const router = express.Router();
const { addActivity, getActivities } = require('../CONTROLLERS/activityController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * Activity Routes:
 * - Log a Physical Activity
 * - Get Activity History
 */
router.post('/log', authMiddleware, addActivity);
router.get('/history', authMiddleware, getActivities);

module.exports = router;
