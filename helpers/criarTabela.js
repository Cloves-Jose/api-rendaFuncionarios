const ModeloTabela = require('../database/ModeloTabelaFuncionario')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)