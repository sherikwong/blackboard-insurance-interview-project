const User = require('./user')
const Biography = require('./biography');
const Images = require('./images');
const Powerstats = require('./powerstats');
const BasicInfo = require('./basic-info');

BasicInfo.hasOne(Biography);
Biography.belongsTo(BasicInfo);

Biography.hasOne(Images);
Images.belongsTo(Biography)

Biography.hasOne(Powerstats);
Powerstats.belongsTo(Biography);

module.exports = {
  User,
  Biography,
  Images,
  Powerstats,
  BasicInfo
}
