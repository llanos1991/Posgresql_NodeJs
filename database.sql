create database library;

create table books(
    section int,
    title text,
    author text
);

create table users(
    username text,
    password text
);

insert into books values(1,'Foundation','Issac Asimov');

insert into books values(2,'Base de datos','Rama'),(3,'Desarrollo de sw','Rama');

insert into books values('joe','joe123'),('cri','cri123'),('sae','sae123');