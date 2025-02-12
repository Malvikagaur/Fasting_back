const Joi = require('joi');

/**
 * Validates incoming request data based on the provided schema.
 * @param {Joi.ObjectSchema} schema - Joi validation schema
 */
const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({ message: 'Validation error', errors: error.details });
  }

  next();
};

module.exports = validateRequest;
