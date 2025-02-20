const mongoose = require('mongoose');
const { genSalt, hash } = require('bcryptjs');

// Destructuring Schema from mongoose
const { Schema, model } = mongoose;

/**
 * User Schema to store user details and authentication credentials.
 */
const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true } // Automatically manages createdAt and updatedAt
);

/**
 * Hash password before saving the user model.
 */
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Export the User model
module.exports = model('User', UserSchema);


