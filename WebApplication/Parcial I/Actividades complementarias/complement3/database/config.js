const mongoose =  require('mongoose');
require('dotenv').config();



const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.RestaurantDB)
        console.log(`Base de datos conectada...`);
        
    } catch (error) {
        console.log(`No se pudo conectar a base de datos`);
        throw new Error(error);
    }

}

module.exports ={
    dbConnection
}