
//se importa el modelo de corredor
const { ModelReceta } = require('../models');

//creamos una clase para trabajar adentro de ellas todos los metodos
class ControllersReceta {
    //Para visualizar las Recetas
    async getRecetas() {
        const limite = 10 
        const desde = 0 
        //con esta variable haremos que busque solo los que esten con el estado true
        const query = { status: true };

        const [ sum, Recetas ] = await Promise.all([
            ModelReceta.countDocuments(query),
            ModelReceta.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
        ])
        console.log(`\n\n\t\t\tRecetas`)
        //forEach para mostrar por consola las Recetas
        Recetas.forEach(element => {
            console.log(`Nombre: ${element.Nombre} \nIngredientes: \n `);
            element.Ingredientes.forEach(e=>{
                console.log(`- ${e.nombre} \n`)
            });
            });
        }
    async getRecetaPorNombre(id) {
        const existReceta = await ModelReceta.find({ Nombre: id, status: true });
        if(!existReceta){
            return console.log(`La receta: ${id} no existe.`);
        }

        console.log({
            contador: existReceta.length,
            Receta: existReceta
        })
    }

    //Para crear una Receta
    async postReceta(data){
        try { 
            const existReceta =  await ModelReceta.findOne({ Nombre: data.Nombre });
            //Si existe, no se ingresara
            if(existReceta)
            {
                return console.log(`La receta "${existReceta.Nombre}"  ya existe`);
            }

            const Receta = new ModelReceta(data);

            const newReceta = await Receta.save();

            console.log(({
                Data: newReceta
            }));
        } catch (error) {
            console.log(error)
        }

    }

    //Actualizar el Receta
    async updateReceta(id, data){
        try {
            //Se busca por el id que esta en la DB
            const RecetaUpdated = await ModelReceta.findByIdAndUpdate(id, data, {new: true});
            
            console.log({
                DataUpdate: RecetaUpdated
            });
        } catch (error) {
            console.log(error); 
        }
    }

    //Para eliminar la Receta
    async deleteReceta(id){
        //en vez de utilizar delete, utilizamos update para solo modificar el estado a false y de esa manera que no
        //aparezca ya que al utilizar el metodo GET solo mostrara los que tengan el estado true.
        const deletedReceta =  await ModelReceta.findByIdAndUpdate(id, {status:false}, {new:true} );

        console.log({
            DataDeleted: deletedReceta
        })
    }
}

module.exports = new ControllersReceta();