import { Schema, model } from 'mongoose';

/**
 * Goal Schema to track user's custom fitness or fasting goals.
 */
const GoalSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    goalType: { type: String, required: true },
    target: { type: Number, required: true }, // Numeric target, e.g., weight loss in kg
    progress: { type: Number, default: 0 }, // Progress made towards the goal
  },
  { timestamps: true }
);

export default model('Goal', GoalSchema);
