const {Schema, model, Types} = require('mongoose')
//Seguimiento se encargara de guardar los datos de id de cocinero y receta 
//Se encargara de guardar los datos de Preparacion
PreparacionSchema= Schema({ //definir el schema de los atributos del Preparacion
    idCocinero: {
        type: Types.ObjectId, 
        ref: "Corredor",
        required: true
    },
    idReceta: {
        type: Types.ObjectId, 
        ref: "Corredor",
        required: true
    },
    Fecha:{
        type: String,
        required:true,
    },
    Hora:{
        type: String,
        required:true,
    },
    nProducto:{
        type: Number,
        required:true,
    },
    Costo:{
        type: Number,
        required:true,
    },
    tiempoEstimado:{
        type: String,
        required:true,
    },
    status: {
        type: Boolean,
        default: true,
        required:true
    },
    replicated: {
        type: Boolean,
        default: false,
        required:true
    }
})

module.exports= model('Preparacion', PreparacionSchema)