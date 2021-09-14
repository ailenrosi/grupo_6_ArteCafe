let express = require('express');
let router = express.Router()
let controller = require('../controllers/usersController.js')

router.get('/', controller.user);

router.get('/registrate', controller.formulario);

router.get('/realizado', controller.realizado);



module.exports = router;