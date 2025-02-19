const mongoose = require('mongoose');
const { genSalt, hash } = require('bcryptjs');
const { Schema } = mongoose;

/**
 * User Schema to store user details and authentication credentials.
 */
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);



/**
 * Hash password before saving the user model.
 */
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
});

module.exports = model('User', UserSchema);

