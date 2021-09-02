let express = require('express');
let router = express.Router()
let controller = require('../controllers/indexController.js');

router.get('/', controller.index);

router.get('/contact', controller.contact);

router.get('/search', controller.search); 

router.get('/sobre_nosotros', controller.sobreNosotros);

router.get('/meriendas', controller.meriendas); 


module.exports = router;


