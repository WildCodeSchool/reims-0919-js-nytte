const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const port = 8000;
const connection = require("./conf");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const admins = require('./routes/admins');
const places = require('./routes/places');
app.use('/api/admins', admins);
app.use('/api/places', places);



app.get('/api/vacationers', (request, response) => {
  connection.query('SELECT tourist_firstname,tourist_lastname,tourist_city,tourist_zip,tourist_address1,tourist_address2,tourist_photo,tourist_phone,tourist_email FROM vacationer INNER JOIN admin WHERE vacationer.admin_id=admin.id', [request.params.id], (err, results) => {
   if (err) {
     response.status(500).send('Error retrieving vacationers');
   } else {
     response.json(results);
   }
 });
})

app.get('/api/vacationers/:id', (request, response) => {
  connection.query('SELECT tourist_firstname,tourist_lastname,tourist_city,tourist_zip,tourist_address1,tourist_address2,tourist_photo,tourist_phone,tourist_email FROM vacationer INNER JOIN admin WHERE vacationer.admin_id=admin.id AND vacationer.id = ?', [request.params.id], (err, results) => {
   if (err) {
     response.status(500).send('Error retrieving vacationers');
   } else {
     response.json(results);
   }
 });
})





app.post('/api/vacationers', (request, response) => {
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





app.put('/api/vacationers/:id', (request, response) => {
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


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
