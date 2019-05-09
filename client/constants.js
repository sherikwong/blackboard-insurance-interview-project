const secrets = require('../secrets');

const SUPERHERO_URL = `https://superheroapi.com/api/${secrets.superHeroApiAccessToken}`;
const CORS_PROXY = 'https://cors.io/?';
const NUMBER_OF_SUPERHEROES = 731;

module.exports = {SUPERHERO_URL, CORS_PROXY, NUMBER_OF_SUPERHEROES};
