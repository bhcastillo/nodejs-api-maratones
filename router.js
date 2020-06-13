const express = require('express'),
  Country = require('./routes/country'),
  Marathon = require('./routes/marathon'),
  api = express.Router();

api.get('/', async (req, res) => {
  await res.status(200).send({
    message: 'Funcionando API RESTful de maratones con Node.js y MongoDB',
  });
});
api.post('/countries', Country.postCountries);
api.get('/countries', Country.getCountries);

api.get('/marathons', Marathon.getMarathons);
api.get('/marathon/:id', Marathon.getMarathon);
api.post('/marathon/', Marathon.postMarathon);
api.put('/marathon/:id', Marathon.putMarathon);
api.delete('/marathon/:id', Marathon.deleteMarathon);
module.exports = api;
