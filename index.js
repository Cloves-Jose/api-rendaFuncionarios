const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./routes/index')
const NaoEncontrado = require('./err/NaoEncontrado')
const DadosNaoFornecidos = require('./err/DadosNaoFornecidos')
const ValorNaoSuportado = require('./err/ValorNaoSuportado')
const formatosAceitos = require('./helpers/Serializador').formatosAceitos

const app = express()

const port = config.get("api.port")

app.use(bodyParser.json())

app.use((req, res, next) => {
    let formatoRequisitado = req.header('Accept')

    if(formatoRequisitado === '*/*') {
        formatoRequisitado = 'application/json'
    }

    if(formatosAceitos.indexOf(formatoRequisitado) === -1) {
        res.status(406)
        res.end()
        return
    }

    res.setHeader('Content-Type', formatoRequisitado)
    next()
})

app.use('/api/funcionarios', roteador)

app.use((erro, req, res, next) => {
    let status = 500

    if(erro instanceof NaoEncontrado) {
        status = 404
    }

    if(erro instanceof DadosNaoFornecidos) {
        status = 400
    }

    if(erro instanceof ValorNaoSuportado) {
        status = 406
    }

    res.status(status)
    res.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})