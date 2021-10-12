let express = require('express');
let router = express.Router()
let controller = require('../controllers/indexController.js');
let cookieCheck = require('../middlewares/cookieCheck')


router.get('/', controller.index);

router.get('/contact', controller.contact);

router.get('/', cookieCheck,controller.index);


router.get('/search', controller.search); 

router.get('/sobre_nosotros', controller.sobreNosotros);

router.get('/gallery', controller.gallery);

router.get('/meriendas', controller.meriendas); 


module.exports = router;


