const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


/* ENRUTADORES */
let indexRouter = require('./routes/index');
let productsRouter = require('./routes/products');
let userRouter = require('./routes/user');
let cartRouter = require('./routes/cart')
let errorRouter = require ('./routes/error_404');


/* Middleware */
app.use(express.static('./public'));

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Rutas */
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);

app.use('*', errorRouter);
app.use('/cart',cartRouter)
app.use('/registro', userRouter);



app.listen(port, () => {
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)
});