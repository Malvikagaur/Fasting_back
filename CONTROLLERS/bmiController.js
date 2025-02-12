const BMI = require('../MODELS/bmiModel');

const calculateBMI = async (req, res) => {
  try {
    const { height, weight } = req.body;
    const bmiValue = weight / ((height / 100) * (height / 100));

    const bmiRecord = new BMI({ userId: req.user.id, height, weight, bmi: bmiValue });

    await bmiRecord.save();
    res.status(201).json(bmiRecord);
  } catch (error) {
    res.status(500).json({ message: 'Error calculating BMI', error });
  }
};

const getBMIRecords = async (req, res) => {
  try {
    const bmiRecords = await BMI.find({ userId: req.user.id });
    res.json(bmiRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching BMI records', error });
  }
};

module.exports = { calculateBMI, getBMIRecords };
