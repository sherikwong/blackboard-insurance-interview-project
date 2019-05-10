const db = require('../db');
const { basicModel, modelTypes } = require('./util')

const Powerstats = db.define('powerstats', {
  intelligence: basicModel(modelTypes.Integer),
  strength: basicModel(modelTypes.Integer),
  speed: basicModel(modelTypes.Integer),
  durability: basicModel(modelTypes.Integer),
  power: basicModel(modelTypes.Integer),
  combat: basicModel(modelTypes.Integer),
});

module.exports = Powerstats;
