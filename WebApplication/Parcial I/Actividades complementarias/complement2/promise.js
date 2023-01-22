const { Cocinero, Preparacion } = require('./datos');

//funcion para buscar el Cocinero por numero de cedula con promise.
function buscarCocineroPorCedula(cedula){
    //creamos el primese con las variables resolve y reject
    return new Promise((resolve, reject) => {
        //buscamos el Cocinero que nos solicitan
        const Cociner = Cocinero.find((Cocinero)=> parseInt(Cocinero.Cedula) === cedula);
        //Si no se encuentra utilizamos la variable reject para devolver el error
        if(!Cociner) {
            const error = new Error();
            error.message = `El Cocinero con cedula ${cedula} no se encuentra...`;
            reject(error);
        }
        //Si se encuentra, se envia el Cocinero.
        resolve(Cociner);
    })
}

function buscarPreparacionPorId(id) {
    return new Promise((resolve, reject) => {
        const Preparacio = Preparacion.filter((Preparacion)=> Preparacion.idCocinero === id);
        if(!Preparacio) {
            const error = new Error();
            error.message = `no hay Preparacions registrado del Cocinero: ${id}...`;
            reject(error);
        }
        //Si se encuentra, se envia la Preparación.
        resolve(Preparacio);
    })
}


buscarCocineroPorCedula(1234567891).then((Cocinero) => {
    console.log(`\n||Cliente: ${Cocinero.Nombre} || Cedula: ${Cocinero.Cedula} || Peso: ${Cocinero.Peso} || Altura: ${Cocinero.Altura} || Edad: ${Cocinero.Edad} ||`);
    return buscarPreparacionPorId(Cocinero.id);
}).then((Preparacion) => {
    //Se utiliza un "forEach" * para recorrer el array de Preparacion
    Preparacion.forEach(element => {
        console.log(`
            Hora: ${element.fecha} \n
            Fecha: ${element.hora}\n
            Costo: ${element.costo}\n
            Tiempo: ${element.tiempoEstimado}`);
            
        });
}).catch((error) => {
    console.log(error.message);
})