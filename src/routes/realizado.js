let express = require('express');
let router = express.Router()
let controller = require('../controllers/realizadoController.js')


router.get('/', controller.realizado);

