const Sequelize = require('sequelize')
const conexao = require('./index')

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salario: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'tb_funcionarios',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = conexao.define('tb_funcionarios', colunas, opcoes)