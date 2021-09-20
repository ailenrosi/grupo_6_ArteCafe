let express = require('express');
let router = express.Router()

const { 
    register,
    processRegister,
    login, 
    processLogin,
    logout,
    profileEdit,
    updateProfile,
    profile } = require('../controllers/usersController');

const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const uploadUserAvatar = require('../middlewares/uploadUserAvatar');
const userSessionCheck = require('../middlewares/userSessionCheck');
const userLog = require('../middlewares/userLog');

/* GET - User profile */
//router.get('/users', userSessionCheck, users);

router.get('/register', userLog, register);
router.post('/register', uploadUserAvatar.single('avatar'), registerValidator, processRegister);

/* GET - Login form */
router.get('/login', userLog, login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', userSessionCheck, logout);

/* GET - User profile */
router.get('/users/edit/:id', userSessionCheck, profileEdit)
router.put('/profile/edit/:id', uploadUserAvatar.single('avatar'), updateProfile)

router.get('/profile', userSessionCheck, profile)


module.exports = router;
