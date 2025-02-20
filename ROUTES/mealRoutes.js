const express = require('express');
const router = express.Router();
const { addMeal, getMeals } = require('../CONTROLLERS/mealController');
const authMiddleware = require('../MIDDLEWARE/authMiddleware');

/**
 * Meal Routes:
 * - Log a Meal
 * - Get Meal History
 */
router.post('/log', authMiddleware, addMeal);
router.get('/history', authMiddleware, getMeals);

module.exports = router;
