const db = require('../database/models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {

    detail: (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id,
            },
            include: [
                {
                    association: "images",
                },
            ],
        })
        .then((product) => {
            db.Product.findAll({
                where: {
                    categories_id: product.categories_id,
                },
                include: [
                    {
                        association: "images"
                    },
                ],
            })
            .then( products => {
                let productsSlider = products.filter(product => product.category === 'cafeteras');
                res.render("productsDetail", {
                    titleSlider: "No te lo pierdas.",
                    productsSlider,
                    product,
                    toThousand
                })
            })
        })
        .catch( err => console.log(err));

    },

    /*
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
    */

    products: (req, res) => {
        db.Product.findAll({
            include: [
                {
                    association: "images"
                },
            ],
        })
        .then( products => {
            res.render('products', {
                products,
                toThousand
            })
        })
    },

    /*
    products: (req, res) => {
        res.render('products', {
            products,
            toThousand
        })
    },
    */

    productsDesc: (req, res) => {
        db.Product.findAll({
            include: [
                {
                    association: "images"
                },
            ],
        })
        .then( products => {
            res.render('productsDesc',{
                products,
                toThousand
            })
        });       
    },

    /*
    productsDesc: (req, res) => {
        res.render('productsDesc');
    },
    */

    accesorios: (req, res) => {
        db.Product.findAll({
            where: {
                categories_id : 2
            },
            include: [
                {
                    association: "images"
                },
            ],
        })
        .then( products => {
            res.render('accesorios', {
                products,
                toThousand
            })
        })
    },

    /*
    accesorios: (req, res) => {
        let productID = +req.params.id;
        let product = products.find(product => product.id === productID);
        let productAccesorios = products.filter(product => product.category === 'accesorios');
        res.render('accesorios', {
             productAccesorios,
             product,
             toThousand
            });
    },
    */

    cafeteras: (req, res) => {
        db.Product.findAll({
            where: {
                categories_id : 1
            },
            include: [
                {
                    association: "images"
                },
            ],
        })
        .then( products => {
            res.render('cafeteras', {
                products,
                toThousand
            })
        })
    }

    /*
    cafeteras: (req, res) =>{    
        let cafeteras = products.filter(product => product.category === 'cafeteras');
        let productID = +req.params.id;
            let product = products.find(product => product.id === productID);
        res.render('cafeteras',{
            cafeteras,
            product,
            toThousand
        })
    }
    */

}