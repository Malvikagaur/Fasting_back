const Goal = require('../MODELS/goalModel');

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

const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching goals', error });
  }
};

module.exports = { setGoal, getGoals };
