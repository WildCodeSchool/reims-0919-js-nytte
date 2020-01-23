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
          'SELECT happening.id, happening_name, happening_picture, happening_category, happening_description, happening_date, happening_time_end, happening_date_end, happening_time,isItBookable, seats_bookable, local_photo, mapping FROM place INNER JOIN happening ON place.id= happening.place_id INNER JOIN admin ON place.admin_id=admin.id WHERE happening_date>=DATE(NOW()) OR happening_date IS NULL AND place.admin_id=? ORDER BY happening_date ASC',
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
              'SELECT DISTINCT happening.id, happening_name, happening_picture, happening_category, happening_description, happening_date, happening_time_end, happening_date_end, happening_time,isItBookable, seats_bookable, local_photo, mapping FROM place INNER JOIN happening ON place.id= happening.place_id INNER JOIN admin ON place.admin_id=admin.id INNER JOIN vacationer ON admin.id=vacationer.admin_id WHERE happening_date>=DATE(NOW()) OR happening_date IS NULL AND vacationer.id=? ORDER BY happening_date ASC',
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
  
  router.get('/:id', (request, response) => {
    connection.query('SELECT happening_name, happening_picture, happening_category, happening_description, happening_date, happening_time, happening_time_end, happening_date_end, isItBookable, seats_bookable, local_photo, mapping FROM place INNER JOIN happening ON place.id= happening.place_id INNER JOIN admin ON place.admin_id=admin.id WHERE happening.id = ? AND happening_date>=DATE(NOW()) OR happening_date IS NULL ORDER BY happening_date ASC', [request.params.id], (err, results) => {
      if (err) {
        response.status(500).send('Error retrieving happening');
      } else {
        response.json(results);
      }
  });
  })

router.post('/', (request, response) => {
  const formData = request.body;
  connection.query('INSERT INTO happening SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      response.status(500).send("Error saving a new happening");
    } else {
      response.status(201).send({...formData, id: results.insertId});
    }
  });
});

router.put('/:id', (request, response) => {
  const idHappening = request.params.id;
  const formData = request.body;
    connection.query('UPDATE happening SET ? WHERE id = ?', [formData, idPlace], err => {
    if (err) {
      console.log(err);
      response.status(500).send("Error editing the happening");
    } else {
      response.sendStatus(200);
    }
  });
});

router.delete('/:id', (req, res) => {
  const idEvent = req.params.id;
  connection.query('DELETE FROM event WHERE tourist_id = ?', [idEvent], err => {
    if (err) {
      console.log(err);
      res.status(500).send(`Erreur lors de la suppression d'un lieu, supprimer les évènements sur ${idEvent}`);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router
