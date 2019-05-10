const db = require('../db');
const { basicModel, modelTypes } = require('./util')

const Powerstats = db.define('powerstats', {
  intelligence: basicModel(modelTypes.Integer, true),
  strength: basicModel(modelTypes.Integer, true),
  speed: basicModel(modelTypes.Integer, true),
  durability: basicModel(modelTypes.Integer, true),
  power: basicModel(modelTypes.Integer, true),
  combat: basicModel(modelTypes.Integer, true),
});

module.exports = Powerstats;
