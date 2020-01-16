const express = require('express');
const router = express.Router();
const connection = require("../conf");

router.get('/', (request, response) => {
    connection.query('SELECT login_admin AS login, password_admin AS password,"admin" AS type FROM admin UNION SELECT tourist_login AS login, tourist_password AS password, "client" AS type FROM vacationer', (err, results) => {
     if (err) {
      response.status(500).send('Error retrieving login');
     } else {
      response.json(results);
     }
   });
})

module.exports = router