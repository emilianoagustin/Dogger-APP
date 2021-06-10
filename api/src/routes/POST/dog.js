const express = require('express');
const router = express.Router();
const {createDog} = require('../../controllers/dog');

//create dog
router.post('/', createDog);

module.exports = router;