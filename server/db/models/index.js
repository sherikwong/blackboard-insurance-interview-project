const User = require('./user')
const Powerstats = require('./powerstats');
const Character = require('./character');


Character.hasOne(Powerstats);
Powerstats.belongsTo(Character)

module.exports = {
  User,
  Powerstats,
  Character
}
