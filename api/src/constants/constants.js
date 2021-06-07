require('dotenv').config();
const { API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

module.exports = URL;