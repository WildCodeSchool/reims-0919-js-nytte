const express = require('express');
const router = express.Router();
const connection = require("../conf");

router.get('/', (request, response) => {
  connection.query(
    "select concat(happening_id,'-',tourist_id) AS num_book, happening_id, tourist_id, seats_bookable,happening_name, happening_date, happening_time FROM booking INNER JOIN happening  WHERE happening_id=happening.id AND seats_bookable IS NOT NULL ORDER BY happening_date ASC",
    (err, results) => {
      if (err) {
        response.status(500).send('Error retrieving booking');
      } else {
        response.json(results);
      }
  });
})

router.get('/status', (request, response) => {
    connection.query('select happening_id, seats_bookable,happening_name, happening_date, happening_time, COUNT(happening_id) AS places_booked, seats_bookable-COUNT(happening_id) AS free_places FROM booking INNER JOIN happening  WHERE happening_id=happening.id AND happening_date>=DATE(NOW()) AND seats_bookable IS NOT NULL GROUP BY happening_id ORDER BY happening_date ASC', (err, results) => {
     if (err) {
      response.status(500).send('Error retrieving booking');
     } else {
      response.json(results);
     }
   });
})

router.get('/status', (request, response) => {
  connection.query("SELECT happening_id, seats_bookable,happening_name, happening_date, happening_time, COUNT(happening_id) AS places_booked, seats_bookable-COUNT(happening_id) AS free_places FROM booking INNER JOIN happening  WHERE happening_id=happening.id AND happening_date>=DATE(NOW()) AND seats_bookable IS NOT NULL GROUP BY happening_id ORDER BY happening_date ASC", (err, results) => {
      console.log(results);
     if (err) {
      response.status(500).send('Error retrieving booking');
     } else {
      response.json(results);
     }
   });
})

router.get('/:id', (request, response) => {
  connection.query("SELECT concat(happening_id,'-',tourist_id) AS num_book, happening_id, seats_bookable,	happening_name, happening_date, happening_time, tourist_id, tourist_lastname FROM booking INNER JOIN happening  ON happening_id=happening.id INNER JOIN vacationer ON tourist_id=vacationer.id WHERE happening.id=?", [request.params.id], (err, results) => {
   if (err) {
    response.status(500).send('Error retrieving booking');
   } else {
    response.json(results);
   }
  });
})


router.post('/', (request, response) => {
    const formData = request.body;
    connection.query('INSERT INTO booking SET ?', formData, (err, results) => {
      if (err) {
        console.log(err);
        response.status(500).send("Error saving a new booking");
      } else {
        response.sendStatus(200);
      }
    });
});


module.exports = router