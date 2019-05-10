const { basicModel, modelTypes } = require('./util')
const db = require('../db');

const Images = db.define('images', {
  url: basicModel(modelTypes.String)
});

module.exports = Images;
