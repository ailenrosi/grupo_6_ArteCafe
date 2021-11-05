const { check } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({
        min: 5
    })
    .withMessage('El nombre debe contener al menos 5 caracteres'),

    check('description')
    .notEmpty()
    .withMessage('Debes ingresar una descripción')
    .isLength({
        min: 20
    })
    .withMessage('La descripcion debe contener al menos 20 caracteres'),
]