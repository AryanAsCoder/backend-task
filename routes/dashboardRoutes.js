// routes/dashboardRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const dashboardController = require('../controllers/dashboardController');

// Route for retrieving post counts
router.get('/postCounts', passport.authenticate('jwt', { session: false }), dashboardController.getPostCounts);

module.exports = router;
