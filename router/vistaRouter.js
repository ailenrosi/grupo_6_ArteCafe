var express = require('express');
var router = express.Router();

const {vista} = require("../controllers/vistaController")

/* GET vista listing. */

router.get("/vista",vista);

router.get("/vista",vista);



module.exports = router;
