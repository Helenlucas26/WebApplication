const {Router} = require('express');    
const { ControllersReceta } = require('../controllers');

const { getRecetas, getRecetaPorNombre, postReceta, updateReceta, deleteReceta } = ControllersReceta;

const router = Router();

router.get('/watchR', getRecetas);

router.get('/watchR/:id', getRecetaPorNombre);

router.post('/createR', postReceta);

router.put('/updateR/:id', updateReceta);

router.delete('/deleteR/:id', deleteReceta);


module.exports=router;