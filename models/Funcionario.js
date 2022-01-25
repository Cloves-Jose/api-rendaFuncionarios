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
    }
}

module.exports = Funcionario