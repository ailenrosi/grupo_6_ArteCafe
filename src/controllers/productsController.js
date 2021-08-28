let { products } = require('../data/dataBase')
const writeJson = (database) => {
	fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(database), "utf-8")
}

module.exports = {
    detail: (req, res) => {
        let productID = +req.params.id;

        let product = products.find(product => product.id === productID)
        

        res.render('productDetail', {
            titleSlider: "Productos relacionados",
            products,
            
        })
    },
    productsDesc: (req, res) => {
        res.render('productsDesc');
    },
    vista:(req,res)=> {
        res.render('vista')
    },
    vista:(req,res)=> {
        res.render('products')
    }    
}