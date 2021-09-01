const fs = require("fs");
const path = require("path");
const products = JSON.parse(fs.readFileSync(path.join(__dirname,"..","data","products.json"),"utf-8")); 

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
    },
    admin: (req,res) => {
        res.render('admin', {products})
    },
    search: ( req, res) =>{
        let result =[]
        products.forEach(product => {
if( product.name.tolowercase().includes(req.query.name.tolowercase)){
result.push(product)
}
        });
        res.render('result', {
        })
            }
}

