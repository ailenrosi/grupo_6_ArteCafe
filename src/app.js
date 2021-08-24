const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


/* ENRUTADORES */
let indexRouter = require('./routes/index');
let productsRouter = require('./routes/products');
let userRouter = require('./routes/user');
let emergenteRouter = require('./routes/emergente');
let contactRouter = require ('./routes/contact');
let formularioRouter = require ('./routes/formulario');
let productosDescRouter = require ('./routes/productosDesc');
let realizadoRouter = require ('./routes/realizado');
let errorRouter = require ('./routes/error_404');


/* Middleware */
app.use(express.static('./public'));

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Rutas */
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/contact', contactRouter);
app.use('/emergente', emergenteRouter);
app.use('/formulario', formularioRouter);
app.use('/productosDesc', productosDescRouter);
app.use('/user', userRouter);
//app.use('/realizado', realizadoRouter);
app.use('*', errorRouter);


app.listen(port, () => {
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)
});