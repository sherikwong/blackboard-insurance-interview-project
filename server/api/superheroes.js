const router = require('express').Router();
const { SUPERHERO_URL } = require('../../client/constants');
const axios = require('axios');

router.get('/', (req, res, next) => {
  axios.get(`${SUPERHERO_URL}/5`)
    .then(response => {
      console.log(response);
      res.json(response);
    }).catch(error => {
      console.error(error);
    });
})

module.exports = router;
