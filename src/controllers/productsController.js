const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    products: (req, res) => {
        res.render('products', {
            products,
            toThousand
        })
    },

    detail: (req, res) => {
        let productsSlider = products.filter(product => product.category === 'cafeteras');
        let productID = +req.params.id;
        let product = products.find(product => product.id === productID);

        res.render('productsDetail', {
            product,
            titleSlider: "No te lo pierdas.",
            productsSlider,
            toThousand
        })
    },
    productsDesc: (req, res) => {
        res.render('productsDesc');
    },
    vista: (req, res) => {
        res.render('vista')
    }
}
