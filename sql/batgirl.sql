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
    marca VARCHAR(50), -- Honda, BMW..
    modelo VARCHAR(50), -- CIVIC, M3..
    anoLancamento DATE,
    valor DECIMAL(12,2)
);



use aquatech;

show tables;

desc usuario;