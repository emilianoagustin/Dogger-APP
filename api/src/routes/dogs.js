const express = require('express');
const router = express.Router();
const {getDogs, getDetail, createDog} = require('../controllers/dog');

//all dogs and query
router.get('/', getDogs);

//dog detail
router.get('/:id', getDetail);


//create dog
router.post('/', createDog);

module.exports = router;