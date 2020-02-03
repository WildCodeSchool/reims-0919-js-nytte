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
 address1 VARCHAR(120) NOT NULL,
 address2 VARCHAR(120) NULL,
 photo VARCHAR(250) NULL,
 description_company VARCHAR(400) NULL,
 latitude VARCHAR(4) NULL,
 longitude VARCHAR(4) NULL,
 phone_company VARCHAR(10) NOT NULL,
 email VARCHAR(320) NULL,
 mapping VARCHAR(250) NULL,
 creation_date timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
);

INSERT INTO admin 
(company, firstname, lastname,login_admin,password_admin,city,zip,address1,photo,phone_company,mapping)
VALUES
('Camping de Wojtek','Wojtek','Zdebski','woj-tek','password','Sainte Maxime','83120','1 rue Thibaud','https://zupimages.net/up/19/49/c3li.jpg','0401020304','https://zupimages.net/up/20/04/vdig.jpg'),
('Camping de Maxime','Maxime','Thibaud','max-thi','password','Quiberon','56170','3 rue de la Steppe','https://zupimages.net/up/19/49/3ik8.jpg','0201020304','https://zupimages.net/up/20/04/vdig.jpg'),
('Hotel de plein air de Cindie', 'Cindie','Jouvin','cin-jou','password','Cassis','13260','Rue de la Framboise','https://zupimages.net/up/19/49/ctks.jpg','0406081001','https://zupimages.net/up/20/03/nou7.jpg');
INSERT INTO admin 
(company, firstname, lastname,login_admin,password_admin,city,zip,address1,photo,phone_company)
VALUES

('Club de Victor','Victor','Biard','vic-bia','password','Reims','51100','6 rue du Champagne Comte Vicolatino','https://zupimages.net/up/19/49/y642.jpg','0301020304');


CREATE TABLE place
(
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 local_name VARCHAR(150) NOT NULL,
 local_photo VARCHAR(250) NULL,
 local_description VARCHAR(400) NULL,
 local_latitude VARCHAR(4) NULL,
 local_longitude VARCHAR(4) NULL,
 local_phone VARCHAR(10) NULL,
 local_pj VARCHAR(250) NULL,
 local_logo VARCHAR(250) NULL,
 admin_id INT NOT NULL,
 FOREIGN KEY (admin_id) REFERENCES admin(id)
);

INSERT INTO place 
(local_name, local_photo, local_description,admin_id)
VALUES
('La Plage','https://zupimages.net/up/19/50/bvpr.jpeg','Sable fin, eau turquoise, transats et monoi pour le bronzage ...',1),
('La chbaraque','https://zupimages.net/up/19/50/flst.jpeg','Histoire de cultiver votre fessier pour la plage',1),
('La Piscine','https://zupimages.net/up/19/50/wya3.jpeg','Si tu as peur des vagues de la méditerannée',1),
('Chez bebert','https://zupimages.net/up/20/06/gyn9.jpg', 'Le meilleur resto pour manger Moules Frites',1),
('La Plage','https://zupimages.net/up/19/50/bvpr.jpeg','Sable fin, eau turquoise, transats et monoi pour le bronzage ...',2),
('La chbaraque','https://zupimages.net/up/19/50/flst.jpeg','Histoire de cultiver votre fessier pour la plage',2),
('La Piscine','https://zupimages.net/up/19/50/flst.jpeg','Si tu as peur des vagues de la méditerannée',2),
('Le Fumoir','https://zupimages.net/up/19/50/x489.jpg','Découvrez ce cadre raffiné, feutré et intime, fait de bois brûlé et verni. Le lieu est réservé aux fumeurs de havanes. Cigares, whisky, cognacs et alcools blancs sont proposés pour une dégustation hors du temps, confortablement installés au fond d’un fauteuil Club.',4),
('SPA','https://zupimages.net/up/19/50/2ohh.jpeg','Conçu pour s’intégrer harmonieusement dans son environnement naturel, chaque espace de relaxation tirant partie du paysage, le spa est une oasis de tranquillité propice à l’éveil des sens et au repos de l’esprit.',4),
('Salle de massage','https://zupimages.net/up/19/50/le5r.jpeg','Les salles de soins relaxantes au sein du spa à Marrakech les bains de l’Alhambra constituent un havre de détente ultime qui vous permet de libérer votre esprit et de vous libérer de la tension.',4),
('La Plage','https://zupimages.net/up/19/50/7j3v.jpg','Sable fin, eau turquoise, transats et monoi pour le bronzage ...',3),
('Roulotte Vegan','https://zupimages.net/up/19/50/bvjt.jpeg','Pour manger bon et bio',3),
('La Piscine','https://zupimages.net/up/19/50/wpfg.jpg','Pour toute la famille',3),
('La buvette','https://zupimages.net/up/19/49/ctks.jpg', 'Pour boire un petit verre tranquille',1),
('Le bar de la plage','https://zupimages.net/up/19/50/sp6x.jpeg', 'Pour boire un petit verre tranquille',1),
('Le chic & food truck','https://zupimages.net/up/19/50/fsn8.jpg', 'Pour boire un petit verre tranquille',1),
('Le swimming resto','https://zupimages.net/up/19/50/wya3.jpeg', 'Pour partager entre amis',1),
('Disco Nytter','https://zupimages.net/up/19/50/l5kd.jpeg', 'Pour danser toute la nuit',1),
('La buvette','https://zupimages.net/up/19/49/ctks.jpg', 'Pour boire un petit verre tranquille',2),
('Le bar de la plage','https://zupimages.net/up/19/50/sp6x.jpeg', 'Pour boire un petit verre tranquille',2),
('Le chic & food truck','https://zupimages.net/up/19/50/fsn8.jpg', 'Pour boire un petit verre tranquille',2),
('Le swimming resto','https://zupimages.net/up/19/50/wya3.jpeg', 'Pour partager entre amis',2),
('Disco Nytter','https://zupimages.net/up/19/50/l5kd.jpeg', 'Pour danser toute la nuit',2),
('La buvette','https://zupimages.net/up/19/49/ctks.jpg', 'Pour boire un petit verre tranquille',3),
('Le bar de la plage','https://zupimages.net/up/19/50/sp6x.jpeg', 'Pour boire un petit verre tranquille',3),
('Le chic & food truck','https://zupimages.net/up/19/50/fsn8.jpg', 'Pour boire un petit verre tranquille',3),
('Le swimming resto','https://zupimages.net/up/19/50/wya3.jpeg', 'Pour partager entre amis',3),
('Disco Nytter','https://zupimages.net/up/19/50/l5kd.jpeg', 'Pour danser toute la nuit',3);

CREATE TABLE vacationer
(
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 tourist_firstname VARCHAR(100) NOT NULL,
 tourist_lastname VARCHAR(100) NOT NULL,
 tourist_login VARCHAR(100) NOT NULL,
 tourist_password VARCHAR(256) NOT NULL,
 tourist_city VARCHAR(100) NOT NULL,
 tourist_zip VARCHAR(5) NOT NULL,
 tourist_address1 VARCHAR(120) NOT NULL,
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
(tourist_firstname, tourist_lastname, tourist_login,tourist_password,tourist_city,tourist_zip,tourist_address1,tourist_email,admin_id,birthday,tourist_photo )
VALUES
('Josiane','Balasko','josiane.balasko', 'password','Sillery','51500','4 rue du Parc','josiane.balasko@gmail.com',1,'1979-08-19','https://zupimages.net/up/20/04/1muu.jpg'),
('Thierry','Lhermitte','thierry.lhermitte', 'password','Sillery','51500','4 rue du Parc','thierry.lhermitte@gmail.com',1,'1979-08-19','https://zupimages.net/up/20/04/g6p0.jpg'),
('Marie Anne','Chazel','marie.chazel', 'password','Sillery','51500','4 rue du Parc','marie.chazel@gmail.com',1,'1979-08-19','https://zupimages.net/up/20/04/qlsm.jpg'),
('Michel','Blanc','michel.blanc', 'password','Sillery','51500','4 rue du Parc','michel.blanc@gmail.com',1,'1979-08-19','https://zupimages.net/up/20/04/pkgy.jpeg'),
('Anemone','','ane.mone', 'password','Sillery','51500','4 rue du Parc','ane.mone@gmail.com',1,'1979-08-19','https://zupimages.net/up/20/04/o0j8.jpeg'),
('Christian','Clavier','christian.clavier', 'password','Sillery','51500','4 rue du Parc','christian.clavier@gmail.com',1,'1979-08-19','https://zupimages.net/up/20/04/8c0t.jpeg'),
('Gerard','Jugnot','gerard.jugnot', 'password','Sillery','51500','4 rue du Parc','gerard.jugnot@gmail.com',1,'1979-08-19','https://zupimages.net/up/20/04/egw4.jpg'),
('Patrick','Chirac','patrick.chirac', 'password','Sillery','51500','4 rue du Parc','patrick.chirac@gmail.com',2,'1979-08-19','https://zupimages.net/up/20/04/19f6.jpg'),
('Paul','Gatineau','paul.gatineau', 'password','Sillery','51500','4 rue du Parc','paul.gatineau@gmail.com',2,'1979-08-19','https://zupimages.net/up/20/04/kc35.jpeg'),
('Jacky','Pic','jacky.pic', 'password','Sillery','51500','4 rue du Parc','jacky.pic@gmail.com',2,'1979-08-19','https://zupimages.net/up/20/04/i3ir.jpg'),
('Sophie','Marceau','sophie.marceau', 'password','Sillery','51500','4 rue du Parc','sophie.marceau@gmail.com',4,'1979-08-19','https://zupimages.net/up/20/04/wijo.jpg'),
('Julia','Roberts','julia.roberts', 'password','Sillery','51500','4 rue du Parc','julia.roberts@gmail.com',4,'1979-08-19','https://zupimages.net/up/20/04/cjkd.jpeg'),
('Charlize','Theron','charlize.theron', 'password','Sillery','51500','4 rue du Parc','charlize.theron@gmail.com',4,'1979-08-19','https://zupimages.net/up/20/04/5uln.jpeg'),
('Gerard','Buttler','gerard.buttler', 'password','Sillery','51500','4 rue du Parc','gerard.buttler@gmail.com',4,'1979-08-19','https://zupimages.net/up/20/04/5uln.jpeg'),
('Richard','Gere','richard.gere', 'password','Sillery','51500','4 rue du Parc','richard.gere@gmail.com',4,'1979-08-19','https://zupimages.net/up/20/04/5uln.jpeg'),
('Colin','Farrel','colin.farrel', 'password','Sillery','51500','4 rue du Parc','colin.farrel@gmail.com',4,'1979-08-19','https://zupimages.net/up/20/04/5uln.jpeg'),
('Cindie','Jouvin','cindie.jouvin', 'password','Sillery','51500','4 rue du Parc','cindie.jouvin@gmail.com',3,'1979-08-19','https://zupimages.net/up/20/04/ndd7.jpg'),
('Romain','Geny','romain.geny', 'password','Sillery','51500','4 rue du Parc','romain.geny@laposte.net',3,'1988-06-07','https://zupimages.net/up/20/03/rvz5.jpg'),
('Lola','Geny Jouvin','Lola.geny', 'password','Sillery','51500','4 rue du Parc','cindie.jouvin@gmail.com',3,'2010-06-22','https://zupimages.net/up/20/03/lcih.jpg'),
('Daphné','Geny Jouvin','daphne.geny', 'password','Sillery','51500','4 rue du Parc','cindie.jouvin@gmail.com',3,'2014-08-13','https://zupimages.net/up/20/01/p8yh.jpg');

CREATE TABLE happening
(
 id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 happening_name VARCHAR(150) NOT NULL,
 happening_picture VARCHAR(250) NULL,
 happening_category VARCHAR(150) NULL,
 happening_description VARCHAR(400) NULL,
 happening_date DATE NULL,
 happening_date_end DATE NULL,
 happening_time TIME NULL,
 happening_time_end TIME NULL,
 isItBookable BOOLEAN NULL,
 place_id INT NOT NULL,
 seats_bookable INT NULL,
 FOREIGN KEY (place_id) REFERENCES place(id)
);

INSERT INTO happening 
(happening_name, happening_picture, happening_category, happening_description, happening_date, happening_time, happening_time_end, isItBookable, place_id, seats_bookable)
VALUES
('Initiation au bûcheronnage','https://img5.onthesnow.com/image/la/49/championnat_de_france_b%C3%BBcheronnage_sportif_aux_492304.jpg','Sport','I am a lumberjack and I am OK, I sleep all night and I work all day','2020-06-25','14:00:00','15:00:00',1,14,20),
('Aquagym','https://www.camping-location-bretagne.com/voy_content/uploads/2018/01/aquagym_2-2-1024x576.jpg','Sport','Au camping, les vacances riment avec loisirs et bien être ! Vous pourrez profiter de plusieurs cours d’Aquagym toutes les semaines d’Avril à Octobre gratuitement. Et pour votre plus grand plaisir, nous avons également plusieurs cours d’Aqua Samba et d’Aqua Boxing gratuits.','2020-08-02','10:00:00','11:00:00',1,3,20),
('Initiation au massage cardiaque','https://lessentiel.macif.fr/sites/default/files/styles/image_intro_article/public/2018-08/massage-cardiaque.jpg?itok=bzn55Td0','Sport','Les initiations aux premiers secours, ce sont des choses importantes','2020-07-04','10:00:00','11:00:00',1,16,20),
('Aquabike','https://www.camping-les-roquilles.fr/IMG/jpg/aquabike_camping_roquilles.jpg','Sport','Au camping, les vacances riment avec loisirs et bien être ! Vous pourrez profiter de plusieurs cours d’Aquagym toutes les semaines d’Avril à Octobre gratuitement. Et pour votre plus grand plaisir, nous avons également plusieurs cours d’Aqua Samba et d’Aqua Boxing gratuits.','2020-08-07','10:00:00','11:00:00',1,3,20),
('Yoga sur la plage','https://cache.marieclaire.fr/data/photo/w1000_ci/5f/yin-yoga-bienfaits.jpg','Détente','Zen et sable chaud','2020-07-14','09:30:00','10:30:00',1,1,20);

INSERT INTO happening 
(happening_name, happening_picture, happening_category, happening_description, happening_date, happening_time, isItBookable, place_id)
VALUES
('Soirée moules frites','https://cdn-s-www.republicain-lorrain.fr/images/327257c7-3baa-40cd-b7cb-16319b950209/BES_06/illustration-moules-frites_1-1572254400.jpg','Restauration','33ème soirée moules-frites chez Bebert. Pensez à réserver votre table !','2020-08-19','20:00:00',0,2),
('Soirée Disco','https://cdn-s-www.republicain-lorrain.fr/images/1a2d02a0-8350-4864-8194-c69337719cb1/BES_06/illustration-soiree-disco_1-1571215048.jpg','Fiesta','Viens danser sous le soleil des tropiques !','2020-08-15','21:00:00',0,17),
('Soirée American Food','https://soyummy.com/wp-content/uploads/2019/02/americanfood.jpg','Restauration','Venez découvrir la cuisine américaine','2020-07-15','19:00:00',0,15),
('Histoire du cigare ','https://www.cigares.com/img/cms/cigares-cubains.jpg','Detente','Venez découvrir l’histoire du cigare cubain','2020-08-10','16:00:00',0,7),
('Permaculture et gastronomie vegan','https://cache.marieclaire.fr/data/photo/w1000_ci/55/potager-pemaculture.jpg','Restauration','Pour celles et ceux qui veulent apprendre à cultiver et consommer du bon et du bio','2020-06-15','17:00:00',0,1),
('Soirée kro','https://i.f1g.fr/media/figaro/orig/2018/08/29/XVM69efbdea-ab8b-11e8-8771-8f9ab1a049e0.jpg','Fiesta','Boire, boire, boire','2020-08-25','19:00:00',0,2),
('Pool Party','https://static.actu.fr/uploads/2017/06/6124529712_33fae1aaaa_b-854x422.jpg','Fiesta','Bouée, grande frite et eau chlorée: encore une soirée de folie au SPA avec DJ Boris','2020-08-29','20:00:00',0,3),
('Coupe inter-campings de pétanque','https://i.skyrock.net/5272/9955272/pics/209252065_small.jpg','Sport', 'Petit tournoi entre amis','2020-08-16','10:00:00',0,18);


CREATE TABLE booking
(
 happening_id INT NOT NULL,
 tourist_id INT NOT NULL,
 CONSTRAINT num_book PRIMARY KEY (happening_id,tourist_id),
 FOREIGN KEY (happening_id) REFERENCES happening(id),
 FOREIGN KEY (tourist_id) REFERENCES vacationer(id)
);

INSERT INTO booking
(happening_id,tourist_id)
VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(2,1),
(2,2),
(2,3),
(2,4),
(2,5),
(2,6),
(2,7),
(3,1),
(3,2),
(3,3),
(3,4),
(3,5),
(3,6),
(3,7),
(4,1),
(4,2),
(4,3),
(4,4),
(4,5),
(4,6),
(4,7),
(5,1),
(5,2),
(5,3),
(5,4),
(5,5),
(5,6),
(5,7);
