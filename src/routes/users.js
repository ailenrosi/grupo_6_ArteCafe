let express = require('express');
let router = express.Router()
let controller = require('../controllers/usersController.js')

router.get('/', controller.user);

router.get('/registrate', controller.formulario);

router.get('/realizado', controller.realizado);



module.exports = router;



const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const loginValidator = require('../middlewares/loginValidator');
const registerValidator = require('../middlewares/registerMiddleware');

/* Ruta para perfil */
router.get('/profile', controller.indexProfile);
/* Ruta Register */
router.post('/registrate', registerValidator, controller.createUser);
/* Ruta Post de Login */
router.post('/user_inicio', loginValidator, controller.checkLogin);

module.exports = router;