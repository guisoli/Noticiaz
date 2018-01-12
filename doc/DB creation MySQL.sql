use portal_noticias;

create table Noticias(
idNoticia int not null primary key auto_increment,
titulo varchar(100),
noticia text,
dataCriacao timestamp default current_timestamp,
resumo varchar(100),
autor varchar(30),
dataNoticia date
);
