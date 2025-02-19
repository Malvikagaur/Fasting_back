import { Schema, model } from 'mongoose';

/**
 * Meal Schema to track user's meal intake.
 */
const MealSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    mealType: { type: String, required: true },
    calories: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default model('Meal', MealSchema);
