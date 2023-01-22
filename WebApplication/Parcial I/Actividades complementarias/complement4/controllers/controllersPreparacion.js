const { response } = require('express');

//se importa el modelo de Cocinero
const { ModelPreparacion, ModelReceta, ModelCocinero } = require('../models');
const { createIndexes } = require('../models/modelReceta');

//creamos una clase para trabajar adentro de ellas todos los metodos
class ControllersPreparacion {
    //Para visualizar los Preparacions
    async getPreparacions(req, res = response) {
        const { limite = 10, desde = 0 } = req.query;
        //con esta variable haremos que busque solo los que esten con el estado true
        const query = { status: true };

        const [ sum, preparacions ] = await Promise.all([
            ModelPreparacion.countDocuments(query),
            ModelPreparacion.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
        ])

        res.json({
            Cantidad: sum,
            Preparaciones: preparacions
        })
    }


    async getPreparacionPorCedula(req, res = response){
        try {
            const { id } = req.params;
            const existCocinero = await ModelCocinero.findOne({ Cedula: id });
            //console.log(existCocinero)
            if (!existCocinero){
                return res.json({
                    message: `El Cocinero con cedula "${id}" No existe.`
                })
            }
            const existPreparacion =  await ModelPreparacion.find({ idCocinero: existCocinero.id, status: true});
            if(!existPreparacion){
                return res.json({
                    message: `El Cocinero "${existCocinero.Nombre}" No tiene Preparacions.`
                })
            }
            //forEach para mostrar por consola los Preparacions de un Cocinero en una Receta
                res.json({
                    Cantidad: existPreparacion.length,
                    Preparaciones: existPreparacion
                })
            

        } catch (error) {
            res.status(401).json({error: error});
        }
    }

    //Para crear un Preparacion
    async postPreparacion(req, res = response){
        try {
            const { status, ...data } = req.body;
            console.log(req.body);
            const existPreparacion =  await ModelPreparacion.findOne({ idCocinero: data.idCocinero, idReceta: data.idReceta, Hora: data.Hora, Fecha: data.Fecha})
            //Si existe, no se ingresara
            if(existPreparacion)
            {
                const existCocinero = await ModelCocinero.findOne({ id: existPreparacion.idCocinero })
                const existReceta = await ModelReceta.findOne({ id: existPreparacion.idReceta})
                return res.json({
                    message: `El Cocinero ${existCocinero.Nombre}, ya tiene su Preparacion de la Receta ${existReceta.Nombre} en esa hora el mismo día`
                })
            }

            const Preparacion = new ModelPreparacion(data);

            const newPreparacion = await Preparacion.save();
            console.log(newPreparacion);

            res.json({
                Data: newPreparacion
            })
        } catch (error) {
            console.log(error)
        }

    }

    //Actualizar el Preparacion
    async updatePreparacion(req, res = response){
        try {
            const { id } = req.params;
            const { status, ...data } = req.body;
            //Se busca por el id que esta en la DB
            const PreparacionUpdated = await ModelPreparacion.findByIdAndUpdate(id, data, {new: true});
            
            res.json({
                DataUpdate: PreparacionUpdated
            })
        } catch (error) {
            console.log(error); 
        }
    }

    //Para eliminar el Preparacion
    async deletePreparacion(req, res = response){
        const {id} = req.params;
        //en vez de utilizar delete, utilizamos update para solo modificar el estado a false y de esa manera que no
        //aparezca ya que al utilizar el metodo GET solo mostrara los que tengan el estado true.
        const deletedPreparacion =  await ModelPreparacion.findByIdAndUpdate(id, {status:false}, {new:true} );

        res.json({
            DataDeleted: deletedPreparacion
        })
    }
}

module.exports = new ControllersPreparacion();