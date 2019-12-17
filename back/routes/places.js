const express = require('express');
const router = express.Router();
const connection = require("../conf");


router.get('/', (request, response) => {
    connection.query('SELECT * from admin', (err, results) => {
     if (err) {
       response.status(500).send('Error retrieving admins');
     } else {
       response.json(results);
     }
   });
  })
  
  router.get('/:id', (request, response) => {
    connection.query('SELECT * from admin where id = ?', [request.params.id], (err, results) => {
     if (err) {
       response.status(500).send('Error retrieving admins');
     } else {
       response.json(results);
     }
   });
  })

  router.post('/api/admins', (request, response) => {
    const formData = request.body;
    connection.query('INSERT INTO admin SET ?', formData, (err, results) => {
      if (err) {
        console.log(err);
        response.status(500).send("Error saving a new admin");
      } else {
        response.sendStatus(200);
      }
    });
  });

  router.put('/api/admins/:id', (request, response) => {
    const idAdmin = request.params.id;
    const formData = request.body;
      connection.query('UPDATE admin SET ? WHERE id = ?', [formData, idAdmin], err => {
      if (err) {
        console.log(err);
        response.status(500).send("Error editing the admin");
      } else {
        response.sendStatus(200);
      }
    });
  });

  module.exports = router