const {Router} = require('express');    
const { ControllersPreparacion } = require('../controllers')

const { getPreparacions, getPreparacionPorCedula, postPreparacion, updatePreparacion,
     deletePreparacion, copyPreparacion} = ControllersPreparacion;

const router = Router();

router.get('/watchP', getPreparacions);

router.get('/watchP/:id', getPreparacionPorCedula); //);

router.post('/createP', postPreparacion); // create);

router.put('/updateP/:id', updatePreparacion);

router.delete('/deleteP/:id', deletePreparacion);

//agrego la ruta que hará la copia
router.get('/copiarP',copyPreparacion);
module.exports=router;