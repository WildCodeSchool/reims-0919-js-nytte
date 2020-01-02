const express = require('express');
const router = express.Router();
const connection = require("../conf");
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    fs.mkdir('./uploads', function(err) {
      if(err) {
          console.log(err.stack)
      } else {
          callback(null, './uploads');
      }
  })
},
filename: function (req, file, callback) {
  callback(null, file.fieldname + '-' + Date.now());
}
});

router.post('/api/file',function(req,res){
  var upload = multer({ storage : storage}).single('userFile');
  upload(req,res,function(err) {
      if(err) {
          return res.end("Error uploading file.");
      }
      res.end("File is uploaded");
  });
});





router.get('/', (request, response) => {
  connection.query('SELECT local_name,local_photo,local_description,local_phone,local_pj,local_logo FROM place INNER JOIN admin WHERE place.admin_id=admin.id', [request.params.id], (err, results) => {
   if (err) {
    response.status(500).send('Error retrieving places');
   } else {
    response.json(results);
   }
 });
})

router.get('/:id', (request, response) => {
  connection.query('SELECT local_name,local_photo,local_description,local_phone,local_pj,local_logo FROM place INNER JOIN admin WHERE place.admin_id=admin.id AND place.id = ?', [request.params.id], (err, results) => {
   if (err) {
    response.status(500).send('Error retrieving places');
   } else {
    response.json(results);
   }
 });
})

router.post('/', (request, response) => {
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

router.put('/:id', (request, response) => {
  const idPlace = request.params.id;
  const formData = request.body;
    connection.query('UPDATE place SET ? WHERE id = ?', [formData, idPlace], err => {
    if (err) {
      console.log(err);
      response.status(500).send("Error editing the place");
    } else {
      response.sendStatus(200);
    }
  });
});

  module.exports = router