const {Router} = require('express');    
const { ControllersPreparacion } = require('../controllers')

const { getPreparacions, getPreparacionPorCedula, postPreparacion, updatePreparacion, deletePreparacion} = ControllersPreparacion;

const router = Router();

router.get('/watchP', getPreparacions);

router.get('/watchP/:id', getPreparacionPorCedula); //);

router.post('/createP', postPreparacion); // create);

router.put('/updateP/:id', updatePreparacion);

router.delete('/deleteP/:id', deletePreparacion);


module.exports=router;