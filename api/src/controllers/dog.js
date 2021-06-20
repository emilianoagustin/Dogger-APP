const axios = require('axios');
const {Dog, Temperament} = require('../db');
const { URL, SEARCH_URL } = require('../constants/constants');

const getDogs = async (req, res) => {
    const {name, filter, sort} = req.query;
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
                    name: name    
                }
            });
            
            if(foundAPIDogs.length === 0 && foundDBDogs.length === 0){
                return res.status(404).json({msg: 'Dog not found'})
            };
            if(foundAPIDogs.length > 0){
                foundAPIDogs.forEach( d => {
                    let auxDog = {...d, flag: true}
                    matched.push(auxDog)
                });
            };
            if(foundDBDogs.length > 0){
                foundDBDogs.forEach(d => {
                    matched.push(d) 
                });
            };
            if(filter !== 'original' && filter !== 'created'){
                matched = matched.filter( 
                    dog => dog.temperament && dog.temperament.toLowerCase().includes(filter.toLowerCase())
                )
            }
            if(sort === 'asc'){
                const asc = matched.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                return res.json(asc)
            };
            if(sort === 'desc'){
                const desc = matched.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
                return res.json(desc)
            };

            if(matched.length === 0) return res.status(400).json({msg: 'Some values are wrong'})
            return res.json(matched);
        };
        
        let filtered;
        if(filter){
            if(filter === 'original'){
                filtered = allDogs.filter( dog => dog.flag)
            }else if(filter === 'created'){
                filtered = allDogs.filter( dog => !dog.flag)
            }else if(filter === 'all'){
                filtered = allDogs
            }else{
                filtered = allDogs.filter( 
                    dog => dog.temperament && dog.temperament.toLowerCase().includes(filter.toLowerCase())
                )
            }
            if(sort === 'asc'){
                if(filter === 'original' || filter === 'created'){
                    const asc = filtered.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                    return res.json(asc)
                }else{
                    const asc = filtered.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                    return res.json(asc)
                }
            };
            if(sort === 'desc'){
                if(filter === 'original' || filter === 'created'){
                    const asc = filtered.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
                    return res.json(asc)
                }else{
                    const asc = filtered.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
                    return res.json(asc)
                }
            }
        return res.json(filtered)
        }
        // if(name){
        //     allDogs.forEach(dog => {
        //         let breed = dog.breedGroup;
        //         if(breed && breed.toLowerCase() === name){
        //             matched.push(dog);
        //         };
        //         if(dog.name.toLowerCase() === name){
        //             matched.push(dog);
        //         };
        //     });
        //     if(matched.length === 0) return res.status(404).json({ message: 'Dog not found'});
        //     else return res.json(matched);
        // }


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
    let temperamentArr = temperament.split(', ');
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