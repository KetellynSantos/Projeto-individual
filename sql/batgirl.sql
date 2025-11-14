CREATE DATABASE batgirl;
use batgirl;

create table usuario (
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    dtNasc DATE,
    apelido VARCHAR(25),
    senha VARCHAR(50)
);

CREATE TABLE carros (
    idCarro INT PRIMARY KEY AUTO_INCREMENT,
    nota INT,
    fkUser INT,
    constraint ckNota CHECK (nota in(nota >= 0 AND nota <= 10)),
    onstraint fkUser FOREIGN KEY (fkUser) REFERENCES usuario(idUser)
);

ALTER TABLE carros ADD COLUMN fkUser INT;
ALTER Table carros ADD constraint fkUser FOREIGN KEY (fkUser) REFERENCES usuario(idUser);

desc carros;