drop database if exists tacos_db;
create database tacos_db;
use tacos_db;

create table tacos (
id int primary key,
taco_name varchar(50) not null,
devoured boolean default false
);

