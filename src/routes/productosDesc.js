let express = require('express');
let router = express.Router()
let controller = require('../controllers/productosDescController.js')


router.get('/', controller.productosDesc);


module.exports = router;