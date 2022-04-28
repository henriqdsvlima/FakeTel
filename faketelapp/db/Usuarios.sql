create table usuarios (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email varchar(100) NOT NULL,
    pais varchar(100) NOT NULL,
    estado varchar(100) NOT NULL,
    municipio VARCHAR(100) not null,
    cep int(8) NOT NULL,
    rua varchar(100) not null,
    numero int(4) not null,
    complemento varchar(100) not null,
    cpf varchar(12)  not null,
    pis varchar(12) not null,
    senha varchar(100) not null,
    PRIMARY KEY(id),
    UNIQUE KEY(cpf),
    UNIQUE KEY(pis)
);