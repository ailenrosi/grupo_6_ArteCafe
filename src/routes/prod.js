var express = require('express');
var router = express.Router();
const path = require('path');

const {list} = require('../controllers/prodController.js')

router.get("/list",list);

module.exports = router