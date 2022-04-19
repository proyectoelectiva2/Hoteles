create database if not exists pago;
use pago;

create table if not exists informacion(
    id_compra int auto_increment,
    nombre varchar(200),
    telefono varchar(50),
    productos varchar(200),
    constraint pk_informacion primary key(id_compra)
)engine = InnoDB;