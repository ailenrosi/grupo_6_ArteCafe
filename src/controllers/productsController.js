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
  
    detail: (req, res) => {
        let productID = +req.params.id;
        
        let product = products.find(product => product.id === productID)

        res.render('productsDetail', {
            product,
            toThousand
        })
            
    },
    productsDesc: (req, res) => {
        res.render('productsDesc');
    },
    vista:(req,res)=> {
        res.render('vista')
<<<<<<< HEAD
    }
   
    
=======
    },
    products:(req,res)=> {
        res.render('products')
    }    
>>>>>>> emmy
}