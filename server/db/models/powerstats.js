const db = require('../db');
const { basicModel, modelTypes } = require('./util')

const Powerstats = db.define('powerstats', {
  intelligence: basicModel(modelTypes.Integer, false),
  strength: basicModel(modelTypes.Integer, false),
  speed: basicModel(modelTypes.Integer, false),
  durability: basicModel(modelTypes.Integer, false),
  power: basicModel(modelTypes.Integer, false),
  combat: basicModel(modelTypes.Integer, false),
});

module.exports = Powerstats;
