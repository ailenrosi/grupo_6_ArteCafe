let express = require('express');
let router = express.Router()

const { cart, emergente,vista, formulario } = require('../controllers/cartController');

router.get('/cart', cart);

router.get('/emergente', emergente);

router.get('/vista',vista);

router.get('/formulario', formulario);

module.exports = router;

