/* eslint-disable no-warning-comments */
const db = require('../db');
const { basicModel, modelTypes } = require('./util')
const Sequelize = require('sequelize');

const Biography = db.define('character', {
  fullName: basicModel(modelTypes.String),
  alterEgos: basicModel(modelTypes.String),
  aliases: {
    // TODO: Array<string>
    type: Sequelize.ARRAY(Sequelize.STRING),
    unique: false,
    allowNull: true
  },
  placeOfBirth: basicModel(modelTypes.String),
  firstAppearance: basicModel(modelTypes.String),
  publisher: basicModel(modelTypes.String),
  // TODO: Add ENUM constant for alignment
  alignment: basicModel(modelTypes.String),
});

module.exports = Biography;
