const express = require('express');
const cors = require('cors')
const app = express();
const multer = require('multer')
app.use(cors())
const port = 8000;
const secret = 'secret'
const connection = require("./conf");
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const userData = {
  email: 'amusant@test.com',
  password: 'azerty'
}
//multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, '/home/wilder/upload')
},
filename: (req, file, cb) => {
  cb(null, Date.now() + '-' +file.originalname )
}
})

const upload = multer({ storage: storage,
                        limits:{fileSize: 1000000}
                      }).single('recfile')

app.post('/api/upload', (req, res) => {
     
  upload(req, res, (err) => {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)
  })
})
//
function verifyToken(req, res, next){
  const bearerHeader = req.headers.authorization
  console.log(req.headers)
  if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(' ') // split bearerHeader in a new Array
      const bearerToken = bearer[1] // store index 1 of the newly created array in a new variable bearToken
      req.token = bearerToken
      next() // step to the next middleware
  } else{
      res.sendStatus(403)
      console.log('hello im here')
  }
}

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

// app.post('/api/admins/login', (request, response) => {
//     const user = {
//        loginAdmin: 'Cindie',
//        passwordAdmin: 'jaimelecode'
//     }
//     jwt.sign({ user }, 'secret', {expiresIn : '1h'}, (err, token) => {
//       response.json({
//           token
//       })
//     })
// });
app.post('/api/admins/login', function(req, res) {
  const formData = req.body
  const payload = {
      sub: req.body.email
  }
  if (userData.password !== formData.password) {
      res.send('Mauvais password')
  } else {
      jwt.sign(payload, secret, (err, token) => {
          res.json({
              token
          })
      })
  }
})

app.get('/api/testVerify', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secret', (err, authorizedData) => {
    if(err){
        //If error send Forbidden (403)
        console.log('ERROR: Could not connect to the protected route');
        res.sendStatus(403);
    } else {
        //If token is successfully verified, we can send the autorized data 
        res.json({
            message: 'Successful log in',
            authorizedData
        });
        console.log('SUCCESS: Connected to protected route');
    }
})
});

const admins = require('./routes/admins');
const places = require('./routes/places');
const vacationers = require('./routes/vacationers');
const happenings = require('./routes/happenings');
app.use('/api/admins', admins);
app.use('/api/places', places);
app.use('/api/vacationers', vacationers);
app.use('/api/happenings', happenings);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
