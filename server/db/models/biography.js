/* eslint-disable no-warning-comments */
const db = require('../db');
const { basicModel, modelTypes } = require('./util')
const Sequelize = require('sequelize');
const {Alignments} = require('../../../client/constants');

const Biography = db.define('biography', {
  fullName: basicModel(modelTypes.String, true),
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
  alignment: Sequelize.ENUM(Alignments.Good, Alignments.Bad),
});

module.exports = Biography;
