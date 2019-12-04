const express = require('express');
const connection = require('./conf');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Welcome to Express');
});

app.post('/admin', (request, response) => {
  const formData = request.body;

  connection.query('INSERT INTO admin SET ?', formData, (err, results) => {

    if (err) {
      console.log(err);
      response.status(500).send("Erreur lors de la sauvegarde d'un admin");
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