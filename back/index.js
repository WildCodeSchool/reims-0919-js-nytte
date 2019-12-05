const express = require('express');
const app = express();
const port = 8000;
const camping = require("./data").campingList

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/', (request, response) => {
  response.send('Welcome to Express');
});

app.get('/api/camping', (request, response) => {
  response.send(camping);
});

app.post('/api/camping', (request, response) => {
  camping.push(request.body.camping1)
  response.send(request.body);
})


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});