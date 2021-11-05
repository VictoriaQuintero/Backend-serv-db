---------CREACION DE LA BASE DE DATOS-------------
CREATE DATABASE ALMACEN;

---------CREACION DE LA TABLA MARCAS-------------

CREATE TABLE Marcas(
    MarcaId INTEGER AUTO_INCREMENT PRIMARY KEY,
    NombreMarca VARCHAR(20) NOT NULL,
    UNIQUE(NombreMarca)
);

---------CREACION DE LA TABLA PRODUCTOS-----------

CREATE TABLE Productos(
    Id INTEGER AUTO_INCREMENT PRIMARY KEY,
    Producto TEXT NOT NULL,
    Especificaciones TEXT,
    MarcaId INTEGER
);

-----------CREACION DE LA TABLA USUARIOS------------

CREATE TABLE Users(
    UserName VARCHAR(15),
    Contraseña VARCHAR(15)
)

----------INSERTAR USUARIOS----------------------

INSERT INTO Users VALUES('victoria', '12345'), ('kevin', '12345'), ('raul', '45678');

-------------INSERTAR MARCAS----------------------

INSERT INTO Marcas VALUES (1, 'intel'), (2, 'NPX');

---------------INSERTAR PRODUCTOS-------------------

INSERT INTO Productos VALUES(1, 'procesador', 'para laptop', 1), (2, 'placamadre', 'usada', 2), (3, 'memoriaram', 'para 32bits', 1), (4, 'tarjetadevideo', 'pequeña', 1), (5, 'discoduro', '500gb', 2), (6, 'placamadre', 'usada', 1);