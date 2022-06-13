const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("Peticion Recibida")

    res.send('<h1>Bienvenidos, Suscribete con nosotros!</h1>')

})

app.listen(4000, () => {
    console.log("escuchando en el puerto 4000")
})