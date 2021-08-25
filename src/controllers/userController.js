module.exports = {
    user: (req, res) => {
        res.render('user');
    },
    realizado:(req,res)=> {
       res.render('realizado')
    },
    formulario: (req, res) => {
        res.render('formulario');
    },
    emergente: (req, res) => {
        res.render('emergente');
    },
    registro: (req, res) => {
        res.render('registro');
    },
    cart: (req, res) => {
        res.render('cart');
    },
    vista:(req,res)=> {
        res.render('vista')
    },
}
