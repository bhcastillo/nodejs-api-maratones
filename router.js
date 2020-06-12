const express = require('express'),
  api = express.Router();

api.get('/', async (req, res) => {
  await res.status(200).send({
    message: 'Funcionando API RESTful de maratones con Node.js y MongoDB',
  });
});

module.exports = api;
