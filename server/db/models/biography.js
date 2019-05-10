/* eslint-disable no-warning-comments */
const db = require('../db');
const { basicModel, modelTypes } = require('./util')
const Sequelize = require('sequelize');
const {Alignments} = require('../../../client/constants');

const Biography = db.define('biography', {
  'full-name': basicModel(modelTypes.String),
  'alter-egos': basicModel(modelTypes.String),
  aliases: {
    // TODO: Array<string>
    type: Sequelize.ARRAY(Sequelize.STRING),
    unique: false,
    allowNull: true
  },
  'place-of-birth': basicModel(modelTypes.String),
  'first-appearance': basicModel(modelTypes.String),
  publisher: basicModel(modelTypes.String),
  // TODO: Add ENUM constant for alignment
  alignment: Sequelize.ENUM(Alignments.Good, Alignments.Bad),
});

module.exports = Biography;
