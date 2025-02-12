const Progress = require('../MODELS/progressModel');

const addProgress = async (req, res) => {
  try {
    const { progressType, value } = req.body;
    const progress = new Progress({ userId: req.user.id, progressType, value });

    await progress.save();
    res.status(201).json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Error adding progress', error });
  }
};

const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.user.id });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching progress', error });
  }
};

module.exports = { addProgress, getProgress };
