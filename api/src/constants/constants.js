require('dotenv').config();
const { API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const SEARCH_URL = 'https://api.thedogapi.com/v1/breeds/search?';

module.exports = { URL, SEARCH_URL };