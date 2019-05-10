const router = require('express').Router();
const { SUPERHERO_URL } = require('../../client/constants');
const axios = require('axios');
const Biography = require('../db/models/biography');
const Images = require('../db/models/images');
const Powerstats = require('../db/models/powerstats');
const BasicInfo = require('../db/models/basic-info');
const pug = require('../db/pug')

router.get('/:id', (req, res, next) => {
  console.log(`Running ${SUPERHERO_URL}/${req.params.id}`)
  axios.get(`${SUPERHERO_URL}/${req.params.id}`)
    .then(response => {
      const fullProfile = response.data;
      Biography.create(fullProfile.biography)
        .then(biographyCallResponse => {
          Images.create(fullProfile.image).then(imageCallResponse => {
            const imageData = imageCallResponse.data.url;
            BasicInfo.create({
              'full-name': fullProfile['full-name'],
              url: imageData,
              alignment: biographyCallResponse.alignment,
            })

            Powerstats.create(fullProfile.powerstats).then(() => {
              console.log(pug);
              res.send(req.params.id);
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
