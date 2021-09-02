let express = require('express');
let router = express.Router()
let controller = require('../controllers/indexController.js');

const {admin} = require('../controllers/indexController')

router.get('/', controller.index);

router.get('/contact', controller.contact);

<<<<<<< HEAD
router.get('/admin', admin);

module.exports = router;
=======
router.get('/search', controller.search); 

router.get('/sobre_nosotros', controller.sobreNosotros);



module.exports = router;


>>>>>>> emmy
