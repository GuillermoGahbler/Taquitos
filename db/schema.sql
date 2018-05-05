DROP DATABASE IF EXISTS tacos_db;
CREATE DATABASE tacos_db;
USE tacos_db;

-- Create a burgers table with the required fields --
CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	-- ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	-- dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);


















-- drop database if exists tacos_db;
-- create database tacos_db;
-- use tacos_db;
-- create table tacos(
--   id int auto_increment not null primary key,
--   devoured boolean not null default false,
--   name varchar(255) not null unique
-- );

-- -- int NOT NULL

