"use strict";

import User from "../models/user";
import Profile from "../models/profile";

const SignupController = {

  signup(username, password, profileData) {
    return new Promise((resolve, reject) => {
      const user = new User({
        username,
        password
      });
      user.save((err, user) => {
        if (err) return reject(err);
        resolve(user);

        var profile = new Profile({
          firstname: profileData.firstname,
          lastname: profileData.lastname,
          nickname: profileData.nickname,
          userId: user._id
        });

        profile.save((err, profile) => {
          if (err) return reject(err);
          resole(profile);
        });
      });
    });
  }

};

export default SignupController;