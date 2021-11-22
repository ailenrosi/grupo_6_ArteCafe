const db = require("../database/models");
const { validationResult } = require('express-validator');
const fs = require("fs");


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

	products: async(req, res) => {
        
        let products = await db.Product.findAll();

        res.render('adminProducts', {
            products,
            session: req.session
        });
        
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

    productStore: async(req, res) => {
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

            let product = await db.Product.create({
                name,
                description,
                price,
                discount,
                categories_id: category
            });
            
            if(arrayImages.length > 0){
                let images = arrayImages.map(image => {
                    return {
                        image: image,
                        Products_id: product.dataValues.id
                    }
                });
                
                await db.Image.bulkCreate(images);
                res.redirect("/admin/products");
            }
            
            res.redirect("/admin/products");
        } else {

            let categories = await db.Category.findAll();

            res.render("admin_create", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
                categories: categories,
            })
        }
    },  

    productEdit: (req, res) => {
        let categories = db.Category.findAll();
        let product = db.Product.findOne ({
            where:{id: req.params.id},
        }); 
        
        Promise.all(([categories, product]))
        .then(([categories, product]) => {
            res.render("admin_edit", {
                product,
                categories,
                session: req.session
            })
        })
    },

    /* PUT de la edicion del producto */
    
    productUpdate: async(req, res) => {

        let errors = validationResult(req);
        if(errors.isEmpty()){

            let {
                name, 
                price, 
                discount, 
                category, 
                description
            } = req.body;

            await db.Product.update(
                {
                    name,
                    price,
                    discount,
                    categories_id: category,
                    description
                },
                {
                    where:{
                        id:req.params.id,
                    },
                }
            );

            res.redirect("/admin/products");

        }

    },

    deleteProduct: async(req, res) => {
       
        let images = await db.Image.findAll({
            where: {
                Products_id : req.params.id
            }
        });

        images.forEach( image => {
            fs.existsSync("/img/imgProductos", image.image) 
                ? fs.unlinkSync("/img/imgProductos" + image.image)
                : console.log("--No se encontró");
        });

        await db.Image.destroy({
            where: {
                Products_id : req.params.id,
            }
        });

        await db.Product.destroy({
            where: {
                id: req.params.id,
            }
        });

        res.redirect("/admin/products");

    }

}



