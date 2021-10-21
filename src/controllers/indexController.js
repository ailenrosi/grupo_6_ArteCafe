//const fs = require('fs');
//const path = require('path');
const db = require('../database/models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {

    index: (req, res) => {
        db.Product.findAll({
            include: [
                {
                    association: "images",
                },
            ],
        })
        .then(products => {
            let productsSlider = products.filter( product => product.categories_id === 1 );
            let productsDesc = products.filter( product => product.discount >= 15 );
            res.render('home', {
                titleSlider: "Para los amantes del café.",
                productsSlider,
                productsDesc,
                session: req.session,
                toThousand
            })

        });
    },

    /*
    index: (req, res) => {
        let productsSlider = products.filter(product => product.category === 'cafe')
        let productsDesc = products.filter(product => product.discount >=15 )
        res.render('home', {
            titleSlider: "Para los amantes del café.",
            productsSlider,
            productsDesc,
            toThousand
        })
    },
    */
    
    contact: (req, res) => {
        res.render('contact');
    },

    search: (req, res) => {
        db.Product.findAll({
            include: [
                {
                    association: "images",
                },
            ],
        })
        .then( products => {
            let result = [];
		    products.forEach(product => {
			    if(product.name.toLowerCase().includes(req.query.keywords.toLowerCase())){
    				result.push(product)
			    }    
            });
            res.render('results', {
                result,
                toThousand,
                session: req.session,
                search: req.query.keywords
            });
        })
    },

    /*
    search: (req, res) => {
		let result = [];
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
    */

    sobreNosotros: (req, res) => {
        res.render('sobre_nosotros', {
            session: req.session
        });
    },

    meriendas: (req, res) => {
        res.render('meriendas');
    },

    gallery: (req, res) => {
        res.render('gallery');
    },
}

