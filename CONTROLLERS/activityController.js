const Activity = require('../MODELS/activityModel');

const addActivity = async (req, res) => {
  try {
    const { activityType, duration, caloriesBurned } = req.body;
    const activity = new Activity({ userId: req.user.id, activityType, duration, caloriesBurned });

    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: 'Error adding activity', error });
  }
};

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ userId: req.user.id });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activities', error });
  }
};

module.exports = { addActivity, getActivities };
