const express = require("express")

const app = express()

const port = 5000

app.use(express.json())

app.get("/", (req,res) => {
    res.send({
        message:"Bem vindo ao nosso marketplace"
    })
})

app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})