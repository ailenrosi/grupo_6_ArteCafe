let express = require('express');
let router = express.Router()

const { 
    user,
    register,
    processRegister,
    processLogin,
    profileEdit,
    userProfile,
    userUpdate,
    userDelete,
    userEdit,
    logout,
    profile } = require('../controllers/usersController');

const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const upload = require('../middlewares/uploadUserAvatar');
const userSessionCheck = require('../middlewares/userSessionCheck');
const userLog = require('../middlewares/userLog');
const { get } = require('.');


router.get('/register', userLog, register);
router.post('/register', upload.single('avatar'), registerValidator, processRegister);

/* GET - Login form */
router.get('/login', userLog, user);
router.post('/login', loginValidator, processLogin);
router.get('/logout', userSessionCheck, logout);

/* GET - User profile */
/*router.get('/user/edit/:id', userSessionCheck, profileEdit)
router.put('/profile/edit/:id', uploadUserAvatar.single('avatar'), updateProfile)*/


router.get('/profileEdit', profileEdit);
router.post('/profileEdit', profileEdit);

router.get('/profile', userSessionCheck, profile)

router.get('/userProfile', userSessionCheck, userProfile)
router.get('/userEdit', userSessionCheck, userEdit)

router.post('/userUpdate', userSessionCheck, userUpdate);

router.delete('/userDelete/:id',userSessionCheck, userDelete);

module.exports = router;
