const express = require('express');
const app = express();
const port = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const bread = require('./bread');

// Routes for admin
const adminRouter = bread('admin');
app.use('/api/admins', adminRouter);

// Routes for place
const placeRouter = bread('place');
app.use('/api/places', placeRouter);

// Routes for vacationer
const vacationerRouter = bread('vacationer');
app.use('/api/vacationers', vacationerRouter);

// Routes for happening
const happeningRouter = bread('happening');
app.use('/api/happenings', happeningRouter);


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});