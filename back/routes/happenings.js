const express = require('express');
const router = express.Router();
const connection = require("../conf");

router.get('/', (request, response) => {
  connection.query('SELECT happening.id, happening_name, happening_picture, happening_category, happening_description, happening_date, happening_time_end, happening_date_end, happening_time,isItBookable, seats_bookable, local_photo FROM happening INNER JOIN place WHERE happening.place_id=place.id AND happening_date>=DATE(NOW()) OR happening_date IS NULL ORDER BY happening_date ASC', (err, results) => {
   if (err) {
    response.status(500).send('Error retrieving happening');
   } else {
    response.json(results);
   }
 });
})


router.get('/:id', (request, response) => {
  connection.query('SELECT happening_name, happening_picture, happening_category, happening_description, happening_date, happening_time, happening_time_end, happening_date_end, isItBookable, seats_bookable, local_photo FROM happening INNER JOIN place WHERE happening.place_id=place.id AND happening.id = ? AND happening_date>=DATE(NOW()) OR happening_date ORDER BY happening_date ASC', [request.params.id], (err, results) => {
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
      response.sendStatus(200);
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

  module.exports = router