CREATE DATABASE batgirl;
use batgirl;

show tables;

create table usuario (
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    dtNasc DATE,
    apelido VARCHAR(25),
    senha VARCHAR(50)
);

INSERT INTO usuario (nome, dtNasc, apelido, senha) VALUES
('Kitty Keisuke','2006-08-11','Kitty','keke1020'),
('Matheus Menino','2007-04-27','Boneca','theus123');

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