// app.js

const express = require('express');
const mongoose = require('./config/database-config');
const passport = require('./config/passport-config');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Create Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request body
app.use(passport.initialize()); // Initialize Passport for authentication
app.use(cors()); // Enable CORS
app.use(compression()); // Compress HTTP responses
app.use(helmet()); // Set various HTTP headers for security
app.use(morgan('dev')); // Log HTTP requests

// Routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/posts', postRoutes); // Post routes
app.use('/dashboard', dashboardRoutes); // Dashboard routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
