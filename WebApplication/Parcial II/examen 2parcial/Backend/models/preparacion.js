const { Schema, model } = require("mongoose");




const PreparacionSchema = Schema({

    fecha: {
        type: String,
        required:[true, 'El campo fecha es obligatorio']
    },

    hora: {
        type: String,
        required:[ true, 'El campo hora es obligatorio' ]
    },
    cantidad: {
        type: String,
        required:[ true, 'El campo cantidad es obligatorio' ]
    }, 
    costo: {
        type: String,
        required:[ true, 'El campo costo es obligatorio' ]
    }, 
    tiempo: {
        type: String,
        required:[ true, 'El campo tiempo es obligatorio' ]
    }, 
})


module.exports= model('Preparacion', PreparacionSchema)