const { categories, users, writeUsersJSON } = require('../data/dataBase')
const { validationResult } = require('express-validator')
let bcrypt = require('bcryptjs')

module.exports = {
    user:  (req, res) => {
        res.render('user', {
            categories,
            session: req.session
        })
    },

    formulario:(req, res) => {
        res.render('registrate', {
            categories,
            session: req.session
        })
    },

    realizado:(req,res)=> {
        res.render('realizado')
     },
 
}

