const { Preparacion, Cocinero} = require('./datos');


//funcion para buscar el Cocinero por numero de cedula con callback
function buscarCocineroPorCedula(cedula, callback) {
    //utilizamos el metodo find para poder devolver el primer elemento del array 
    //que cumpla el predicado que se pasa como parámetro e ingresarlo en otra variable
    const Cociner = Cocinero.find((Cocinero)=> parseInt(Cocinero.Cedula) === cedula);
    if (!Cociner) {
        //para controlar el error
        const error = new Error();
        error.message = `El Cocinero con la cedula: ${cedula}, no se encuentra registrado.`;
        //retorna en el callback, el error.
        return callback(error);
    }
    //si no da error retorna en el callback el objeto Cocinero.
    return callback(null, Cociner);
}


function buscarPrePreparacionPorId(id, callback) {
    //utilzamos el metodo "filter" con el fin de  devolver un nuevo array que contiene todos los elementos 
    //de aquél para el cual se llama que cumplan el predicado que se le pasa como parámetro
    const Preparacio =Preparacion.filter((Preparacion)=>Preparacion.idCocinero === id);
    if (!Preparacio) {
        //Para controlar el error.
        const error = new Error();
        error.message = `no hayPreparacion registrado del Cocinero: ${id}`;
        //retorna en el callback, el error.
        return callback(error);

    }
    //si no da error retorna en el callback el objetoPreparacion.
    return callback(null,Preparacio);
    
}

//llamamos a la funcion "buscarUsuarioPorCedula" teniendo como parametro la cedula y una funcion flecha.
buscarCocineroPorCedula(1234567891, (error, Cocinero)=> {

    if (error) {
        console.log(error.message);
        return
    }
    //trabajamos la funcion "buscarPrePreparacionPorId" dentro de la otra funcion, teniendo en cuenta que en cada una controlamos el error.
    buscarPrePreparacionPorId(Cocinero.id, (error,Preparacion)=>{
        if (error) {
            console.log(error.message);
            return;
        } else {
            //Si no hay error se muestra el Cocinero y sus datos
            console.log(`\n||Cocinero: ${Cocinero.Nombre} || Cedula: ${Cocinero.Cedula} || Sueldo: ${Cocinero.sueldoBasico}`);
            
            //Se utiliza un "forEach" * para recorrer el array de segumiento
           Preparacion.forEach(element => {
            console.log(`
            Hora: ${element.fecha} \n
            Fecha: ${element.hora}\n
            Costo: ${element.costo}\n
            Tiempo: ${element.tiempoEstimado}`);
            });
        }
    })
})