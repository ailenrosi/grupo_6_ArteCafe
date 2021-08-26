let express = require('express');
let router = express.Router()

const { cart, emergente } = require('../controllers/cartController');

router.get('/cart', cart);

router.get('/emergente', emergente);

module.exports = router;

