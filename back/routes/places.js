const express = require('express');
const router = express.Router();
const connection = require("../conf");

router.get('/', (request, response) => {
  connection.query('SELECT place.id,local_name,local_photo,local_description,local_phone,local_pj,local_logo FROM place INNER JOIN admin WHERE place.admin_id=admin.id', [request.params.id], (err, results) => {
   if (err) {
    response.status(500).send('Error retrieving places');
   } else {
    response.json(results);
   }
 });
})

router.get('/:id', (request, response) => {
  connection.query('SELECT local_name,local_photo,local_description,local_phone,local_pj,local_logo FROM place INNER JOIN admin WHERE place.admin_id=admin.id AND place.id = ?', [request.params.id], (err, results) => {
   if (err) {
    response.status(500).send('Error retrieving places');
   } else {
    response.json(results);
   }
 });
})

router.post('/', (request, response) => {
  const formData = request.body;
  connection.query('INSERT INTO place SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      response.status(500).send("Error saving a new place");
    } else {
      response.status(201).send({...formData, id: results.insertId});
    }
  });
});

router.put('/:id', (request, response) => {
  const idPlace = request.params.id;
  const formData = request.body;
    connection.query('UPDATE place SET ? WHERE id = ?', [formData, idPlace], err => {
    if (err) {
      console.log(err);
      response.status(500).send("Error editing the place");
    } else {
      response.sendStatus(200);
    }
  });
});

router.delete('/:id', (req, res) => {
  const idPlace = req.params.id;
  connection.query('SELECT happening_name, happening_picture, happening_category, happening_description, happening_date, happening_time, happening_time_end, happening_date_end, isItBookable, seats_bookable, local_photo, mapping FROM place INNER JOIN happening ON place.id= happening.place_id INNER JOIN admin ON place.admin_id=admin.id WHERE place.id = ? AND happening_date>=DATE(NOW()) OR happening_date IS NULL ORDER BY happening_date ASC', idPlace, (errGet, resultsGet) => {
    if(resultsGet && resultsGet.length){
      res.send("Merci de supprimer les évènements liés au préalable")
    }else if(resultsGet.length===0){
      connection.query('DELETE FROM place WHERE id = ?', [idPlace], err => {
      if (err) {
        console.log(err);
        res.status(500).send(`Erreur lors de la suppression d'un lieu, supprimer les évènements sur ${idPlace}`);
      } else {
        res.sendStatus(200);
      }
    })}
  })
})

module.exports = router
