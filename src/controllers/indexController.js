<<<<<<< HEAD
const fs = require("fs");
const path = require("path");
const products = JSON.parse(fs.readFileSync(path.join(__dirname,"..","data","products.json"),"utf-8")); 
=======
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

>>>>>>> emmy

module.exports = {
    index: (req, res) => {
        let productsSlider = products.filter(product => product.category === 'cafe')
        let productsDesc = products.filter(product => product.discount >=2 )
        res.render('home', {
            titleSlider: "Para los amantes del café.",
            productsSlider,
            productsDesc,
            toThousand
        })
    },
    
    contact: (req, res) => {
        res.render('contact');
    },
<<<<<<< HEAD
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
=======
    search: (req, res) => {
		let result = []
		products.forEach(product => {
			if(product.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
				result.push(product)
			}
		});
        
		res.render('results', { 
			result,
			toThousand,
			search: req.query.keywords
		})
	},
    sobreNosotros: (req, res) => {
        res.render('sobre_nosotros');
    },
};
>>>>>>> emmy

