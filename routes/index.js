const roteador = require('express').Router()
const TabelaFuncionario = require('../repository/TabelaFuncionarios')
const Funcionarios = require('../models/Funcionario')
const TabelaFuncionarios = require('../repository/TabelaFuncionarios')
const SerializadorFuncionario = require('../helpers/Serializador').SerializarFuncionario

roteador.get('/', async(req, res) => {
    const resultado = await TabelaFuncionario.listarPorSalario()
    
    res.status(200)
    const serializador = new SerializadorFuncionario(
        res.getHeader('Content-Type')
    )
    res.send(
        serializador.serializar(resultado)
    )
})

roteador.get('/:id', async(req, res, next) => {
    try {
        const id = req.params.id
        const funcionario = new Funcionarios({ id: id })
        await funcionario.carregar()
        res.status(200)
        const serializador = new SerializadorFuncionario(
            res.getHeader('Content-Type')
        )
        res.send(
            serializador.serializar(funcionario)
        )
    } catch (erro) {
        next(erro)
    }
})

roteador.post('/', async(req, res, next) => {
    try {
        const dadosRecebidos = req.body
        const funcionarios = new Funcionarios(dadosRecebidos)
        await funcionarios.criar()
        res.status(201)
        const serializador = new SerializadorFuncionario(
            res.getHeader('Content-Type')
        )
        res.send(
            serializador.serializar(funcionarios)
        )
    } catch (erro) {
        next()
    }
    // const requisicao = req.body
    // const funcionario = new Funcionarios(requisicao)
    // await funcionario.criar()

    // res.send(
    //     JSON.stringify(funcionario)
    // )
})

module.exports = roteador