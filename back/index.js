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
const vacationers = require('./routes/vacationers');
app.use('/api/admins', admins);
app.use('/api/places', places);
app.use('/api/vacationers', vacationers);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
