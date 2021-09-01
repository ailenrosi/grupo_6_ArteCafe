let express = require('express');
let router = express.Router()
let controller = require('../controllers/indexController.js');

const {admin} = require('../controllers/indexController')

router.get('/', controller.index);

router.get('/contact', controller.contact);

router.get('/admin', admin);

module.exports = router;