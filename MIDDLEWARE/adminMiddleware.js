// const User = require('../MODELS/userModel'); // Import User model

// /**
//  * Middleware to check if user is an admin.
//  * @param {*} req 
//  * @param {*} res 
//  * @param {*} next 
//  */
// const admin = async (req, res, next) => {
//   try {
//     // Ensure user exists and is marked as admin
//     if (req.user && req.user.isAdmin) {
//       return next();
//     }
//     return res.status(403).json({ error: 'Access denied. Admins only.' });
//   } catch (error) {
//     console.error('Admin Middleware Error:', error);
//     return res.status(500).json({ error: 'Server error in admin middleware' });
//   }
// };

// module.exports = admin;
