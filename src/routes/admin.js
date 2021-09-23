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
    productsCreateSuccess,
    adminProducts,
    productUpdate } = require('../controllers/adminController');

let uploadProductFile = require('../middlewares/uploadProductsFiles')

let productValidator = require('../validations/productCreateValidator')

router.get('/', adminLogin, admin);

router.get('/home', userAdminCheck,admin);

router.get('/adminProducts', adminProducts);

router.get('/products', products);

router.get('/products/create', productsCreate);
router.post('/products/create', uploadProductFile.array("images"), productValidator, productStore);
router.get('/products/create/success', productsCreateSuccess);

router.get('/products/edit/:id', productEdit);
router.put('/products/edit/:id', uploadProductFile.array("images"), productValidator,productUpdate);


router.post('/products/delete/:id', deleteProduct);




module.exports = router;
