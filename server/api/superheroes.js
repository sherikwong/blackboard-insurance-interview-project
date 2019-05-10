const router = require('express').Router();
const { SUPERHERO_URL } = require('../../client/constants');
const axios = require('axios');
const Biography = require('../db/models/biography');
const Images = require('../db/models/images');
const Powerstats = require('../db/models/powerstats');
const pug = require('../db/pug')

router.get('/:id', (req, res, next) => {
  axios.get(`${SUPERHERO_URL}/5`)
    .then(response => {
      const fullProfile = response.data;
      console.log(fullProfile);
      Biography.create(fullProfile.biography)
        .then(() => {
          Images.create(fullProfile.image).then(() => {
            Powerstats.create(fullProfile.powerstats).then(() => {
              new Array(100).forEach(item => console.log(req.params));
              // console.log(pug);
              res.send(fullProfile);
            }).catch(error => {
              console.error(error);
            });
          }).catch(error => {
            console.error(error);
          })
        }).catch(error => {
          console.error(error);
        })
    }).catch(error => {
      console.error(error);
    });
})

module.exports = router;
