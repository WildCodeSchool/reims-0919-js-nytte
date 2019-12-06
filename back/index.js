const express = require('express');
const app = express();
const port = 8000;
const connection = require("./conf");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', (request, response) => {
  response.send('Welcome to Campsite Express');
});

app.get('/api/admin', (request, response) => {
  connection.query('SELECT * from admin', (err, results) => {
   if (err) {
     response.status(500).send('Error retrieving admins');
   } else {
     response.json(results);
   }
 });
})

app.post('/api/admin', (request, response) => {
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

app.put('/api/admin/:id', (request, response) => {
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

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
