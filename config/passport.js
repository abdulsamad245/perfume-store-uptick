// config/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'postgres', 
      passwordField: 'admin',
    },
    async (username, password, done) => {
      try {
        // Find the user by username
        const user = await User.findOne({ where: { username } });

        // Check if the user exists
        if (!user) {
          return done(null, false, { message: 'Incorrect username' });
        }

        // Check if the password is correct
        if (!user.verifyPassword(password)) {
          return done(null, false, { message: 'Incorrect password' });
        }

        // Authentication successful, return the user
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
