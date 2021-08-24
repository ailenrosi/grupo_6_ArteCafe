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
    }
}
