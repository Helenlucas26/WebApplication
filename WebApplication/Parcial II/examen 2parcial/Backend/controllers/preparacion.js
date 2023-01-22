const { response, request } = require('express');
const Preparacion = require('../models/preparacion');
const Reciclaje = require('../models/reciclaje');




const PreparacionGet = async (req, res=response) =>{ 
    const preparacion = await Preparacion.find();
        
    
    res.status(200).json(
        {preparacion})
}
const PreparacionPost = async (req, res=response) =>{ 
    const { fecha, hora, cantidad, costo, tiempo } = req.body; 
    const preparacion = new Preparacion({ fecha, hora, cantidad, costo, tiempo })

    await preparacion.save();
    res.status(200).json(
            {preparacion}

    )
}





const PreparacionDelete = async (req= request, res=response) =>{
    const {id}= req.params;
  
        const { fecha, hora, cantidad, costo, tiempo} = await Preparacion.findById(id)

       

        const reciclaje = new Reciclaje({fecha:fecha,hora:hora, cantidad:cantidad, costo:costo, tiempo:tiempo })
        await reciclaje.save();
    

        const preparacion = await Preparacion.findByIdAndDelete(id)

    res.status(200).json({

        preparacion

    })
}

module.exports={ PreparacionDelete, PreparacionGet, PreparacionPost
}