const {Router} = require('express');    
const { ControllersCocinero } = require('../controllers')

const { getCocineros, getCocineroPorCedula, postCocinero, updateCocinero, deleteCocinero } = ControllersCocinero;

const router = Router();

router.get('/watchC', getCocineros);

router.get('/watchC/:id', getCocineroPorCedula);

router.post('/createC', postCocinero);

router.put('/updateC/:id', updateCocinero);

router.delete('/deleteC/:id', deleteCocinero);


module.exports=router;