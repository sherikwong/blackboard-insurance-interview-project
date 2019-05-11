const User = require('./user')
const Powerstats = require('./powerstats');
const BasicInfo = require('./basic-info');


BasicInfo.hasMany(Powerstats);
Powerstats.belongsTo(BasicInfo)

module.exports = {
  User,
  Powerstats,
  BasicInfo
}
