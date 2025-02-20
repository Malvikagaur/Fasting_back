const Fasting = require('../MODELS/fastingModel');

/**
 * Start a fasting session (Add a fasting record)
 */
const startFasting = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    const fasting = new Fasting({ userId: req.user.id, startTime, endTime });

    await fasting.save();
    res.status(201).json(fasting);
  } catch (error) {
    res.status(500).json({ message: 'Error starting fasting', error });
  }
};

/**
 * Get fasting history for a user
 */
const getFastingHistory = async (req, res) => {
  try {
    const fastingRecords = await Fasting.find({ userId: req.user.id });
    res.json(fastingRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fasting history', error });
  }
};

module.exports = { startFasting, getFastingHistory }; // Updated function names

