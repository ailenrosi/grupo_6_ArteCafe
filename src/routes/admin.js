let express = require('express');
let router = express.Router()
let controller = require('../controllers/adminController.js')


router.get('/admin', controller.admin);

module.exports = router;