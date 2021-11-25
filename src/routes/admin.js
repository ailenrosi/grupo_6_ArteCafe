let express = require('express')
let router = express.Router()

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
let productValidator = require('../validations/productCreateOrEditValidator')
let adminSessionCheck = require('../middlewares/adminSessionCheck');

router.get('/', adminSessionCheck, admin);

/* ABM-CRUD de Productos */
router.get('/products', adminSessionCheck, products); 
/* Creacion de Producto */
router.get('/products/create', adminSessionCheck, productsCreate); // Crear un producto (Formulario)
router.post('/products/create', adminSessionCheck, uploadProductFile.array("images"), productValidator, productStore); // Crear un producto (Envio de formulario)
/* Edicion de Producto */
router.get('/products/edit/:id', adminSessionCheck, productEdit); // Edita un producto (Formulario)
router.put('/products/edit/:id', adminSessionCheck, uploadProductFile.array("images"), productValidator, productUpdate); // Edita un producto (Envio de formulario)
/* Borrado de Producto */
router.delete('/products/delete/:id', adminSessionCheck, deleteProduct); //Borra un producto

module.exports = router;
