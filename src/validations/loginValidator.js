const { check, body } = require('express-validator')
const { users } = require('../data/dataBase')
let bcrypt = require('bcryptjs')
let db = require ("../database/models"); 

module.exports = [

    check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    body('pass').custom((value, {req}) => {
        return db.User.findOne({
            where: {
                email: req.body.email,
            },
        })
        .then((user) => {
            if(!bcrypt.compareSync(value, user.dataValues.pass)) {
                return Promise.reject("No coincide la contraseña");
            }
        })
        .catch((error) => {
            return Promise.reject("Credenciales inválidas");
        });
    }),

]