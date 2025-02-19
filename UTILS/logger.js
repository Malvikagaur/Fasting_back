const fs = require('fs');
const path = require('path');

/**
 * Simple Logger Utility
 * Logs messages to a file for debugging.
 */
const logFilePath = path.join(__dirname, '../logs/app.log');

/**
 * Log Message to File
 * @param {String} message - Message to log
 */
const logMessage = (message) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) console.error('Logging failed:', err);
  });
};

module.exports = logMessage;
