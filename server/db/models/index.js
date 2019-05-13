const Powerstats = require('./powerstats');
const Character = require('./character');


Character.hasOne(Powerstats);
Powerstats.belongsTo(Character)

module.exports = {
  Powerstats,
  Character
}
