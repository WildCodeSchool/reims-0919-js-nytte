DROP DATABASE IF EXISTS nytte_database;
CREATE DATABASE nytte_database;
USE nytte_database;
CREATE TABLE admin
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  company VARCHAR(150) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  login_admin VARCHAR(100) NOT NULL,
  password_admin VARCHAR(256) NOT NULL,
  city VARCHAR(100) NOT NULL,
  zip VARCHAR(5) NOT NULL,
  adress1 VARCHAR(120)  NOT NULL,
  adress2 VARCHAR(120) NULL,
  photo VARCHAR(250) NOT NULL,
  description_company TEXT NULL,
  phone_company VARCHAR(10) NOT NULL,
  creation_date DATE NOT NULL,
);
