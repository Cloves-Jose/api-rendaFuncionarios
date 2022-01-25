const express = require('express')
const config = require('config')
const app = express()

const port = config.get("api.port")

app.get('/', (req, res) => {
    res.send('Olá mundo')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})