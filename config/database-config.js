// config/database-config.js

const mongoose = require('mongoose');

// MongoDB connection URI
const uri = 'mongodb+srv://aryan:aryan@cluster0.9p3id.mongodb.net/'

// Connect to MongoDB
mongoose.connect(uri);

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected');
});

// Export the database connection
module.exports = db;
