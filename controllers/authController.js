const passport = require('passport');

exports.login = (req, res, next) => {
    // console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    console.log({info});
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
    // console.log(req.body);
  if (req.isAuthenticated()) {
    return res.json({ user: req.user });
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
          return res.status(500).json({ message: 'Error logging out' });
        }
        res.status(204).json({ message: 'Logout successful' });
      });
}
