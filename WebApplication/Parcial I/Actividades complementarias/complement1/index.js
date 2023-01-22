//La exportacion de los arrays del archivo ./datos.js
const {Cocinero,Receta, Preparacion} = require('./datos');

console.log("CICLO FOR");
for (let item = 0; item < Cocinero.length; item++) {
    console.log(`Nombre: ${Cocinero[item].Nombre}\t Cedula: ${Cocinero[item].Cedula}\t
    Sueldo: ${Cocinero[item].sueldoBasico}  \n`);
}


console.log("CICLO FOREACH");

Receta.forEach(element => {
    console.log(`Nombre: ${element.Nombre} \nIngredientes: \n `);
    element.Ingredientes.forEach(e=>{
        console.log(`- ${e.nombre} \n`)
    });
});


//Tercera forma con do While
console.log("CICLO DO WHILE");
let item = 0
do {
    a =Preparacion[item].idCocinero;
    b =Preparacion[item].idReceta;
    console.log(`Cocinero: ${Cocinero[a-1].Nombre} \n
    Receta: ${Receta[b-1].Nombre} \n
    Hora: ${Preparacion[item].fecha} \n
    Fecha: ${Preparacion[item].hora}\n
    Costo: ${Preparacion[item].costo}\n
    Tiempo: ${Preparacion[item].tiempoEstimado} \n`);
    item++;
} while (item <= Preparacion.length-1);
