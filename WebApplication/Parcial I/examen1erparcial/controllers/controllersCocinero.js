const { response } = require('express');
//se importa el modelo de Cocinero
const { ModelCocinero } = require('../models');

//creamos una clase para trabajar adentro de ellas todos los metodos
class ControllersCocinero {
    //Para visualizar los Cocineroes
    async getCocineros(req, res = response) {
        const { limite = 10, desde = 0 } = req.query;
        //con esta variable haremos que busque solo los que esten con el estado true
        const query = { status: true };

        const [ sum, Cocineros ] = await Promise.all([
            ModelCocinero.countDocuments(query),
            ModelCocinero.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
        ])
        //forEach para mostrar  todos los Cocineros
        res.json({
            Cantidad: sum,
            Cocineros: Cocineros
        })
    }

    async getCocineroPorCedula(req, res = response) {
        const { id } = req.params;
        const existCocinero = await ModelCocinero.find({ Cedula: id, status: true });
        if(!existCocinero){
            return res.json({
                message: `${existCocinero.Nombre} no existe.`
            })
        }


        res.json({
            Cocinero: existCocinero
        })
    }

    //Para crear un Cocinero
    async postCocinero(req, res = response){
        try { 
            const { status, ...data } = req.body;
            const existCocinero =  await ModelCocinero.findOne({ Cedula: data.Cedula})
            //Si existe, no se ingresara
            if(existCocinero)
            {
                return res.json({
                   message: `El Cocinero con cedula ${data.Cedula} ya existe`
                
                });
            }
            //console.log(data);

            const Cocinero = new ModelCocinero(data);

            const newCocinero = await Cocinero.save();
            res.json({
                DataSave: newCocinero
            })
        } catch (error) {
            console.log(error)
        }

    }

    //Actualizar el Cocinero
    async updateCocinero(req, res = response){
        try {
            const { id } = req.params;
            const { status, ...data } = req.body;
            //Se busca por el id que esta en la DB
            const CocineroUpdated = await ModelCocinero.findByIdAndUpdate(id, data, {new: true});
            
            res.json({
                DataUpdate: CocineroUpdated
            })
        } catch (error) {
            console.log(error); 
        }
    }

    //Para eliminar el Cocinero
    async deleteCocinero(req, res = response){
        const {id} = req.params;
        //en vez de utilizar delete, utilizamos update para solo modificar el estado a false y de esa manera que no
        //aparezca ya que al utilizar el metodo GET solo mostrara los que tengan el estado true.
        const deletedCocinero =  await ModelCocinero.findByIdAndUpdate(id, {status:false}, {new:true} );

        res.json({
            DataDeleted: deletedCocinero
        })
    }
}

module.exports = new ControllersCocinero();