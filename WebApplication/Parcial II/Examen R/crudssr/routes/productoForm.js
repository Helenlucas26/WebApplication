var express = require('express');
var router = express.Router();

const axios = require('axios');

const httpAxios= axios.create({
    baseURL:'http://localhost:2500/v1/inventory/api/'
})


router.post('/producto/operar', ( req,res,next )=>{

    console.log(req.body)
    if (req.body._id==="")
    {
        httpAxios.post(`preparacion`,{
            fecha: req.body.nombre,
            hora: req.body.precio,
            cantidad: req.body.costo,
            costo: req.body.minimo,
            tiempo: req.body.time,
            cocinero: req.body.data1,
            receta: req.body.data2,
        }).then(respuesta=>{
            res.redirect('/')
        })
    }
    else
    {
        httpAxios.put(`preparacion/${req.body._id}`,{
            fecha: req.body.nombre,
            hora: req.body.precio,
            cantidad: req.body.costo,
            costo: req.body.minimo,
            tiempo: req.body.time,
            cocinero: req.body.data1,
            receta: req.body.data2,
        }).then(respuesta=>{
            res.redirect('/')
        })

    }

})

module.exports = router;