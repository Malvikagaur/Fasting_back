const express = require('express');
const router = express.Router();
const { setGoal, getGoals, updateGoal } = require('../CONTROLLERS/goalController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * Goal Routes:
 * - Set a New Goal
 * - Get User Goals
 * - Update a Goal
 */
router.post('/set', authMiddleware, setGoal);
router.get('/list', authMiddleware, getGoals);
router.put('/update/:id', authMiddleware, updateGoal);

module.exports = router;
