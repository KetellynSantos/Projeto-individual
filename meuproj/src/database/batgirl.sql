CREATE DATABASE batgirl;

use batgirl;

show tables;

create table usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    apelido VARCHAR(25),
    senha VARCHAR(50)
);

SELECT * from usuario;

INSERT INTO
    usuario (nome, apelido, senha)
VALUES (
        'Kitty Keisuke',
        'Kitty',
        'keke1020'
    ),
    (
        'Matheus Menino',
        'Boneca',
        'theus123'
    );

CREATE TABLE pontuacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pontos INT NOT NULL,
    momento DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario (idUsuario)
);

SELECT * from pontuacao;

select * from usuario;

delete from usuario
WHERE idUsuario = 3;

UPDATE usuario set senha = '1234'
where idUsuario = 2;

DELETE FROM pontuacao
WHERE id BETWEEN 6 AND 26;

SELECT 
  SUM(CASE WHEN pontos = 60 THEN 1 ELSE 0 END) as acertos_totais,
  SUM(CASE WHEN pontos BETWEEN 40 AND 50 THEN 1 ELSE 0 END) AS acertos_Altos,
  SUM(CASE WHEN pontos BETWEEN 20 AND 30 THEN 1 ELSE  0 END) as acertos_baixos,
  COUNT(id) as total_jogadores
  from pontuacao;

/*
CREATE TABLE carros (
idCarro INT PRIMARY KEY AUTO_INCREMENT,
nota INT,
fkUser INT,
FOREIGN KEY (fkUser) REFERENCES usuario(idUser)
);
--constraint ckNota CHECK (nota in (nota >= 0 AND nota <= 10)),



drop table carros;


INSERT INTO carros (nota, fkUser) VALUES 
(7,1),
(10,2),
(6,3),
(8,2),
(3,1),
(6,1),
(7,1),
(4,2);

select SUM(nota) from carros;

select ROUND(SUM(nota) / (select COUNT(nota) from carros),1)
from carros;

select ROUND(SUM(nota) / (select COUNT(nota) from carros),1)
from carros
where idCarro = 1;

select Sum(carros.nota), usuario.nome 
from carros join usuario
on idUser = fkUser
where fkUser = 1;


select * from carros;

ALTER TABLE carros ADD COLUMN fkUser INT;
ALTER Table carros ADD constraint fkUser FOREIGN KEY (fkUser) REFERENCES usuario(idUser);

desc carros;
*/