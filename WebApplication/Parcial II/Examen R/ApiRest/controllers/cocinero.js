const { response } = require('express');
const { Cocinero } = require('../models');


const getCocineros = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, cocineros ] = await Promise.all([
        Cocinero.countDocuments(query),
        Cocinero.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      cocineros
    })
}

const getCocinero = async (req, res= response)=>{
    const {id} = req.params
    const cocinero=  await Cocinero.findById(id);
    res.json(cocinero);
}
const createCocinero = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const data = {
        ...body
    }

    const cocinero = new Cocinero(data);

    const newCocinero =  await cocinero.save();
    res.status(201).json(newCocinero);
}
const updateCocinero = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const cocineroUpdated =  await Cocinero.findByIdAndUpdate(id,data, {new: true} )
    res.json(cocineroUpdated);
}
const deleteCocinero =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedCocinero =  await Cocinero.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedCocinero);
}

 module.exports ={
    createCocinero,
    getCocinero,
    getCocineros,
    updateCocinero,
    deleteCocinero
 }