"use strict";

import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

let UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Execute before each user.save() call
UserSchema.pre("save", (next) => {
  let user = this;

  // Break out if the password hasn"t changed
  if (!user.isModified("password")) return next();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.verifyPassword = (password, callback) => {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) callback(err);
    callback(null, isMatch);
  });
};

export default mongoose.model("User", UserSchema);
