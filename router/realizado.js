var express = require('express');
var router = express.Router();

const {realizado} = require("../controllers/realizadoController")

/* GET realizado listing. */

router.get("/realizado",reaalizado);

router.get("/realizado",realizado);



module.exports = router;