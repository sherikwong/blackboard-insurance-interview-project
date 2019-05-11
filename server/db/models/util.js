const Sequelize = require('sequelize');

const modelTypes = {
  String: 'STRING',
  Integer: 'INTEGER'
}

const basicModel = (type, unique = false, allowNull = true) => ({
  type: Sequelize[type],
  unique,
  allowNull
})

module.exports = {basicModel, modelTypes};
