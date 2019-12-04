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
  description_company VARCHAR(400) NULL,
  latitude VARCHAR(4) NULL,
  longitude VARCHAR(4) NULL,
  phone_company VARCHAR(10) NOT NULL,
  creation_date DATE NOT NULL
);


INSERT INTO TABLE admin 
(company, firstname, lastname,login_admin,password_admin,city,zip,adress1,photo,phone_company,creation_date)
VALUES
('Camping de Max','Maxime','Thibaud','max-thi','password','Sainte Maxime','83120',"1 rue Thibaud",'https://zupimages.net/up/19/49/c3li.jpg','0401020304',2019-12-04),
('Campind de Wojtek'),'Wojtek','Zdebski','woj-tek','password','Quiberon','56170','3 rue de la Steppe','https://zupimages.net/up/19/49/3ik8.jpg','0201020304',2019-12-04
('Club de Victor','Victor','Biard','vic-bia','password','Reims','51100','6 rue du Champagne Comte Vicolatino','https://zupimages.net/up/19/49/y642.jpg','0301020304',2019-12-04),
('Hotel de plein air de Cindie', 'Cindie','Jouvin','cin-jou','password','Cassis','Rue de la Framboise','https://zupimages.net/up/19/49/ctks.jpg','0406081001',2019-12-04);
