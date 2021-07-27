const express = require('express');
const app = express();

let producto = {
    tipoDeProducto : null,
    precio : null,
    cantidad: null
    }

      app.get("/producto/agregar", (req , res) => {
         res.send(producto) })