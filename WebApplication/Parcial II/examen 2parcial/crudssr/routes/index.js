var express = require('express');
var router = express.Router();
const axios = require('axios');

const httpAxios =  axios.create({
  baseURL:'http://localhost:3000/api/',
})


/* GET home page. */
router.get('/', function(req, res, next) {
  httpAxios.get(`preparacion`).then(respuesta=>{
    console.log(respuesta.data.preparacion);
    res.render('index', { productos: respuesta.data.preparacion });
  })
});
router.get('/producto/nuevo',(req,res,next)=>{
  res.render('productoForm', {})
})

router.get('/producto/modificar/:id',(req,res,next)=>{
  httpAxios.get(`/preparacion/${req.params.id}`).then(respuesta=>{
    res.render('productoForm', {producto: respuesta.data })
  })
})
router.get('/producto/eliminar/:id', (req,res,next)=>{
  httpAxios.delete(`/preparacion/${req.params.id}`).then(respuesta=>{
    res.redirect('/');
  })
})


module.exports = router;
