var express = require('express');
var router = express.Router();
const axios = require('axios');

const httpAxios =  axios.create({
  baseURL:'http://localhost:2500/v1/inventory/api/',
})


/* GET home page. */
router.get('/', function(req, res, next) {

  httpAxios.get(`preparacion`).then(respuesta=>{

      respuesta.data.preparaciones.forEach((element, i) => {
      res.render('index', { productos: respuesta.data.preparaciones, cocineros: respuesta.data.preparaciones[i].cocinero, recetas: respuesta.data.preparaciones[i].receta });
      });

  })
});



router.get('/producto/nuevo',(req,res,next)=>{
  res.render('productoForm', {})
})

router.get('/producto/modificar/:id',(req,res,next)=>{
  httpAxios.get(`preparacion/${req.params.id}`).then(respuesta=>{
    res.render('productoForm', {producto: respuesta.data })
  })
})
router.get('/producto/eliminar/:id', (req,res,next)=>{
  httpAxios.delete(`preparacion/${req.params.id}`).then(respuesta=>{
    res.redirect('/');
  })
})


module.exports = router;
