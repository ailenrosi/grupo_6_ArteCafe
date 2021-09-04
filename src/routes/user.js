let express = require('express');
let router = express.Router()
let controller = require('../controllers/userController.js')

router.get('/', controller.user);

router.get('/formulario', controller.formulario);

router.get('/realizado', controller.realizado);

router.get('registrarse', controller.registrarse);

module.exports = router;