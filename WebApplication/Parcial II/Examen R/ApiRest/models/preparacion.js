const { model, Schema } = require('mongoose');

const PreparacionSchema = Schema(
    {
        fecha:{
            type: String,
            required: [ true, 'La fecha del Preparaciono es necesario'],
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        hora:{
            type: String,
            required: [ true, 'La hora de la preparacion  es necesario'],
        },
        cantidad:{
            type: String,
            required: [ true, 'La cantidad de la preparacion  es necesario'],
        },
        costo:{
            type: String,
            required: [ true, 'El costo de la preparacion  es necesario'],
        },
        tiempo:{
            type: String,
            required: [ true, 'El tiempo de la preparacion  es necesario'],
        },
        cocinero: [{ type: Schema.Types.ObjectId, ref: 'Cocinero',      required:false }],
        receta: [{ type: Schema.Types.ObjectId, ref: 'Receta',      required:false }]
    }
);

PreparacionSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Preparacion', PreparacionSchema );