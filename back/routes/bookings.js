const express = require('express');
const router = express.Router();
const connection = require("../conf");
const jwt = require('jsonwebtoken');
const secret = "secret";
const verifyToken = require("../verifyToken");

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

router.get('/status', verifyToken, (request, response) => {
  jwt.verify(request.token, secret, (errJwt, authData) => {
    if (errJwt) {
      res.status(401).send("Erreur d'authentification");
    } else {
      if (authData.user.type === "1") {
        // vacationer
        connection.query(
          "SELECT happening_id, happening_name, happening_date, happening_time, vacationer.id FROM booking INNER JOIN happening ON happening_id=happening.id INNER JOIN place ON happening.place_id=place.id INNER JOIN vacationer ON booking.tourist_id=vacationer.id WHERE happening_date>=DATE(NOW()) AND booking.tourist_id=? ORDER BY happening_date ASC",
          [authData.user.id],
          (errSql, results) => {
            if (errSql) {
              response.status(500).send('Error retrieving booking');
            } else {
              response.json(results);
            }
          }
        );
      } else if (authData.user.type === "2") {
        // admin
        connection.query(
          "SELECT happening_id, seats_bookable,happening_name, happening_date, happening_time, COUNT(happening_id) AS places_booked, seats_bookable-COUNT(happening_id) AS free_places FROM booking INNER JOIN happening ON  happening_id=happening.id INNER JOIN place ON happening.place_id=place.id WHERE happening_date>=DATE(NOW()) AND seats_bookable IS NOT NULL AND place.admin_id=? GROUP BY happening_id ORDER BY happening_date ASC",
              [authData.user.id],
              (errSql, results) => {
                if (errSql) {
                  response.status(500).send('Error retrieving booking');
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
  connection.query("SELECT concat(happening_id,'-',tourist_id) AS num_book, happening_id, seats_bookable,	happening_name, happening_date, happening_time, tourist_id, tourist_lastname, tourist_firstname FROM booking INNER JOIN happening  ON happening_id=happening.id INNER JOIN vacationer ON tourist_id=vacationer.id WHERE happening.id=?", [request.params.id], (err, results) => {
   if (err) {
    response.status(500).send('Error retrieving booking');
   } else {
    response.json(results);
   }
  });
})

router.get('/tourist/:id', (request, response) => {
  connection.query("SELECT concat(happening_id,'-',tourist_id) AS num_book, happening_id, seats_bookable,	happening_name, happening_date, happening_time, tourist_id, tourist_lastname, tourist_firstname FROM booking INNER JOIN happening  ON happening_id=happening.id INNER JOIN vacationer ON tourist_id=vacationer.id WHERE tourist_id=?", [request.params.id], (err, results) => {
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


router.delete('/tourist/:id/:id', (req, res) => {
  const idVacationer = req.params.id;
  const idEvent = req.params.id;
  connection.query('DELETE FROM booking WHERE tourist_id = ? AND happening_id= ?', [idVacationer, idEvent], err => {
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