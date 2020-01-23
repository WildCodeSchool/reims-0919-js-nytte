const express = require('express');
const router = express.Router();
const connection = require("../conf");

router.get('/', (request, response) => {
  connection.query('SELECT happening.id, happening_name, happening_picture, happening_category, happening_description, happening_date, happening_time_end, happening_date_end, happening_time,isItBookable, seats_bookable, local_photo, mapping FROM place INNER JOIN happening ON place.id= happening.place_id INNER JOIN admin ON place.admin_id=admin.id WHERE happening_date>=DATE(NOW()) OR happening_date IS NULL ORDER BY happening_date ASC', (err, results) => {
    if (err) {
      response.status(500).send('Error retrieving happening');
    } else {
      response.json(results);
    }
  });
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
  const idBook = req.params.id;
  connection.query('SELECT concat(happening_id,'-',tourist_id) AS num_book, happening_id, seats_bookable,	happening_name, happening_date, happening_time, tourist_id, tourist_lastname, tourist_firstname FROM booking INNER JOIN happening  ON happening_id=happening.id INNER JOIN vacationer ON tourist_id=vacationer.id WHERE happening.id=?', idBook, (errGet, resultsGet) => {
    if(resultsGet && resultsGet.length){
      res.send("Merci de supprimer les réservations liées au préalable")
    }else if(resultsGet.length===0){
      connection.query('DELETE FROM happening WHERE happening_id = ?', [idBook], err => {
        if (err) {
          console.log(err);
          res.status(500).send(`Erreur lors de la suppression d'un évènement, supprimer les réservations sur ${idBook}`);
        } else {
          res.sendStatus(200);
      }
    })}
  })
})



module.exports = router
