let express = require('express')
let router = express.Router()
let userAdminCheck = require('../middlewares/userAdminCheck')

let { 
    admin,
    adminLogin, 
    products, 
    productsCreate, 
    productStore,
    productEdit, 
    deleteProduct,
    productUpdate } = require('../controllers/adminController');

let uploadProductFile = require('../middlewares/uploadProductsFiles')

let productValidator = require('../validations/productCreateValidator')

router.get('/', adminLogin, admin);

router.get('/home', userAdminCheck,admin);

/* ABM-CRUD de Productos */
router.get('/products', products); 
/* Creacion de Producto */
router.get('/products/create', productsCreate); // Crear un producto (Formulario)
router.post('/products/create', uploadProductFile.array("images"), productValidator, productStore); // Crear un producto (Envio de formulario)
/* Edicion de Producto */
router.get('/products/edit/:id', productEdit); // Edita un producto (Formulario)
router.put('/products/edit/:id', uploadProductFile.array("images"), productValidator, productUpdate); // Edita un producto (Envio de formulario)
/* Borrado de Producto */
router.delete('/products/delete/:id', deleteProduct); //Borra un producto

module.exports = router;
