const {Schema, model, Types} = require('mongoose')

//Se encargara de guardar los datos de Cocinero
const CocineroSchema= Schema({ //definir el schema de los atributos del Cocinero
    Nombre:{
        type: String,
        required: true
    },
    Cedula:{
        type:String,
        required:true,
    },
    sueldoBasico:{
        type: String,
        required:true,
    },
    status: {
        type: Boolean,
        default: true,
        required:true
    }
})

module.exports= model('Cocinero', CocineroSchema)