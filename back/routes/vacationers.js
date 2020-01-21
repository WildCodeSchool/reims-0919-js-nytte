const express = require('express');
const router = express.Router();
const connection = require("../conf");


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
      response.sendStatus(200);
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
  connection.query('DELETE FROM vacationer WHERE id = ?', [idVacationer], err => {
    if (err) {
      console.log(err);
      res.status(500).send(`Erreur lors de la suppression d'un vacancier, supprimer les réservations sur ${idVacationer}`);
    } else {
      res.sendStatus(200);
    }
  });
});

  module.exports = router