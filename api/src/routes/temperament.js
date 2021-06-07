const express = require('express');
const router = express.Router();
const getTemperament = require('../controllers/temperament');

router.get('/', getTemperament);

module.exports = router;