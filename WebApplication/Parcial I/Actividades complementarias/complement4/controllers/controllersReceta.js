const { response } = require('express');
//se importa el modelo de corredor
const { ModelReceta } = require('../models');

//creamos una clase para trabajar adentro de ellas todos los metodos
class ControllersReceta {
    //Para visualizar las Recetas
    async getRecetas(req, res = response) {
        const { limite = 10, desde = 0 } = req.query;
        //con esta variable haremos que busque solo los que esten con el estado true
        const query = { status: true };

        const [ sum, Recetas ] = await Promise.all([
            ModelReceta.countDocuments(query),
            ModelReceta.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
        ])
        res.json({
            Cantidad: sum,
            Recetas: Recetas
        })
        }
    async getRecetaPorNombre(req, res = response) {
        const { id } = req.params;
        const existReceta = await ModelReceta.find({ Nombre: id, status: true });
        if(!existReceta){
            return res.json(`La receta: ${id} no existe.`);
        }

        res.json({
            contador: existReceta.length,
            Receta: existReceta
        })
    }

    //Para crear una Receta
    async postReceta(req, res = response){
        try { 
            const { status, ...data } = req.body;
            const existReceta =  await ModelReceta.findOne({ Nombre: data.Nombre });
            //Si existe, no se ingresara
            if(existReceta)
            {
                return res.json(`La receta "${existReceta.Nombre}"  ya existe`);
            }

            const Receta = new ModelReceta(data);

            const newReceta = await Receta.save();

            res.json({
                Data: newReceta
            });
        } catch (error) {
            console.log(error)
        }

    }

    //Actualizar el Receta
    async updateReceta(req, res = response){
        try {
            const { id } = req.params;
            const { status, ...data } = req.body;
            //Se busca por el id que esta en la DB
            const RecetaUpdated = await ModelReceta.findByIdAndUpdate(id, data, {new: true});
            
            res.json({
                DataUpdate: RecetaUpdated
            });
        } catch (error) {
            console.log(error); 
        }
    }

    //Para eliminar la Receta
    async deleteReceta(req, res = response){
        //tambien se busca por id
        const {id} = req.params;
        //en vez de utilizar delete, utilizamos update para solo modificar el estado a false y de esa manera que no
        //aparezca ya que al utilizar el metodo GET solo mostrara los que tengan el estado true.
        const deletedReceta =  await ModelReceta.findByIdAndUpdate(id, {status:false}, {new:true} );

        res.json({
            DataDeleted: deletedReceta
        })
    }
}

module.exports = new ControllersReceta();