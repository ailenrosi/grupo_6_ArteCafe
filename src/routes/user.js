let express = require('express');
let router = express.Router()

const { 
    user,
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
const { get } = require('.');

/* GET - User profile */
router.get('/user', userLog, user);
router.post('/user', uploadUserAvatar.single('avatar'),loginValidator, processLogin);

router.get('/register', userLog, register);
router.post('/register', uploadUserAvatar.single('avatar'), registerValidator, processRegister);

/* GET - Login form */
router.get('/login', userLog, login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', userSessionCheck, logout);

/* GET - User profile */
/*router.get('/user/edit/:id', userSessionCheck, profileEdit)
router.put('/profile/edit/:id', uploadUserAvatar.single('avatar'), updateProfile)*/




router.get('/profile', userSessionCheck, profile)


module.exports = router;
