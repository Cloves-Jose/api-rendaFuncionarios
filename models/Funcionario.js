const TabelaFuncionarios = require("../repository/TabelaFuncionarios")


class Funcionario {
    constructor({id, nome, salario, dataCriacao, dataAtualizacao, versao}) {
        this.id = id
        this.nome = nome
        this.salario = salario
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    async criar() {
        const resultado = await TabelaFuncionarios.inserir({
            nome: this.nome,
            salario: this.salario
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    async carregar() {
        const encontrado = await TabelaFuncionarios.listarPorId(this.id)
        this.nome = encontrado.nome
        this.salario = encontrado.salario
        this.dataCriacao = encontrado.dataCriacao
        this.dataAtualizacao = encontrado.dataAtualizacao
        this.versao = encontrado.versao
    }
}

module.exports = Funcionario