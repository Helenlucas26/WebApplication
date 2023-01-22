const { Router } = require('express');

const { 
ReiclajeGet,
ReiclajeDelete
} = require('../controllers/reciclaje');




const router = Router(); 


router.get('/', ReiclajeGet )

router.delete('/:id', ReiclajeDelete)


module.exports= router;