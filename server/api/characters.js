const router = require('express').Router();
const { Character, Powerstats } = require('../db/models');

module.exports = router;

router.get('/alignment/:alignment', (req, res, next) => {
  console.log('Find characters by alignment:', req.params.alignment);
  Character.findAll({
    where: {
      alignment: {
        $eq: req.params.alignment
      }
    },
    order: [
      ['fullName', 'ASC']
    ]
    // attributes: ['id', 'full-name', 'alignment', 'url']
  }).then(data => {
    res.send(data);
  }).catch(error => console.error(error));
})

router.get('/:id/stats', (req, res, next) => {
  Powerstats.findById(req.params.id).then(data => {
    res.send(data);
  }).catch(error => console.error(error));
})
