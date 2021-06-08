const axios = require('axios');
const {Dog} = require('../db');
const URL = require('../constants/constants');

const getDogs = async (req, res) => {
    const {name} = req.query;
    try {
        const apiDogs = await axios.get(URL);
        const dbDogs = await Dog.findAll();
        const dog = apiDogs.data.map(dog => {
            return {
                id:dog.id,
                name:dog.name,
                height:dog.height.metric,
                weight:dog.weight.metric,
                lifeSpan:dog.life_span,
                breedGroup:dog.breed_group,
                image:dog.image.url,
                flag:true
            }
        });
        let allDogs = dbDogs.concat(dog);
        let matched = [];
        if(name){
            allDogs.forEach(dog => {
                let lower = dog.breedGroup;
                if(lower && lower.toLowerCase() === name){
                    matched.push(dog);
                };
            });
            if(matched.length === 0) return res.status(404).json({ message: 'Dog not found'})
            else return res.json(matched)
        }
        res.json(allDogs);
        
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
    const {name, height, weight, lifeSpan} = req.body;
    try {
        const dog = await Dog.create({
            name,
            height,
            weight,
            lifeSpan
        })
        res.status(201).json(dog)
    } catch (error) {
        res.json({message:error});
    }
};

module.exports = {
    getDogs,
    getDetail,
    createDog
}