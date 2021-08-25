let express = require('express');
let router = express.Router()
let controller = require('../controllers/registroController.js')

router.get('registro', controller.user);



router.get('/emergente', controller.emergente);

router.get('/formulario', controller.formulario);

router.get('/realizado', controller.realizado);

module.exports = router;