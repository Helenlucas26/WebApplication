
//se importa el modelo de Cocinero
const { ModelPreparacion, ModelReceta, ModelCocinero } = require('../models');

//creamos una clase para trabajar adentro de ellas todos los metodos
class ControllersPreparacion {
    //Para visualizar los Preparacions
    async getPreparacions() {
        const limite = 10 
        const desde = 0 
        //con esta variable haremos que busque solo los que esten con el estado true
        const query = { status: true };

        const [ sum, preparacions ] = await Promise.all([
            ModelPreparacion.countDocuments(query),
            ModelPreparacion.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
        ])

        console.log({
            Cantidad: sum,
            Preparacions: preparacions
        })
    }


    async getPreparacionPorCedula(id){
        try {
            const existCocinero = await ModelCocinero.findOne({ Cedula: id });
            //console.log(existCocinero)
            if (!existCocinero){
                return console.log({
                    message: `El Cocinero con cedula "${id}" No existe.`
                })
            }
            const existPreparacion =  await ModelPreparacion.find({ idCocinero: existCocinero.id, status: true});
            if(!existPreparacion){
                return console.log({
                    message: `El Cocinero "${existCocinero.Nombre}" No tiene Preparacions.`
                })
            }
            //forEach para mostrar por consola los Preparacions de un Cocinero en una Receta
            console.log(`\n\n\t\t\tPreparaciones de un Cocinero`);
            existPreparacion.forEach(async element => {

                const existReceta = await ModelReceta.findOne({ id: existPreparacion.idReceta})
                
                console.log(`Cocinero: ${existCocinero.Nombre} Receta: ${existReceta.Nombre}\nHora: ${element.Hora}\nFecha: ${element.Fecha}\nCosto: ${element.Costo}\nTiempo: ${element.tiempoEstimado}\nCantidad: ${element.nProducto}`);
            });

        } catch (error) {
            
        }
    }

    //Para crear un Preparacion
    async postPreparacion(data){
        try {
            const existPreparacion =  await ModelPreparacion.findOne({ idCocinero: data.idCocinero, idReceta: data.idReceta, Hora: data.Hora, Fecha: data.Fecha})
            //Si existe, no se ingresara
            if(existPreparacion)
            {
                const existCocinero = await ModelCocinero.findOne({ id: existPreparacion.idCocinero })
                const existReceta = await ModelReceta.findOne({ id: existPreparacion.idReceta})
                return console.log({
                    message: `El Cocinero ${existCocinero.Nombre}, ya tiene su Preparacion de la Receta ${existReceta.Nombre} en esa hora el mismo día`
                })
            }

            const Preparacion = new ModelPreparacion(data);

            const newPreparacion = await Preparacion.save();
            console.log(newPreparacion);

            console.log({
                DataSave: newPreparacion
            })
        } catch (error) {
            console.log(error)
        }

    }

    //Actualizar el Preparacion
    async updatePreparacion(id, data){
        try {
            //Se busca por el id que esta en la DB
            const PreparacionUpdated = await ModelPreparacion.findByIdAndUpdate(id, data, {new: true});
            
            console.log({
                DataUpdate: PreparacionUpdated
            })
        } catch (error) {
            console.log(error); 
        }
    }

    //Para eliminar el Preparacion
    async deletePreparacion(id){
        //en vez de utilizar delete, utilizamos update para solo modificar el estado a false y de esa manera que no
        //aparezca ya que al utilizar el metodo GET solo mostrara los que tengan el estado true.
        const deletedPreparacion =  await ModelPreparacion.findByIdAndUpdate(id, {status:false}, {new:true} );

        console.log({
            DataDeleted: deletedPreparacion
        })
    }
}

module.exports = new ControllersPreparacion();