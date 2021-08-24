let express = require('express');
let router = express.Router()
let controller = require('../controllers/vistaController.js')

router.get('/', controller.vista);


module.exports = router;