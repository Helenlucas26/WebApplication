const { Router } = require('express')
const { check } =  require('express-validator')

const { createPreparacion,
     getPreparacion, 
     getPreparacions,
     updatePreparacion,
     deletePreparacion } = require('../controllers').Preparacion;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/Preparacions/

router.get('/', getPreparacions);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getPreparacion);

router.post('/',[
    check('fecha', 'La fecha es requerido').not().isEmpty(),
    check('hora', 'La hora es requerido').not().isEmpty(),
    check('cantidad', 'La cantidad es requerido').not().isEmpty(),
    check('costo', 'El costo es requerido').not().isEmpty(),
    check('tiempo', 'El tiempo es requerido').not().isEmpty(),
    validateFields
] , createPreparacion)

router.put('/:id', updatePreparacion)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deletePreparacion)

module.exports = router;