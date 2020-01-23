const express = require('express');
const router = express.Router();
const connection = require("../conf");
const jwt = require('jsonwebtoken');
const secret = "secret";
const verifyToken = require("../verifyToken");

router.get('/', verifyToken, (request, response) => {
  jwt.verify(request.token, secret, (errJwt, authData) => {
    if (errJwt) {
      res.status(401).send("Erreur d'authentification");
    } else {
      if (authData.user.type === "1") {
        // vacationer
        connection.query(
          'SELECT vacationer.id, tourist_firstname,tourist_lastname,tourist_city,tourist_zip,tourist_address1,tourist_address2,tourist_photo,tourist_phone,tourist_email FROM vacationer INNER JOIN admin ON vacationer.admin_id=admin.id WHERE vacationer.id=?',
          [authData.user.id],
          (errSql, results) => {
            if (errSql) {
              response.status(500).send('Error retrieving places');
            } else {
              response.json(results);
            }
          }
        );
      } else if (authData.user.type === "2") {
        // admin
        connection.query(
          'SELECT vacationer.id, tourist_firstname,tourist_lastname,tourist_city,tourist_zip,tourist_address1,tourist_address2,tourist_photo,tourist_phone,tourist_email FROM vacationer INNER JOIN admin ON vacationer.admin_id=admin.id WHERE admin.id=?',
              [authData.user.id],
              (errSql, results) => {
                if (errSql) {
                  response.status(500).send('Error retrieving places');
                } else {
                  response.json(results);
                }
              }
            );
          } else {
            response.sendStatus(421)
          }
        }
      })
    })



router.get('/', (request, response) => {
  connection.query('SELECT vacationer.id, tourist_firstname,tourist_lastname,tourist_city,tourist_zip,tourist_address1,tourist_address2,tourist_photo,tourist_phone,tourist_email FROM vacationer INNER JOIN admin WHERE vacationer.admin_id=admin.id', [request.params.id], (err, results) => {
   if (err) {
    response.status(500).send('Error retrieving vacationers');
   } else {
    response.json(results);
   }
 });
})

router.get('/:id', (request, response) => {
  connection.query('SELECT vacationer.id, tourist_firstname,tourist_lastname,tourist_city,tourist_zip,tourist_address1,tourist_address2,tourist_photo,tourist_phone,tourist_email FROM vacationer INNER JOIN admin WHERE vacationer.admin_id=admin.id AND vacationer.id = ?', [request.params.id], (err, results) => {
   if (err) {
    response.status(500).send('Error retrieving vacationers');
   } else {
    response.json(results);
   }
 });
})

router.post('/', (request, response) => {
  const formData = request.body;
  connection.query('INSERT INTO vacationer SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      response.status(500).send("Error saving a new vacationer");
    } else {
      response.status(201).send({...formData, id: results.insertId});
    }
  });
});

router.put('/:id', (request, response) => {
  const idVacationer = request.params.id;
  const formData = request.body;
    connection.query('UPDATE vacationer SET ? WHERE id = ?', [formData, idVacationer], err => {
    if (err) {
      console.log(err);
      response.status(500).send("Error editing the vacationer");
    } else {
      response.sendStatus(200);
    }
  });
});

router.delete('/:id', (req, res) => {
  const idVacationer = req.params.id;
  connection.query('SELECT concat(happening_id,'-',tourist_id) AS num_book, happening_id, seats_bookable,	happening_name, happening_date, happening_time, tourist_id, tourist_lastname, tourist_firstname FROM booking INNER JOIN happening  ON happening_id=happening.id INNER JOIN vacationer ON tourist_id=vacationer.id WHERE vacationer.id=?"', idVacationer, (errGet, resultsGet) => {
    if(resultsGet && resultsGet.length){
      res.send("Merci de supprimer les réservations liées au préalable")
    }else if(resultsGet.length===0){
      connection.query('DELETE FROM vacationer WHERE id = ?', [idVacationer], err => {
        if (err) {
          console.log(err);
          res.status(500).send(`Erreur lors de la suppression d'un vacancier, supprimer les réservations sur ${idVacationer}`);
        } else {
          res.sendStatus(200);
      }
    })}
  })
})


  module.exports = router
