const { model, Schema } = require('mongoose');

const CocineroSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del cocinero es necesario']
        },
        sueldo:{
            type: String,
            required: [ true, 'El sueldo del cocinero es necesario']
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Cocinero', CocineroSchema );