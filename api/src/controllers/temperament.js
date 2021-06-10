const axios = require('axios');
const {Temperament} = require('../db');
const URL = require('../constants/constants');

module.exports = getTemperament = async (req, res) => {
    try {
        let tempArr = [];
        const allDogs = await axios.get(URL);
        allDogs.data.forEach( dog => {
            if(dog.temperament){
                let splitted = dog.temperament.split(', ');
                tempArr = tempArr.concat(splitted);
            }
        });
        let temperaments = [...new Set(tempArr)];
        for (let i = 0; i < temperaments.length; i++) {
            await Temperament.create({
                name: temperaments[i],
            });
        }
        res.json(temperaments);
        
    } catch (error) {
        console.log(error);
    }
}