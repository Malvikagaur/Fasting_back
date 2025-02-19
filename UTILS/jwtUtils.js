const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Generate JWT Token
 * @param {Object} payload - User data to encode
 * @returns {String} JWT token
 */
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });
};

/**
 * Verify JWT Token
 * @param {String} token - Token to verify
 * @returns {Object} Decoded data
 */
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
