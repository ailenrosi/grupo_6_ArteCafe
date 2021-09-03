let express = require('express');
let router = express.Router()
let controller = require('../controllers/indexController.js');

router.get('/', controller.index);

router.get('/contact', controller.contact);

<<<<<<< HEAD
router.get('/admin', admin);

module.exports = router;
=======
>>>>>>> 3b90f6becc48db658d457fdc6956e12c9bd5dc5c
router.get('/search', controller.search); 

router.get('/sobre_nosotros', controller.sobreNosotros);

router.get('/galeria', controller.galeria);

router.get('/meriendas', controller.meriendas); 


module.exports = router;


