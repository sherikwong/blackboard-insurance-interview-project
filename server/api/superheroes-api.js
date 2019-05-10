const router = require('express').Router();
const { SUPERHERO_URL } = require('../../client/constants');
const axios = require('axios');
const Biography = require('../db/models/biography');
const Images = require('../db/models/images');
const Powerstats = require('../db/models/powerstats');
const BasicInfo = require('../db/models/basic-info');
const pug = require('../db/pug')

const errorBox = (string) => {
  let finalString = '';
  new Array(10).forEach(() => { (finalString += '\n') });
  finalString += string;
  console.log(finalString);
}

const success = (string) => {
  let finalString = '';
  new Array(10).forEach(() => { (finalString += '\n') });
  finalString += string;
  console.log('\x1b[31m', finalString);
}

router.get('/:id', (req, res, next) => {
  console.group(`Running ${SUPERHERO_URL}/${req.params.id}`)
  axios.get(`${SUPERHERO_URL}/${req.params.id}`)
    .then(response => {
      success('Hit Superhero API endpoint');
      const fullProfile = response.data;
      Biography.create(fullProfile.biography)
        .then(biographyCallResponse => {
          success('Created biography document');
          Images.create(fullProfile.image).then(imageCallResponse => {
            success('Created image document');
            const url = imageCallResponse.dataValues.url;
            BasicInfo.create({
              'full-name': biographyCallResponse.dataValues['full-name'],
              url,
              alignment: biographyCallResponse.alignment,
            }).then(() => success('Created basic info document'))
              .catch(error => errorBox(`Problem adding to BasicInfo table. ERROR: ${error}`));

            Powerstats.create(fullProfile.powerstats).then(() => {
              console.log(pug);
              res.send(req.params.id);
            }).catch(error => errorBox(`Problem adding to PowerStats table. ERROR: ${error}`));
          }).catch(error => errorBox(`Problem adding to Images table. ERROR: ${error}`));
        }).catch(error => errorBox(`Problem adding to Biography table. ERROR: ${error}`));
    }).catch(error => errorBox(`Problem getting data from Superhero API. ERROR: ${error}`));
  console.groupEnd();
})

module.exports = router;
