const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./GET/dogs');
const temperament = require('./GET/temperament');
const createDog = require('./POST/dog');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs);
router.use('/dog', createDog);
router.use('/temperament', temperament);

module.exports = router;
