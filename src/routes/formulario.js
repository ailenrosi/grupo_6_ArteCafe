let express = require('express');
let router = express.Router()
let controller = require('../controllers/formularioController.js')


router.get('/', controller.formulario);


module.exports = router;