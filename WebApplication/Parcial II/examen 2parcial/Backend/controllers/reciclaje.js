const { response, request } = require('express');
const Preparacion = require('../models/preparacion');
const Reciclaje = require('../models/reciclaje');


const ReiclajeGet = async (req, res=response) =>{ 

    const reciclaje = await Reciclaje.find();
    res.status(200).json(
        reciclaje
    )
}


const ReiclajeDelete = async (req= request, res=response) =>{
    const {id}= req.params;
  
        const {fecha, hora, cantidad, costo, tiempo} = await Reciclaje.findById(id)
        
        const preparacion = new Preparacion({fecha:fecha,hora:hora, cantidad:cantidad, costo:costo, tiempo:tiempo})
        await preparacion.save();
    

        const reciclaje = await Reciclaje.findByIdAndDelete(id)

    res.status(200).json({

        reciclaje

    })
}
module.exports={
    ReiclajeGet,
    ReiclajeDelete
}