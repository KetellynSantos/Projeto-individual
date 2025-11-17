var medidaModel = require("../models/medidaModel");

function registrarPontuacao(req, res) {
    var idUser = req.body.idUsuario;
    var pontos = req.body.pontos;

    if(idUsuario == undefined || pontos == undefined) {
        res.status(400).send("Faltam dados: ID do usuário ou Pontuação não foram enviadas!")
        return;
    }

    medidaModel.registrarPontuacao(idUsuario, pontos)
    .then(function (resultado) {
        res.json(resultado);
     }).catch(function (erro) {
        console.log(erro)
        res.status(500).json(erro.sqlMessage);
     });
}

module.exports = {
    registrarPontuacao, 
    buscarEstatisticasQuiz
}