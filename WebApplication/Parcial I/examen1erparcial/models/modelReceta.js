const {Schema, model, Types} = require('mongoose')

RecetaSchema = Schema({ // definicion de los atributos de la tabla de Receta
    
    Nombre:{
        type: String,
        require: true
    },
    Ingredientes:[
        {type:String}
    ],
    status: {
        type: Boolean,
        default: true,
        required:true
    }

});


module.exports= model('Receta', RecetaSchema)