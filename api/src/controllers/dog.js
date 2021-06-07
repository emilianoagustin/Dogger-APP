const axios = require('axios');
const {Dog} = require('../db');
const URL = require('../constants/constants');

const getDogs = async (req, res) => {
    try {
        const apiDogs = await axios.get(URL);
        const dbDogs = await Dog.findAll();
        let allDogs = dbDogs.concat(apiDogs.data);
        res.send(allDogs);
    } catch (error) {
        res.json({message:error});
    }
};

const getDetail = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({message:error});
    }
};

const createDog = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({message:error});
    }
};

module.exports = {
    getDogs,
    getDetail,
    createDog
}