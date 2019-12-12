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
  address1 VARCHAR(120)  NOT NULL,
  address2 VARCHAR(120) NULL,
  photo VARCHAR(250) NULL,
  description_company VARCHAR(400) NULL,
  latitude VARCHAR(4) NULL,
  longitude VARCHAR(4) NULL,
  phone_company VARCHAR(10) NOT NULL,
  email VARCHAR(320) NULL,
  creation_date timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
);


INSERT INTO admin 
(company, firstname, lastname,login_admin,password_admin,city,zip,address1,photo,phone_company)
VALUES
('Camping de Max','Maxime','Thibaud','max-thi','password','Sainte Maxime','83120','1 rue Thibaud','https://zupimages.net/up/19/49/c3li.jpg','0401020304'),
('Camping de Wojtek','Wojtek','Zdebski','woj-tek','password','Quiberon','56170','3 rue de la Steppe','https://zupimages.net/up/19/49/3ik8.jpg','0201020304'),
('Club de Victor','Victor','Biard','vic-bia','password','Reims','51100','6 rue du Champagne Comte Vicolatino','https://zupimages.net/up/19/49/y642.jpg','0301020304'),
('Hotel de plein air de Cindie', 'Cindie','Jouvin','cin-jou','password','Cassis','13260','Rue de la Framboise','https://zupimages.net/up/19/49/ctks.jpg','0406081001');


CREATE TABLE place
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  local_name VARCHAR(150) NOT NULL,
  local_photo VARCHAR(250) NULL,
  local_description VARCHAR(400) NULL,
  local_latitude VARCHAR(4) NULL,
  local_longitude VARCHAR(4) NULL,
  local_phone VARCHAR(10)  NULL,
  local_pj VARCHAR(250) NULL,
  local_logo VARCHAR(250) NULL,
  admin_id INT NOT NULL,
  FOREIGN KEY (admin_id) REFERENCES admin(id)
);

INSERT INTO place 
(local_name, local_photo, local_description,admin_id)
VALUES
('La Plage','https://zupimages.net/up/19/50/bvpr.jpeg','Sable fin, eau turquoise, transats et monoi pour le bronsage ...',1),
('La chbaraque','https://zupimages.net/up/19/50/flst.jpeg','Histoire de cultiver votre fessier pour la plage',1),
('La Piscine','https://zupimages.net/up/19/50/flst.jpeg','Si tu as peur des vagues de la méditerannée',1),
('Le Fumoir','https://zupimages.net/up/19/50/x489.jpg','Découvrez ce cadre raffiné, feutré et intime, fait de bois brûlé et verni. Le lieu est réservé aux fumeurs de havanes. Cigares, whisky, cognacs et alcools blancs sont proposés pour une dégustation hors du temps, confortablement installés au fond d’un fauteuil Club.',3),
('SPA','https://zupimages.net/up/19/50/2ohh.jpeg','Conçu pour s’intégrer harmonieusement dans son environnement naturel, chaque espace de relaxation tirant partie du paysage, le spa est une oasis de tranquillité propice à l’éveil des sens et au repos de l’esprit.',3),
('Salle de massage','https://zupimages.net/up/19/50/le5r.jpeg','Les salles de soins relaxantes au sein du spa à Marrakech les bains de l’Alhambra constituent un havre de détente ultime qui vous permet de libérer votre esprit et de vous libérer de la tension.',3),
('La Plage','https://zupimages.net/up/19/50/7j3v.jpgg','Sable fin, eau turquoise, transats et monoi pour le bronsage ...',2),
('Roulotte Vegan','https://zupimages.net/up/19/50/bvjt.jpeg','Pour manger bon et bio',2),
('La Piscine','https://zupimages.net/up/19/50/wpfg.jpg','Pour toute la famille',2),
('La buvette','https://zupimages.net/up/19/49/ctks.jpg', 'Pour boire un petit verre tranquille',4),
('Le bar de la plage','https://zupimages.net/up/19/50/sp6x.jpeg', 'Pour boire un petit verre tranquille',4),
('Le chic & food truck','https://zupimages.net/up/19/50/fsn8.jpg', 'Pour boire un petit verre tranquille',4),
('Le swimming resto','https://zupimages.net/up/19/50/wya3.jpeg', 'Pour partager entre amis',4),
('Disco Nytter','https://zupimages.net/up/19/50/l5kd.jpeg', 'Pour danser toute la nuit',4);

CREATE TABLE vacationer
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  tourist_firstname VARCHAR(100) NOT NULL,
  tourist_lastname VARCHAR(100) NOT NULL,
  tourist_login VARCHAR(100) NOT NULL,
  tourist_password VARCHAR(256) NOT NULL,
  tourist_city VARCHAR(100) NOT NULL,
  tourist_zip VARCHAR(5) NOT NULL,
  tourist_address1 VARCHAR(120)  NOT NULL,
  tourist_address2 VARCHAR(120) NULL,
  tourist_photo VARCHAR(250) NULL,
  tourist_phone VARCHAR(10) NULL,
  tourist_email VARCHAR(320) NULL,
  birthday DATE NOT NULL,
  admin_id INT NOT NULL,
  creation_date timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES admin(id)
);

INSERT INTO vacationer 
(tourist_firstname, tourist_lastname, tourist_login,tourist_password,tourist_city,tourist_zip,tourist_address1,tourist_email,admin_id,birthday )
VALUES
('Cindie','Jouvin','cindie.jouvin', 'password','Sillery','51500','4 rue du Parc','cindie.jouvin@gmail.com',4,'1979-08-19');