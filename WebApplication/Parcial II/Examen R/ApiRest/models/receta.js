const { model, Schema } = require('mongoose');

const RecetaSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del Receta es necesario']
        },
        ingredientes:{
            type: String,
            required: [ true, 'Los ingredientes de la receta es necesario']
        },
        cantidades:{
            type: String,
            required: [ true, 'Las cantidades de la receta es necesario']
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Receta', RecetaSchema );