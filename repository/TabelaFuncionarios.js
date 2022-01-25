const Sequelize = require('sequelize')
const Modelo = require('../database/ModeloTabelaFuncionario')
const Op = Sequelize.Op

module.exports = {
    listarPorSalario() {
        return Modelo.findAll({
            where: {
                salario: {
                    [Op.gte]:5000
                }
            }
        })
    },

    listarPorId(id) {
        return Modelo.findOne({
            where: {
                id: id
            }
        })
    },

    inserir(funcionario) {
        return Modelo.create(funcionario)
    },

}