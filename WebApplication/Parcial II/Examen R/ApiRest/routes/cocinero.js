const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createCocinero,
    getCocinero,
    getCocineros,
    updateCocinero,
    deleteCocinero
} = require('../controllers').Cocinero;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getCocineros );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getCocinero );

 router.post('/',[
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    check('sueldo', 'EL sueldo es requerido').not().isEmpty(),
    validateFields
], createCocinero);


 router.put('/:id', updateCocinero);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteCocinero);



module.exports = router;