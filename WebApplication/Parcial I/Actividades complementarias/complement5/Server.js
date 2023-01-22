const express =  require('express');
const cors =  require('cors');
const { dbConnection } = require('./database/config');

const {rutasCocinero, rutasReceta, rutasPreparacion} = require('./routes');

class Server {
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.port = process.env.PORT;
        this.paths= {
            cocinero:'/cocinero',
            receta:'/receta',
            preparacion: '/preparacion'
        }
        this.conectarBD();
        this.middlewares();
        this.routes();
        //    localhost:3000/
        this.router.use('/', this.app);
        this._express=  express().use(this.router)
    }
    async conectarBD(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        
    }
    routes(){
        this.app.use(this.paths.cocinero, rutasCocinero );
        this.app.use(this.paths.receta, rutasReceta );
        this.app.use(this.paths.preparacion, rutasPreparacion );
        

    }
   

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}


module.exports =  Server;