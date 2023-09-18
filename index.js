const express = require("express")
const ConnectToDatabase = require("./src/database/database")
const usuario = require("./src/router/usuario.router")

const app = express()

const port = 5000

app.use(express.json())

ConnectToDatabase()

app.use("/usuario", usuario)

app.get("/", (req,res) => {
    res.send({
        message:"Bem vindo ao nosso marketplace"
    })
})

app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})