const Goal = require('../MODELS/goalModel');

/**
 * Set a new goal
 */
const setGoal = async (req, res) => {
  try {
    const { goalType, target } = req.body;
    const goal = new Goal({ userId: req.user.id, goalType, target });

    await goal.save();
    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ message: 'Error setting goal', error });
  }
};

/**
 * Get all goals for a user
 */
const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching goals', error });
  }
};

/**
 * Update an existing goal
 */
const updateGoal = async (req, res) => {
  try {
    const { goalId } = req.params; // Get goal ID from URL params
    const { goalType, target } = req.body; // Updated data

    const goal = await Goal.findOneAndUpdate(
      { _id: goalId, userId: req.user.id }, // Ensure user owns the goal
      { goalType, target }, // New data
      { new: true, runValidators: true } // Return updated goal & validate fields
    );

    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    res.json(goal);
  } catch (error) {
    res.status(500).json({ message: 'Error updating goal', error });
  }
};

module.exports = { setGoal, getGoals, updateGoal };

