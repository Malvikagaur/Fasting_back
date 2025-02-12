const Fasting = require('../MODELS/fastingModel');

const addFastingRecord = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;
    const fasting = new Fasting({ userId: req.user.id, startTime, endTime });

    await fasting.save();
    res.status(201).json(fasting);
  } catch (error) {
    res.status(500).json({ message: 'Error adding fasting record', error });
  }
};

const getFastingRecords = async (req, res) => {
  try {
    const fastingRecords = await Fasting.find({ userId: req.user.id });
    res.json(fastingRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fasting records', error });
  }
};

module.exports = { addFastingRecord, getFastingRecords };
