var express = require('express');
var router = express.Router();

const {formulario} = require("../controllers/formularioController")

/* GET formulario listing. */

router.get("/formulario",formulario);

router.get("/formulario",formulario);



module.exports = router;