const db = require("../database/models");
const { validationResult } = require('express-validator')
//let save = (dato) => fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(dato,null,2),'utf-8') /* gurada en el json products */


module.exports = {
    signin: (req, res) => {
        res.render('admin_login')
    },
    adminLogin: (req, res) => {
        res.render('admin_login')
    },

    admin: (req, res) => {
		res.render('admin', {
            session: req.session
        })
    },

	products: (req, res) => {
        db.Product.findAll().then(products => {
            res.render('adminProducts', {
            products,
            session: req.session  
            })
      
        })
    }, 

    productsCreate: (req, res) => {
        let categoriesPromise = db.Category.findAll();

        Promise.all([categoriesPromise])
        .then(([categories])=> {
            res.render('admin_create',{
                        categories,
                        session: req.session
        });
        })
        .catch((err)=> console.log(err));
    },

    /*productsCreate: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let { name, description, price, discount, category} = req.body
            db.products.create({
                name,
                description,
                price,
                discount,
                category,
                image: req.file ? req.file.filename : "default-image.png"
            })
            .then(() => {
                res.redirect('/admin/products')
            })
        }else{
            res.render('admin_create',{
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            })
        }
            
    },
     
	productsCreate: (req, res) => {
        res.render('admin_create', {
            session: req.session
        })
    }, */

    productsCreateSuccess: (req,res) => {
        res.render('admin_create_success');
    },

    productStore: (req, res) => {
        let errors = validationResult(req);

        if (req.fileValidatorError) {
            let image = {
                param: "image",
                msg: req.fileValidatorError,
            };
            errors.push(image);
        }

        if(errors.isEmpty()){
            let arrayImages = [];
            if(req.files) {
                req.files.forEach((image) => {
                    arrayImages.push(image.filename);
                  });
            }
            
            let { name, description, price, discount, category } = req.body;

            db.Product.create({
                name,
                description,
                price,
                discount,
                categories_id: category
            })
            .then(product => {
                if(arrayImages.length > 0){
                    let images = arrayImages.map(image => {
                        return {
                            image: image,
                            Products_id: product.dataValues.id
                        }
                    })
                    res.send(images);
                    db.Image.bulkCreate(images)
                        .then(() => res.redirect("/admin/products"))
                        .catch(err => console.log(err))
                }
            })
            .then(() => res.redirect("/admin/products"));
        }
    },  
            /*let lastId = 1;

            products.forEach(product => {
                if(product.id > lastId){
                    lastId = product.id
                }
            })
    
            let arrayImages = [];
            if(req.files){
                req.files.forEach(image => {
                    arrayImages.push(image.filename)
                })
            }
    
            let {
                name, 
                price, 
                discount, 
                category, 
                description
                } = req.body;
    
            let newProduct = {
                id: lastId + 1,
                name,
                price,
                description,
                discount,
                category,
                image: arrayImages.length > 0 ? arrayImages : "default-image.png"
            };
    
            products.push(newProduct);
    
            writeProductsJSON(products)
    
            res.redirect('/admin/products/create/success');
        } else {
            res.render("admin_crear", {
                categories,
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
     */
   

    productEdit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id)
        res.render('admin_edit', {
            product,
            session: req.session
        })
    },
    
    productUpdate: (req, res) => {
        let errors = validationResult(req)

        if(errors.isEmpty()){

        let arrayImages = [];
        if(req.files){
            req.files.forEach(image => {
                arrayImages.push(image.filename)
            })
        }
        
        let {
            name, 
            price, 
            discount, 
            category, 
            description
            } = req.body;
        
        products.forEach( product => {
            if(product.id === +req.params.id){
                product.id = product.id,
                product.name = name,
                product.price = price,
                product.description = description,
                product.discount = discount,
                product.category = category,
                product.image = arrayImages > 0 ? arrayImages : product.image
               
            }
        })
        writeProductsJSON(products)

        res.redirect('/admin/products')
        } else {
            let product = products.find(product => product.id === +req.params.id)

            res.render("admin_edit", {
                categories,
                product,
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },

    adminProducts: (req,res) => {
        res.render('adminProducts',{
            products
        });
    },

    deleteProduct: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            return res.redirect('/admin/products')
        })
    }


    // deleteProduct: (req, res) => {
    //     products.forEach(product => {
    //         if(product.id === +req.params.id){
    //             let productAEliminar = products.indexOf(product)
    //             products.splice(productAEliminar, 1)
    //         }
    //     })

    //     writeProductsJSON(products)

    //     res.redirect('/admin/adminProducts')
    // }
}





