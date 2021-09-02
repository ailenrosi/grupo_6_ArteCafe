const cart = require('../data/dataBase')

module.exports = {
    cart: (req, res) => {
        res.render('/cart',{
            cart
        });
    },
    emergente: (req, res) => {
        res.render('emergente');
    },
    vista: (req, res) => {
        res.render('vista');
    },

    formulario: (req, res) => {
        res.render('formulario');
    }
    
}
