var config = require('./config');
var User = require('../models/user');

module.exports = {
  getConfig: function(key) {
    if (!config[key]) throw new Error(key + ' not found');
    
    return config[key];
  },

  initPassport: function(passport) {
    passport.serializeUser(function(user, done) {
      done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });
  }
};
