const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createReceta,
    getReceta,
    getRecetas,
    updateReceta,
    deleteReceta
} = require('../controllers').Receta;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getRecetas );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getReceta );

 router.post('/',[
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    check('ingredientes', 'Los ingredientes es requerido').not().isEmpty(),
    check('cantidades', 'Las cantidades es requerido').not().isEmpty(),
    validateFields
], createReceta);


 router.put('/:id', updateReceta);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteReceta);



module.exports = router;