require('dotenv').config();
const axios = require('axios');
const express = require('express');
const router = express.Router();
const Temperament = require('../models/Temperament');
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`

router.get('/', async (req, res) => {
    let tempArr = [];
    const allDogs = await axios.get(URL);
    allDogs.data.forEach( dog => {
        if(dog.temperament){
            let splitted = dog.temperament.split(',');
            tempArr = tempArr.concat(splitted);
        }
    });
    
    let temperaments = [...new Set(tempArr)];
    for (let i = 0; i < temperaments.length; i++) {
        const create = await Temperament.create({
            name: temperaments[i],
        });
    }


    res.json(temperaments);
})

module.exports = router;