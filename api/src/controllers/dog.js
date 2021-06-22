const { Op } = require('sequelize');
const axios = require('axios');
const {Dog, Temperament} = require('../db');
const { URL, SEARCH_URL } = require('../constants/constants');

const getDogs = async (req, res) => {
    const {name, filter, sort, mode} = req.query;
    try {
        const apiDogs = await axios.get(URL);
        const dbDogs = await Dog.findAll({ include: Temperament });
        const dog = apiDogs.data.map(dog => {
            return {
                id:dog.id,
                name:dog.name,
                height:dog.height.metric,
                weight:dog.weight.metric,
                lifeSpan:dog.life_span,
                breedGroup:dog.breed_group,
                temperament: dog.temperament,
                image:dog.image.url,
                flag:true
            }
        });
        let allDogs = dbDogs.concat(dog);
        
        
        let matched = [];
        if(name){
            let getDogs = await axios.get(`${SEARCH_URL}q=${name}`);
            let foundAPIDogs = getDogs.data;
            let foundDBDogs = await Dog.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    }    
                },
                include: [Temperament]
            });
            
            if(foundAPIDogs.length === 0 && foundDBDogs.length === 0){
                return res.status(404).json({msg: 'Dog not found'});
            };

            if(foundAPIDogs){
                dog.map( dog => {
                    foundAPIDogs.forEach( d => {
                        if(dog.id === d.id){
                            d.image = dog.image;
                            d.flag = true;
                            d.height = dog.height;
                            d.weight = dog.weight;
                            matched.push(d);
                        }
                    });
                });
            };

            if(foundDBDogs){
                foundDBDogs.forEach(d => {
                    matched.push(d) 
                });
            };
            
            if(sort){
                switch(sort){
                    case 'asc':
                        matched = matched.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
                        break;
                    case 'desc':
                        matched = matched.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
                        break;
                    case 'ascWeight':
                        matched = matched.map( d => d.weight.splice('-')).sort((a, b) => parseInt(a) - parseInt(b));
                        break;
                };
            };

            if(filter){
                switch (filter) {
                    case 'original':
                        matched = matched.filter( dog => dog.flag);
                        break;
                    case 'created':
                        matched = matched.filter( dog => !dog.flag);
                        break;
                    case 'all':
                        matched;
                        break;
                    default:
                        matched = matched.filter( 
                            dog => dog.temperament && dog.temperament.toLowerCase().includes(filter.toLowerCase())
                        );
                        break;
                };
            }

            if(matched.length === 0) return res.status(400).json({msg: 'Some values are wrong'});

            return res.json(matched);
        };
        
        let filtered;
        if(filter){
            switch (filter) {
                case 'original':
                    filtered = allDogs.filter( dog => dog.flag);
                    break;
                case 'created':
                    filtered = allDogs.filter( dog => !dog.flag);
                    break;
                case 'all':
                    filtered = allDogs;
                    break;
                default:{
                    filtered = allDogs.filter( 
                        dog => dog.temperament && dog.temperament.toLowerCase().includes(filter.toLowerCase())
                    );
                    break;
                }
            };

            
            if(sort){
                if(filter === 'original' || filter === 'created'){
                    switch(sort){
                        case 'asc':
                            filtered = allDogs.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
                            break;
                            case 'desc':
                            filtered = allDogs.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
                            break;
                        };
                }else{
                    switch(sort){
                        case 'asc':
                            filtered = allDogs.sort( (a, b) => 
                            a.temperament && a.temperament.toLowerCase() > b.temperament && b.temperament.toLowerCase() ?
                            1 : -1
                            );
                            break;
                        case 'desc':
                            filtered = allDogs.sort( (a, b) => 
                                a.temperament && a.temperament.toLowerCase() < b.temperament && b.temperament.toLowerCase() ?
                                1 : -1
                                );
                                break;
                            };
                            
                        };
                    };
                    
                    return res.json(filtered);
        };

        if(sort){
            switch(sort){
                case 'asc':
                    allDogs = allDogs.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
                    break;
                case 'desc':
                    allDogs = allDogs.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
                    break;
            };
        };

    res.json(allDogs);

    } catch (error) {
        res.status(500).json({message:'Server is not responding'});
    }
};

const getDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const apiDogs = await axios.get(URL);
        if(!id.includes('-')){
            const foundDog = apiDogs.data.find( dog => dog.id === parseInt(id));
            return res.json(foundDog);
        }else{
            const foundDog = await Dog.findByPk(id, {include: Temperament});
            return res.json(foundDog)
        }
    } catch (error) {
        res.status(400).json({message: 'You entered a wrong ID'});
    }
};

const createDog = async (req, res) => {
    const {name, height, weight, lifeSpan, temperament} = req.body;
    
    let temperamentArr = temperament;
    try {
        const dog = await Dog.create({
            name,
            height,
            weight,
            lifeSpan
        });
        const allTemperament = await Temperament.findAll();
        while(temperamentArr.length !== 0){
            for (let i = 0; i < allTemperament.length; i++) {
                if(temperamentArr[0].toLowerCase() === allTemperament[i].name.toLowerCase()){
                    await dog.addTemperaments(allTemperament[i].ID);
                }
            }
            temperamentArr.shift()
        }
        res.status(201).json(dog);
    } catch (error) {
        res.status(400).json({message:'Some of the fields are wrong or empty'});
    }
};

module.exports = {
    getDogs,
    getDetail,
    createDog
}