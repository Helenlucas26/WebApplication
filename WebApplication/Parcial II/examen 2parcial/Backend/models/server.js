const express = require('express') 
var cors = require('cors');
const path  = require('path')
const exphbs  = require('express-handlebars')
const { conecxionBaseDatos } = require('../database/db');

class Server{  
    
    constructor(){ 
        this.app= express(); 
        this.port= 3000;

        this.preparacion= '/api/preparacion'
        this.reciclaje= '/api/reciclaje'

        this.dbConection();

        this.middlewares();
        this.routes(); 
    }

    middlewares(){


        this.app.use(cors());


        this.app.use( express.json() );


        this.app.use( express.static( 'public' ));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs.engine(
            {
                layoutsDir: path.join(this.app.get('views'), 'layouts')

            }
        ));
    }

    async dbConection(){
        await conecxionBaseDatos()
    }

    routes(){

       this.app.use( this.preparacion, require('../routes/preparacion') );
       this.app.use( this.reciclaje, require('../routes/reciclaje') );
    }

    listen(){ 
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en el puerto', this.port);
        
        })
    }
}

module.exports=Server;