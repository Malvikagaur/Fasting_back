const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * Progress Schema to track user progress over time.
 */
const ProgressSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    progressType: { type: String, required: true }, // E.g., weight tracking, fasting hours
    value: { type: Number, required: true }, // Numeric value of progress
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = model('Progress', ProgressSchema);
