let { products } = require('../data/dataBase')
 
module.exports = {
    detail: (req, res) => {
        let productID = +req.params.id;

        let product = products.find(product => product.id === productID)
        

        res.render('productDetail', {
            titleSlider: "Productos relacionados",
            product,
           
            
        })
    },
    productsDesc: (req, res) => {
        res.render('productsDesc');
    },
    vista:(req,res)=> {
        res.render('vista')
    },
    
}