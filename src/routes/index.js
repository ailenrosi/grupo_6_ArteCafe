let express = require('express');
let router = express.Router()
let controller = require('../controllers/indexController.js')

router.get('/', controller.index);

router.get('/contact', controller.contact);

router.get('/search', controller.search); 

module.exports = router;