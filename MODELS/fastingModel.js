const mongoose = require('mongoose');
const { Schema, model } = mongoose;
/**
 * Fasting Schema to store user's intermittent fasting records.
 */
const FastingSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = model('Fasting', FastingSchema);
