const mongoose = require('mongoose');

/**
 * BMI Schema to track user's height, weight, and calculated BMI.
 */
const BmiSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    height: { type: Number, required: true }, // in cm
    weight: { type: Number, required: true }, // in kg
    bmi: { type: Number, required: true }, // Calculated BMI value
  },
  { timestamps: true }
);

export default model('BMI', BmiSchema);