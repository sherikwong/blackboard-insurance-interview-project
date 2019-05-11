/* eslint-disable no-warning-comments */
const db = require('../db');
const { basicModel, modelTypes } = require('./util')
const Sequelize = require('sequelize');
const {Alignments} = require('../../../client/constants');

const Character = db.define('character', {
  fullName: basicModel(modelTypes.String, true),
  url: basicModel(modelTypes.String),
  alignment: Sequelize.ENUM(Alignments.Good, Alignments.Bad),
});

module.exports = Character;
