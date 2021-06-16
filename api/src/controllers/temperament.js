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
        temperaments = temperaments.map(temperament => ({name: temperament}));

        const allTemperaments = await Temperament.findAll();

        if(allTemperaments.length === 0){
            const temperament = await Temperament.bulkCreate(temperaments);
            return res.json(temperament);
        }else return res.json(allTemperaments);

    } catch (error) {
        console.log(error);
    }
}