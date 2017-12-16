DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(40) NOT NULL,
    devoured BOOLEAN DEFAULT false NULL,
    PRIMARY KEY(id)
);
