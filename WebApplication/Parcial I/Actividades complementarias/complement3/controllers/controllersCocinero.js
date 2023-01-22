
//se importa el modelo de Cocinero
const { ModelCocinero } = require('../models');

//creamos una clase para trabajar adentro de ellas todos los metodos
class ControllersCocinero {
    //Para visualizar los Cocineroes
    async getCocineros() {
        const limite = 10 
        const desde = 0 
        //con esta variable haremos que busque solo los que esten con el estado true
        const query = { status: true };

        const [ sum, Cocineros ] = await Promise.all([
            ModelCocinero.countDocuments(query),
            ModelCocinero.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
        ])
        //forEach para mostrar  todos los Cocineros
        console.log("\n\n\t\t\tCocineros")
        Cocineros.forEach(element => {
            console.log(`Nombre: ${element.Nombre} Cedula: ${element.Cedula}\nSueldo: ${element.sueldoBasico}`);
        });
    }

    async getCocineroPorCedula(id) {
        const existCocinero = await ModelCocinero.find({ Cedula: id, status: true });
        if(!existCocinero){
            return console.log({
                message: `${existCocinero.Nombre} no existe.`
            })
        }


        console.log({
            Cocinero: existCocinero
        })
    }

    //Para crear un Cocinero
    async postCocinero(data){
        try { 
            const existCocinero =  await ModelCocinero.findOne({ Cedula: data.Cedula})
            //Si existe, no se ingresara
            if(existCocinero)
            {
                return console.log({
                   message: `El Cocinero con cedula ${data.Cedula} ya existe`
                
                });
            }
            console.log(data);

            const Cocinero = new ModelCocinero(data);

            const newCocinero = await Cocinero.save();
            console.log({
                DataSave: newCocinero
            })
        } catch (error) {
            console.log(error)
        }

    }

    //Actualizar el Cocinero
    async updateCocinero(id, data){
        try {
            //Se busca por el id que esta en la DB
            const CocineroUpdated = await ModelCocinero.findByIdAndUpdate(id, data, {new: true});
            
            console.log({
                DataUpdate: CocineroUpdated
            })
        } catch (error) {
            console.log(error); 
        }
    }

    //Para eliminar el Cocinero
    async deleteCocinero(id){
        //en vez de utilizar delete, utilizamos update para solo modificar el estado a false y de esa manera que no
        //aparezca ya que al utilizar el metodo GET solo mostrara los que tengan el estado true.
        const deletedCocinero =  await ModelCocinero.findByIdAndUpdate(id, {status:false}, {new:true} );

        console.log({
            DataDeleted: deletedCocinero
        })
    }
}

module.exports = new ControllersCocinero();