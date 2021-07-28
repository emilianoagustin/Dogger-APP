const express = require('express');
const router = express.Router();
const {getDogs, getDetail} = require('../../controllers/dog');

//all dogs and query
router.get('/', getDogs);

//dog detail
router.get('/:id', getDetail);

module.exports = router;