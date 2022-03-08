const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')

class Server{
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        //Conectar a base de datos
        this.conectarDB()
    }

    async conectarDB() {
        await dbConnection()
    }

    middlewares() {
        this.app.use(cors())
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servicio corriendo en el puerto", this.port)
        })
    }
}

module.exports = Server