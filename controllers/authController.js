const passport = require('passport');
const User = require('../models/User');

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({ message: 'Login successful', user });
    });
  })(req, res, next);
};

exports.getProfile = (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ user: req.user });
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
