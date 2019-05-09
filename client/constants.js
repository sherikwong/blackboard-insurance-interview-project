const secrets = require('../secrets');

const SUPERHERO_URL = `https://superheroapi.com/api/${secrets.superHeroApiAccessToken}`;

module.exports = {SUPERHERO_URL};
