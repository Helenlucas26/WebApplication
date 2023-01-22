const Cocinero = [
    {
        id: 1,
        Nombre: "Gerardo Ponce",
        Cedula: "1234567891",
        sueldoBasico: 350,
    },
    {
        id: 2,
        Nombre: "Alexandra Macias",
        Cedula: "1234561461",
        sueldoBasico: 350,
    },
    {
        id: 3,
        Nombre: "Maria Gonzalez",
        Cedula: "9234567210",
        sueldoBasico: 350,
    },
    {
        id: 4,
        Nombre: "Ariel Mera",
        Cedula: "1723456910",
        sueldoBasico: 350,
    },
    {
        id: 5,
        Nombre: "Preciado Sandler",
        Cedula: "1235671456",
        sueldoBasico: 350,
    }
]

const Receta = [
    {
        id: 1,
        Nombre: "Encebollado",
        Ingredientes: [
            {
                nombre: "2 libras de atún fresco"
            },
            {
                nombre: "1 libra de yuca fresca o congelada"
            },
            {
                nombre: "2 cucharadas de aceite"
            },
            {
                nombre: "2 tomates picados"
            },
            {
                nombre: "½ cebolla picada"
            },
            {
                nombre: "1 cucharadita de aji no picante en polvo se puede usar pimentón molido"
            },
            {
                nombre: "2 cucharaditas de comino molido"
            },
            {
                nombre: "8 tazas de agua"
            },
            {
                nombre: "5 ramitas de cilantro o culantro"
            },
            {
                nombre: "Sal al gusto"
            }
        ],
    },
    {
        id: 2,
        Nombre: "Sopa de Verduras",
        Ingredientes: [
            {
                nombre: "2 litros de agua"
            },
            {
                nombre: "2 papas cortafas en cuadritos"
            },
            {
                nombre: "½ cebolla"
            },
            {
                nombre: "½ pimiento"
            },
            {
                nombre: "½ cebola blanca"
            },
            {
                nombre: "sal al gusto"
            },
            {
                nombre: "½ litro de leche"
            },
            {
                nombre: "2 zanahorias picadas"
            },
            {
                nombre: "1 choclo picado"
            },
            {
                nombre: "½ libra de queso parmesado rallado"
            }
        ],
    },
    {
        id: 3,
        Nombre: "Pan con Leche",
        Ingredientes: [
            {
                nombre: "2 Panes"
            },
            {
                nombre: "1 taza de leche"
            },
        ],
    },
    {
        id: 4,
        Nombre: "Avena",
        Ingredientes: [
            {
                nombre: "¼ de avena en hojuelas"
            },
            {
                nombre: "½ litro de leche semidescremada"
            },
        ],
    },
    {
        id: 5,
        Nombre: "Arroz con Atún",
        Ingredientes: [
            {
                nombre: "1 lata de Atún"
            },
            {
                nombre: "¼ de libra de arroz cocinado"
            },
        ],
    },
]

const Preparacion = [
    {
        id: 1,
        idCocinero: Cocinero[0].id,
        idReceta: Receta[0].id,
        fecha: "02/16/25",
        hora: "14:00",
        nProductos: 4,
        costo: 10.00,
        tiempoEstimado: "30 min",
    },
    {
        id: 2,
        idCocinero: Cocinero[1].id,
        idReceta: Receta[1].id,
        fecha: "02/16/25",
        hora: "14:00",
        nProductos: 2,
        costo: 5.50,
        tiempoEstimado: "15 min",
    },
    {
        id: 3,
        idCocinero: Cocinero[2].id,
        idReceta: Receta[0].id,
        fecha: "02/16/25",
        hora: "15:00",
        nProductos: 3,
        costo: 7.50,
        tiempoEstimado: "15 min",
    },
    {
        id: 4,
        idCocinero: Cocinero[3].id,
        idReceta: Receta[2].id,
        fecha: "02/16/25",
        hora: "15:30",
        nProductos: 1,
        costo: 2.50,
        tiempoEstimado: "5 min",
    },
    {
        id: 5,
        idCocinero: Cocinero[4].id,
        idReceta: Receta[3].id,
        fecha: "02/16/25",
        hora: "16:00",
        nProductos: 2,
        costo: 2.50,
        tiempoEstimado: "5 min",
    },
]
module.exports ={
    Receta,
    Cocinero,
    Preparacion
}