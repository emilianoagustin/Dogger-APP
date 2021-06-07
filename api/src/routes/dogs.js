const express = require('express');
const router = express.Router();

//all dogs and query
router.get('/', async (req, res) => {
    const {name} = req.query
    if(name) return res.send('/dogs query enpoint responding')
    res.send('/dogs enpoint responding')
});

//dog detail
router.get('/:id', async (req, res) => {
    const {id} = req.params
    res.send('/dogs/:id enpoint responding' + id)
});


//create dog
router.post('/', async (req, res) => {
    res.send('/dogs post enpoint responding')
});

module.exports = router;