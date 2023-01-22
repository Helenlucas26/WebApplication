const { response } = require('express')
const { Preparacion } = require('../models')


const getPreparacions= async (req, res = response )=>{

    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, preparaciones ] = await Promise.all([
        Preparacion.countDocuments(query),
        Preparacion.find(query)
        .populate('cocinero')
        .populate('receta')
        .limit(Number(limit))
        .skip(Number(since))
    
    ])
  
    res.json({
      sum, 
      preparaciones
    })
    
}
const getPreparacion= async (req, res =  response)=>{
    const {id} = req.params
    const preparacion=  await Preparacion.findById(id).populate('cocinero').populate('receta');
    res.json(preparacion);
}
const createPreparacion= async (req, res = response)=>{
    const { status, ...body } =  req.body;
    

    const data = {
        ...body
    }

    const preparacion = new Preparacion(data);

    const newPreparacion =  await preparacion.save();
    res.status(201).json(newPreparacion);
}
const updatePreparacion= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedPreparacion =  await Preparacion.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedPreparacion);
}
const deletePreparacion= async (req, res = response)=>{
    const {id} = req.params;
    const deletedPreparacion =  await Preparacion.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedPreparacion);
}

module.exports = {
    getPreparacion,
    getPreparacions,
    createPreparacion,
    updatePreparacion,
    deletePreparacion
};