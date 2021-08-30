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
    
}
