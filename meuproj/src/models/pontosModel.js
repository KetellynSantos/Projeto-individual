var database = require("../database/config")

function registrarPontuacao(pontos, idUser) {
    console.log("ACESSEI O PONTOS MODEL \n\n function registrarPontuacao(): ", pontos, idUser);

    var instrucaoSql = `INSERT INTO pontuacao (pontos, fk_usuario) VALUES (${pontos}, ${idUser});`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEstatisticasQuiz() {
    console.log("ACESSEI O PONTOS MODEL \n\n function buscarEstatistica(): ");

    var instrucaoSql = `SELECT 
  SUM(CASE WHEN pontos = 60 THEN 1 ELSE 0 END) as acertos_totais,
  SUM(CASE WHEN pontos BETWEEN 40 AND 50 THEN 1 ELSE 0 END) AS acertos_altos,
  SUM(CASE WHEN pontos BETWEEN 20 AND 30 THEN 1 ELSE  0 END) as acertos_baixos,
  COUNT(id) as total_jogadores
  from pontuacao;`;
  
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    registrarPontuacao,
    buscarEstatisticasQuiz
}
