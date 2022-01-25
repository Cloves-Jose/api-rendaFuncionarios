const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./routes/index')
const app = express()

const port = config.get("api.port")

app.use(bodyParser.json())

app.use('/api/funcionarios', roteador)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})