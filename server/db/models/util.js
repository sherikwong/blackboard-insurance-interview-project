const Sequelize = require('sequelize');

const modelTypes = {
  String: 'STRING',
  Integer: 'INTEGER'
}

const basicModel = (type, allowNull = false) => ({
  type: Sequelize[type],
  unique: false,
  allowNull
})

module.exports = {basicModel, modelTypes};
