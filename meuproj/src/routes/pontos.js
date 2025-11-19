var express = require("express");
var router = express.Router();

var pontosController = require("../controllers/pontosController");

router.post("/registrar-pontuacao" , function (req, res) {
    pontosController.registrarPontuacao(req,res);
});

router.get("/estatisticas-quiz", function (req, res) {
    pontosController.buscarEstatisticasQuiz(req, res);
});

module.exports = router;