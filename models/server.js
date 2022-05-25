const cors = require('cors')
const express = require("express");

const {dbConnection} = require("../database/config.db")


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/user';

        //conectar a base de datos
            this.conectarDB();
        //middlewares
        this.middlewares();

        //rutas de aplicacion
        this.routes();

    }

    async conectarDB() {
        await dbConnection()
    }

    middlewares() {
        //cors 
        this.app.use(cors())
     
        //lectura y parseo del body
        this.app.use(express.json())

        //ruta public
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuarioPath, require('../routes/user'));
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Server running', this.port);
        })
    }
}

module.exports = Server;