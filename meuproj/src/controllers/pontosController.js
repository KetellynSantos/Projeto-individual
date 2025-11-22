var pontosModel = require("../models/pontosModel");

function registrarPontuacao(req, res) {
    var idUser = req.body.idUsuario;
    var pontos = req.body.pontos;

    if (idUser == undefined || pontos == undefined) {
        res.status(400).send("Faltam dados: ID do usuário ou Pontuação não foram enviadas!")
        return;
    }

    pontosModel.registrarPontuacao(pontos, idUser)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro)
            res.status(500).json(erro.sqlMessage);
        });
}

    function buscarEstatisticasQuiz(req, res) {
        pontosModel.buscarEstatisticasQuiz()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(200).json({
                    acertos_totais : 0,
                    acertos_altos: 0,
                    acertos_baixos: 0,
                    total_jogadores: 0
                });
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as estatísticas! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrarPontuacao,
    buscarEstatisticasQuiz
}