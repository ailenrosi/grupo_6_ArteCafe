let express = require('express');
let router = express.Router()
let controller = require('../controllers/productsController.js')

router.get('/detail:id', controller.detail);

router.get('/productsDesc', controller.productsDesc);

router.get('/vista', controller.vista);

module.exports = router;


