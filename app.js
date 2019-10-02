const express = require('express')

class Controlador{
    constructor(){
        this.express = express()

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.express.use(express.json())
    }

    routes(){
        this.express.use(require('./routes/routes'))
    }
}

module.exports = new Controlador().express