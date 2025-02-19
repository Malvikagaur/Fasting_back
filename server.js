const express = require('express');
const connectDB = require('./CONFIG/db');
const authRoutes = require('./ROUTES/authRoutes');
const userRoutes = require('./ROUTES/userRoutes');
const fastingRoutes = require('./ROUTES/fastingRoutes');
const mealRoutes = require('./ROUTES/mealRoutes');
const activityRoutes = require('./ROUTES/activityRoutes');
const goalRoutes = require('./ROUTES/goalRoutes');
const progressRoutes = require('./ROUTES/progressRoutes');
const bmiRoutes = require('./ROUTES/bmiRoutes');
const profileRoutes = require('./ROUTES/profileRoutes');
const errorHandler = require('./UTILS/errorHandler');
require('dotenv').config();

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/fasting', fastingRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/activity', activityRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/bmi', bmiRoutes);
app.use('/api/profile', profileRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
