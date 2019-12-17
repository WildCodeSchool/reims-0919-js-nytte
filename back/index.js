const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const port = 8000;
const connection = require("./conf");
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

function verifyToken(req, res, next){
  const bearerHeader = req.headers.authorization
  if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(' ') // split bearerHeader in a new Array
      const bearerToken = bearer[1] // store index 1 of the newly created array in a new variable bearToken
      req.token = bearerToken
      next() // step to the next middleware
  } else{
      res.sendStatus(403)
  }
}



app.get('/', (request, response) => {
  response.send('Welcome to Nytte');
});

app.get('/api/admins', (request, response) => {
  connection.query('SELECT * from admin', (err, results) => {
   if (err) {
     response.status(500).send('Error retrieving admins');
   } else {
     response.json(results);
   }
 });
})

app.get('/api/admins/:id', (request, response) => {
  connection.query('SELECT * from admin where id = ?', [request.params.id], (err, results) => {
   if (err) {
     response.status(500).send('Error retrieving admins');
   } else {
     response.json(results);
   }
 });
})

app.get('/api/places', (request, response) => {
  connection.query('SELECT local_name,local_photo,local_description,local_phone,local_pj,local_logo FROM place INNER JOIN admin WHERE place.admin_id=admin.id', [request.params.id], (err, results) => {
   if (err) {
     response.status(500).send('Error retrieving places');
   } else {
     response.json(results);
   }
 });
})

app.get('/api/places/:id', (request, response) => {
  connection.query('SELECT local_name,local_photo,local_description,local_phone,local_pj,local_logo FROM place INNER JOIN admin WHERE place.admin_id=admin.id AND place.id = ?', [request.params.id], (err, results) => {
   if (err) {
     response.status(500).send('Error retrieving places');
   } else {
     response.json(results);
   }
 });
})

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

app.post('/api/admins', (request, response) => {
  const formData = request.body;
  //formData.password = bcrypt(formData.password)
  connection.query('INSERT INTO admin SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      response.status(500).send("Error saving a new admin");
    } else {
      response.sendStatus(200);
    }
  });
});

const validUsername = 'Cindie';
const validPassword = 'jaimelecode';

app.post('/api/admins/login', (request, response) => {

  const formData = request.body;
  
  if (formData.loginAdmin === validUsername && formData.passwordAdmin === validPassword) {
    const user = {
      loginAdmin: 'Cindie',
      passwordAdmin: 'jaimelecode'
    }

    jwt.sign({ user }, 'secret', {expiresIn : '1h'}, (err, token) => {
      response.json({
          token
      })
    })
  } else {
    response.status(401).send("La connection a échouée !!!");
  }
});
app.get('/api/testVerify', verifyToken, (request, response) => {

});

app.post('/api/places', (request, response) => {
  const formData = request.body;
  connection.query('INSERT INTO place SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      response.status(500).send("Error saving a new place");
    } else {
      response.sendStatus(200);
    }
  });
});

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

app.put('/api/admins/:id', (request, response) => {
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

app.put('/api/places/:id', (request, response) => {
  const idAdmin = request.params.id;
  const formData = request.body;
    connection.query('UPDATE place SET ? WHERE id = ?', [formData, idAdmin], err => {
    if (err) {
      console.log(err);
      response.status(500).send("Error editing the place");
    } else {
      response.sendStatus(200);
    }
  });
});

app.put('/api/vacationers/:id', (request, response) => {
  const idAdmin = request.params.id;
  const formData = request.body;
    connection.query('UPDATE vacationer SET ? WHERE id = ?', [formData, idAdmin], err => {
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
