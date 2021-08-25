let express = require('express');
let router = express.Router()
let controller = require('../controllers/userController.js')

router.get('/', controller.user);

//router.get('/cart', controller.user);

router.get('/emergente', controller.emergente);

router.get('/formulario', controller.formulario);

router.get('/realizado', controller.realizado);

module.exports = router;