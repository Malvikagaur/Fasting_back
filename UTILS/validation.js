/**
 * Request Data Validation Utilities
 * Ensures required fields are present in user inputs.
 */

/**
 * Validate Required Fields
 * @param {Object} data - Request data
 * @param {Array} requiredFields - List of required fields
 * @returns {Object} Validation result
 */
const validateFields = (data, requiredFields) => {
    const missingFields = requiredFields.filter((field) => !data[field]);
    return {
      isValid: missingFields.length === 0,
      missingFields,
    };
  };
  
  module.exports = validateFields;
  