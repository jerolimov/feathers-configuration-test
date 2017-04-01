'use strict';

// user-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const user = sequelize.define('users', {
    bitbucketId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    dropboxId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    facebookId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    githubId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    googleId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    instagramId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    linkedinId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    paypalId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    spotifyId: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  user.sync();

  return user;
};
