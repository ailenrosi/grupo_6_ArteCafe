let { products, /*cart*/ } = require('../data/dataBase'); 

module.exports = {
    index: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 15)

        res.render('home', {
            titleSlider : "Para los amantes del café.",
            productsSlider,
            
        })
    },
    contact: (req, res) => {
        res.render('contact');
    }

}

