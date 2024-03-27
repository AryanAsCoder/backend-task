// config/passport-config.js

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

// JWT options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET 
};

// JWT strategy for authentication
passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        // Find user by ID from JWT payload
        const user = await User.findById(payload.id);
        if (user) {
            return done(null, user); 
        } else {
            return done(null, false); 
        }
    } catch (error) {
        return done(error, false); 
    }
}));

module.exports = passport;
