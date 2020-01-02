const express = require('express');
const router = express.Router();
const connection = require("../conf");
const bcrypt = require('bcrypt');
const saltRounds = 10;


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

  router.post('/', (request, response) => {
    const {
      company,
      firstname,
      lastname,
      login_admin,
      password_admin,
      city,
      zip,
      address1,
      photo,
      phone_company,
      email,
    } = request.body;
  
    bcrypt.hash(password_admin, saltRounds, (err, hash) => {
      connection.query('INSERT INTO admin SET ?', 
      {company, firstname, lastname, login_admin, password_admin: hash, city, zip, address1, photo, phone_company, email}, (err, results) => {
        if (err) {
          console.log(err);
          response.status(500).send("Error saving a new admin");
        } else {
          response.status(200).send("New admin saved");
        }
      });
    });
  });

  router.put('/:id', (request, response) => {
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