const express =  require('express');
const cors =  require('cors');
const { dbConnection } = require('./database/config');

const { ControllersReceta, ControllersCocinero, ControllersPreparacion } = require('./controllers');

class Server {
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.conectarBD();
        this.ControllersCocinero();
        this.ControllersReceta();
        this.ControllersPreparacion();
        this._express=  express().use(this.router)
    }
    async conectarBD(){
        await dbConnection();
    }

    async ControllersCocinero(){
        // * CRUD DE Cocinero VISUALIZADO EN LA CONSOLA
        //Visualizar todas las Cocinero metodo GET
        //await ControllersCocinero.getCocineros();

        //buscar por nombre de Cocinero metodo GET
        //await ControllersCocinero.getCocineroPorCedula('1235671456');

        //Crear Cocinero metodo POST
        /* await ControllersCocinero.postCocinero({
            "Nombre": "Preciado Sandler",
            "Cedula": "1235671456",
            "sueldoBasico": 350,
            }); */

        //Actualizar un dato METODO PUT
        /*await ControllersCocinero.updateCocinero('6363f38eb0f8cbdea28cc8b5' ,{
            "Nombre": "Amy Cedeño",
            "Cedula": "1433254215",
            "sueldoBasico": 350,
            });*/

        //Eliminar un dato con el metodo DELETE
        //await ControllersCocinero.deleteCocinero('6363f38eb0f8cbdea28cc8b5');

    }

    async ControllersReceta(){

        // * CRUD DEsReceta VISUALIZADO EN LA CONSOLA
        
        //Visualizar todas lassRecetas metodo GET
        //await ControllersReceta.getRecetas();

        //buscar por nombre desReceta metodo GET
        //await ControllersReceta.getRecetaPorNombre('Sopa de Verduras');

        //CrearsReceta metodo POST
       /*  await ControllersReceta.postReceta({
            Nombre: "Sopa de Verduras",
        Ingredientes: [
            "2 litros de agua","2 papas cortafas en cuadritos",
            "½ cebolla","½ pimiento", "½ cebola blanca", "sal al gusto",
            "½ litro de leche","2 zanahorias picadas","1 choclo picado"
            ,"½ libra de queso parmesado rallado"
        ],
    
        });  */
        
        //Actualizar un dato METODO PUT
        /*await ControllersReceta.updateReceta('6363f5d0991d3e32e04311f1', {
            Nombre: "Sopa de Verduras",
            Ingredientes: [
            "2 litros de agua","2 papas cortafas en cuadritos",
            "½ cebolla","½ pimiento", "½ cebola blanca", "sal al gusto",
            "½ litro de leche","2 zanahorias picadas","1 choclo picado"
            ,"½ libra de queso parmesado rallado"
            ],
            });*/

        //Eliminar un dato con el metodo DELETE
        //await ControllersReceta.deleteReceta('6363f5d0991d3e32e04311f1');

    }

    async ControllersPreparacion(){
        // * CRUD DE Preparacion VISUALIZADO EN LA CONSOLA
        
        //Visualizar todas las Preparacions metodo GET
        //await ControllersPreparacion.getPreparacions();

        //buscar por nombre desReceta metodo GET
        //await ControllersPreparacion.getPreparacionPorCedula('1235671456');

        //CrearsReceta metodo POST
        /* await ControllersPreparacion.postPreparacion({
            "idCocinero": "6363f38eb0f8cbdea28cc8b5",
            "idReceta": "6363f7d0e5c119abde88ac8e",
            "Fecha": "02/16/25",
            "Hora": "16:00",
            "nProducto": 2,
            "Costo": 2.50,
            "tiempoEstimado": "5 min",
            }); */

        //Actualizar un dato METODO PUT
        /*await ControllersPreparacion.updatePreparacion('6363fb000bdaa0d857d9b883', {
            "idCocinero": "6363f38eb0f8cbdea28cc8b5",
            "idReceta": "6363f7d0e5c119abde88ac8e",
            "Fecha": "02/16/25",
            "Hora": "16:00",
            "nProducto": 2,
            "Costo": 2.50,
            "tiempoEstimado": "5 min",
            });*/
        //Eliminar un dato con el metodo DELETE
        //await ControllersPreparacion.deletePreparacion('6363fb000bdaa0d857d9b883');
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}


module.exports =  Server;