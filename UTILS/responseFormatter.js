/**
 * Standardized API Response Format
 * @param {Boolean} success - API success status
 * @param {String} message - Message describing the response
 * @param {Object} data - Data payload (if any)
 * @returns {Object} Formatted response object
 */
const formatResponse = (success, message, data = null) => {
    return { success, message, data };
  };
  
  module.exports = formatResponse;
  