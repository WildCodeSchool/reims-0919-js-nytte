const express = require('express');
const connection = require("./conf.js");

const bread = (tableName) => {
  const router = express.Router();

  // add routes here
  router.get('/', (request, response) => {
    connection.query(`SELECT * from ${tableName}`, (err, results) => {
      if (err) {
       response.status(500).send(`Error retrieving ${tableName}s`);
      } else {
       response.json(results);
      }
    });
  });

  router.get('/:id', (request, response) => {
    connection.query(`SELECT * from ${tableName} where id = ?`, [request.params.id], (err, results) => {
     if (err) {
      response.status(500).send(`Error retrieving a ${tableName}`);
     } else {
      response.json(results);
     }
   });
  })

  router.post('/', (request, response) => {
    const formData = request.body;

    connection.query(`INSERT INTO ${tableName} SET ?`, formData, (err, results) => {
      if (err) {
       response.status(500).send(`Error retrieving a ${tableName}`);
      } else {
       response.json(results);
      }
    });
  });

  router.put('/:id', (request, response) => {
    const idAdmin = request.body.id;
    const formData = request.body;
      connection.query(`UPDATE ${tableName} SET ? WHERE id = ?`, [formData, idAdmin], err => {
      if (err) {
        console.log(err);
        response.status(500).send(`Error editing the ${tableName}`);
      } else {
        response.sendStatus(200);
      }
    });
  });

  router.delete('/:id', (request, response) => {
    const idAdmin = request.body.id;

      connection.query(`DELETE FROM ${tableName} WHERE id = ?`, idAdmin, err => {
      if (err) {
        console.log(err);
        response.status(500).send(`Error deleting the ${tableName}`);
      } else {
        response.sendStatus(200);
      }
    });
  });
  
  return router
}

module.exports = bread;