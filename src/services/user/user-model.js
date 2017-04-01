'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  bitbucketId: { type: String },
  bitbucket: { type: Schema.Types.Mixed },
  dropboxId: { type: String },
  dropbox: { type: Schema.Types.Mixed },
  facebookId: { type: String },
  facebook: { type: Schema.Types.Mixed },
  githubId: { type: String },
  github: { type: Schema.Types.Mixed },
  googleId: { type: String },
  google: { type: Schema.Types.Mixed },
  instagramId: { type: String },
  instagram: { type: Schema.Types.Mixed },
  linkedinId: { type: String },
  linkedin: { type: Schema.Types.Mixed },
  paypalId: { type: String },
  paypal: { type: Schema.Types.Mixed },
  spotifyId: { type: String },
  spotify: { type: Schema.Types.Mixed },
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true },
  
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;