const express = require('express'),
  config = require('./config'),
  multer = require('multer'),
  upload = multer(),
  app = express(),
  router = require('./router');

app
  .set('port', process.env.PORT)
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(upload.array())
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With,Content-Type, Accept'
    );
    res.header('Access-control-Allow-Methods', 'GET, POST,PUT,DELETE,OPTIONS');
    next();
  })
  .use('/api', router);

module.exports = app;
