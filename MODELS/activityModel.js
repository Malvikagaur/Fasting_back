import { Schema, model } from 'mongoose';

/**
 * Activity Schema to track user's physical activities.
 */
const ActivitySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    activityType: { type: String, required: true },
    duration: { type: Number, required: true }, // in minutes
    caloriesBurned: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model('Activity', ActivitySchema);
