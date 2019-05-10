const router = require('express').Router();
const Biography = require('../db/models/biography');
// const Images = require('../db/models/images');
// const Powerstats = require('../db/models/powerstats');
// const pug = require('../db/pug')

module.exports = router;

router.get('/:id', (req, res, next) => {
  Biography.findAll({
    where: {
      id: {
        $eq: req.params.id
      },

    }
  }).then(allInfo => {
    res.send(allInfo);
  }).catch(error => console.error(error));
})

// router.get('/:id/biography', (req, res, next) => {

// })

// router.get('/:id/image', (req, res, next) => {

// })

// router.get('/:id/powerstats', (req, res, next) => {

// })

router.get('/alignment/:alignment', (req, res, next) => {
  console.log('Find characters by alignment:', req.params.alignment);
  Biography.findAll({
    where: {
      alignment: {
        $eq: req.params.alignment
      }
    }
  }).then(characters => {
    res.send(characters);
  }).catch(error => console.error(error));
})
