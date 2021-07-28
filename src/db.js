require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_URL } = process.env;
const axios = require('axios');
const { URL } = require('./constants/constants');

const sequelize = new Sequelize(
  'postgres://isebdkznsgyvpq:7bc3bd07978f6803e0cdd13b416d9e333948a2a65aedce4a4743e48a2f47c8cd@ec2-3-231-194-96.compute-1.amazonaws.com:5432/d4d1e9v90ut59c',
  {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: 'postgres',
  ssl: true,
  protocol: 'postgres',
  dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

// const sequelize = new Sequelize(env.database, env.username, env.password, {
//   host: env.host,
//   dialect: env.dialect,
//   operatorsAliases: false,
 
//   pool: {
//     max: env.max,
//     min: env.pool.min,
//     acquire: env.pool.acquire,
//     idle: env.pool.idle
//   }
// });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Dog, Temperament } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Dog.belongsToMany(Temperament, { through: 'dog_temperament' })
Temperament.belongsToMany(Dog, { through: 'dog_temperament' })

//llamo a la API y guardo todos los temperamentos en mi DB
const createTemperaments = async () => {
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
  const temperament = await Temperament.bulkCreate(temperaments);

  return temperament;
}

createTemperaments();

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
