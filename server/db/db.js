const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name;

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://sheri@localhost:5432/${databaseName}`,
  {
    logging: false
  }
)
module.exports = db
