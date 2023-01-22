const { Router } = require('express');

const { 
    PreparacionGet, 
    PreparacionPost,
    PreparacionDelete
} = require('../controllers/preparacion');




const router = Router(); 


router.get('/', PreparacionGet )

router.post('/', PreparacionPost )


router.delete('/:id', PreparacionDelete )


module.exports= router;