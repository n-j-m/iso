var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

function findUser(username, password, done) {
  User.findOne({ username: username }, function(err, user) {
    if (err) return done(err);

    if (!user) return done(null, false);

    user.verifyPassword(password, function(err, isMatch) {
      if (err) return done(err);

      if (!isMatch) return done(null, false);

      return done(null, user);
    });
  });
}

passport.use(new BasicStrategy(findUser));

passport.use(new LocalStrategy(findUser));

module.exports = {
  isAuthenticated: passport.authenticate(['basic', 'local'], { session: true })
};
