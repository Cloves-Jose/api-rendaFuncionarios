const roteador = require('express').Router()
const TabelaFuncionario = require('../repository/TabelaFuncionarios')
const Funcionarios = require('../models/Funcionario')
const TabelaFuncionarios = require('../repository/TabelaFuncionarios')


roteador.get('/', async(req, res) => {
    const resultado = await TabelaFuncionario.listarPorSalario()
    res.send(
        JSON.stringify(resultado)
    )
})

roteador.get('/:id', async(req, res) => {
    const id = req.params.id
    const resultado = await TabelaFuncionarios.listarPorId(id)
    res.send(
        JSON.stringify(resultado)
    )
})

roteador.post('/', async(req, res) => {
    const requisicao = req.body
    const funcionario = new Funcionarios(requisicao)
    await funcionario.criar()

    res.send(
        JSON.stringify(funcionario)
    )
})

module.exports = roteador