let { products, } = require('../data/dataBase');

module.exports = {
    index: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 15)

        res.render('home', {
            titleSlider: "Para los amantes del café.",
            productsSlider,

        })
    },
    contact: (req, res) => {
        res.render('contact');
    },
    search: (req, res) => {
        let result = []
        products.forEach(product => {
            if (product.name.tolowercase().includes(req.query.keyboard.tolowercase)) {
                result.push(product)
            }
        });

        res.render('result', { //hacer la pagina de resultado, con esto lo que hago es que funcione el buscar del header.
            result,
            toThousand,
            search: req.query.keyboard
        })
    }
}

