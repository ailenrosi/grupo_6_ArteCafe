let express = require('express');
let router = express.Router()
let controller = require('../controllers/productscontroller.js')

router.get('/detail:id', controller.detail);


module.exports = router;