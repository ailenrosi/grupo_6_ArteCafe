const express = require('express');
const app = express();
<<<<<<< HEAD
const port = 3030;
=======
>>>>>>> emmy
const path = require('path');
const methodOverride =  require('method-override');
const port = 3000;

/* ENRUTADORES */
let indexRouter = require('./routes/index');
let productsRouter = require('./routes/products');
let userRouter = require('./routes/user');
<<<<<<< HEAD
let cartRouter = require('./routes/cart');
let prodRouter = require('./routes/prod')
=======
let cartRouter = require('./routes/cart')
let adminRouter = require('./routes/admin');
>>>>>>> emmy
/*el error dejarlo debajo */
let errorRouter = require ('./routes/error_404');



/* Middleware */
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(methodOverride('_method'));

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Rutas */
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);
app.use('/cart',cartRouter);
<<<<<<< HEAD
app.use('/admin', indexRouter);
app.use('/prod', prodRouter);

=======
app.use('/admin', adminRouter);
>>>>>>> emmy
/* el error dejarlo bebajo */
app.use('*', errorRouter);



app.listen(port, () => {
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)
});