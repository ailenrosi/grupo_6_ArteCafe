let express = require('express');
let router = express.Router()
let controller = require('../controllers/emergenteController.js')


router.get('/', controller.emergente);


module.exports = router;