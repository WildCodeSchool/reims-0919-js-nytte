const express = require('express');
const router = express.Router();
const connection = require("../conf");
const jwt = require('jsonwebtoken');

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
  const token = request.body.tourist_id;
  const happeningId = request.body.happening_id;
  jwt.verify(token, 'secret', (err, authorizedData) => {
    const userId = authorizedData.user.id;
    connection.query('INSERT INTO booking VALUES (?, ?)', [happeningId, userId], (SQLerr, results) => {
      console.log(results)
      if (SQLerr) {
        if (SQLerr.code === "ER_DUP_ENTRY") {
          response.status(409).send("Réservation déjà effectuée !");
        } else {
          console.log(SQLerr.code);
          response.status(500).send("Error saving a new booking");
        }
      } else {
        response.sendStatus(200);
      }
    });
  })
});


router.delete('/tourist/:id', (req, res) => {
  const idVacationer = req.params.id;
  connection.query('DELETE FROM booking WHERE tourist_id = ?', [idVacationer], err => {
    if (err) {
      console.log(err);
      res.status(500).send(`Erreur lors de la suppression d'un booking`);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/event/:id', (req, res) => {
  const idVacationer = req.params.id;
  connection.query('DELETE FROM booking WHERE happening_id = ?', [idVacationer], err => {
    if (err) {
      console.log(err);
      res.status(500).send(`Erreur lors de la suppression d'un booking`);
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router