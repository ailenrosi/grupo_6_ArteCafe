const fs = require("fs");
const path = require("path");
const products = JSON.parse(fs.readFileSync(path.join(__dirname,"..","data","products.json"),"utf-8"));
let save = (dato) => fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(dato,null,2),'utf-8') /* gurada en el json products */


module.exports ={
    admin: (req, res) => {
        res.render('admin');
    },

	products: (req,res) => {
		const {name, price, category} = req.body
		let  product = {
			name,
			price,
			category
		}
		product
	},
    
	list: (req, res) => {
		return res.render("listProducts",{products})
	}
	
}



