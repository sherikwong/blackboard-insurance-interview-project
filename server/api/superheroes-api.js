const router = require('express').Router();
const { SUPERHERO_URL } = require('../../client/constants');
const axios = require('axios');
const Powerstats = require('../db/models/powerstats');
const BasicInfo = require('../db/models/basic-info');
const { fail, success } = require('../db/ascii')

const errorBox = (string) => {
  let finalString = '';
  new Array(10).forEach(() => { (finalString += '\n') });
  finalString += string;
  console.log(fail);
  console.log(finalString);
}

const successLogger = (string) => {
  let finalString = '';
  new Array(10).forEach(() => { (finalString += '\n') });
  finalString += string;
  console.log(success);
  console.log(finalString);
}

router.get('/:id', (req) => {
  console.group(`Running ${SUPERHERO_URL}/${req.params.id}`)
  axios.get(`${SUPERHERO_URL}/${req.params.id}`)
    .then(response => {
      successLogger('Hit Superhero API endpoint');
      const fullProfile = response.data;

      BasicInfo.create({
        fullName: fullProfile.biography.fullName,
        url: fullProfile.image.url,
        alignment: fullProfile.biography.alignment,
      }).then(() => successLogger('Created basic info document'))
        .catch(error => errorBox(`Problem adding to BasicInfo table. ERROR: ${error}`));

      Powerstats.create(fullProfile.powerstats).then(() => {
        successLogger('Created powerstats');
      }).catch(error => errorBox(`Problem adding to PowerStats table. ERROR: ${error}`));

    }).catch(error => errorBox(`Problem getting data from Superhero API. ERROR: ${error}`));
  console.groupEnd();
})

module.exports = router;
