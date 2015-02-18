'use strict';

import mongoose from 'mongoose';

const ProfileSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  nickname: String,

  userId: {
    type: String,
    require: true
  }
});

export default mongoose.model('Profile', ProfileSchema);