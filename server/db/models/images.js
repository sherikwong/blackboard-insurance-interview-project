const { basicModel, modelTypes } = require('./util')
const db = require('../db');

const Images = db.define('images', {
  xs: basicModel(modelTypes.String),
  sm: basicModel(modelTypes.String),
  md: basicModel(modelTypes.String),
  lg: basicModel(modelTypes.String),
});

module.exports = Images;
