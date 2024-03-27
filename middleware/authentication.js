// middleware/authentication.js

const passport = require('passport');

// Middleware function for authenticating user requests
exports.authenticateUser = (req, res, next) => {
    // Use Passport to authenticate the request
    passport.authenticate('jwt', { session: false }, (error, user) => {
        if (error) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        // If authentication succeeds, set the user on the request object
        req.user = user;
        next(); 
    })(req, res, next); 
};
