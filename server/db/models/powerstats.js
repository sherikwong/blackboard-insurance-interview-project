const db = require('../db');
const { basicModel, modelTypes } = require('./util')
const Sequelize = require('sequelize');

const Powerstats = db.define('powerstats', {
  intelligence: basicModel(modelTypes.String),
  strength: basicModel(modelTypes.String),
  speed: basicModel(modelTypes.String),
  durability: basicModel(modelTypes.String),
  power: basicModel(modelTypes.String),
  combat: basicModel(modelTypes.String),
  // characterId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: 'character',
  //     key: 'id'
  //   }
  // }
  // characterId: basicModel(modelTypes.Integer, true)
});

module.exports = Powerstats;
